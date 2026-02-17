import './ProductDetail.scss';
import { ProductFeatures } from '../../ProductFeatures/ProductFeatures.tsx';
import { DescriptionSection } from '../../../../types/Product.ts';
import React from 'react';

type Props = {
  description: DescriptionSection[];
  screen: string;
  resolution: string;
  capacity: string;
  ram: string;
};

export const ProductDetail: React.FC<Props> = ({
  description,
  screen,
  resolution,
  capacity,
  ram,
}) => {
  return (
    <div className="ProductDetail">
      <div className="ProductFeatures">
        <ProductFeatures
          screen={screen}
          resolution={resolution}
          capacity={capacity}
          ram={ram}
          showTopLine={false}
        />
      </div>

      <div className="ProductDetail__about">
        <h3 className="ProductDetail__about-title">About</h3>

        <div className="ProductDetail__about-main">
          {description.map((section, index) => (
            <div
              key={index}
              className="ProductDetail__about-main"
            >
              <h4 className="ProductDetail__about-main-title">
                {section.title}
              </h4>

              {section.text.map((paragraph, i) => (
                <span
                  key={i}
                  className="ProductDetail__about-main-second"
                >
                  {paragraph}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
