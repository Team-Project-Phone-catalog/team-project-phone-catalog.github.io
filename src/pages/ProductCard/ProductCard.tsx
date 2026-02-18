import './ProductCard.scss';
import { ProductPrice } from '../../components/ui/ProductPrice/ProductPrice.tsx';
import { ProductFeatures } from '../../components/ui/ProductFeatures/ProductFeatures.tsx';
import { ProductActions } from '../../components/ui/ProductActions/ProductActions.tsx';
import { Product, ProductDetails } from '../../types/Product.ts';
import React, { useState } from 'react';
import { useAppContext } from '../../hooks/useAppContext.ts';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

interface Props {
  product?: Product | ProductDetails;
  onFavoriteChange?: () => void;
}

export const ProductCard: React.FC<Props> = ({ product, onFavoriteChange }) => {
  const { addToCart, isInCart } = useAppContext();

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product as Product);
  };

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

  let imagePath = null;

  if ('images' in product && product.images) {
    if (Array.isArray(product.images)) {
      imagePath = product.images[0];
    } else if (typeof product.images === 'string') {
      try {
        const parsed = JSON.parse(product.images);
        imagePath = Array.isArray(parsed) ? parsed[0] : product.images;
      } catch {
        imagePath = product.images;
      }
    }
  } else if ('image' in product && product.image) {
    imagePath = product.image;
  }

  const imageUrl = imagePath ? `/${imagePath}` : null;

  const productId = 'itemId' in product ? product.itemId : product.id;
  const idString = String(productId).toLowerCase();

  let category = 'phones';

  if (idString.includes('ipad')) {
    category = 'tablets';
  } else if (idString.includes('watch')) {
    category = 'accessories';
  } else if ('category' in product && product.category) {
    category = product.category as string;
  }

  const linkTo = `/${category}/${productId}`;

  const toggleFavorite = () => {
    const favorites: string[] = JSON.parse(
      localStorage.getItem('favorites') || '[]',
    );

    let updatedFavorites: string[];

    if (favorites.includes(String(product.id))) {
      updatedFavorites = favorites.filter((id) => id !== String(product.id));
    } else {
      updatedFavorites = [...favorites, String(product.id)];
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
    onFavoriteChange?.();
  };

  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="card__container">
        <Link
          to={linkTo}
          className="card__link"
        >
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
        </Link>

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
          onAddToCart={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleAddToCart();
          }}
          onToggleFavorite={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite();
          }}
          isFavorite={isFavorite}
          isInCart={isInCart(product as Product)}
        />
      </div>
    </motion.div>
  );
};
