import { Link } from 'react-router-dom';
import styles from './RightsPage.module.scss';

export const RightsPage = () => {
  return (
    <div className={styles['rights-page']}>
      <div className={styles['rights-page__container']}>
        <h1 className={styles['rights-page__title']}>
          Rights &amp; Intellectual Property
        </h1>

        <section className={styles['rights-page__section']}>
          <h2 className={styles['rights-page__section-title']}>
            1. General Provisions
          </h2>
          <p className={styles['rights-page__paragraph']}>
            All rights to this website and its content are owned by{' '}
            <Link
              to="/"
              className={styles['rights-page__link']}
            >
              Tech Store
            </Link>
            . This platform is designed for technology enthusiasts and
            consumers, and the use of any of its elements is governed by
            applicable copyright laws.
          </p>
        </section>

        <section className={styles['rights-page__section']}>
          <h2 className={styles['rights-page__section-title']}>
            2. Use of Product Images and Descriptions
          </h2>
          <p className={styles['rights-page__paragraph']}>
            Product images, brand names, specifications, and manufacturer
            descriptions presented in our catalog are the property of their
            respective copyright holders.
          </p>
          <ul className={styles['rights-page__list']}>
            <li>
              We use these materials solely for the purpose of product
              identification and informational purposes.
            </li>
            <li>
              <Link
                to="/"
                className={styles['rights-page__link']}
              >
                Tech Store
              </Link>{' '}
              does not claim authorship of images or descriptions provided by
              manufacturers or official partners.
            </li>
            <li>
              If you are a brand or copyright holder and wish to modify or
              remove information about your product, please contact our support
              team.
            </li>
          </ul>
        </section>

        <section className={styles['rights-page__section']}>
          <h2 className={styles['rights-page__section-title']}>
            3. User-Generated Content
          </h2>
          <p className={styles['rights-page__paragraph']}>
            By leaving reviews or ratings on the site, you grant{' '}
            <Link
              to="/"
              className={styles['rights-page__link']}
            >
              Tech Store
            </Link>{' '}
            the right to publish and distribute them within our platform.
            However, the authorship of the review remains with you.
          </p>
        </section>

        <section className={styles['rights-page__section']}>
          <h2 className={styles['rights-page__section-title']}>
            4. Prohibition of Copying
          </h2>
          <p
            className={`${styles['rights-page__paragraph']} ${styles['rights-page__paragraph--bold']}`}
          >
            Any automated data collection (scraping) or full copying of our
            store&apos;s database, pricing, or product catalog without the
            explicit consent of{' '}
            <Link
              to="/"
              className={styles['rights-page__link']}
            >
              Tech Store
            </Link>{' '}
            is strictly prohibited and subject to legal action.
          </p>
        </section>

        <div className={styles['rights-page__footer']}>
          <p className={styles['rights-page__footer-text']}>
            Last updated: February 22, 2026. We reserve the right to modify
            these terms without prior notice.
          </p>
        </div>
      </div>
    </div>
  );
};
