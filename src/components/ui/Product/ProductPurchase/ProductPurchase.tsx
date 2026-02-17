import './ProductPurchase.scss';
import { ProductActions } from '../../ProductActions/ProductActions.tsx';
import React from "react";

type Props ={
    priceRegular: number;
    priceDiscount: number;
}
export const ProductPurchase: React.FC<Props> = ( {priceRegular, priceDiscount}) => {
  return (
    <div className="purchase">
      <div className="purchase-price">
        <span className="purchase-price__current">${priceDiscount}</span>
        <span className="purchase-price__full">${priceRegular}</span>
      </div>

      <div className="purchase__buttons">
        <ProductActions
          onAddToCart={() => console.log('Added to cart')}
          onToggleFavorite={() => console.log('Toggled favorite')}
        />
      </div>
    </div>
  );
};
