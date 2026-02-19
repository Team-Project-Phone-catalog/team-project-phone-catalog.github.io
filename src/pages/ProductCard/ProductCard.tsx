import './ProductCard.scss';
import { ProductPrice } from '../../components/ui/ProductPrice/ProductPrice';
import { ProductFeatures } from '../../components/ui/ProductFeatures/ProductFeatures';
import { ProductActions } from '../../components/ui/ProductActions/ProductActions';
import { Product, ProductDetails } from '../../types/Product';
import React from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

interface Props {
  product?: Product | ProductDetails;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart, isInCart, toggleFavorite, isFavorite } = useAppContext();

  if (!product) return null;

  /* ===================== CART ===================== */

  const handleAddToCart = () => {
    addToCart(product as Product);
  };

  /* ===================== FAVORITES ===================== */

  const handleToggleFavorite = () => {
    toggleFavorite(String(product.id));
  };

  /* ===================== PRICES ===================== */

  const currentPrice =
    product.priceDiscount ?? ('price' in product ? product.price : undefined);

  const fullPrice =
    product.priceRegular ??
    ('fullPrice' in product ? product.fullPrice : undefined);

  /* ===================== IMAGE ===================== */

  let imagePath: string | null = null;

  if ('images' in product && product.images) {
    if (Array.isArray(product.images)) {
      imagePath = product.images[0];
    } else {
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

  /* ===================== ROUTING ===================== */

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

  /* ===================== RENDER ===================== */

  return (
    <div className="card">
      <div className="card__container">
        <Link
          to={linkTo}
          className="card__link"
        >
          <div className="card__img-container">
            {imageUrl && (
              <motion.img
                className="card__image"
                src={imageUrl}
                alt={product.name}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.3 }}
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
            handleToggleFavorite();
          }}
          isFavorite={isFavorite(String(product.id))}
          isInCart={isInCart(product as Product)}
        />
      </div>
    </div>
  );
};
