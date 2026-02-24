import s from './CartItem.module.scss';
import React from 'react';

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
  return (
    <div className={s.block}>
      <h2 className={s.price}>${totalPrice}</h2>

      <p className={s.info}>
        Total for {totalItems} {totalItems === 1 ? 'item' : 'items'}
      </p>

      <div className={s.button}>
        <button
          type="button"
          className={s.buttonCheck}
          onClick={onCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
