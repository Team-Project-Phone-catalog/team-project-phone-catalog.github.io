import { useEffect, useMemo, useState } from 'react';
import { getPhones } from '../../api/products';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import { sortByNewest, sortByBestPrice } from '../../utils/productFilters';
import { SortType } from '../../types/SortType';
import s from './PhonesPage.module.scss';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<SortType>('newest');
  const [itemsOnPage, setItemsOnPage] = useState(16);

  useEffect(() => {
    const loadPhones = async () => {
      const data = await getPhones();
      setPhones(data);
    };

    loadPhones();
  }, []);

  const sortedPhones = useMemo(() => {
    switch (sortBy) {
      case 'alphabetically':
        return [...phones].sort((a, b) => a.name.localeCompare(b.name));

      case 'bestPrice':
        return sortByBestPrice(phones);

      case 'newest':
      default:
        return sortByNewest(phones);
    }
  }, [phones, sortBy]);

  const visiblePhones = useMemo(() => {
    return sortedPhones.slice(0, itemsOnPage);
  }, [sortedPhones, itemsOnPage]);

  return (
    <div className={s['phones-page']}>
      <h1 className={s.title}>Mobile phones</h1>
      <p className={s.modelsCount}>{phones.length} models</p>

      <section className={s['phones-page__controls']}>
        <div className={s.controls}>
          <div className={s.control}>
            <label className={s.label}>Sort by</label>

            <select
              className={s.select}
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as SortType)}
            >
              <option value="newest">Newest</option>
              <option value="alphabetically">Alphabetically</option>
              <option value="bestPrice">Best price</option>
            </select>
          </div>

          <div className={s.control}>
            <label className={s.label}>Items on page</label>

            <select
              className={s.select}
              value={itemsOnPage}
              onChange={(event) => setItemsOnPage(+event.target.value)}
            >
              <option value={16}>16</option>
              <option value={32}>32</option>
              <option value={64}>64</option>
            </select>
          </div>
        </div>
      </section>

      <section className={s['phones-page__list']}>
        {visiblePhones.map((phone) => (
          <ProductCard
            key={phone.id}
            product={phone}
          />
        ))}
      </section>

      <section className={s['phones-page__pagination']}></section>
    </div>
  );
};
