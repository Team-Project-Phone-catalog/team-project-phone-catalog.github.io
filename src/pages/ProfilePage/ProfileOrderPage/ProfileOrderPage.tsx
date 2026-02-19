import React from 'react';
import styles from './ProfileOrderPage.module.scss';
import { Sidebar } from '../../../components/SideBar/SideBar.tsx';
import { Breadcrumbs } from '../../../components/ui/Breadcrumbs/Breadcrumbs.tsx';

interface OrderItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface Order {
  id: string;
  date: string;
  status: 'delivered' | 'processing' | 'cancelled';
  items: OrderItem[];
  total: number;
}

const mockOrders: Order[] = [
  {
    id: 'ORD-10042',
    date: '14 Feb 2025',
    status: 'delivered',
    total: 1748,
    items: [
      {
        id: 1,
        name: 'Apple iPhone 14 Pro 128GB',
        price: 999,
        image: 'https://via.placeholder.com/56',
        quantity: 1,
      },
      {
        id: 2,
        name: 'Apple iPad Air 256GB',
        price: 749,
        image: 'https://via.placeholder.com/56',
        quantity: 1,
      },
    ],
  },
  {
    id: 'ORD-10031',
    date: '2 Jan 2025',
    status: 'delivered',
    total: 429,
    items: [
      {
        id: 3,
        name: 'Apple Watch Series 9',
        price: 429,
        image: 'https://via.placeholder.com/56',
        quantity: 1,
      },
    ],
  },
  {
    id: 'ORD-10018',
    date: '19 Nov 2024',
    status: 'cancelled',
    total: 199,
    items: [
      {
        id: 4,
        name: 'AirPods Pro 2nd Gen',
        price: 199,
        image: 'https://via.placeholder.com/56',
        quantity: 1,
      },
    ],
  },
];

const statusLabel: Record<Order['status'], string> = {
  delivered: 'Delivered',
  processing: 'Processing',
  cancelled: 'Cancelled',
};

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
