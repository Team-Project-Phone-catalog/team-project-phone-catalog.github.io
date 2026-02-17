import { Product } from '../types/Product';

export const sortByNewest = (products: Product[]) => {
  return [...products].sort((a, b) => (b.year || 0) - (a.year || 0));
};

export const sortByBestPrice = (products: Product[]) => {
  return [...products].sort((a, b) => {
    const discountA = (a.priceRegular || 0) - (a.priceDiscount || 0);
    const discountB = (b.priceRegular || 0) - (b.priceDiscount || 0);

    return discountB - discountA;
  });
};
