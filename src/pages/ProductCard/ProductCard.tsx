import './ProductCard.scss';
import { ProductPrice } from '../../components/ui/ProductPrice/ProductPrice.tsx';
import { ProductFeatures } from '../../components/ui/ProductFeatures/ProductFeatures.tsx';
import { ProductActions } from '../../components/ui/ProductActions/ProductActions.tsx';
import { Product, ProductDetails } from '../../types/Product.ts';
import React, { useState } from 'react';

interface Props {
  product?: Product | ProductDetails;
  onFavoriteChange?: () => void;
}

export const ProductCard: React.FC<Props> = ({ product, onFavoriteChange }) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    if (!product) return false;
    const favorites: string[] = JSON.parse(
      localStorage.getItem('favorites') || '[]',
    );
    return favorites.includes(String(product.id));
  });

  if (!product) {
    return null;
  }

  const currentPrice =
    product.priceDiscount ?? ('price' in product ? product.price : undefined);
  const fullPrice =
    product.priceRegular ??
    ('fullPrice' in product ? product.fullPrice : undefined);
  const imagePath = 'images' in product ? product.images[0] : product.image;
  const imageUrl = imagePath ? `/${imagePath}` : null;

  const toggleFavorite = () => {
    const favorites: string[] = JSON.parse(
      localStorage.getItem('favorites') || '[]',
    );
    let updatedFavorites: string[];

    if (favorites.includes(String(product.id))) {
      updatedFavorites = favorites.filter((id) => id !== String(product.id));
    } else {
      updatedFavorites = [...favorites, String(product.id)];
      console.log('added');
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
    onFavoriteChange?.();
  };

  return (
    <div className="card">
      <div className="card__container">
        <div className="card__img-container">
          {imageUrl && (
            <img
              className="card__image"
              src={imageUrl}
              alt={product.name}
            />
          )}
        </div>
        <div className="card__title-wrapper">
          <h2 className="card__title">{product.name}</h2>
        </div>
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
          onAddToCart={() => console.log('Added to cart')}
          onToggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
        />
      </div>
    </div>
  );
};
