import React, { useCallback, useState } from "react";
import { Product } from "../types";

interface Cart {
  addProduct: (product: Product) => void;
  products: Product[];
}

interface CartProviderProps {
  children: React.ReactNode;
}

const CartContext = React.createContext<Cart | undefined>(undefined);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = useCallback(
    (product: Product) => {
      if (!products.includes(product)) {
        setProducts([...products, product]);
      }
    },
    [setProducts, products]
  );

  return <CartContext.Provider value={{ products, addProduct }}>{children}</CartContext.Provider>;
};

export const useCart = () => React.useContext(CartContext);
