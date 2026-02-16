import './ProductCard.scss';
import { ProductPrice } from '../../components/ui/ProductPrice/ProductPrice.tsx';
import { ProductFeatures } from '../../components/ui/ProductFeatures/ProductFeatures.tsx';
import { ProductActions } from '../../components/ui/ProductActions/ProductActions.tsx';
import { Product, ProductDetails } from '../../types/Product.ts';
import * as React from 'react';

interface Props {
  product?: Product | ProductDetails;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  if (!product) {
    return null;
  }

  const currentPrice =
    'priceDiscount' in product ? product.priceDiscount : product.price;

  const fullPrice =
    'priceRegular' in product ? product.priceRegular : product.fullPrice;

  const imagePath = 'images' in product ? product.images[0] : product.image;
  const imageUrl = imagePath ? `/${imagePath}` : null;

  return (
    <div className="card">
      <div className="card__img-container">
        {imageUrl && (
          <img
            className="card__image"
            src={imageUrl}
            alt={product.name}
            width="208"
            height="196"
          />
        )}
      </div>

      <h2 className="card__title">{product.name}</h2>

      <ProductPrice
        currentPrice={currentPrice}
        fullPrice={fullPrice}
      />

      <ProductFeatures
        screen={product.screen}
        capacity={product.capacity}
        ram={product.ram}
      />

      <ProductActions
        onAddToCart={() => console.log('Added')}
        onToggleFavorite={() => console.log('Fav')}
      />
    </div>
  );
};
