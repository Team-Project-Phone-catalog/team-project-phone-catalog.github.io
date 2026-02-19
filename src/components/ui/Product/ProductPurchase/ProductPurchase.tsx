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

  const stringId = String(product.id);
  const inCart = isInCart(product);
  const favorite = isFavorite(stringId);

  return (
    <div className="purchase">
      <div className="purchase-price">
        <span className="purchase-price__current">${priceDiscount}</span>
        {priceDiscount < priceRegular && (
          <span className="purchase-price__full">${priceRegular}</span>
        )}
      </div>
      <div className="purchase__buttons">
        <ProductActions
          handleToggleCart={() => toggleCart(product)}
          onToggleFavorite={() => toggleFavorite(product)}
          isInCart={inCart}
          isFavorite={favorite}
        />
      </div>
    </div>
  );
};
