import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from './icons/logo.svg';
import heartIcon from './icons/heart.svg';
import cartIcon from './icons/cart.svg';

const navLinks = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Phones', path: '/phones' },
  { id: 3, name: 'Tablets', path: '/tablets' },
  { id: 4, name: 'Accessories', path: '/accessories' },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__left}>
          <Link
            to="/"
            className={styles.header__logo}
          >
            <img
              src={logo}
              alt="Nice Gadgets"
            />
          </Link>

          <nav className={styles.header__nav}>
            <ul className={styles.nav_list}>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={styles.nav_list__item}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ?
                        `${styles.nav_list__link} ${styles['nav_list__link--active']}`
                      : styles.nav_list__link
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.header__right}>
          <div className={styles.header__icons}>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ?
                  `${styles.icon_btn} ${styles['icon_btn--active']}`
                : styles.icon_btn
              }
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
                  `${styles.icon_btn} ${styles['icon_btn--active']}`
                : styles.icon_btn
              }
            >
              <img
                src={cartIcon}
                alt="Cart"
              />
            </NavLink>
          </div>

          <button
            className={styles.header__burger}
            aria-label="Menu"
          >
            <div className={styles.burger_icon}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
