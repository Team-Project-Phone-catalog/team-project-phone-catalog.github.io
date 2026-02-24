import './ProductActions.scss';
import * as React from 'react';

interface Props {
  handleToggleCart: (e: React.MouseEvent) => void;
  onToggleFavorite: (e: React.MouseEvent) => void;
  isFavorite?: boolean;
  isInCart?: boolean;
}

export const ProductActions: React.FC<Props> = ({
  handleToggleCart,
  onToggleFavorite,
  isFavorite,
  isInCart,
}) => {
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(e);
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
