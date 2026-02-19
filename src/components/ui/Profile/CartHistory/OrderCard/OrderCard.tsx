import React from 'react';
import styles from './OrderCard.module.scss';
import { Order } from '../../../../../types/CartOrder.ts';

const statusLabel: Record<Order['status'], string> = {
  delivered: 'Delivered',
  processing: 'Processing',
  cancelled: 'Cancelled',
};

export const OrderCard: React.FC<{ order: Order }> = ({ order }) => (
  <div className={styles.orderCard}>
    <div className={styles.orderCard__header}>
      <div className={styles.orderCard__meta}>
        <span className={styles.orderCard__id}>{order.id}</span>
        <span className={styles.orderCard__date}>{order.date}</span>
      </div>
      <span
        className={`${styles.orderCard__status} ${styles[`orderCard__status--${order.status}`]}`}
      >
        {statusLabel[order.status]}
      </span>
    </div>

    <div className={styles.orderCard__items}>
      {order.items.map((item) => (
        <div
          key={item.id}
          className={styles.orderItem}
        >
          <img
            src={item.image}
            alt={item.name}
            className={styles.orderItem__image}
          />
          <span className={styles.orderItem__name}>{item.name}</span>
          <span className={styles.orderItem__qty}>× {item.quantity}</span>
          <span className={styles.orderItem__price}>${item.price}</span>
        </div>
      ))}
    </div>

    <div className={styles.orderCard__footer}>
      <span className={styles.orderCard__totalLabel}>Order total</span>
      <span className={styles.orderCard__total}>${order.total.toFixed(2)}</span>
    </div>
  </div>
);
