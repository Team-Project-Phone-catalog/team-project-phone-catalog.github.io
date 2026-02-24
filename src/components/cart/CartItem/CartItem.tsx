import s from './CartItem.module.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  totalPrice: number;
  totalItems: number;
  onCheckout: () => void;
}

export const CartItem: React.FC<Props> = ({
  totalPrice,
  totalItems,
  onCheckout,
}) => {
  const { t } = useTranslation();

  return (
    <div className={s.block}>
      <h2 className={s.price}>${totalPrice}</h2>

      <p className={s.info}>{t('cart.total_items', { count: totalItems })}</p>

      <div className={s.button}>
        <button
          type="button"
          className={s.buttonCheck}
          onClick={onCheckout}
        >
          {t('cart.checkout')}
        </button>
      </div>
    </div>
  );
};
