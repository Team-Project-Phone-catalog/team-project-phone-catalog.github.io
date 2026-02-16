import { Product } from '../types/Product';

const BASE_URL = import.meta.env.BASE_URL;

export const getPhones = (): Promise<Product[]> => {
  return fetch(`${BASE_URL}api/phones.json`).then((response) => {
    return response.json();
  });
};

export const getTablets = (): Promise<Product[]> => {
  return fetch(`${BASE_URL}api/tablets.json`).then((response) => {
    return response.json();
  });
};

export const getAccessories = (): Promise<Product[]> => {
  return fetch(`${BASE_URL}api/accessories.json`).then((response) => {
    return response.json();
  });
};
