import { useEffect, useState } from 'react';
import { getPhones } from '../../api/products';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import './PhonesPage.module.scss';

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
    <div className="phones-page">
      <h1 className="title">Mobile phones</h1>

      <section className="phones-page__controls"></section>

      <section className="phones-page__list">
        {phones.map((phone) => (
          <ProductCard key={phone.id} />
        ))}
      </section>

      <section className="phones-page__pagination"></section>
    </div>
  );
};
