import React from 'react';

import type { StepDetailsProps } from '../CheckoutModal.types';

export const StepDetails: React.FC<StepDetailsProps> = ({
  styles,
  fullName,
  phone,
  isStep1Valid,
  onFullNameChange,
  onPhoneChange,
  onContinue,
}) => {
  return (
    <div className={styles.stepContent}>
      <input
        className={styles.input}
        placeholder="Full name *"
        value={fullName}
        maxLength={60}
        onChange={(e) => {
          const cleaned = e.target.value
            .replace(/[^a-zA-Z\u00C0-\u024F\u0400-\u04FF' -]/g, '')
            .replace(/\s{2,}/g, ' ')
            .slice(0, 30);

          onFullNameChange(cleaned);
        }}
      />

      <input
        className={styles.input}
        placeholder="Phone number *"
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

          onPhoneChange(value.startsWith('+') ? `+${digits}` : digits);
        }}
      />

      <button
        type="button"
        className={styles.primaryBtn}
        onClick={onContinue}
        disabled={!isStep1Valid}
      >
        Continue
      </button>
    </div>
  );
};
