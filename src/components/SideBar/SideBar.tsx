import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { supabase } from '../../utils/supabaseClient.ts';

export const Sidebar = () => {
  const location = useLocation();
  const [userName, setUserName] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const [isAdmin, setIsAdmin] = React.useState(false);

  React.useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      setUserName(user.user_metadata?.full_name || '');
      setUserEmail(user.email || '');

      const { data: profile } = await supabase
        .from('profiles')
        .select('is_admin')
        .eq('id', user.id)
        .single();

      setIsAdmin(profile?.is_admin ?? false);
    };

    fetchUser();
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.profileSection}>
        <div className={styles.avatarPlaceholder}>{userName.charAt(0)}</div>
        <div className={styles.profileInfo}>
          <p className={styles.name}>{userName}</p>
          <p className={styles.email}>{userEmail}</p>
        </div>
      </div>

      <nav className={styles.nav}>
        <Link
          to="/profile"
          className={`${styles.navItem} ${isActive('/profile') ? styles.active : ''}`}
        >
          My Account
        </Link>

        {isAdmin && (
          <Link
            to="/profile/admin"
            className={`${styles.navItem} ${isActive('/admin') ? styles.active : ''}`}
          >
            Admin
          </Link>
        )}

        <Link
          to="/profile/orders"
          className={`${styles.navItem} ${isActive('/profile/orders') ? styles.active : ''}`}
        >
          Order
        </Link>

        <Link
          to="/chat"
          className={`${styles.navItem} ${isActive('/chat') ? styles.active : ''}`}
        >
          <span>Chat</span>
          <span className={styles.badge}>17</span>
        </Link>

        <div className={styles.divider}></div>

        <Link
          to="/wishlist"
          className={`${styles.navItem} ${isActive('/wishlist') ? styles.active : ''}`}
        >
          <span>Wish lists</span>
          <span className={styles.count}>2</span>
        </Link>

        <Link
          to="/wallet"
          className={`${styles.navItem} ${isActive('/wallet') ? styles.active : ''}`}
        >
          Wallet
        </Link>
      </nav>
    </aside>
  );
};
