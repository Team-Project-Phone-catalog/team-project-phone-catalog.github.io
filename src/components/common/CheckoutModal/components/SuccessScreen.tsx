import React from 'react';

import type { SuccessScreenProps } from '../CheckoutModal.types';

export const SuccessScreen: React.FC<SuccessScreenProps> = ({
  styles,
  successOrderId,
  onViewOrders,
  onClose,
}) => {
  return (
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
          onClick={onViewOrders}
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
};
