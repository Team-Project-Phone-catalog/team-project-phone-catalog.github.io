import { Product } from './Product';

export interface CartItem extends Product {
  quantity: number;
  itemUniqueId: string;
}

export interface CartState {
  items: CartItem[];
}
