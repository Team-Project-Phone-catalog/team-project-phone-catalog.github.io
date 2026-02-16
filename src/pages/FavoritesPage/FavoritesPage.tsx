import React, { useEffect, useState } from 'react';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types/Product';
import { getAccessories, getPhones, getTablets } from '../../api/products';
import './FavoritesPage.scss';

export const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const favIds: string[] = JSON.parse(
        localStorage.getItem('favorites') || '[]',
      );

      const [phones, tablets, accessories] = await Promise.all([
        getPhones(),
        getTablets(),
        getAccessories(),
      ]);

      const allProducts = [...phones, ...tablets, ...accessories];

      const filtered = allProducts.filter((product) =>
        favIds.includes(product.itemId),
      );

      setFavorites(filtered);
    };
    loadFavorites();
  }, []);

  return (
    <>
      <div className="favorites-page">
        <div className="favorites-page__container">
          <div className="favorites-page__text">
            <div className="favorites-page__title">Favourites</div>
            <div className="favorites-page__items-number">
              {favorites.length} items
            </div>
          </div>
        </div>
        <div className="favorites-page__all-favorites">
          {favorites.map((product) => (
            <ProductCard
              key={product.itemId}
              product={product}
            />
          ))}
        </div>
      </div>
    </>
  );
};
