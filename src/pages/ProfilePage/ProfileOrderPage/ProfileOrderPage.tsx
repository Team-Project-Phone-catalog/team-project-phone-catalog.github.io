import React from 'react';
import styles from './ProfileOrderPage.module.scss';
import { Sidebar } from '../../../components/SideBar/SideBar.tsx';
import { Breadcrumbs } from '../../../components/ui/Breadcrumbs/Breadcrumbs.tsx';

const OrderCard: React.FC<{ order: Order }> = ({ order }) => (
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

const EmptyOrders: React.FC = () => (
  <div className={styles.emptyOrders}>
    <div className={styles.emptyOrders__icon}>📦</div>
    <p className={styles.emptyOrders__text}>No orders yet</p>
    <p className={styles.emptyOrders__sub}>
      Your purchase history will appear here
    </p>
  </div>
);

export const ProfileOrderPage: React.FC = () => {
  return (
    <div className={styles.profilePage}>
      <div className={styles.profilePage__container}>
        <div className={styles.profilePage__layout}>
          <Sidebar />

          <main className={styles.profilePage__content}>
            <Breadcrumbs />
            <h1 className={styles.profilePage__title}>Order History</h1>

            {mockOrders.length === 0 ?
              <EmptyOrders />
            : <div className={styles.orderList}>
                {mockOrders.map((order) => (
                  <OrderCard
                    key={order.id}
                    order={order}
                  />
                ))}
              </div>
            }
          </main>
        </div>
      </div>
    </div>
  );
};
