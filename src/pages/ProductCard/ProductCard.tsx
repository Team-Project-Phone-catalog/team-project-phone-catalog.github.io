import './ProductCard.scss';
import { ProductPrice } from '../../components/ui/ProductPrice/ProductPrice.tsx';
import { ProductFeatures } from '../../components/ui/ProductFeatures/ProductFeatures.tsx';
import { ProductActions } from '../../components/ui/ProductActions/ProductActions.tsx';
import { Product } from '../../types/Product.ts';
import React, { useState } from 'react';

interface Props {
  product?: Product;
  onFavoriteChange?: () => void;
}

export const ProductCard: React.FC<Props> = ({ product, onFavoriteChange }) => {
  const productData = product || {
    id: '1',
    name: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
    fullPrice: 1199,
    price: 999,
    screen: '6.1" OLED',
    capacity: '128 GB',
    ram: '6 GB',
    image: '../../img/phones/apple-iphone-14-pro/spaceblack/00.webp',
  };

  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites: string[] = JSON.parse(
      localStorage.getItem('favorites') || '[]',
    );
    return favorites.includes(String(productData.id));
  });

  const toggleFavorite = () => {
    const favorites: string[] = JSON.parse(
      localStorage.getItem('favorites') || '[]',
    );
    let updatedFavorites: string[];

    if (favorites.includes(String(productData.id))) {
      updatedFavorites = favorites.filter(
        (id) => id !== String(productData.id),
      );
    } else {
      updatedFavorites = [...favorites, String(productData.id)];
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);

    onFavoriteChange?.();
  };

  return (
    <div className="card">
      <div className="card__img-container">
        <img
          className="card__image"
          src={
            productData.image ||
            '../../img/phones/apple-iphone-14-pro/spaceblack/00.webp'
          }
          alt={productData.name}
          width="208px"
          height="196px"
        />
      </div>

      <h2 className="card__title">{productData.name}</h2>

      <ProductPrice
        currentPrice={productData.price}
        fullPrice={productData.fullPrice}
      />

      <ProductFeatures
        screen={productData.screen}
        capacity={productData.capacity}
        ram={productData.ram}
      />

      <ProductActions
        onAddToCart={() => console.log('Added to cart')}
        onToggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />
    </div>
  );
};
