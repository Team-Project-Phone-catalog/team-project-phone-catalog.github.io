import { useEffect, useMemo, useState } from 'react';
import { getAccessories } from '../../api/products';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import { sortByNewest, sortByBestPrice } from '../../utils/productFilters';
import { SortType } from '../../types/SortType';
import s from './AccessoriesPage.module.scss';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs.tsx';
import { ProductSkeleton } from '../../components/ProductSkelet/ProductSkelet.tsx';
import { NoResults } from '../../components/ui/NoResults/NoResults.tsx';

export const AccessoriesPage = () => {
  const [accessories, setAccessories] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<SortType>('newest');
  const [itemsOnPage, setItemsOnPage] = useState(16);
  const [isLoading, setIsLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounce для пошуку
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  useEffect(() => {
    const loadAccessories = async () => {
      setIsLoading(true);
      try {
        const data = await getAccessories();
        setAccessories(
          data.map((acc) => ({ ...acc, category: 'accessories' })),
        );
      } finally {
        setIsLoading(false);
      }
    };
    loadAccessories();
  }, []);

  const filteredAccessories = useMemo(() => {
    return accessories.filter((acc) =>
      acc.name.toLowerCase().includes(debouncedQuery.toLowerCase().trim()),
    );
  }, [accessories, debouncedQuery]);

  const sortedAccessories = useMemo(() => {
    const toSort = [...filteredAccessories];

    switch (sortBy) {
      case 'alphabetically':
        return toSort.sort((a, b) => a.name.localeCompare(b.name));
      case 'bestPrice':
        return sortByBestPrice(toSort);
      case 'newest':
      default:
        return sortByNewest(toSort);
    }
  }, [filteredAccessories, sortBy]);

  const visibleAccessories = useMemo(() => {
    return sortedAccessories.slice(0, itemsOnPage);
  }, [sortedAccessories, itemsOnPage]);

  return (
    <div className={s['accessories-page']}>
      <div className={s['accessories-page__container']}>
        <Breadcrumbs />
        <h1 className={s.title}>Accessories</h1>

        {!isLoading && (
          <p className={s.modelsCount}>{filteredAccessories.length} models</p>
        )}

        <section className={s['accessories-page__controls']}>
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
              <label className={s.label}>Looking for something?</label>
              <input
                type="text"
                placeholder="Type here"
                className={s.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        <section className={s['accessories-page__list']}>
          {isLoading ?
            Array.from({ length: itemsOnPage }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : visibleAccessories.length > 0 ?
            visibleAccessories.map((accessory) => (
              <ProductCard
                key={accessory.id}
                product={accessory}
              />
            ))
          : <NoResults category="accessories" />}
        </section>
      </div>
    </div>
  );
};
