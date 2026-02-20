import React, { useEffect, useState, useMemo } from 'react';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types/Product';
import { getAccessories, getPhones, getTablets } from '../../api/products';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs';
import { useAppContext } from '../../hooks/useAppContext';
import { Loader } from '../../components/ui/Loader/Loader';
import './FavoritesPage.scss';
import Heart from './Heart';

export const FavoritesPage: React.FC = () => {
  const { favorites } = useAppContext();
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const favoriteProducts = useMemo(() => {
    return allProducts.filter((product) =>
      favorites.includes(String(product.itemId)),
    );
  }, [allProducts, favorites]);

  // Якщо йде завантаження — рендеримо ТІЛЬКИ лоадер у спеціальній обгортці
  if (isLoading) {
    return (
      <div className="favorites-page__loader-wrapper">
        <Loader />
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <div className="favorites-page__container">
        <Breadcrumbs />

        <div className="favorites-page__text">
          <h1 className="favorites-page__title">Favourites</h1>
          <span className="favorites-page__items-number">
            {favoriteProducts.length} items
          </span>
        </div>

        {favoriteProducts.length > 0 ?
          <div className="favorites-page__all-favorites">
            {favoriteProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        : <div className="favorites-page__empty">
            <div className="favorites-page__heart">
              <Heart />
            </div>
            <h2 className="favorites-page__title">
              Your favorites list is empty
            </h2>
            <p className="favorites-page__items-number">
              Add some products to see them here!
            </p>
          </div>
        }
      </div>
    </div>
  );
};
