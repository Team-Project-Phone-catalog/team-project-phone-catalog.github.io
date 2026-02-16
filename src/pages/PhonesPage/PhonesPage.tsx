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
      <h1 className={s.title}>Mobile phones</h1>

      <section className={s['phones-page__controls']}></section>

      <section className={s['phones-page__list']}>
        {phones.map((phone) => (
          <ProductCard key={phone.id} />
        ))}
      </section>

      <section className={s['phones-page__pagination']}></section>
    </div>
  );
};
