import { useEffect, useState } from 'react';
import { getAccessories } from '../../api/products';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import s from './AccessoriesPage.module.scss';

export const AccessoriesPage = () => {
  const [accessories, setAccessories] = useState<Product[]>([]);

  useEffect(() => {
    const loadTablets = async () => {
      const data = await getAccessories();
      setAccessories(data);
    };

    loadTablets();
  }, []);

  return (
    <div className={s['accessories-page']}>
      <h1 className={s.title}>Accessories</h1>

      <section className={s['accessories-page__controls']}></section>

      <section className={s['accessories-page__list']}>
        {accessories.map((accessory) => (
          <ProductCard key={accessory.id} />
        ))}
      </section>

      <section className={s['accessories-page__pagination']}></section>
    </div>
  );
};
