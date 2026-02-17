import { ProductCard } from '../../../pages/ProductCard';
import { useEffect, useState } from 'react';
import {
  getAccessories,
  getPhones,
  getTablets,
} from '../../../api/products.ts';
import { Product } from '../../../types/Product.ts';
import { sortByBestPrice } from '../../../utils/productFilters.ts';
import './RelatedProducts.scss';

export const RelatedProducts = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [tablets, setTablets] = useState<Product[]>([]);
  const [accessories, setAccessories] = useState<Product[]>([]);

  const allProducts = [...phones, ...tablets, ...accessories];

  const bestPriceProducts = sortByBestPrice(allProducts).slice(0, 24);

  useEffect(() => {
    getPhones()
      .then(setPhones)
      .catch((err) => console.error('Error loading phones:', err));

    getTablets()
      .then(setTablets)
      .catch((err) => console.error('Error loading tablets:', err));

    getAccessories()
      .then(setAccessories)
      .catch((err) => console.error('Error loading accessories:', err));
  }, []);
  return (
    <div className="AlsoLike">
      <div className="AlsoLike__header">
        <h3 className="AlsoLike__title">You may also like</h3>
        <div className="AlsoLike__arrows">
          <button className="AlsoLike__arrow-btn">&#8249;</button>
          <button className="AlsoLike__arrow-btn">&#8250;</button>
        </div>
      </div>

      <div className="AlsoLike__slider">
        <div className="AlsoLike__track">
          {bestPriceProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
