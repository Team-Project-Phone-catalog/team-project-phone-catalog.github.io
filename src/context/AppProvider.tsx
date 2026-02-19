import React, { useState, ReactNode, useCallback, useEffect } from 'react';
import { BaseProduct } from '../types/Product';
import { CartItem } from '../types/Cart';
import { AppContext } from './AppContext';
import { notify } from '../utils/notifications';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const saved = localStorage.getItem('favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const getItemUniqueId = (product: BaseProduct) =>
    String('itemId' in product ? product.itemId : product.id);

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
    const itemToRemove = cartItems.find(
      (item) => item.itemUniqueId === itemUniqueId,
    );

    if (itemToRemove) {
      notify.removedFromCart(itemToRemove.name);
    }

    setCartItems((prevItems) =>
      prevItems.filter((item) => item.itemUniqueId !== itemUniqueId),
    );
  };

  const toggleCart = (product: BaseProduct) => {
    const itemUniqueId = getItemUniqueId(product);
    if (isInCart(product)) {
      removeFromCart(itemUniqueId);
    } else {
      addToCart(product);
      notify.addedToCart(product.name);
    }
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

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () =>
    cartItems.reduce(
      (total, item) =>
        total + (item.priceDiscount ?? item.price) * item.quantity,
      0,
    );

  const getTotalItems = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  const isInCart = (product: BaseProduct) => {
    const itemUniqueId = getItemUniqueId(product);
    return cartItems.some((item) => item.itemUniqueId === itemUniqueId);
  };

  const toggleFavorite = (product: BaseProduct) => {
    const productId = getItemUniqueId(product);
    const isCurrentlyFavorite = favorites.includes(productId);

    if (isCurrentlyFavorite) {
      setFavorites((prev) => prev.filter((id) => id !== productId));
      notify.removedFromFavorites(product.name);
    } else {
      setFavorites((prev) => [...prev, productId]);
      notify.addedToFavorites(product.name);
    }
  };

  const isFavorite = (productId: string) =>
    favorites.includes(String(productId));

  const getFavoritesCount = useCallback(() => favorites.length, [favorites]);

  return (
    <AppContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        toggleCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
        isInCart,
        favorites,
        toggleFavorite,
        isFavorite,
        getFavoritesCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
