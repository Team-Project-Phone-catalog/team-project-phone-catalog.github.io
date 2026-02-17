import { useEffect, useState } from 'react';
import { getPhones } from '../../api/products';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import s from './PhonesPage.module.scss';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Product[]>([]);

  useEffect(() => {
    const loadPhones = async () => {
      const data = await getPhones();
      setPhones(data);
    };

    loadPhones();
  }, []);

  return (
    <div className={s['phones-page']}>
      <div className={s['phones-page__container']}>
        <h1 className={s.title}>Mobile phones</h1>
        <p className={s.modelsCount}>{phones.length} models</p>

        <section className={s['phones-page__controls']}>
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

        <section className={s['phones-page__list']}>
          {phones.map((phone) => (
            <div
              key={phone.id}
              className={s['phones-page__item']}
            >
              <ProductCard product={phone} />
            </div>
          ))}
        </section>

        <section className={s['phones-page__pagination']}></section>
      </div>
    </div>
  );
};
