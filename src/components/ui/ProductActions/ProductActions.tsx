import './ProductActions.scss';
import * as React from 'react';

interface Props {
  onAddToCart: () => void;
  onToggleFavorite: () => void;
  isFavorite?: boolean;
}

export const ProductActions: React.FC<Props> = ({
  onAddToCart,
  onToggleFavorite,
  isFavorite,
}) => {
  return (
    <div className="product-actions">
      <button
        type="button"
        className="product-actions__add-to-cart"
        onClick={onAddToCart}
      >
        Add to cart
      </button>

      <button
        type="button"
        className={`product-actions__favorites ${isFavorite ? 'product-actions__favorites--active' : ''}`}
        onClick={onToggleFavorite}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      ></button>
    </div>
  );
};
