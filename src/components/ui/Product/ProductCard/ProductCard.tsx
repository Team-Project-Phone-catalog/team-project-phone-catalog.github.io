import './ProductCard.scss';
import {ProductGallery} from '../ProductGallery/ProductGallery.tsx';
import {ProductOptions} from '../ProductOptions/ProductOptions.tsx';
import {ProductPurchase} from '../ProductPurchase/ProductPurchase.tsx';
import {ProductDetail} from '../ProductDetail/ProductDetail.tsx';
import {TechSpecs} from '../TechSpecs/TechSpecs.tsx';
import {RelatedProducts} from '../../RelatedProducts/RelatedProducts.tsx';
import {ProductDetails} from '../../../../types/Product.ts';
import React from 'react';

type Props = {
    product: ProductDetails;
};

export const ProductCard: React.FC<Props> = ({product}) => {
    return (
        <div className="product-card">
            <ProductGallery
                images={product.images}
                name={product.name}
            />
            <ProductOptions
                itemId={product.id}
                namespaceId={product.namespaceId}
                colorsAvailable={product.colorsAvailable}
                currentColor={product.color}
                capacityAvailable={product.capacityAvailable}
                currentCapacity={product.capacity}
            />
            <ProductPurchase
                priceDiscount={product.priceDiscount}
                priceRegular={product.priceRegular}
            />
            <ProductDetail
                description={product.description}
                screen={product.screen}
                resolution={product.resolution}
                capacity={product.capacity}
                ram={product.ram}
            />
            <TechSpecs
                id={product.id}
                screen={product.screen}
                resolution={product.resolution}
                processor={product.processor}
                ram={product.ram}
                capacity={product.capacity}
                camera={product.camera}
                zoom={product.zoom}
                cell={product.cell}
            />
            <RelatedProducts/>
        </div>
    );
};
