import './ProductPurchase.scss';
import { ProductActions } from '../../ProductActions/ProductActions.tsx';
import React from 'react';

type Props = {
  productName: string;
  priceRegular: number;
  priceDiscount: number;
  isFavorite?: boolean;
  isInCart?: boolean;
  onAddToCart: (e: React.MouseEvent) => void;
  onToggleFavorite: (e: React.MouseEvent) => void;
};

export const ProductPurchase: React.FC<Props> = ({
  productName,
  priceRegular,
  priceDiscount,
  isFavorite,
  isInCart,
  onAddToCart,
  onToggleFavorite,
}) => {
  const hasDiscount = priceDiscount < priceRegular;

  return (
    <div className="purchase">
      <div className="purchase-price">
        <span className="purchase-price__current">${priceDiscount}</span>
        {hasDiscount && (
          <span className="purchase-price__full">${priceRegular}</span>
        )}
      </div>

      <div className="purchase__buttons">
        <ProductActions
          productName={productName}
          onAddToCart={onAddToCart}
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
          isInCart={isInCart}
        />
      </div>
    </div>
  );
};
