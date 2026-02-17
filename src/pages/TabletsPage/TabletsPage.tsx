import { useEffect, useMemo, useState } from 'react';
import { getTablets } from '../../api/products';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import { sortByNewest, sortByBestPrice } from '../../utils/productFilters';
import { SortType } from '../../types/SortType';
import s from './TabletsPage.module.scss';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs.tsx';

export const TabletsPage = () => {
  const [tablets, setTablets] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<SortType>('newest');
  const [itemsOnPage, setItemsOnPage] = useState(16);

  useEffect(() => {
    const loadTablets = async () => {
      const data = await getTablets();
      setTablets(data.map((tablet) => ({ ...tablet, category: 'tablets' })));
    };

    loadTablets();
  }, []);

  const sortedTablets = useMemo(() => {
    switch (sortBy) {
      case 'alphabetically':
        return [...tablets].sort((a, b) => a.name.localeCompare(b.name));

      case 'bestPrice':
        return sortByBestPrice(tablets);

      case 'newest':
      default:
        return sortByNewest(tablets);
    }
  }, [tablets, sortBy]);

  const visibleTablets = useMemo(() => {
    return sortedTablets.slice(0, itemsOnPage);
  }, [sortedTablets, itemsOnPage]);

  return (
    <div className={s['tablets-page']}>
      <Breadcrumbs />
      <h1 className={s.title}>Tablets</h1>
      <p className={s.modelsCount}>{tablets.length} models</p>

      <section className={s['tablets-page__controls']}>
        <div className={s.controls}>
          <div className={s.controlsLeft}>
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
          <div className={s.search}>
            <label className={s.label}>Looking for something?</label>

            <input
              type="text"
              placeholder="Type here"
              className={s.searchInput}
            />
          </div>
        </div>
      </section>

      <section className={s['tablets-page__list']}>
        {visibleTablets.map((tablet) => (
          <ProductCard
            key={tablet.id}
            product={tablet}
          />
        ))}
      </section>

      <section className={s['tablets-page__pagination']}></section>
    </div>
  );
};
