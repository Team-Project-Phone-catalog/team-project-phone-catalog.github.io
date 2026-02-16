import './ProductPurchase.scss';
import { ProductActions } from '../../ProductActions/ProductActions.tsx';

export const ProductPurchase = () => {
  return (
    <div className="purchase">
      <div className="purchase-price">
        <span className="purchase-price__current">$799</span>
        <span className="purchase-price__full">$1199</span>
      </div>

      <div className="purchase__buttons">
        <ProductActions
          onAddToCart={() => console.log('Added to cart')}
          onToggleFavorite={() => console.log('Toggled favorite')}
        />
      </div>
    </div>
  );
};
