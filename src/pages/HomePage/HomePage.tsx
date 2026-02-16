import React from 'react';
import styles from './HomePage.module.scss';
import { ProductCard } from '../ProductCard';

export const HomePage: React.FC = () => {
  return (
    <main className={styles.home}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.hero__title}>Welcome to Nice Gadgets store!</h1>

          <div className={styles.hero__slider}>
            <button
              className={`${styles.hero__arrow} ${styles['hero__arrow--left']}`}
              aria-label="Previous slide"
            >
              {/* Іконка стрілки */}
            </button>

            <div className={styles.hero__banner}>
              <img
                src=""
                alt="iPhone 14 Pro promotion"
                className={styles['hero__banner-img']}
              />
            </div>

            <button
              className={`${styles.hero__arrow} ${styles['hero__arrow--right']}`}
              aria-label="Next slide"
            >
              {/* Іконка стрілки */}
            </button>
          </div>

          <div className={styles.hero__dots}>
            <button
              className={`${styles.hero__dot} ${styles['hero__dot--active']}`}
              aria-label="Slide 1"
            ></button>
            <button
              className={styles.hero__dot}
              aria-label="Slide 2"
            ></button>
            <button
              className={styles.hero__dot}
              aria-label="Slide 3"
            ></button>
          </div>
        </section>

        {/* Brand new models */}
        <section className={styles.section}>
          <div className={styles.section__header}>
            <h2 className={styles.section__title}>Brand new models</h2>
            <div className={styles.section__arrows}>
              <button
                className={`${styles['arrow-btn']} ${styles['arrow-btn--prev']}`}
                aria-label="Previous"
              >
                {/* Іконка стрілки */}
              </button>
              <button
                className={`${styles['arrow-btn']} ${styles['arrow-btn--next']}`}
                aria-label="Next"
              >
                {/* Іконка стрілки */}
              </button>
            </div>
          </div>

          <div className={styles['products-slider']}>
            <div className={styles['products-slider__track']}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>

        {/* Shop by category */}
        <section className={styles.section}>
          <h2 className={styles.section__title}>Shop by category</h2>

          <div className={styles.categories}>
            <article className={styles['category-card']}>
              <div className={styles['category-card__image-wrapper']}>
                <img
                  src="/img/category-phones.jpg"
                  alt="Mobile phones"
                  className={styles['category-card__image']}
                />
              </div>
              <div className={styles['category-card__info']}>
                <h3 className={styles['category-card__title']}>
                  Mobile phones
                </h3>
                <p className={styles['category-card__count']}>95 models</p>
              </div>
            </article>

            <article className={styles['category-card']}>
              <div className={styles['category-card__image-wrapper']}>
                <img
                  src="/img/category-tablets.jpg"
                  alt="Tablets"
                  className={styles['category-card__image']}
                />
              </div>
              <div className={styles['category-card__info']}>
                <h3 className={styles['category-card__title']}>Tablets</h3>
                <p className={styles['category-card__count']}>24 models</p>
              </div>
            </article>

            <article className={styles['category-card']}>
              <div className={styles['category-card__image-wrapper']}>
                <img
                  src="/img/category-accessories.jpg"
                  alt="Accessories"
                  className={styles['category-card__image']}
                />
              </div>
              <div className={styles['category-card__info']}>
                <h3 className={styles['category-card__title']}>Accessories</h3>
                <p className={styles['category-card__count']}>100 models</p>
              </div>
            </article>
          </div>
        </section>

        {/* Hot Prices */}
        <section className={styles.section}>
          <div className={styles.section__header}>
            <h2 className={styles.section__title}>Hot prices</h2>
            <div className={styles.section__arrows}>
              <button
                className={`${styles['arrow-btn']} ${styles['arrow-btn--prev']}`}
                aria-label="Previous"
              >
                {/* Іконка стрілки */}
              </button>
              <button
                className={`${styles['arrow-btn']} ${styles['arrow-btn--next']}`}
                aria-label="Next"
              >
                {/* Іконка стрілки */}
              </button>
            </div>
          </div>

          <div className={styles['products-slider']}>
            <div className={styles['products-slider__track']}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
