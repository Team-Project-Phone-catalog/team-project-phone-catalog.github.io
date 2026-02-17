import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import { ProductCard } from '../ProductCard';
import {
  getAccessories,
  getPhones,
  getProducts,
  getTablets,
} from '../../api/products.ts';
import { Product } from '../../types/Product.ts';
import { sortByBestPrice, sortByNewest } from '../../utils/productFilters.ts';
import { Loader } from '../../components/ui/Loader/Loader.tsx';

export const HomePage: React.FC = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [tablets, setTablets] = useState<Product[]>([]);
  const [accessories, setAccessories] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const allProducts = [...phones, ...tablets, ...accessories];
  const newestProducts = sortByNewest(products).slice(0, 12);
  const bestPriceProducts = sortByBestPrice(allProducts).slice(0, 12);

  useEffect(() => {
    Promise.all([
      getPhones(),
      getTablets(),
      getAccessories(),
      getProducts(),
      new Promise((resolve) => setTimeout(resolve, 1000)),
    ])
      .then(([phonesData, tabletsData, accessoriesData, productsData]) => {
        setPhones(phonesData);
        setTablets(tabletsData);
        setAccessories(accessoriesData);
        setProducts(productsData);
      })
      .catch((err) => console.error('Error loading data:', err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <main className={styles.home}>
        <div className={styles['loader-wrapper']}>
          <Loader />
        </div>
      </main>
    );
  }

  return (
    <main className={styles.home}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.hero__title}>Welcome to Nice Gadgets store!</h1>

          <div className={styles.hero__slider}>
            <button
              className={`${styles.hero__arrow} ${styles['hero__arrow--left']}`}
              aria-label="Previous slide"
            />

            <div className={styles.hero__banner}>
              <img
                src="/img/main-banner.png"
                alt="iPhone 14 Pro promotion"
                className={styles['hero__banner-img']}
              />
            </div>

            <button
              className={`${styles.hero__arrow} ${styles['hero__arrow--right']}`}
              aria-label="Next slide"
            />
          </div>

          <div className={styles.hero__dots}>
            <button
              className={`${styles.hero__dot} ${styles['hero__dot--active']}`}
              aria-label="Slide 1"
            />
            <button
              className={styles.hero__dot}
              aria-label="Slide 2"
            />
            <button
              className={styles.hero__dot}
              aria-label="Slide 3"
            />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.section__header}>
            <h2 className={styles.section__title}>Brand new models</h2>
            <div className={styles.section__arrows}>
              <button
                className={styles['arrow-btn']}
                aria-label="Previous"
              />
              <button
                className={styles['arrow-btn']}
                aria-label="Next"
              />
            </div>
          </div>

          <div className={styles['products-slider']}>
            <div className={styles['products-slider__track']}>
              {newestProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.section__title}>Shop by category</h2>

          <div className={styles.categories}>
            <article className={styles['category-card']}>
              <div className={styles['category-card__image-wrapper']}>
                <img
                  src="/img/category-phones.png"
                  alt="Mobile phones"
                  className={styles['category-card__image']}
                />
              </div>
              <div className={styles['category-card__info']}>
                <h3 className={styles['category-card__title']}>
                  Mobile phones
                </h3>
                <p className={styles['category-card__count']}>
                  {phones.length} models
                </p>
              </div>
            </article>

            <article className={styles['category-card']}>
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
                  {tablets.length} models
                </p>
              </div>
            </article>

            <article className={styles['category-card']}>
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
                  {accessories.length} models
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.section__header}>
            <h2 className={styles.section__title}>Hot prices</h2>
            <div className={styles.section__arrows}>
              <button
                className={styles['arrow-btn']}
                aria-label="Previous"
              />
              <button
                className={styles['arrow-btn']}
                aria-label="Next"
              />
            </div>
          </div>

          <div className={styles['products-slider']}>
            <div className={styles['products-slider__track']}>
              {bestPriceProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
