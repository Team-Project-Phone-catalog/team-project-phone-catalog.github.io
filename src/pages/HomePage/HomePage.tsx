import React, { useEffect, useRef, useState } from 'react';
import styles from './HomePage.module.scss';
import { Banner } from '../../components/ui/Banner/Banner';
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

  const newestSliderRef = useRef<HTMLDivElement>(null);
  const hotSliderRef = useRef<HTMLDivElement>(null);

  const allProducts = [...phones, ...tablets, ...accessories];
  const newestProducts = sortByNewest(products).slice(0, 12);
  const bestPriceProducts = sortByBestPrice(allProducts).slice(0, 12);

  const scroll = (
    ref: React.RefObject<HTMLDivElement | null>,
    direction: 'left' | 'right',
  ) => {
    if (ref.current) {
      const cardWidth =
        ref.current.querySelector('article')?.offsetWidth || 272;
      const gap = 16;
      const scrollAmount = cardWidth + gap;

      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

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
          <h1 className={styles['hero__title']}>
            Welcome to Nice Gadgets store!
          </h1>

          <Banner />
        </section>

        {/* Brand New Models */}
        <section className={styles.section}>
          <div className={styles['section__header']}>
            <h2 className={styles['section__title']}>Brand new models</h2>
            <div className={styles['section__arrows']}>
              <button
                className={styles['arrow-btn']}
                aria-label="Previous"
                onClick={() => scroll(newestSliderRef, 'left')}
              >
                {'<'}
              </button>
              <button
                className={styles['arrow-btn']}
                aria-label="Next"
                onClick={() => scroll(newestSliderRef, 'right')}
              >
                {'>'}
              </button>
            </div>
          </div>

          <div
            className={styles['products-slider']}
            ref={newestSliderRef}
          >
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

        {/* Shop by Category */}
        <section className={styles.section}>
          <h2 className={styles['section__title']}>Shop by category</h2>

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

        {/* Hot Prices */}
        <section className={styles.section}>
          <div className={styles['section__header']}>
            <h2 className={styles['section__title']}>Hot prices</h2>
            <div className={styles['section__arrows']}>
              <button
                className={styles['arrow-btn']}
                aria-label="Previous"
                onClick={() => scroll(hotSliderRef, 'left')}
              >
                {'<'}
              </button>
              <button
                className={styles['arrow-btn']}
                aria-label="Next"
                onClick={() => scroll(hotSliderRef, 'right')}
              >
                {'>'}
              </button>
            </div>
          </div>

          <div
            className={styles['products-slider']}
            ref={hotSliderRef}
          >
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
