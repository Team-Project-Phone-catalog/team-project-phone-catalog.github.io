import './ProductDetail.scss';
import { ProductFeatures } from '../../ProductFeatures/ProductFeatures.tsx';

export const ProductDetail = () => {
  return (
    <div className="ProductDetail">
      <div className="ProductFeatures">
        <ProductFeatures
          screen='6.1" OLED'
          resolution="2532x1170"
          capacity="128 GB"
          ram="6 GB"
          showTopLine={false}
        />
      </div>

      <div className="ProductDetail__about">
        <h3 className="ProductDetail__about-title">About</h3>

        <div className="ProductDetail__about-main">
          <h4 className="ProductDetail__about-main-title">
            And then there was
          </h4>

          <span className="ProductDetail__about-main-second">
            A transformative triple‑camera system that adds tons of capability
            without complexity. An unprecedented leap in battery life. And a
            mind‑blowing chip that doubles down on machine learning and pushes
            the boundaries of what a smartphone can do. Welcome to the first
            iPhone powerful enough to be called Pro.
          </span>
        </div>
      </div>
    </div>
  );
};
