import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppContext } from '../../../hooks/useAppContext';
import { supabase } from '../../../utils/supabaseClient';
import { notify } from '../../../utils/notifications';

import styles from './CheckoutModal.module.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 1 | 2 | 3;
type DeliveryMethod = 'home' | 'pickup';
type PaymentMethod = 'card' | 'paypal' | 'cod';

export const CheckoutModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const { cartItems, getTotalPrice, getTotalItems, clearCart } =
    useAppContext();

  const [step, setStep] = useState<Step>(1);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('home');
  const [address, setAddress] = useState('');
  const [pickupPoint, setPickupPoint] = useState('');

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');

  const [loading, setLoading] = useState(false);
  const [successOrderId, setSuccessOrderId] = useState<string | null>(null);

  const totalPrice = useMemo(() => getTotalPrice(), [getTotalPrice]);
  const totalItems = useMemo(() => getTotalItems(), [getTotalItems]);

  useEffect(() => {
    if (!isOpen) return;

    setStep(1);
    setFullName('');
    setPhone('');
    setDeliveryMethod('home');
    setAddress('');
    setPickupPoint('');
    setPaymentMethod('card');
    setCardNumber('');
    setCardExpiry('');
    setCardCvc('');
    setLoading(false);
    setSuccessOrderId(null);
  }, [isOpen]);

  useEffect(() => {
    if (!successOrderId) return;

    const t = window.setTimeout(() => {
      onClose();
      navigate('/profile/orders');
    }, 1600);

    return () => window.clearTimeout(t);
  }, [successOrderId, navigate, onClose]);

  if (!isOpen) return null;

  const isStep1Valid = fullName.trim().length >= 2 && phone.trim().length >= 6;

  const isStep2Valid =
    deliveryMethod === 'home' ?
      address.trim().length >= 6
    : pickupPoint.trim().length >= 3;

  const isCardValid = (() => {
    if (paymentMethod !== 'card') return true;

    const digits = cardNumber.replace(/\s/g, '');
    const expiry = cardExpiry.trim();
    const cvc = cardCvc.trim();

    const isDigitsOk = /^\d{16}$/.test(digits);
    const isExpiryOk = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry);
    const isCvcOk = /^\d{3,4}$/.test(cvc);

    return isDigitsOk && isExpiryOk && isCvcOk;
  })();

  const isStep3Valid = Boolean(paymentMethod) && isCardValid;

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 16);
    return digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
  };

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 4);
    if (digits.length <= 2) return digits;
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  };

  const handleCreateOrder = async () => {
    if (cartItems.length === 0) {
      notify.error('Your cart is empty.');
      return;
    }

    if (!isStep1Valid) {
      notify.error('Please fill in your name and phone.');
      setStep(1);
      return;
    }

    if (!isStep2Valid) {
      notify.error(
        deliveryMethod === 'home' ?
          'Please enter your delivery address.'
        : 'Please enter a pick-up point.',
      );
      setStep(2);
      return;
    }

    if (!isStep3Valid) {
      notify.error('Please check your payment details.');
      setStep(3);
      return;
    }

    setLoading(true);

    try {
      const { data: userData, error: userError } =
        await supabase.auth.getUser();

      if (userError) {
        notify.error(userError.message);
        return;
      }

      if (!userData.user) {
        notify.error('You must be logged in to place an order.');
        return;
      }

      const userId = userData.user.id;

      const orderPayload = {
        user_id: userId,
        status: 'processing',
        total: totalPrice,
        date: new Date(),

        full_name: fullName.trim(),
        phone: phone.trim(),
        delivery_method: deliveryMethod,
        address: deliveryMethod === 'home' ? address.trim() : null,
        pickup_point: deliveryMethod === 'pickup' ? pickupPoint.trim() : null,
        payment_method: paymentMethod,
      };

      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert([orderPayload])
        .select()
        .single();

      if (orderError) {
        console.error(orderError);
        notify.error(orderError.message);
        return;
      }

      const itemsPayload = cartItems.map((item) => ({
        order_id: order.id,
        product_id: item.id,
        name: item.name,
        price: item.priceDiscount ?? item.price,
        image: item.image ?? null,
        quantity: item.quantity,
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(itemsPayload);

      if (itemsError) {
        console.error(itemsError);
        notify.error(itemsError.message);
        return;
      }

      clearCart();
      setSuccessOrderId(String(order.id));

      notify.success(
        'Order placed successfully',
        'Redirecting you to your orders...',
      );
    } catch (e) {
      console.error(e);
      notify.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderSuccess = () => (
    <div className={styles.successScreen}>
      <div className={styles.successIcon}>✓</div>
      <h2 className={styles.successTitle}>Payment successful</h2>
      <p className={styles.successText}>
        Your order has been created
        {successOrderId ? ` (#${successOrderId})` : ''}.
        <br />
        Redirecting you to your orders...
      </p>

      <div className={styles.successActions}>
        <button
          type="button"
          className={styles.primaryBtn}
          onClick={() => {
            onClose();
            navigate('/profile/orders');
          }}
        >
          View orders
        </button>

        <button
          type="button"
          className={styles.secondaryBtn}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.modal}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <h1 className={styles.title}>Checkout</h1>

        {successOrderId ?
          renderSuccess()
        : <div className={styles.content}>
            <div className={styles.formSection}>
              <div className={styles.stepBlock}>
                <div className={styles.stepHeader}>
                  <h2>Your details</h2>
                </div>

                {step === 1 && (
                  <div className={styles.stepContent}>
                    <input
                      className={styles.input}
                      placeholder="Full name *"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    <input
                      className={styles.input}
                      placeholder="Phone number *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />

                    <button
                      type="button"
                      className={styles.primaryBtn}
                      onClick={() => setStep(2)}
                      disabled={!isStep1Valid}
                    >
                      Continue
                    </button>
                  </div>
                )}
              </div>

              <div className={styles.stepBlock}>
                <div className={styles.stepHeader}>
                  <h2>Delivery</h2>
                </div>

                {step === 2 && (
                  <div className={styles.stepContent}>
                    <select
                      className={styles.select}
                      value={deliveryMethod}
                      onChange={(e) =>
                        setDeliveryMethod(e.target.value as DeliveryMethod)
                      }
                    >
                      <option value="home">Home address</option>
                      <option value="pickup">Pick-up point</option>
                    </select>

                    {deliveryMethod === 'home' ?
                      <input
                        className={styles.input}
                        placeholder="Delivery address *"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    : <input
                        className={styles.input}
                        placeholder="Pick-up point / locker / store *"
                        value={pickupPoint}
                        onChange={(e) => setPickupPoint(e.target.value)}
                      />
                    }

                    <button
                      type="button"
                      className={styles.primaryBtn}
                      onClick={() => setStep(3)}
                      disabled={!isStep2Valid}
                    >
                      Continue
                    </button>

                    <button
                      type="button"
                      className={styles.secondaryBtn}
                      onClick={() => setStep(1)}
                    >
                      Back
                    </button>
                  </div>
                )}
              </div>

              <div className={styles.stepBlock}>
                <div className={styles.stepHeader}>
                  <h2>Payment</h2>
                </div>

                {step === 3 && (
                  <div className={styles.stepContent}>
                    <select
                      className={styles.select}
                      value={paymentMethod}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value as PaymentMethod)
                      }
                    >
                      <option value="card">Credit / Debit Card</option>
                      <option value="paypal">PayPal (demo)</option>
                      <option value="cod">Cash on delivery</option>
                    </select>

                    {paymentMethod === 'card' && (
                      <div className={styles.cardFields}>
                        <input
                          className={styles.input}
                          placeholder="Card number"
                          value={cardNumber}
                          onChange={(e) =>
                            setCardNumber(formatCardNumber(e.target.value))
                          }
                          inputMode="numeric"
                        />

                        <div className={styles.cardRow}>
                          <input
                            className={styles.input}
                            placeholder="MM/YY"
                            value={cardExpiry}
                            onChange={(e) =>
                              setCardExpiry(formatExpiry(e.target.value))
                            }
                            inputMode="numeric"
                          />

                          <input
                            className={styles.input}
                            placeholder="CVC"
                            value={cardCvc}
                            onChange={(e) =>
                              setCardCvc(
                                e.target.value.replace(/\D/g, '').slice(0, 4),
                              )
                            }
                            inputMode="numeric"
                          />
                        </div>
                      </div>
                    )}
                    <button
                      type="button"
                      className={styles.primaryBtn}
                      onClick={handleCreateOrder}
                      disabled={loading || !isStep3Valid}
                    >
                      {loading ?
                        'Processing...'
                      : paymentMethod === 'card' ?
                        'Pay & place order'
                      : 'Place order'}
                    </button>

                    <button
                      type="button"
                      className={styles.secondaryBtn}
                      onClick={() => setStep(2)}
                      disabled={loading}
                    >
                      Back
                    </button>

                    <p className={styles.terms}>
                      By confirming the order, you agree to the Terms and
                      Conditions.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.summary}>
              <h2>Order summary</h2>

              {cartItems.map((item) => (
                <div
                  key={item.itemUniqueId}
                  className={styles.summaryItem}
                >
                  <div className={styles.summaryItemRow}>
                    <p className={styles.productName}>{item.name}</p>
                    <p className={styles.productQty}>
                      {item.quantity} × ${item.priceDiscount ?? item.price}
                    </p>
                  </div>
                </div>
              ))}

              <div className={styles.totalBlock}>
                <p>
                  {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </p>
                <h3>${totalPrice}</h3>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};
