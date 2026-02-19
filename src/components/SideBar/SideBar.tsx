import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  userName: string;
  userEmail: string;
}

export const Sidebar = ({ userName, userEmail }: SidebarProps) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className={styles.sidebar}>
      {/* Секція профілю */}
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
          className={styles.navItem}
        >
          Order
        </Link>

        <Link
          to="/chat"
          className={styles.navItem}
        >
          <span>Chat</span>
          <span className={styles.badge}>17</span>
        </Link>

        <div className={styles.divider}></div>

        <Link
          to="/wishlist"
          className={styles.navItem}
        >
          <span>Wish lists</span>
          <span className={styles.count}>2</span>
        </Link>

        <Link
          to="/wallet"
          className={styles.navItem}
        >
          Wallet
        </Link>
      </nav>
    </aside>
  );
};
