import { Product, ProductDetails } from '../types/Product';

export const getPhones = (): Promise<Product[]> => {
  return fetch('/api/phones.json').then((response) => {
    return response.json();
  });
};

export const getTablets = (): Promise<Product[]> => {
  return fetch('/api/tablets.json').then((response) => {
    return response.json();
  });
};

export const getAccessories = (): Promise<Product[]> => {
  return fetch('/api/accessories.json').then((response) => {
    return response.json();
  });
};

export const getProducts = (): Promise<Product[]> => {
  return fetch('/api/products.json').then((response) => {
    return response.json();
  });
};

export const getProductDetails = (
  category: string,
  itemId: string,
): Promise<ProductDetails> => {
  return fetch(`/api/${category}/${itemId}.json`).then((response) => {
    if (!response.ok) {
      throw new Error(`Product not found: ${itemId}`);
    }
    return response.json();
  });
};
