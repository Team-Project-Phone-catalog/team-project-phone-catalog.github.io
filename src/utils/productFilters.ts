import { Product } from '../types/Product';
import { SortType } from '../types/SortType';

export const sortByNewest = (products: Product[]) => {
  return [...products].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
};

export const sortByBestPrice = (products: Product[]) => {
  return [...products].sort((a, b) => {
    const fullA = a.fullPrice ?? a.priceRegular ?? 0;
    const priceA = a.price ?? a.priceDiscount ?? 0;
    const fullB = b.fullPrice ?? b.priceRegular ?? 0;
    const priceB = b.price ?? b.priceDiscount ?? 0;
    return fullB - priceB - (fullA - priceA);
  });
};

export const sortProducts = (products: Product[], sortBy: SortType) => {
  const sorted = [...products];

  switch (sortBy) {
    case 'priceLow':
      return sorted.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    case 'priceHigh':
      return sorted.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    case 'oldest':
      return sorted.sort((a, b) => (a.year ?? 0) - (b.year ?? 0));
    case 'newest':
    default:
      return sortByNewest(sorted);
  }
};
