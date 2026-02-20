import React, { useEffect, useState } from 'react';
import styles from './AdminPage.module.scss';
import { Sidebar } from '../../../components/SideBar/SideBar.tsx';
import { Breadcrumbs } from '../../../components/ui/Breadcrumbs/Breadcrumbs.tsx';
import { supabase } from '../../../utils/supabaseClient.ts';

interface AdminUser {
  id: string;
  email: string;
  created_at: string;
  is_admin: boolean;
}

interface AdminOrder {
  id: string;
  user_id: string;
  status: string;
  total: number;
  date: string;
}

export const AdminPage: React.FC = () => {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [orders, setOrders] = useState<AdminOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) setCurrentUserId(user.id);

      const [
        { data: profilesData, error: profilesError },
        { data: ordersData, error: ordersError },
      ] = await Promise.all([
        supabase.from('profiles').select('id, is_admin, email, created_at'),
        supabase
          .from('orders')
          .select('id, user_id, status, total, date')
          .order('date', { ascending: false }),
      ]);

      if (profilesError) {
        setError(profilesError.message);
      } else {
        setUsers(
          profilesData.map((p) => ({
            id: p.id,
            is_admin: p.is_admin,
            email: p.email || '—',
            created_at: new Date(p.created_at).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }),
          })),
        );
      }

      if (!ordersError && ordersData) {
        setOrders(
          ordersData.map((o) => ({
            ...o,
            date: new Date(o.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }),
          })),
        );
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  const toggleAdmin = async (userId: string, current: boolean) => {
    const { error } = await supabase
      .from('profiles')
      .update({ is_admin: !current })
      .eq('id', userId);

    if (!error) {
      setUsers((prev) =>
        prev.map((u) => (u.id === userId ? { ...u, is_admin: !current } : u)),
      );
    }
  };

  const deleteUser = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user?')) return;

    const { error } = await supabase.from('profiles').delete().eq('id', userId);

    if (!error) {
      setUsers((prev) => prev.filter((u) => u.id !== userId));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.profilePage}>
      <div className={styles.profilePage__container}>
        <div className={styles.profilePage__layout}>
          <Sidebar />

          <main className={styles.profilePage__content}>
            <Breadcrumbs />
            <h1 className={styles.profilePage__title}>Admin Panel</h1>

            {/* ── Users ── */}
            <div className={styles.statCard}>
              <span className={styles.statCard__label}>Total Users</span>
              <span className={styles.statCard__value}>{users.length}</span>
            </div>

            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.table__th}>ID</th>
                    <th className={styles.table__th}>Email</th>
                    <th className={styles.table__th}>Registered</th>
                    <th className={styles.table__th}>Role</th>
                    <th className={styles.table__th}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className={styles.table__row}
                    >
                      <td
                        className={`${styles.table__td} ${styles.table__td_id}`}
                      >
                        {user.id.slice(0, 8)}...
                      </td>
                      <td className={styles.table__td}>{user.email}</td>
                      <td className={styles.table__td}>{user.created_at}</td>
                      <td className={styles.table__td}>
                        <span
                          className={`${styles.badge} ${user.is_admin ? styles.badge_admin : styles.badge_user}`}
                        >
                          {user.is_admin ? 'Admin' : 'User'}
                        </span>
                      </td>
                      <td className={styles.table__td}>
                        <div className={styles.actions}>
                          <button
                            className={styles.actions__btn}
                            onClick={() => toggleAdmin(user.id, user.is_admin)}
                            disabled={user.id === currentUserId}
                            title={
                              user.is_admin ? 'Remove admin' : 'Make admin'
                            }
                          >
                            {user.is_admin ? 'Remove Admin' : 'Make Admin'}
                          </button>
                          <button
                            className={`${styles.actions__btn} ${styles.actions__btn_danger}`}
                            onClick={() => deleteUser(user.id)}
                            disabled={user.id === currentUserId}
                            title="Delete user"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className={styles.statCard}
              style={{ marginTop: 32 }}
            >
              <span className={styles.statCard__label}>Total Orders</span>
              <span className={styles.statCard__value}>{orders.length}</span>
            </div>

            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.table__th}>Order ID</th>
                    <th className={styles.table__th}>User ID</th>
                    <th className={styles.table__th}>Status</th>
                    <th className={styles.table__th}>Total</th>
                    <th className={styles.table__th}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className={styles.table__row}
                    >
                      <td
                        className={`${styles.table__td} ${styles.table__td_id}`}
                      >
                        {order.id.slice(0, 8)}...
                      </td>
                      <td
                        className={`${styles.table__td} ${styles.table__td_id}`}
                      >
                        {order.user_id.slice(0, 8)}...
                      </td>
                      <td className={styles.table__td}>
                        <span
                          className={`${styles.badge} ${
                            order.status === 'delivered' ?
                              styles.badge_delivered
                            : order.status === 'processing' ?
                              styles.badge_processing
                            : styles.badge_cancelled
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className={styles.table__td}>
                        ${order.total.toFixed(2)}
                      </td>
                      <td className={styles.table__td}>{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
