import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import logoDark from '../../../assets/logo-dark.svg';

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
            src={logoDark}
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

          <Link to="/contacts">CONTACTS</Link>
          <Link to="/rights">RIGHTS</Link>
        </nav>

        <div className={styles.back}>
          <span>Back to top</span>

          <button
            onClick={handleScrollTop}
            className={styles.scrollTop}
          >
            <img
              src="src/assets/icons/Button-Top.svg"
              alt="Back to top"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};
