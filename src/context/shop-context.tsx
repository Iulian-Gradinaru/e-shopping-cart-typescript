import { ReactNode, createContext, useState } from 'react';
import { PRODUCTS, ProductData } from '../products';

export const ShopContext = createContext<ShopContextInterface | null>(null);

export interface ShopContextInterface {
  children: ReactNode;
  cartItems: Record<string, number>;
  addToCart: (itemId: string) => void;
  updateCartItemCount: (newAmount: number, itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  getTotalCartAmount: () => number;
  checkout: () => void;
}

const getDefaultCart = (): Record<string, number> => {
  let cart: Record<string, number> = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i.toString()] = 0;
  }
  return cart;
};

export const ShopContextProvider: React.FC<ShopContextInterface> = (props) => {
  const [cartItems, setCartItems] = useState<Record<string, number>>(
    getDefaultCart()
  );

  const getTotalCartAmount = (): number => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find(
          (product) => product.id === Number(item)
        ) as ProductData;
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId: string): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: string): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount: number, itemId: string): void => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = (): void => {
    setCartItems(getDefaultCart());
  };

  const contextValue: ShopContextInterface = {
    ...props, // Include toate proprietățile din ShopContextInterface, inclusiv children
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
