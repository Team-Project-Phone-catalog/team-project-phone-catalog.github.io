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

  const productId = 'itemId' in product ? product.itemId : product.id;
  const stringId = String(productId);

  const handleAddToCart = () => {
    addToCart(product as Product);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(stringId);
  };

  const currentPrice =
    product.priceDiscount ?? ('price' in product ? product.price : 0);
  const fullPrice =
    product.priceRegular ?? ('fullPrice' in product ? product.fullPrice : 0);

  let imagePath: string | null = null;

  if ('images' in product && product.images) {
    imagePath =
      Array.isArray(product.images) ? product.images[0] : product.images;
  } else if ('image' in product && product.image) {
    imagePath = product.image;
  }

  const imageUrl = imagePath ? `/${imagePath}` : '';

  const idString = stringId.toLowerCase();
  let category = 'phones';

  if (idString.includes('ipad')) {
    category = 'tablets';
  } else if (idString.includes('watch')) {
    category = 'accessories';
  } else if ('category' in product && product.category) {
    category = product.category;
  }

  const linkTo = `/${category}/${productId}`;

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
          productName={product.name}
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
          isFavorite={isFavorite(stringId)}
          isInCart={isInCart(product as Product)}
        />
      </div>
    </div>
  );
};
