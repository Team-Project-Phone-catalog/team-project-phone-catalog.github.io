import './ProductActions.scss';
import * as React from 'react';
import { notify } from '../../../utils/notifications';

interface Props {
  productName: string;
  onAddToCart: (e: React.MouseEvent) => void;
  onToggleFavorite: (e: React.MouseEvent) => void;
  isFavorite?: boolean;
  isInCart?: boolean;
}

export const ProductActions: React.FC<Props> = ({
  productName,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
  isInCart,
}) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    if (isInCart) {
      notify.error(`${productName} is already in the cart`);
      return;
    }
    onAddToCart(e);
    notify.addedToCart(productName);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    onToggleFavorite(e);
    if (!isFavorite) {
      notify.addedToFavorites(productName);
    } else {
      notify.removedFromFavorites(productName);
    }
  };

  return (
    <div className="product-actions">
      <button
        type="button"
        className={`product-actions__add-to-cart ${isInCart ? 'in-cart' : ''}`}
        onClick={handleAddToCart}
      >
        {isInCart ? 'Added' : 'Add to cart'}
      </button>

      <button
        type="button"
        className={`product-actions__favorites ${isFavorite ? 'product-actions__favorites--active' : ''}`}
        onClick={handleToggleFavorite}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      ></button>
    </div>
  );
};
