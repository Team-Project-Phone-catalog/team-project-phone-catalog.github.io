import './ProductActions.scss';
import * as React from 'react';
import { notify } from '../../../utils/notifications';

interface Props {
  handleToggleCart: (e: React.MouseEvent) => void;
  onToggleFavorite: (e: React.MouseEvent) => void;
  isFavorite?: boolean;
  isInCart?: boolean;
  productName?: string;
}

export const ProductActions: React.FC<Props> = ({
  handleToggleCart,
  onToggleFavorite,
  isFavorite,
  isInCart,
  productName = 'Product',
}) => {
  /*const handleAddToCart = (e: React.MouseEvent) => {
    if (isInCart) {
      notify.error(`${productName} is already in the cart`);
      return;
    }
    handleToggleCart(e);
    notify.addedToCart(productName);
  };*/

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
        onClick={handleToggleCart}
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
