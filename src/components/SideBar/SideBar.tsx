import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { supabase } from '../../utils/supabaseClient.ts';

export const Sidebar = () => {
  const location = useLocation();
  const [userName, setUserName] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');

  React.useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUserName(data.user?.user_metadata?.full_name || '');
      setUserEmail(data.user?.email || '');
    });
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
