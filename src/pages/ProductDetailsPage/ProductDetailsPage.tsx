import './ProductDetailsPage.scss';
import { ProductPage } from '../../components/ui/Product/ProductCard/ProductPage.tsx';
import { BackButton } from '../../components/ui/Buttons/Back/BackButton.tsx';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductDetails } from '../../types/Product.ts';
import { getProductDetails } from '../../api/products.ts';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs.tsx';
import { Loader } from '../../components/ui/Loader/Loader.tsx';

export const ProductDetailsPage = () => {
  const { category, productId } = useParams<{
    category: string;
    productId: string;
  }>();

  const navigate = useNavigate();
  const location = useLocation();

  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchProductData = (idToFetch: string, isBackgroundUpdate = false) => {
    if (!category) return;

    if (!isBackgroundUpdate) {
      setLoading(true);
    }

    setError(false);

    getProductDetails(category, idToFetch)
      .then((data) => {
        setProduct(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!productId) return;

    let isBackgroundUpdate = false;

    if (product) {
      const formattedCurrentColor = product.color
        .toLowerCase()
        .replace(/\s+/g, '-');
      if (productId.includes(formattedCurrentColor)) {
        isBackgroundUpdate = true;
      }
    }

    const timer = setTimeout(() => {
      fetchProductData(productId, isBackgroundUpdate);
    }, 1000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, productId]);

  const handleCapacityUpdate = (newItemId: string) => {
    if (!category) return;

    const newParams = new URLSearchParams(location.search);

    const capacityMatch = newItemId.match(/-(\d+(?:gb|tb))(?:-|$)/i);
    if (capacityMatch) {
      newParams.set('capacity', capacityMatch[1].toUpperCase());
    }

    navigate({
      pathname: `/${category}/${newItemId}`,
      search: newParams.toString(),
    });
  };

  if (loading) {
    return (
      <div className="loader-wrapper">
        <Loader />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-details-page">
        <div className="product-not-found">
          <Breadcrumbs />
          <div className="product-not-found__content">
            <h1 className="product-not-found__title">
              Unfortunately, the product is unknown.
            </h1>
            <p className="product-not-found__text">
              We couldn&apos;t find the product you&apos;re looking for. It may
              have been removed or the link is outdated.
            </p>
            <button
              className="product-not-found__button"
              onClick={() => navigate(-1)}
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-details-page">
      <Breadcrumbs />
      <BackButton />

      <div className="product-header">
        <h1 className="product-title">{product.name}</h1>
      </div>

      <ProductPage
        key={product.color}
        product={product}
        onCapacityChange={handleCapacityUpdate}
      />
    </div>
  );
};
