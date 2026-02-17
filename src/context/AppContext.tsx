import { createContext } from 'react';
import { Product } from '../types/Product';
import { CartItem } from '../types/Cart';

export interface AppContextValue {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  isInCart: (productId: Product) => boolean;
}

export const AppContext = createContext<AppContextValue | undefined>(undefined);
