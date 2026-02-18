import { useEffect, useMemo, useState } from 'react';
import { getPhones } from '../../api/products';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import { sortByNewest, sortByBestPrice } from '../../utils/productFilters';
import { SortType } from '../../types/SortType';
import s from './PhonesPage.module.scss';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs.tsx';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<SortType>('newest');
  const [itemsOnPage, setItemsOnPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadPhones = async () => {
      const data = await getPhones();
      setPhones(data.map((phone) => ({ ...phone, category: 'phones' })));
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
        <p className={s.modelsCount}>{phones.length} models</p>

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
              <label className={s.label}>Looking for something?</label>

              <input
                type="text"
                placeholder="Type here"
                className={s.searchInput}
              />
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
