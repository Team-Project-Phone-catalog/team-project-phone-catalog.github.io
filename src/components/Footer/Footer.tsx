import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import logo from '../../assets/logo.svg';

export const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link
          to="/"
          className={styles.logoLink}
        >
          <img
            src={logo}
            alt="Nice Gadgets"
            className={styles.logo}
          />
        </Link>

        <nav className={styles.nav}>
          <a
            href="https://github.com/Team-Project-Phone-catalog/phone-catalog-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>

          <a href="#">CONTACTS</a>
          <a href="#">RIGHTS</a>
        </nav>

        <div className={styles.back}>
          <span>Back to top</span>

          <button
            type="button"
            onClick={handleScrollTop}
            className={styles.arrow}
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
