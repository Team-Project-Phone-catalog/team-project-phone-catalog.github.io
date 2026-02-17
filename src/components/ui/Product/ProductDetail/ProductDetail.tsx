import './ProductDetail.scss';
import { DescriptionSection } from '../../../../types/Product.ts';
import React from 'react';

type Props = {
  description: DescriptionSection[];
};

export const ProductDetail: React.FC<Props> = ({ description }) => {
  return (
    <div className="ProductDetail">
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
