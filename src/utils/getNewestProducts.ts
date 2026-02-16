import { Product } from '../types/Product';

export const getNewestProducts = (products: Product[]) => {
  return [...products].sort((a, b) => b.year - a.year);
};
