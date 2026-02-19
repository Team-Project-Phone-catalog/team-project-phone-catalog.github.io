import React from 'react';
import styles from './EmptyOrders.module.scss';

export const EmptyOrders: React.FC = () => (
  <div className={styles.emptyOrders}>
    <div className={styles.emptyOrders__icon}>📦</div>
    <p className={styles.emptyOrders__text}>No orders yet</p>
    <p className={styles.emptyOrders__sub}>
      Your purchase history will appear here
    </p>
  </div>
);
