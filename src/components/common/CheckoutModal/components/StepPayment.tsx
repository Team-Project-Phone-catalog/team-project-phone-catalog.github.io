import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';

import type { StepPaymentProps } from '../CheckoutModal.types';

export const StepPayment: React.FC<StepPaymentProps> = ({
  styles,
  arrowDownIcon,
  paymentOpen,
  paymentMethod,
  loading,
  isStep3Valid,
  onTogglePayment,
  onSelectPaymentMethod,
  onSubmit,
  onBack,
}) => {
  return (
    <div className={styles.stepContent}>
      <div className={styles.dropdown}>
        <button
          type="button"
          className={styles.dropdown__button}
          onClick={onTogglePayment}
        >
          {paymentMethod === 'card' ?
            'Credit / Debit Card'
          : paymentMethod === 'paypal' ?
            'PayPal'
          : 'Cash on delivery'}

          <span className={styles._arrow}>
            <img
              alt="Previous page"
              src={arrowDownIcon}
            />
          </span>
        </button>

        {paymentOpen && (
          <div className={styles.dropdown__list}>
            <div
              className={styles.dropdown__item}
              onClick={() => onSelectPaymentMethod('card')}
            >
              Credit / Debit Card
            </div>

            <div
              className={styles.dropdown__item}
              onClick={() => onSelectPaymentMethod('paypal')}
            >
              PayPal
            </div>

            <div
              className={styles.dropdown__item}
              onClick={() => onSelectPaymentMethod('cod')}
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
        onClick={onSubmit}
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
        onClick={onBack}
        disabled={loading}
      >
        Back
      </button>

      <p className={styles.terms}>
        By confirming the order, you agree to the Terms and Conditions.
      </p>
    </div>
  );
};
