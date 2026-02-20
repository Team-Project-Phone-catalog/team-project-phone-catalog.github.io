import React from 'react';
import { NavLink } from 'react-router-dom';
import { User } from '@supabase/supabase-js';
import styles from './BurgerMenu.module.scss';
import heartIcon from '../icons/Heart.svg';
import cartIcon from '../icons/Cart.svg';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  favoritesCount: number;
  cartCount: number;
  user: User | null;
  isAdmin: boolean;
}

const navLinks = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Phones', path: '/phones' },
  { id: 3, name: 'Tablets', path: '/tablets' },
  { id: 4, name: 'Accessories', path: '/accessories' },
];

const authNavLinks = [
  { id: 5, name: 'Orders', path: 'profile/orders' },
  { id: 6, name: 'Chat', path: 'profile/chat' },
  { id: 7, name: 'Wish List', path: 'profile/favorites' },
  { id: 8, name: 'Wallet', path: 'profile/wallet' },
];

export const BurgerMenu: React.FC<Props> = ({
  isOpen,
  onClose,
  favoritesCount,
  cartCount,
  user,
  isAdmin,
}) => {
  return (
    <div
      className={`${styles.menu} ${isOpen ? `${styles['menu--open']} is-menu-open` : ''}`}
    >
      <nav className={styles.menu__nav}>
        <ul className={styles.menu__list}>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={styles.menu__item}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ?
                    `${styles.menu__link} ${styles['menu__link--active']}`
                  : styles.menu__link
                }
                onClick={onClose}
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          {user && (
            <>
              <li className={styles.menu__divider} />
              {authNavLinks.map((link) => (
                <li
                  key={link.id}
                  className={styles.menu__item}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ?
                        `${styles.menu__link} ${styles['menu__link--active']}`
                      : styles.menu__link
                    }
                    onClick={onClose}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}

              {isAdmin && (
                <li className={styles.menu__item}>
                  <NavLink
                    to="profile/admin"
                    className={({ isActive }) =>
                      isActive ?
                        `${styles.menu__link} ${styles['menu__link--active']}`
                      : styles.menu__link
                    }
                    onClick={onClose}
                  >
                    Admin
                  </NavLink>
                </li>
              )}
            </>
          )}
        </ul>
      </nav>

      <div className={styles.menu__footer}>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ?
              `${styles.footer_btn} ${styles['footer_btn--active']}`
            : styles.footer_btn
          }
          onClick={onClose}
        >
          <div className={styles.icon_container}>
            <img
              src={heartIcon}
              alt="Favorites"
            />
            {favoritesCount > 0 && (
              <span className={styles.badge}>
                {favoritesCount > 99 ? '99+' : favoritesCount}
              </span>
            )}
          </div>
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ?
              `${styles.footer_btn} ${styles['footer_btn--active']}`
            : styles.footer_btn
          }
          onClick={onClose}
        >
          <div className={styles.icon_container}>
            <img
              src={cartIcon}
              alt="Cart"
            />
            {cartCount > 0 && (
              <span className={styles.badge}>
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </div>
  );
};
