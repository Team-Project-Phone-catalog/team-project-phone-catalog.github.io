import React from 'react';

import type { OrderSummaryProps } from '../CheckoutModal.types';

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  styles,
  cartItems,
  totalItems,
  totalPrice,
}) => {
  return (
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
  );
};
