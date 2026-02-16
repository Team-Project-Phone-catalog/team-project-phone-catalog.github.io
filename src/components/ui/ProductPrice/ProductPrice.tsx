import './ProductPrice.scss';
import * as React from 'react';

interface Props {
  currentPrice: number;
  fullPrice: number;
}

export const ProductPrice: React.FC<Props> = ({ currentPrice, fullPrice }) => {
  return (
    <p className="product-price">
      <span className="product-price__current">${currentPrice}</span>
      <span className="product-price__full">${fullPrice}</span>
    </p>
  );
};
