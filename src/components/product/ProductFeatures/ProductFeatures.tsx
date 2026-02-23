import './ProductFeatures.scss';
import * as React from 'react';

interface Props {
  screen: string;
  capacity: string;
  ram: string;
  resolution?: string;
  showTopLine?: boolean;
}

const firstTwoWords = (str: string) => str.split(' ').slice(0, 2).join(' ');

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
        <span className="product-features__value">{firstTwoWords(screen)}</span>
      </p>
      {resolution && (
        <p className="product-features__item">
          <span className="product-features__name">Resolution</span>
          <span className="product-features__value">
            {firstTwoWords(resolution)}
          </span>
        </p>
      )}
      <p className="product-features__item">
        <span className="product-features__name">Capacity</span>
        <span className="product-features__value">
          {firstTwoWords(capacity)}
        </span>
      </p>
      <p className="product-features__item">
        <span className="product-features__name">RAM</span>
        <span className="product-features__value">{firstTwoWords(ram)}</span>
      </p>
    </div>
  );
};
