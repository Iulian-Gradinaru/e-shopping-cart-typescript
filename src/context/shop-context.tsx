import { ReactNode, createContext, useState } from 'react';
import { PRODUCTS, ProductData } from '../utils/products';
import useLocalStorage from 'use-local-storage';

export const ShopContext = createContext<ContextValueInterface | null>(null);

interface CartItemProps {
  [productId: string]: number;
}

export interface ShopContextProps {
  children: ReactNode;
}

export interface ContextValueInterface {
  cartItems: CartItemProps;
  addToCart: (itemId: number) => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
  checkout: () => void;
}

const getDefaultCart = () => {
  let cart: CartItemProps = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i.toString()] = 0;
  }
  return cart;
};

export const ShopContextProvider: React.FC<ShopContextProps> = (props) => {
  const { children } = props;

  const [cartItems, setCartItems] = useLocalStorage<CartItemProps>(
    'cartItems',
    getDefaultCart()
  );

  const getTotalCartAmount = (): number => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find(
          (product) => product.id === Number(item)
        ) as ProductData;
        totalAmount += cartItems[item] * itemInfo.price; // Adăugare virgulă aici
      }
    }
    return totalAmount;
  };
  const addToCart = (itemId: number): void => {
    setCartItems((prev) => {
      if (prev) {
        return { ...prev, [itemId]: prev[itemId] + 1 };
      }
      return {}; // Returnați o valoare implicită în cazul în care prev este undefined
    });
  };

  const removeFromCart = (itemId: number): void => {
    setCartItems((prev) => {
      if (prev) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      }
      return {}; // Returnați o valoare implicită în cazul în care prev este undefined
    });
  };

  const updateCartItemCount = (newAmount: number, itemId: number): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = (): void => {
    setCartItems(getDefaultCart());
  };

  const contextValue: ContextValueInterface = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
