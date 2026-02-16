import './ProductFeatures.scss';
import * as React from 'react';

interface Props {
  screen: string;
  capacity: string;
  ram: string;
  resolution?: string;
  showTopLine?: boolean;
}

export const ProductFeatures: React.FC<Props> = ({
  screen,
  capacity,
  ram,
  resolution,
  showTopLine = true,
}) => {
  return (
    <div
      className={`product-features ${!showTopLine ? 'product-features--no-line' : ''}`}
    >
      <p className="product-features__item">
        <span className="product-features__name">Screen</span>
        <span className="product-features__value">{screen}</span>
      </p>
      {resolution && (
        <p className="product-features__item">
          <span className="product-features__name">Resolution</span>
          <span className="product-features__value">{resolution}</span>
        </p>
      )}
      <p className="product-features__item">
        <span className="product-features__name">Capacity</span>
        <span className="product-features__value">{capacity}</span>
      </p>
      <p className="product-features__item">
        <span className="product-features__name">RAM</span>
        <span className="product-features__value">{ram}</span>
      </p>
    </div>
  );
};
