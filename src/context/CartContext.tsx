import { createContext, useContext, useState, type ReactNode } from "react";
import type { Product } from "../types/Product";

type CartItem = Product & {
  quantity: number;
};

// ...imports y tipos iguales

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeOne: (productId: number) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  toggleCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const found = prev.find(p => p.id === product.id);
      if (found) {
        return prev.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeOne = (productId: number) => {
    setCart(prev =>
      prev
        .map(p =>
          p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter(p => p.quantity > 0)
    );
  };

  const removeItem = (productId: number) => {
    setCart(prev => prev.filter(p => p.id !== productId));
  };

  const clearCart = () => setCart([]);

  const toggleCart = () => setIsOpen(p => !p);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeOne, removeItem, clearCart, isOpen, toggleCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
};

