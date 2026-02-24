import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';
import logoDark from '../../../assets/logo-dark.svg';

export const Footer = () => {
  const { t } = useTranslation();

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
            {t('footer.github')}
          </a>

          <Link to="/contacts">{t('footer.contacts')}</Link>
          <Link to="/rights">{t('footer.rights')}</Link>
        </nav>

        <div className={styles.back}>
          <span>{t('footer.back_to_top')}</span>

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
