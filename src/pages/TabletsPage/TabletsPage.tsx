import { useEffect, useState } from 'react';
import { getTablets } from '../../api/products';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import s from './TabletsPage.module.scss';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs.tsx';

export const TabletsPage = () => {
  const [tablets, setTablets] = useState<Product[]>([]);

  useEffect(() => {
    const loadTablets = async () => {
      const data = await getTablets();
      setTablets(data.map((tablet) => ({ ...tablet, category: 'tablets' })));
    };

    loadTablets();
  }, []);

  return (
    <div className={s['tablets-page']}>
      <div className={s['tablets-page__container']}>
        <Breadcrumbs />

        <h1 className={s.title}>Tablets</h1>
        <p className={s.modelsCount}>{tablets.length} models</p>

        <section className={s['tablets-page__controls']}>
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

        <section className={s['tablets-page__list']}>
          {tablets.map((tablet) => (
            <ProductCard
              key={tablet.id}
              product={tablet}
            />
          ))}
        </section>

        <section className={s['tablets-page__pagination']}></section>
      </div>
    </div>
  );
};
