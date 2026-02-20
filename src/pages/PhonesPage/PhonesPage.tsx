import { useEffect, useMemo, useState } from 'react';
import { getPhones } from '../../api/products';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import { sortProducts } from '../../utils/productFilters';
import { SortType } from '../../types/SortType';
import s from './PhonesPage.module.scss';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs.tsx';
import { ProductSkeleton } from '../../components/ProductSkelet/ProductSkelet.tsx';
import { NoResults } from '../../components/ui/NoResults/NoResults.tsx';
import { Dropdown } from '../../components/ui/Dropdown/Dropdown';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<SortType>('newest');
  const [itemsOnPage, setItemsOnPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

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

  const sortedPhones = useMemo(() => {
    return sortProducts(phones, sortBy);
  }, [phones, sortBy]);

  const totalPages = Math.ceil(sortedPhones.length / itemsOnPage);

  const visiblePhones = useMemo(() => {
    const start = (currentPage - 1) * itemsOnPage;
    const end = start + itemsOnPage;

    return sortedPhones.slice(start, end);
  }, [sortedPhones, itemsOnPage, currentPage]);

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
    <div className={s['phones-page']}>
      <div className={s['phones-page__container']}>
        <Breadcrumbs />
        <h1 className={s.title}>Mobile phones</h1>

        {!isLoading && <p className={s.modelsCount}>{phones.length} models</p>}

        <section className={s['phones-page__controls']}>
          <div className={s.controls}>
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
                    className={`${s.pageButton} ${currentPage === page ? s.active : ''}`}
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
