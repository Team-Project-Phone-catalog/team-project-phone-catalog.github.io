import { createContext } from 'react';
import { BaseProduct } from '../types/Product';
import { CartItem } from '../types/Cart';

export interface AppContextValue {
  cartItems: CartItem[];
  addToCart: (product: BaseProduct) => void;
  removeFromCart: (productId: string) => void;
  toggleCart: (product: BaseProduct) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  isInCart: (product: BaseProduct) => boolean;
  // 🔥 NEW
  favorites: string[];
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  getFavoritesCount: () => number;
}

export const AppContext = createContext<AppContextValue | undefined>(undefined);
