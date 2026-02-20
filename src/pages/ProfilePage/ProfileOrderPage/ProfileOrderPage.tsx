import React, { useEffect, useState } from 'react';
import styles from './ProfileOrderPage.module.scss';
import { Sidebar } from '../../../components/SideBar/SideBar.tsx';
import { Breadcrumbs } from '../../../components/ui/Breadcrumbs/Breadcrumbs.tsx';
import { Order, ProductFromDB } from '../../../types/CartOrder.ts';
import { supabase } from '../../../utils/supabaseClient.ts';
import { Loader } from '../../../components/ui/Loader/Loader.tsx';
import { EmptyOrders } from '../../../components/ui/Profile/CartHistory/EmptyOrders/EmptyOrders.tsx';
import { OrderCard } from '../../../components/ui/Profile/CartHistory/OrderCard/OrderCard.tsx';

export const ProfileOrderPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setError('User doesnt login');
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('orders')
        .select(
          `
    id, 
    date,
    status,
    total,
    order_items (
      id,
      name,
      price,
      quantity,
      product_id,
      products (
        image
      )
    )
  `,
        )
        .eq('user_id', user.id)
        .order('date', { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        const format: Order[] = data.map((order) => ({
          id: order.id,
          date: new Date(order.date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          }),
          status: order.status,
          total: order.total,
          items: order.order_items.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity ?? 1,
            image: (item.products as ProductFromDB[] | null)?.[0]?.image || '',
          })),
        }));

        setOrders(format);
      }
      setLoading(false);
    };
    fetchOrders();
  }, []);

  if (loading) {
    <Loader />;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.profilePage}>
      <div className={styles.profilePage__container}>
        <div className={styles.profilePage__layout}>
          <Sidebar />

          <main className={styles.profilePage__content}>
            <Breadcrumbs />
            <h1 className={styles.profilePage__title}>Order History</h1>

            {orders.length === 0 ?
              <EmptyOrders />
            : <div className={styles.orderList}>
                {orders.map((order) => (
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
