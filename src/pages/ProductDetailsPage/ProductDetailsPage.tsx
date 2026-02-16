import './ProductDetailsPage.scss';
import ProductCard from '../../components/ui/Product/ProductCard/ProductCard.tsx';
import { BackButton } from '../../components/ui/Buttons/Back/BackButton.tsx';

export const ProductDetailsPage = () => {
  return (
    <div className="product-details-page">
      <BackButton />

      <div className="product-header">
        <h1 className="product-title">
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </h1>
      </div>
      <ProductCard />
    </div>
  );
};
