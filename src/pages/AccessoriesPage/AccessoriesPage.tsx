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
      <p className={s.modelsCount}>{accessories.length} models</p>

      <section className={s['accessories-page__controls']}>
        <div className={s.controls}>
          <div className={s.control}>
            <label className={s.label}>Sort by</label>

            <select className={s.select}>
              <option>Newest</option>
              <option>Alphabetically</option>
              <option>Cheapest</option>
            </select>
          </div>

          <div className={s.control}>
            <label className={s.label}>Items on page</label>

            <select className={s.select}>
              <option>16</option>
              <option>32</option>
              <option>64</option>
            </select>
          </div>
        </div>
      </section>

      <section className={s['accessories-page__list']}>
        {accessories.map((accessory) => (
          <ProductCard key={accessory.id} />
        ))}
      </section>

      <section className={s['accessories-page__pagination']}></section>
    </div>
  );
};
