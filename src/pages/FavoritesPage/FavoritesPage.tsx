import React, { useEffect, useState, useMemo } from 'react';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types/Product';
import { getAccessories, getPhones, getTablets } from '../../api/products';
import './FavoritesPage.scss';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs';
import { useAppContext } from '../../hooks/useAppContext';

export const FavoritesPage: React.FC = () => {
  const { favorites } = useAppContext();

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 🔥 Завантажуємо продукти тільки один раз
  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);

      try {
        const [phones, tablets, accessories] = await Promise.all([
          getPhones(),
          getTablets(),
          getAccessories(),
        ]);

        setAllProducts([...phones, ...tablets, ...accessories]);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  // 🔥 Просто фільтруємо (без нових API викликів)
  const favoriteProducts = useMemo(() => {
    return allProducts.filter((product) =>
      favorites.includes(String(product.id)),
    );
  }, [allProducts, favorites]);

  return (
    <div className="favorites-page">
      <div className="favorites-page__container">
        <Breadcrumbs />

        <div className="favorites-page__text">
          <h1 className="favorites-page__title">Favourites</h1>
          <div className="favorites-page__items-number">
            {favoriteProducts.length} items
          </div>
        </div>

        <div className="favorites-page__all-favorites">
          {favoriteProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {!isLoading && favoriteProducts.length === 0 && <p>No favorites yet</p>}
      </div>
    </div>
  );
};
