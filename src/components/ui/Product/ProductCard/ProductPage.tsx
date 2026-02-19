import './ProductPage.scss';
import { ProductGallery } from '../ProductGallery/ProductGallery.tsx';
import { ProductOptions } from '../ProductOptions/ProductOptions.tsx';
import { ProductPurchase } from '../ProductPurchase/ProductPurchase.tsx';
import { ProductDetail } from '../ProductDetail/ProductDetail.tsx';
import { TechSpecs } from '../TechSpecs/TechSpecs.tsx';
import { RelatedProducts } from '../../RelatedProducts/RelatedProducts.tsx';
import { ProductDetails } from '../../../../types/Product.ts';
import React from 'react';
import { ProductFeatures } from '../../ProductFeatures/ProductFeatures.tsx';
import { useLocation } from 'react-router-dom';
import { ScrollToTop } from '../../../ScrollToTop/ScrollToTop.tsx';

type Props = {
  product: ProductDetails;
  onCapacityChange: (newItemId: string) => void;
  onAddToCart: (product: ProductDetails) => void;
  onToggleFavorite: (product: ProductDetails) => void;
  isFavorite: boolean;
  isInCart: boolean;
};

export const ProductPage: React.FC<Props> = ({
  product,
  onCapacityChange,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
  isInCart,
}) => {
  const location = useLocation();
  const categoryFromUrl = location.pathname.split('/')[1];

  return (
    <div className="product-card">
      <ScrollToTop />
      <div className="product-card__gallery">
        <ProductGallery
          images={product.images}
          name={product.name}
        />
      </div>

      <div className="product-card__sidebar">
        <div className="product-card__options">
          <ProductOptions
            itemId={product.id}
            namespaceId={product.namespaceId}
            colorsAvailable={product.colorsAvailable}
            currentColor={product.color}
            capacityAvailable={product.capacityAvailable}
            currentCapacity={product.capacity}
            onCapacityChange={onCapacityChange}
          />
          <ProductPurchase
            productName={product.name}
            priceDiscount={product.priceDiscount}
            priceRegular={product.priceRegular}
            onAddToCart={(e) => {
              e.preventDefault();
              onAddToCart(product);
            }}
            onToggleFavorite={(e) => {
              e.preventDefault();
              onToggleFavorite(product);
            }}
            isFavorite={isFavorite}
            isInCart={isInCart}
          />
        </div>

        <div className="product-card__about">
          <ProductFeatures
            screen={product.screen}
            resolution={product.resolution}
            capacity={product.capacity}
            ram={product.ram}
            showTopLine={false}
          />
        </div>
      </div>

      <div className="product-card__description">
        <ProductDetail description={product.description} />
      </div>

      <div className="product-card__tech-specs">
        <TechSpecs
          screen={product.screen}
          resolution={product.resolution}
          processor={product.processor}
          ram={product.ram}
          capacity={product.capacity}
          camera={product.camera}
          zoom={product.zoom}
          cell={product.cell}
        />
      </div>

      <div className="product-card__related">
        <RelatedProducts
          category={categoryFromUrl}
          currentProductId={product.id}
        />
      </div>
    </div>
  );
};
