import './ProductPurchase.scss';
import { ProductActions } from '../../ProductActions/ProductActions.tsx';
import React from 'react';
import { ProductDetails } from '../../../../types/Product.ts';
import { useAppContext } from '../../../../hooks/useAppContext.ts';

type Props = {
  product: ProductDetails;
  priceRegular: number;
  priceDiscount: number;
};

export const ProductPurchase: React.FC<Props> = ({
  product,
  priceRegular,
  priceDiscount,
}) => {
  const { toggleCart, isInCart, toggleFavorite, isFavorite } = useAppContext();

  const hasDiscount = priceDiscount < priceRegular;
  const inCart = isInCart(product);
  const favorite = isFavorite(String(product.id));

  const handleToggleCart = () => {
    toggleCart(product);
  };

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
          handleToggleCart={() => handleToggleCart()}
          onToggleFavorite={() => toggleFavorite(String(product.id))}
          isInCart={inCart}
          isFavorite={favorite}
        />
      </div>
    </div>
  );
};
