import { useEffect, useMemo, useState } from 'react';
import { getPhones } from '../../api/products';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import { sortByNewest, sortByBestPrice } from '../../utils/productFilters';
import { SortType } from '../../types/SortType';
import s from './PhonesPage.module.scss';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs.tsx';
import { ProductSkeleton } from '../../components/ProductSkelet/ProductSkelet.tsx';
import { NoResults } from '../../components/ui/NoResults/NoResults.tsx';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<SortType>('newest');
  const [itemsOnPage, setItemsOnPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const loadPhones = async () => {
      setIsLoading(true);
      try {
        const data = await getPhones();
        setPhones(data.map((phone) => ({ ...phone, category: 'phones' })));
      } finally {
        setTimeout(() => setIsLoading(false), 600);
      }
    };
    loadPhones();
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

  const filteredPhones = useMemo(() => {
    const query = debouncedQuery.toLowerCase().trim();
    return phones.filter((phone) => phone.name.toLowerCase().includes(query));
  }, [phones, debouncedQuery]);

  const sortedPhones = useMemo(() => {
    const toSort = [...filteredPhones];
    switch (sortBy) {
      case 'alphabetically':
        return toSort.sort((a, b) => a.name.localeCompare(b.name));
      case 'bestPrice':
        return sortByBestPrice(toSort);
      case 'newest':
      default:
        return sortByNewest(toSort);
    }
  }, [filteredPhones, sortBy]);

  const totalPages = Math.ceil(sortedPhones.length / itemsOnPage);

  const visiblePhones = useMemo(() => {
    const start = (currentPage - 1) * itemsOnPage;
    const end = start + itemsOnPage;

    return sortedPhones.slice(start, end);
  }, [sortedPhones, itemsOnPage, currentPage]);

  return (
    <div className={s['phones-page']}>
      <div className={s['phones-page__container']}>
        <Breadcrumbs />
        <h1 className={s.title}>Mobile phones</h1>

        {!isLoading && (
          <p className={s.modelsCount}>{filteredPhones.length} models</p>
        )}

        <section className={s['phones-page__controls']}>
          <div className={s.controls}>
            <div className={s.controlsLeft}>
              <div className={s.control}>
                <label className={s.label}>Sort by</label>
                <select
                  className={s.select}
                  value={sortBy}
                  onChange={(event) => {
                    setSortBy(event.target.value as SortType);
                    setCurrentPage(1);
                  }}
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
                  onChange={(event) => {
                    setItemsOnPage(+event.target.value);
                    setCurrentPage(1);
                  }}
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

        <section className={s['phones-page__list']}>
          {isLoading ?
            Array.from({ length: 8 }).map((_, i) => <ProductSkeleton key={i} />)
          : visiblePhones.length > 0 ?
            visiblePhones.map((phone) => (
              <ProductCard
                key={phone.id}
                product={phone}
              />
            ))
          : <NoResults category="phones" />}
        </section>

        {totalPages > 1 && (
          <section className={s['phones-page__pagination']}>
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
