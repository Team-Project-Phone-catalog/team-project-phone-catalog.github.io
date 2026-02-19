import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { CounterIcon } from './CounterIcon/CounterIcon';
import styles from './Header.module.scss';
import logo from './icons/logo.svg';
import heartIcon from './icons/Heart.svg';
import cartIcon from './icons/Cart.svg';
import userIcon from './icons/User.svg';
import { useAppContext } from '../../../hooks/useAppContext.ts';
import { AuthModal } from '../../AuthModal/AuthModal.tsx';
import { supabase } from '../../../utils/supabaseClient.ts';
import { User } from '@supabase/supabase-js';

const navLinks = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Phones', path: '/phones' },
  { id: 3, name: 'Tablets', path: '/tablets' },
  { id: 4, name: 'Accessories', path: '/accessories' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const { getTotalItems, getFavoritesCount } = useAppContext();

  const cartCount = getTotalItems();
  const favoritesCount = getFavoritesCount();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__left}>
            <Link
              to="/"
              className={styles.header__logo}
              onClick={closeMenu}
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
                to="/profile"
                className={({ isActive }) =>
                  isActive ?
                    `${styles.icon_btn} ${styles['icon_btn--user']} ${styles['icon_btn--active']}`
                  : `${styles.icon_btn} ${styles['icon_btn--user']}`
                }
                onClick={(e) => {
                  if (!user) {
                    e.preventDefault();
                    setIsAuthModalOpen(true);
                  }

                  closeMenu();
                }}
              >
                <img
                  src={userIcon}
                  alt="Profile"
                />
              </NavLink>

              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive ?
                    `${styles.icon_btn} ${styles['icon_btn--active']}`
                  : styles.icon_btn
                }
                onClick={closeMenu}
              >
                <CounterIcon
                  icon={heartIcon}
                  count={favoritesCount}
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
                onClick={closeMenu}
              >
                <CounterIcon
                  icon={cartIcon}
                  count={cartCount}
                  alt="Cart"
                />
              </NavLink>
            </div>

            <button
              className={styles.header__burger}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div
                className={`${styles.burger_icon} ${isMenuOpen ? styles['burger_icon--active'] : ''}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      </header>

      <BurgerMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        favoritesCount={favoritesCount}
        cartCount={cartCount}
      />
    </>
  );
};
