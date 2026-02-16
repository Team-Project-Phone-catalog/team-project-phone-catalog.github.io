import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';
import heartIcon from '../icons/Heart.svg';
import cartIcon from '../icons/Cart.svg';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Phones', path: '/phones' },
  { id: 3, name: 'Tablets', path: '/tablets' },
  { id: 4, name: 'Accessories', path: '/accessories' },
];

export const BurgerMenu: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles['menu--open'] : ''}`}>
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
          <img
            src={heartIcon}
            alt="Favorites"
          />
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
          <img
            src={cartIcon}
            alt="Cart"
          />
        </NavLink>
      </div>
    </div>
  );
};
