import './ProductActions.scss';
import * as React from 'react';

interface Props {
  onAddToCart: (e: React.MouseEvent) => void;
  onToggleFavorite: (e: React.MouseEvent) => void;
  isFavorite?: boolean;
  isInCart?: boolean;
}

export const ProductActions: React.FC<Props> = ({
  onAddToCart,
  onToggleFavorite,
  isFavorite,
  isInCart,
}) => {
  return (
    <div className="product-actions">
      <button
        type="button"
        className={`product-actions__add-to-cart ${isInCart ? 'in-cart' : ''}`}
        onClick={onAddToCart}
        disabled={isInCart}
      >
        {isInCart ? 'Added' : 'Add to cart'}
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
