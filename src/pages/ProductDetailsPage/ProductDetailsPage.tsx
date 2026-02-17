import './ProductDetailsPage.scss';
import { ProductCard } from '../../components/ui/Product/ProductCard/ProductCard.tsx';
import { BackButton } from '../../components/ui/Buttons/Back/BackButton.tsx';
import { useParams } from 'react-router-dom';
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

  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [loading, setLoading] = useState(true); // ← true одразу
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!category || !productId) return;

    const timer = setTimeout(() => {
      getProductDetails(category, productId)
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    }, 1000);

    return () => clearTimeout(timer);
  }, [category, productId]);

  if (loading)
    return (
      <div className="loader-wrapper">
        <Loader />
      </div>
    );
  if (error || !product) return <h1>Товар не знайдено</h1>;

  return (
    <div className="product-details-page">
      <Breadcrumbs />

      <BackButton />

      <div className="product-header">
        <h1 className="product-title">{product.name}</h1>
      </div>
      <ProductCard product={product} />
    </div>
  );
};
