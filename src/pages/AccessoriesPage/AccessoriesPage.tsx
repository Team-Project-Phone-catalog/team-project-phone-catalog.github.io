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
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

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

  const sortedAccessories = useMemo(() => {
    const toSort = [...accessories];
    switch (sortBy) {
      case 'alphabetically':
        return toSort.sort((a, b) => a.name.localeCompare(b.name));
      case 'bestPrice':
        return sortByBestPrice(toSort);
      case 'newest':
      default:
        return sortByNewest(toSort);
    }
  }, [accessories, sortBy]);

  const totalPages = Math.ceil(sortedAccessories.length / itemsOnPage);

  const visibleAccessories = useMemo(() => {
    const start = (currentPage - 1) * itemsOnPage;
    const end = start + itemsOnPage;
    return sortedAccessories.slice(start, end);
  }, [sortedAccessories, itemsOnPage, currentPage]);

  return (
    <div className={s['accessories-page']}>
      <div className={s['accessories-page__container']}>
        <Breadcrumbs />
        <h1 className={s.title}>Accessories</h1>

        {!isLoading && (
          <p className={s.modelsCount}>{accessories.length} models</p>
        )}

        <section className={s['accessories-page__controls']}>
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
                  alt="Next"
                />
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
