import { useEffect, useMemo, useState } from 'react';
import { getTablets } from '../../api/products';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import { sortByNewest, sortByBestPrice } from '../../utils/productFilters';
import { SortType } from '../../types/SortType';
import s from './TabletsPage.module.scss';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs.tsx';
import { ProductSkeleton } from '../../components/ProductSkelet/ProductSkelet.tsx';
import { NoResults } from '../../components/ui/NoResults/NoResults.tsx';

export const TabletsPage = () => {
  const [tablets, setTablets] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<SortType>('newest');
  const [itemsOnPage, setItemsOnPage] = useState(16);
  const [isLoading, setIsLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const loadTablets = async () => {
      setIsLoading(true);
      try {
        const data = await getTablets();
        setTablets(data.map((tablet) => ({ ...tablet, category: 'tablets' })));
      } finally {
        setTimeout(() => setIsLoading(false), 600);
      }
    };
    loadTablets();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.length === 0 && debouncedQuery.length > 0) {
      setIsLoading(true);

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [searchQuery, debouncedQuery.length]);

  const filteredTablets = useMemo(() => {
    const query = debouncedQuery.toLowerCase().trim();
    return tablets.filter((tablet) =>
      tablet.name.toLowerCase().includes(query),
    );
  }, [tablets, debouncedQuery]);

  const sortedTablets = useMemo(() => {
    const toSort = [...filteredTablets];
    switch (sortBy) {
      case 'alphabetically':
        return toSort.sort((a, b) => a.name.localeCompare(b.name));
      case 'bestPrice':
        return sortByBestPrice(toSort);
      case 'newest':
      default:
        return sortByNewest(toSort);
    }
  }, [filteredTablets, sortBy]);

  const visibleTablets = useMemo(() => {
    return sortedTablets.slice(0, itemsOnPage);
  }, [sortedTablets, itemsOnPage]);

  return (
    <div className={s['tablets-page']}>
      <div className={s['tablets-page__container']}>
        <Breadcrumbs />
        <h1 className={s.title}>Tablets</h1>

        {!isLoading && (
          <p className={s.modelsCount}>{filteredTablets.length} models</p>
        )}

        <section className={s['tablets-page__controls']}>
          <div className={s.controls}>
            <div className={s.controlsLeft}>
              <div className={s.control}>
                <label className={s.label}>Sort by</label>
                <select
                  className={s.select}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortType)}
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
                  onChange={(e) => setItemsOnPage(+e.target.value)}
                >
                  <option value={16}>16</option>
                  <option value={32}>32</option>
                  <option value={64}>64</option>
                </select>
              </div>
            </div>

            <div className={s.search}>
              <label
                className={s.label}
                htmlFor="search-input"
              >
                Looking for something?
              </label>
              <input
                id="search-input"
                type="text"
                placeholder="Type here"
                className={s.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        <section className={s['tablets-page__list']}>
          {isLoading ?
            Array.from({ length: 8 }).map((_, i) => <ProductSkeleton key={i} />)
          : visibleTablets.length > 0 ?
            visibleTablets.map((tablet) => (
              <ProductCard
                key={tablet.id}
                product={tablet}
              />
            ))
          : <NoResults category="tablets" />}
        </section>
      </div>
    </div>
  );
};
