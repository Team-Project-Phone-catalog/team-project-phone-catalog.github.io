import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useAppContext } from '@hooks/useAppContext';
import { supabase } from '@utils/supabaseClient';
import { notify } from '@utils/notifications';

import styles from './CheckoutModal.module.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 1 | 2 | 3;
type DeliveryMethod = 'home' | 'pickup';
type PaymentMethod = 'card' | 'paypal' | 'cod';

export const CheckoutModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
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
    const timeout = window.setTimeout(() => {
      onClose();
      navigate('/profile/orders');
    }, 1600);
    return () => window.clearTimeout(timeout);
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
    return (
      /^\d{16}$/.test(digits) &&
      /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry) &&
      /^\d{3,4}$/.test(cvc)
    );
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
      notify.error(t('checkout.error_empty'));
      return;
    }
    if (!isStep1Valid) {
      notify.error(t('checkout.error_details'));
      setStep(1);
      return;
    }
    if (!isStep2Valid) {
      notify.error(
        deliveryMethod === 'home' ?
          t('checkout.error_address')
        : t('checkout.error_pickup'),
      );
      setStep(2);
      return;
    }
    if (!isStep3Valid) {
      notify.error(t('checkout.error_payment'));
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
        notify.error(t('checkout.error_login'));
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
        notify.error(itemsError.message);
        return;
      }

      clearCart();
      setSuccessOrderId(String(order.id));
      notify.success(t('checkout.success_notify'), t('checkout.redirecting'));
    } catch {
      notify.error(t('checkout.error_general'));
    } finally {
      setLoading(false);
    }
  };

  const renderSuccess = () => (
    <div className={styles.successScreen}>
      <div className={styles.successIcon}>✓</div>
      <h2 className={styles.successTitle}>{t('checkout.success_title')}</h2>
      <p className={styles.successText}>
        {t('checkout.success_text')}
        {successOrderId ? ` (#${successOrderId})` : ''}.
        <br />
        {t('checkout.redirecting')}
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
          {t('checkout.view_orders')}
        </button>
        <button
          type="button"
          className={styles.secondaryBtn}
          onClick={onClose}
        >
          {t('checkout.close')}
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
        <h1 className={styles.title}>{t('checkout.title')}</h1>

        {successOrderId ?
          renderSuccess()
        : <div className={styles.content}>
            <div className={styles.formSection}>
              <div className={styles.stepBlock}>
                <div className={styles.stepHeader}>
                  <h2>{t('checkout.details')}</h2>
                </div>
                {step === 1 && (
                  <div className={styles.stepContent}>
                    <input
                      className={styles.input}
                      placeholder={t('checkout.full_name')}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    <input
                      className={styles.input}
                      placeholder={t('checkout.phone')}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <button
                      type="button"
                      className={styles.primaryBtn}
                      onClick={() => setStep(2)}
                      disabled={!isStep1Valid}
                    >
                      {t('checkout.continue')}
                    </button>
                  </div>
                )}
              </div>

              <div className={styles.stepBlock}>
                <div className={styles.stepHeader}>
                  <h2>{t('checkout.delivery')}</h2>
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
                      <option value="home">{t('checkout.home_address')}</option>
                      <option value="pickup">
                        {t('checkout.pickup_point')}
                      </option>
                    </select>
                    <input
                      className={styles.input}
                      placeholder={
                        deliveryMethod === 'home' ?
                          t('checkout.address_placeholder')
                        : t('checkout.pickup_placeholder')
                      }
                      value={deliveryMethod === 'home' ? address : pickupPoint}
                      onChange={(e) =>
                        deliveryMethod === 'home' ?
                          setAddress(e.target.value)
                        : setPickupPoint(e.target.value)
                      }
                    />
                    <button
                      type="button"
                      className={styles.primaryBtn}
                      onClick={() => setStep(3)}
                      disabled={!isStep2Valid}
                    >
                      {t('checkout.continue')}
                    </button>
                    <button
                      type="button"
                      className={styles.secondaryBtn}
                      onClick={() => setStep(1)}
                    >
                      {t('checkout.back')}
                    </button>
                  </div>
                )}
              </div>

              <div className={styles.stepBlock}>
                <div className={styles.stepHeader}>
                  <h2>{t('checkout.payment')}</h2>
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
                      <option value="card">{t('checkout.card')}</option>
                      <option value="paypal">{t('checkout.paypal')}</option>
                      <option value="cod">{t('checkout.cod')}</option>
                    </select>
                    {paymentMethod === 'card' && (
                      <div className={styles.cardFields}>
                        <input
                          className={styles.input}
                          placeholder={t('checkout.card_number')}
                          value={cardNumber}
                          onChange={(e) =>
                            setCardNumber(formatCardNumber(e.target.value))
                          }
                          inputMode="numeric"
                        />
                        <div className={styles.cardRow}>
                          <input
                            className={styles.input}
                            placeholder={t('checkout.expiry')}
                            value={cardExpiry}
                            onChange={(e) =>
                              setCardExpiry(formatExpiry(e.target.value))
                            }
                            inputMode="numeric"
                          />
                          <input
                            className={styles.input}
                            placeholder={t('checkout.cvc')}
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
                        t('checkout.processing')
                      : paymentMethod === 'card' ?
                        t('checkout.pay_order')
                      : t('checkout.place_order')}
                    </button>
                    <button
                      type="button"
                      className={styles.secondaryBtn}
                      onClick={() => setStep(2)}
                      disabled={loading}
                    >
                      {t('checkout.back')}
                    </button>
                    <p className={styles.terms}>{t('checkout.terms')}</p>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.summary}>
              <h2>{t('checkout.summary')}</h2>
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
                <p>{t('cart.total_items', { count: totalItems })}</p>
                <h3>${totalPrice}</h3>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};
