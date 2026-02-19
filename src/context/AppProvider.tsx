import React, { useState, ReactNode, useCallback, useEffect } from 'react';
import { BaseProduct } from '../types/Product';
import { CartItem } from '../types/Cart';
import { AppContext } from './AppContext';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') return [];

    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Failed to parse cart from localStorage:', error);
      return [];
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const getItemUniqueId = (product: BaseProduct) =>
    `${String(product.id)}_${product.color}_${product.capacity}`;

  const addToCart = (product: BaseProduct) => {
    const normalizedProduct = {
      ...product,
      priceDiscount: product.priceDiscount ?? product.price ?? 0,
      priceRegular: product.priceRegular ?? product.fullPrice ?? 0,
    };

    const itemUniqueId = getItemUniqueId(normalizedProduct);

    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.itemUniqueId === itemUniqueId,
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.itemUniqueId === itemUniqueId ?
            { ...item, quantity: item.quantity + 1 }
          : item,
        );
      }

      return [
        ...prevItems,
        { ...normalizedProduct, quantity: 1, itemUniqueId },
      ];
    });
  };

  const removeFromCart = (itemUniqueId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.itemUniqueId !== itemUniqueId),
    );
  };

  const updateQuantity = (itemUniqueId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemUniqueId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.itemUniqueId === itemUniqueId ? { ...item, quantity } : item,
      ),
    );
  };

  const clearCart = () => setCartItems([]);

  const getTotalPrice = useCallback(
    () =>
      cartItems.reduce(
        (total, item) =>
          total + (item.priceDiscount ?? item.priceRegular) * item.quantity,
        0,
      ),
    [cartItems],
  );

  const getTotalItems = useCallback(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  );

  const isInCart = (product: BaseProduct) => {
    const itemUniqueId = getItemUniqueId(product);
    return cartItems.some((item) => item.itemUniqueId === itemUniqueId);
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
        isInCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
