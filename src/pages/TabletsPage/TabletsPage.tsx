import { useEffect, useState } from 'react';
import { getTablets } from '../../api/products';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import './TabletsPage.module.scss';

export const TabletsPage = () => {
  const [tablets, setTablets] = useState<Product[]>([]);

  useEffect(() => {
    const loadTablets = async () => {
      const data = await getTablets();
      setTablets(data);
    };

    loadTablets();
  }, []);

  return (
    <div className="tablets-page">
      <h1 className="title">Tablets</h1>

      <section className="tablets-page__controls"></section>

      <section className="tablets-page__list">
        {tablets.map((tablet) => (
          <ProductCard key={tablet.id} />
        ))}
      </section>

      <section className="tablets-page__pagination"></section>
    </div>
  );
};
