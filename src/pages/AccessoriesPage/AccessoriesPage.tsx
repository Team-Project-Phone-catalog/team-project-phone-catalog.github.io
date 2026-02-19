import { useEffect, useMemo, useState } from 'react';
import { getAccessories } from '../../api/products';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import { sortProducts } from '../../utils/productFilters';
import { SortType } from '../../types/SortType';
import s from './AccessoriesPage.module.scss';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs.tsx';
import { ProductSkeleton } from '../../components/ProductSkelet/ProductSkelet.tsx';
import { NoResults } from '../../components/ui/NoResults/NoResults.tsx';
import { Dropdown } from '../../components/ui/Dropdown/Dropdown';

export const AccessoriesPage = () => {
  const [accessories, setAccessories] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<SortType>('newest');
  const [itemsOnPage, setItemsOnPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const loadAccessories = async () => {
      setIsLoading(true);
      try {
        const data = await getAccessories();
        setAccessories(
          data.map((acc) => ({
            ...acc,
            category: 'accessories',
          })),
        );
      } finally {
        setTimeout(() => setIsLoading(false), 600);
      }
    };

    loadAccessories();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

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
  }, [searchQuery, debouncedQuery]);

  const filteredAccessories = useMemo(() => {
    const query = debouncedQuery.toLowerCase().trim();
    return accessories.filter((acc) => acc.name.toLowerCase().includes(query));
  }, [accessories, debouncedQuery]);

  const sortedAccessories = useMemo(() => {
    return sortProducts(filteredAccessories, sortBy);
  }, [filteredAccessories, sortBy]);

  const totalPages = Math.ceil(sortedAccessories.length / itemsOnPage);

  const visibleAccessories = useMemo(() => {
    const start = (currentPage - 1) * itemsOnPage;
    const end = start + itemsOnPage;

    return sortedAccessories.slice(start, end);
  }, [sortedAccessories, itemsOnPage, currentPage]);

  const sortOptions = [
    { label: 'Price low', value: 'priceLow' },
    { label: 'Price high', value: 'priceHigh' },
    { label: 'Newest', value: 'newest' },
    { label: 'Oldest', value: 'oldest' },
  ];

  const itemsOptions = [
    { label: '12', value: '12' },
    { label: '24', value: '24' },
    { label: '36', value: '36' },
    { label: '48', value: '48' },
  ];

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
                <Dropdown
                  options={sortOptions}
                  value={sortBy}
                  onChange={(value) => {
                    setSortBy(value as SortType);
                    setCurrentPage(1);
                  }}
                />
              </div>

              <div className={s.control}>
                <label className={s.label}>Items on page</label>
                <Dropdown
                  options={itemsOptions}
                  value={String(itemsOnPage)}
                  onChange={(value) => {
                    setItemsOnPage(+value);
                    setCurrentPage(1);
                  }}
                />
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
            Array.from({ length: 8 }).map((_, index) => (
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

        {totalPages > 1 && (
          <section className={s['accessories-page__pagination']}>
            <div className={s.pagination}>
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className={`${s.pageButton} ${s.arrow} ${s.arrowLeft}`}
              >
                <img
                  src="/img/icons/arrow-right.svg"
                  alt="Previous page"
                />
              </button>

              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;

                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`${s.pageButton} ${
                      currentPage === page ? s.active : ''
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className={`${s.pageButton} ${s.arrow}`}
              >
                <img
                  src="/img/icons/arrow-right.svg"
                  alt="Next page"
                />
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
