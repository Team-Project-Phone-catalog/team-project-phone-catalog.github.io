import { Link, useLocation, useParams } from 'react-router-dom';
import s from './Breadcrumbs.module.scss';

export const Breadcrumbs = () => {
  const location = useLocation();
  const { productId } = useParams<{ productId: string }>();

  const pathParts = location.pathname.split('/').filter(Boolean);

  if (pathParts.length === 0) return null; // Home page — нічого не показуємо

  const categoryName = pathParts[0]; // 'phones' | 'tablets' | 'accessories'

  const formatCategory = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const formatProductName = (id: string) => {
    return id
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav className={s.breadcrumbs}>
      <Link
        to="/"
        className={s.breadcrumbs__home}
      >
        <img
          src="/img/icons/Home.svg"
          alt="Home"
        />
      </Link>

      <span className={s.breadcrumbs__separator}>&gt;</span>

      {productId ?
        <Link
          to={`/${categoryName}`}
          className={s.breadcrumbs__link}
        >
          {formatCategory(categoryName)}
        </Link>
      : <span className={s.breadcrumbs__current}>
          {formatCategory(categoryName)}
        </span>
      }

      {productId && (
        <>
          <span className={s.breadcrumbs__separator}>&gt;</span>
          <span className={s.breadcrumbs__current}>
            {formatProductName(productId)}
          </span>
        </>
      )}
    </nav>
  );
};
