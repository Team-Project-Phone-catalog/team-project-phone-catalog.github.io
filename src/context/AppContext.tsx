import { createContext } from 'react';
import { BaseProduct } from '../types/Product';
import { CartItem } from '../types/Cart';

export interface AppContextValue {
  cartItems: CartItem[];
  addToCart: (product: BaseProduct) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  isInCart: (product: BaseProduct) => boolean;
}

export const AppContext = createContext<AppContextValue | undefined>(undefined);
