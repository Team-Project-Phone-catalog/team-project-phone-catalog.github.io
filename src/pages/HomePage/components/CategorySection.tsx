import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../HomePage.module.scss';

interface Props {
  phonesCount: number;
  tabletsCount: number;
  accessoriesCount: number;
}

export const CategorySection: React.FC<Props> = ({
  phonesCount,
  tabletsCount,
  accessoriesCount,
}) => {
  return (
    <section className={styles.section}>
      <h2 className={styles['section__title']}>Shop by category</h2>
      <div className={styles.categories}>
        <Link
          to="/phones"
          className={styles['category-card']}
        >
          <div className={styles['category-card__image-wrapper']}>
            <img
              src="/img/category-phones.png"
              alt="Phones"
              className={styles['category-card__image']}
            />
          </div>
          <div className={styles['category-card__info']}>
            <h3 className={styles['category-card__title']}>Mobile phones</h3>
            <p className={styles['category-card__count']}>
              {phonesCount} models
            </p>
          </div>
        </Link>

        <Link
          to="/tablets"
          className={styles['category-card']}
        >
          <div className={styles['category-card__image-wrapper']}>
            <img
              src="/img/category-tablets.png"
              alt="Tablets"
              className={styles['category-card__image-tablets']}
            />
          </div>
          <div className={styles['category-card__info']}>
            <h3 className={styles['category-card__title']}>Tablets</h3>
            <p className={styles['category-card__count']}>
              {tabletsCount} models
            </p>
          </div>
        </Link>

        <Link
          to="/accessories"
          className={styles['category-card']}
        >
          <div className={styles['category-card__image-wrapper']}>
            <img
              src="/img/category-accessories.png"
              alt="Accessories"
              className={styles['category-card__image-access']}
            />
          </div>
          <div className={styles['category-card__info']}>
            <h3 className={styles['category-card__title']}>Accessories</h3>
            <p className={styles['category-card__count']}>
              {accessoriesCount} models
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};
