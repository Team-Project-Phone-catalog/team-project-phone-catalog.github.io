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

export const getProductDetails = async (
  category: string,
  itemId: string,
): Promise<ProductDetails> => {
  const response = await fetch(`/api/${category}.json`);

  if (!response.ok) {
    throw new Error(`Category not found: ${category}`);
  }

  const products: ProductDetails[] = await response.json();

  const found = products.find((p) => p.id === itemId);

  if (!found) {
    throw new Error(`Product not found: ${itemId}`);
  }

  return found;
};
