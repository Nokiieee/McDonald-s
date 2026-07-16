import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { itemsByKey } from '../data/menu';

const STORAGE_KEY = 'mcdoCart';
const CartContext = createContext(null);

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(loadCart);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addItem = (key, quantity = 1) => {
    const item = itemsByKey[key];
    if (!item) return;

    setCart((prev) => {
      const existing = prev.find((line) => line.key === key);
      if (existing) {
        return prev.map((line) =>
          line.key === key ? { ...line, quantity: line.quantity + quantity } : line
        );
      }
      return [
        ...prev,
        { key: item.key, name: item.name, price: item.price, image: item.image, quantity },
      ];
    });
  };

  const removeItem = (key) => {
    setCart((prev) => prev.filter((line) => line.key !== key));
  };

  const clearCart = () => setCart([]);

  const totalPrice = useMemo(
    () => cart.reduce((sum, line) => sum + line.price * line.quantity, 0),
    [cart]
  );

  const totalCount = useMemo(
    () => cart.reduce((sum, line) => sum + line.quantity, 0),
    [cart]
  );

  const value = { cart, addItem, removeItem, clearCart, totalPrice, totalCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
