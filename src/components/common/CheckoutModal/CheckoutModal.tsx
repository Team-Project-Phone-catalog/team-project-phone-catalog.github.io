import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { useAppContext } from '@hooks/useAppContext';
import { supabase } from '@utils/supabaseClient';
import { notify } from '@utils/notifications';

import styles from './CheckoutModal.module.scss';
import { useTranslation } from 'react-i18next';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 1 | 2 | 3;
type DeliveryMethod = 'home';
type PaymentMethod = 'card' | 'paypal' | 'cod';

export const CheckoutModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { cartItems, getTotalPrice, getTotalItems, clearCart } =
    useAppContext();

  const [step, setStep] = useState<Step>(1);
  const [paymentOpen, setPaymentOpen] = useState(false);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('home');
  const [address, setAddress] = useState('');

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');

  const [loading, setLoading] = useState(false);
  const [successOrderId, setSuccessOrderId] = useState<string | null>(null);
  const [paypalConfirmed, setPaypalConfirmed] = useState(false);

  const totalPrice = useMemo(() => getTotalPrice(), [getTotalPrice]);
  const totalItems = useMemo(() => getTotalItems(), [getTotalItems]);

  useEffect(() => {
    if (!isOpen) return;
    setStep(1);
    setFullName('');
    setPhone('');
    setDeliveryMethod('home');
    setAddress('');
    setPaymentMethod('card');
    setLoading(false);
    setSuccessOrderId(null);
    setPaypalConfirmed(false);
  }, [isOpen]);

  useEffect(() => {
    if (!successOrderId) return;
    const timeout = window.setTimeout(() => {
      onClose();
      navigate('/profile/orders');
    }, 1600);
    return () => window.clearTimeout(timeout);
  }, [successOrderId, navigate, onClose]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'paypal_confirmed') {
        setPaypalConfirmed(true);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    if (paypalConfirmed) {
      setPaypalConfirmed(false);
      handleCreateOrder();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paypalConfirmed]);

  if (!isOpen) return null;

  const isStep1Valid = fullName.trim().length >= 2 && phone.trim().length >= 6;

  const isStep2Valid =
    deliveryMethod === 'home' ? address.trim().length >= 6 : true;

  const isStep3Valid = Boolean(paymentMethod);

  const handlePayPalDemo = () => {
    const paypalUrl = new URL('about:blank');
    paypalUrl.hash = 'paypal-demo';
    const newWindow = window.open(
      'about:blank',
      'paypal_demo',
      'width=500,height=600',
    );

    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>PayPal - Confirm Payment</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
              .container { max-width: 400px; margin: 50px auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center; }
              h1 { color: #003087; margin-bottom: 10px; }
              .logo { font-size: 32px; margin: 20px 0; }
              p { color: #666; margin: 15px 0; }
              .amount { font-size: 24px; font-weight: bold; color: #333; margin: 20px 0; }
              button { padding: 12px 30px; margin: 10px 5px; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; }
              .confirm-btn { background: #0070ba; color: white; }
              .confirm-btn:hover { background: #005a94; }
              .cancel-btn { background: #e8e8e8; color: #333; }
              .cancel-btn:hover { background: #d0d0d0; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>PayPal</h1>
              <p>Confirm your payment</p>
              <div class="amount">$${totalPrice}</div>
              <p><small>This is a demo payment confirmation</small></p>
              <button class="confirm-btn" onclick="confirm()">Confirm Payment</button>
              <button class="cancel-btn" onclick="cancel()">Cancel</button>
            </div>
            <script>
              function confirm() {
                window.opener.postMessage({ type: 'paypal_confirmed' }, '*');
                window.close();
              }
              function cancel() {
                window.close();
              }
            </script>
          </body>
        </html>
      `);
    }
  };

  const createOrderInDatabase = async () => {
    try {
      const { data: userData, error: userError } =
        await supabase.auth.getUser();
      if (userError) {
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

      notify.success(
        'Order placed successfully',
        'Redirecting you to your orders...',
      );
    } catch {
      notify.error('Something went wrong. Please try again.');
    }
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
        deliveryMethod === 'home' ? 'Please enter your delivery address.' : '',
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
      // Если это COD (Cash on Delivery), просто создаем заказ
      if (paymentMethod === 'cod') {
        await createOrderInDatabase();
        return;
      }

      // Если это карта, нужен Stripe
      if (!stripe || !elements) {
        notify.error('Stripe is not loaded');
        return;
      }

      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-payment-intent`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: totalPrice * 100,
          }),
        },
      );

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Server error:', errorData);
        notify.error('Failed to create payment intent');
        return;
      }

      const { clientSecret } = await response.json();

      if (!clientSecret) {
        notify.error('Invalid payment response');
        return;
      }

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement)!,
          },
        },
      );

      if (error) {
        notify.error(error.message || 'Payment failed');
        return;
      }

      if (paymentIntent?.status === 'succeeded') {
        await createOrderInDatabase();
        notify.success('Payment successful');
      }
    } catch (err) {
      console.error('Payment error:', err);
      notify.error(
        'Payment error: ' +
          (err instanceof Error ? err.message : 'Unknown error'),
      );
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
              {/* STEP 1 */}
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
                      maxLength={60}
                      onChange={(e) => {
                        const cleaned = e.target.value
                          .replace(
                            /[^a-zA-Z\u00C0-\u024F\u0400-\u04FF' -]/g,
                            '',
                          )
                          .replace(/\s{2,}/g, ' ')
                          .slice(0, 30);

                        setFullName(cleaned);
                      }}
                    />

                    <input
                      className={styles.input}
                      placeholder={t('checkout.phone')}
                      value={phone}
                      inputMode="tel"
                      maxLength={16}
                      onChange={(e) => {
                        let value = e.target.value.replace(/[^\d+]/g, '');

                        if (value.includes('+')) {
                          value = value.replace(/\+/g, '');
                          value = `+${value}`;
                        }

                        const digits = value.replace(/\D/g, '').slice(0, 15);

                        setPhone(value.startsWith('+') ? `+${digits}` : digits);
                      }}
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
                    <input
                      className={styles.input}
                      placeholder="Delivery address *"
                      value={address}
                      maxLength={40}
                      onChange={(e) => {
                        const cleaned = e.target.value
                          .replace(/\s{2,}/g, ' ')
                          .slice(0, 40);

                        setAddress(cleaned);
                      }}
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
                    <div className={styles.dropdown}>
                      <button
                        type="button"
                        className={styles.dropdown__button}
                        onClick={() => setPaymentOpen((prev) => !prev)}
                      >
                        {paymentMethod === 'card' ?
                          'Credit / Debit Card'
                        : paymentMethod === 'paypal' ?
                          'PayPal'
                        : 'Cash on delivery'}

                        <span className={styles._arrow}>
                          <img
                            alt="Previous page"
                            src="/src/assets/icons/arrow-down.svg"
                          />
                        </span>
                      </button>

                      {paymentOpen && (
                        <div className={styles.dropdown__list}>
                          <div
                            className={styles.dropdown__item}
                            onClick={() => {
                              setPaymentMethod('card');
                              setPaymentOpen(false);
                            }}
                          >
                            Credit / Debit Card
                          </div>

                          <div
                            className={styles.dropdown__item}
                            onClick={() => {
                              setPaymentMethod('paypal');
                              setPaymentOpen(false);
                            }}
                          >
                            PayPal
                          </div>

                          <div
                            className={styles.dropdown__item}
                            onClick={() => {
                              setPaymentMethod('cod');
                              setPaymentOpen(false);
                            }}
                          >
                            Cash on delivery
                          </div>
                        </div>
                      )}
                    </div>

                    {paymentMethod === 'card' && (
                      <div className={styles.cardFields}>
                        <CardElement
                          options={{
                            style: {
                              base: {
                                fontSize: '16px',
                                color: '#fff',
                              },
                            },
                          }}
                        />
                      </div>
                    )}

                    <button
                      type="button"
                      className={styles.primaryBtn}
                      onClick={() => {
                        if (paymentMethod === 'paypal') {
                          handlePayPalDemo();
                        } else {
                          handleCreateOrder();
                        }
                      }}
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
