import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStripe, useElements } from '@stripe/react-stripe-js';

import arrowDownIcon from '@/assets/icons/arrow-down.svg';

import { useAppContext } from '@/hooks/useAppContext';
import { notify } from '@/utils/notifications';

import styles from './CheckoutModal.module.scss';
import type {
  CheckoutCartItem,
  CheckoutModalProps,
} from './CheckoutModal.types';
import { StepDetails } from './components/StepDetails';
import { StepDelivery } from './components/StepDelivery';
import { StepPayment } from './components/StepPayment';
import { SuccessScreen } from './components/SuccessScreen';
import { OrderSummary } from './components/OrderSummary';
import { openPayPalDemo } from './utils/openPayPalDemo';
import {
  getStep2ValidationError,
  validateStep1,
  validateStep2,
  validateStep3,
} from './utils/checkoutValidation';
import { useCheckoutState } from './hooks/useCheckoutState';
import { useCheckoutDelivery } from './hooks/useCheckoutDelivery';
import {
  confirmCardPayment,
  createOrderInDatabase,
  createPaymentIntent,
} from './services/checkoutService';

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { cartItems, totalPrice, totalItems, clearCart } = useAppContext();

  const {
    step,
    setStep,
    paymentOpen,
    setPaymentOpen,
    fullName,
    setFullName,
    phone,
    setPhone,
    paymentMethod,
    setPaymentMethod,
    loading,
    setLoading,
    successOrderId,
    setSuccessOrderId,
    paypalConfirmed,
    setPaypalConfirmed,
    resetCheckoutState,
  } = useCheckoutState();

  const {
    deliveryOpen,
    setDeliveryOpen,
    deliveryMethod,
    address,
    setAddress,
    cityQuery,
    setCitiesOpen,
    filteredCities,
    selectedCity,
    loadingCities,
    warehouses,
    warehousesOpen,
    setWarehousesOpen,
    selectedWarehouse,
    setSelectedWarehouse,
    loadingWarehouses,
    normalizeWarehouseText,
    handleSelectHomeDelivery,
    handleSelectNovaPoshtaDelivery,
    handleCityQueryChange,
    handleSelectCity,
    citiesOpen,
  } = useCheckoutDelivery({ isOpen });

  useEffect(() => {
    if (!isOpen) return;

    resetCheckoutState();
  }, [isOpen, resetCheckoutState]);

  useEffect(() => {
    if (!successOrderId) return;

    const t = window.setTimeout(() => {
      onClose();
      navigate('/profile/orders');
    }, 1600);

    return () => window.clearTimeout(t);
  }, [successOrderId, navigate, onClose]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'paypal_confirmed') {
        setPaypalConfirmed(true);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [setPaypalConfirmed]);

  useEffect(() => {
    if (paypalConfirmed) {
      setPaypalConfirmed(false);
      handleCreateOrder();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paypalConfirmed]);

  if (!isOpen) return null;

  const isStep1Valid = validateStep1({ fullName, phone });

  const isStep2Valid = validateStep2({
    deliveryMethod,
    address,
    hasSelectedCity: selectedCity !== null,
    hasSelectedWarehouse: selectedWarehouse !== null,
  });

  const isStep3Valid = validateStep3(paymentMethod);

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
      notify.error(getStep2ValidationError(deliveryMethod));
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
      if (paymentMethod === 'cod' || paymentMethod === 'paypal') {
        await createOrderInDatabase({
          cartItems: cartItems as CheckoutCartItem[],
          totalPrice,
          fullName,
          phone,
          deliveryMethod,
          address,
          selectedCity,
          selectedWarehouse,
          paymentMethod,
          clearCart,
          setSuccessOrderId,
        });
        return;
      }

      const clientSecret = await createPaymentIntent(totalPrice);

      if (!clientSecret) {
        return;
      }

      const isPaid = await confirmCardPayment({
        stripe,
        elements,
        clientSecret,
      });

      if (isPaid) {
        await createOrderInDatabase({
          cartItems: cartItems as CheckoutCartItem[],
          totalPrice,
          fullName,
          phone,
          deliveryMethod,
          address,
          selectedCity,
          selectedWarehouse,
          paymentMethod,
          clearCart,
          setSuccessOrderId,
        });
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

  const handleSubmitStep3 = () => {
    if (paymentMethod === 'paypal') {
      openPayPalDemo({ totalPrice });
      return;
    }

    handleCreateOrder();
  };

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
          <SuccessScreen
            styles={styles}
            successOrderId={successOrderId}
            onViewOrders={() => {
              onClose();
              navigate('/profile/orders');
            }}
            onClose={onClose}
          />
        : <div className={styles.content}>
            <div className={styles.formSection}>
              <div className={styles.stepBlock}>
                <div className={styles.stepHeader}>
                  <h2>Your details</h2>
                </div>

                {step === 1 && (
                  <StepDetails
                    styles={styles}
                    fullName={fullName}
                    phone={phone}
                    isStep1Valid={isStep1Valid}
                    onFullNameChange={setFullName}
                    onPhoneChange={setPhone}
                    onContinue={() => setStep(2)}
                  />
                )}
              </div>

              <div className={styles.stepBlock}>
                <div className={styles.stepHeader}>
                  <h2>Delivery</h2>
                </div>

                {step === 2 && (
                  <StepDelivery
                    styles={styles}
                    arrowDownIcon={arrowDownIcon}
                    deliveryOpen={deliveryOpen}
                    deliveryMethod={deliveryMethod}
                    address={address}
                    cityQuery={cityQuery}
                    loadingCities={loadingCities}
                    citiesOpen={citiesOpen}
                    filteredCities={filteredCities}
                    selectedCity={selectedCity}
                    loadingWarehouses={loadingWarehouses}
                    warehousesOpen={warehousesOpen}
                    warehouses={warehouses}
                    selectedWarehouse={selectedWarehouse}
                    isStep2Valid={isStep2Valid}
                    onToggleDelivery={() => setDeliveryOpen((prev) => !prev)}
                    onSelectHome={handleSelectHomeDelivery}
                    onSelectNovaPoshta={handleSelectNovaPoshtaDelivery}
                    onAddressChange={setAddress}
                    onCityFocus={() => setCitiesOpen(true)}
                    onCityBlur={() => {
                      window.setTimeout(() => setCitiesOpen(false), 120);
                    }}
                    onCityQueryChange={handleCityQueryChange}
                    onSelectCity={handleSelectCity}
                    onToggleWarehouses={() =>
                      setWarehousesOpen((prev) => !prev)
                    }
                    onSelectWarehouse={(warehouse) => {
                      setSelectedWarehouse(warehouse);
                      setWarehousesOpen(false);
                    }}
                    onContinue={() => setStep(3)}
                    onBack={() => setStep(1)}
                    normalizeWarehouseText={normalizeWarehouseText}
                  />
                )}
              </div>

              <div className={styles.stepBlock}>
                <div className={styles.stepHeader}>
                  <h2>Payment</h2>
                </div>

                {step === 3 && (
                  <StepPayment
                    styles={styles}
                    arrowDownIcon={arrowDownIcon}
                    paymentOpen={paymentOpen}
                    paymentMethod={paymentMethod}
                    loading={loading}
                    isStep3Valid={isStep3Valid}
                    onTogglePayment={() => setPaymentOpen((prev) => !prev)}
                    onSelectPaymentMethod={(method) => {
                      setPaymentMethod(method);
                      setPaymentOpen(false);
                    }}
                    onSubmit={handleSubmitStep3}
                    onBack={() => setStep(2)}
                  />
                )}
              </div>
            </div>

            <OrderSummary
              styles={styles}
              cartItems={cartItems as CheckoutCartItem[]}
              totalItems={totalItems}
              totalPrice={totalPrice}
            />
          </div>
        }
      </div>
    </div>
  );
};
