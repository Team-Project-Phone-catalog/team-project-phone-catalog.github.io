import './ProductPurchase.scss';
import { ProductActions } from '../../ProductActions/ProductActions.tsx';
import React from 'react';
import { ProductDetails } from '../../../../types/Product.ts';
import { useAppContext } from '../../../../hooks/useAppContext.ts';

type Props = {
  product: ProductDetails;
  priceRegular: number;
  priceDiscount: number;
  isFavorite?: boolean;
  isInCart?: boolean;
  onAddToCart?: (e: React.MouseEvent) => void;
  onToggleFavorite?: (e: React.MouseEvent) => void;
};

export const ProductPurchase: React.FC<Props> = ({
  product,
  priceRegular,
  priceDiscount,
}) => {
  const {
    addToCart,
    isInCart: checkInCart,
    toggleFavorite,
    isFavorite: checkFavorite,
  } = useAppContext();

  const hasDiscount = priceDiscount < priceRegular;
  const inCart = checkInCart(product);
  const favorite = checkFavorite(String(product.id));

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
          productName={product.name}
          onAddToCart={() => addToCart(product)}
          onToggleFavorite={() => toggleFavorite(String(product.id))}
          isInCart={inCart}
          isFavorite={favorite}
        />
      </div>
    </div>
  );
};
