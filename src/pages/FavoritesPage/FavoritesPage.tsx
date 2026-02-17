import React, { useEffect, useState } from 'react';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types/Product';
import { getAccessories, getPhones, getTablets } from '../../api/products';
import './FavoritesPage.scss';

export const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [, setIsLoading] = useState(true);

  const loadFavorites = async () => {
    setIsLoading(true);
    try {
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
        favIds.includes('' + product.id),
      );

      setFavorites(filtered);
    } catch (error) {
      console.error('Failed to load favorites:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <>
      <div className="favorites-page">
        <div className="favorites-page__container">
          <div className="favorites-page__history">Favourites</div>
          <div className="favorites-page__text">
            <h1 className="favorites-page__title">Favourites</h1>
            <div className="favorites-page__items-number">
              {favorites.length} items
            </div>
          </div>
          <div className="favorites-page__all-favorites">
            {favorites.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onFavoriteChange={loadFavorites}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
