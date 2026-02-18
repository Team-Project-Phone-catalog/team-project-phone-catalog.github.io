import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import { Banner } from '../../components/ui/Banner/Banner';
import { ProductsSlider } from './components/ProductsSlider';
import { CategorySection } from './components/CategorySection';
import { Loader } from '../../components/ui/Loader/Loader';
import {
  getAccessories,
  getPhones,
  getProducts,
  getTablets,
} from '../../api/products';
import { Product } from '../../types/Product';
import { sortByBestPrice, sortByNewest } from '../../utils/productFilters';

export const HomePage: React.FC = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [tablets, setTablets] = useState<Product[]>([]);
  const [accessories, setAccessories] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPhones(), getTablets(), getAccessories(), getProducts()])
      .then(([phonesData, tabletsData, accessoriesData, productsData]) => {
        setPhones(phonesData);
        setTablets(tabletsData);
        setAccessories(accessoriesData);
        setProducts(productsData);
      })
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

  const newestProducts = sortByNewest(products).slice(0, 12);
  const hotPriceProducts = sortByBestPrice([
    ...phones,
    ...tablets,
    ...accessories,
  ]).slice(0, 12);

  return (
    <main className={styles.home}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles['hero__title']}>
            Welcome to Nice Gadgets store!
          </h1>
          <Banner />
        </section>

        <ProductsSlider
          title="Brand new models"
          products={newestProducts}
        />

        <CategorySection
          phonesCount={phones.length}
          tabletsCount={tablets.length}
          accessoriesCount={accessories.length}
        />

        <ProductsSlider
          title="Hot prices"
          products={hotPriceProducts}
        />
      </div>
    </main>
  );
};
