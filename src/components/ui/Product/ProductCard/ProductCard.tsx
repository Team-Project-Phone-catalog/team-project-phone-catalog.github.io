import './ProductCard.scss';
import { ProductGallery } from '../ProductGallery/ProductGallery.tsx';
import { ProductOptions } from '../ProductOptions/ProductOptions.tsx';
import { ProductPurchase } from '../ProductPurchase/ProductPurchase.tsx';
import { ProductDetail } from '../ProductDetail/ProductDetail.tsx';
import { TechSpecs } from '../TechSpecs/TechSpecs.tsx';
import { RelatedProducts } from '../../RelatedProducts/RelatedProducts.tsx';

export const ProductCard = () => {
  return (
    <div className="product-card">
      <ProductGallery />
      <ProductOptions />
      <ProductPurchase />
      <ProductDetail />
      <TechSpecs />
      <RelatedProducts />
    </div>
  );
};
