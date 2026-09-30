import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { MenuItem } from '../types/menu';
import { CartItem, CartTotals } from '../types/cart';

interface CartContextType {
  cartItems: CartItem[];
  addItem: (dish: MenuItem, quantity?: number, specialInstructions?: string) => void;
  removeItem: (dishId: string) => void;
  updateQuantity: (dishId: string, quantity: number) => void;
  clearCart: () => void;
  totals: CartTotals;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
  toast: { message: string; visible: boolean; id: number };
  hideToast: () => void;
}

const CART_STORAGE_KEY = 'fire_and_ice_cart_demo_v1';
const MAX_ITEM_QUANTITY = 50;

const CartContext = createContext<CartContextType | undefined>(undefined);

function loadInitialCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      // Validate that each item has a valid dish and positive quantity
      return parsed.filter(item => 
        item && 
        item.dish && 
        typeof item.dish.id === 'string' && 
        typeof item.dish.price === 'number' && 
        typeof item.quantity === 'number' && 
        item.quantity > 0
      );
    }
  } catch (err) {
    console.warn('Could not read cart from localStorage; starting with empty cart.', err);
  }
  return [];
}

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(loadInitialCart);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [toast, setToast] = useState<{ message: string; visible: boolean; id: number }>({
    message: '',
    visible: false,
    id: 0
  });

  // Sync to localStorage safely
  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (err) {
      console.warn('Could not persist cart to localStorage', err);
    }
  }, [cartItems]);

  const showToast = (message: string) => {
    const newId = Date.now();
    setToast({ message, visible: true, id: newId });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, visible: false }));
  };

  const addItem = (dish: MenuItem, quantity: number = 1, specialInstructions?: string) => {
    const validQty = Math.max(1, Math.min(MAX_ITEM_QUANTITY, Math.floor(quantity)));

    setCartItems(prev => {
      const existingIdx = prev.findIndex(item => item.dish.id === dish.id);
      if (existingIdx > -1) {
        const copy = [...prev];
        const newQty = Math.min(MAX_ITEM_QUANTITY, copy[existingIdx].quantity + validQty);
        copy[existingIdx] = {
          ...copy[existingIdx],
          quantity: newQty,
          specialInstructions: specialInstructions || copy[existingIdx].specialInstructions
        };
        return copy;
      } else {
        return [...prev, { dish, quantity: validQty, specialInstructions }];
      }
    });

    showToast(`Added ${dish.name} (NPR ${dish.price.toLocaleString()}) to order`);
  };

  const removeItem = (dishId: string) => {
    setCartItems(prev => prev.filter(item => item.dish.id !== dishId));
  };

  const updateQuantity = (dishId: string, quantity: number) => {
    const intQty = Math.floor(quantity);
    if (intQty <= 0) {
      removeItem(dishId);
      return;
    }

    const cappedQty = Math.min(MAX_ITEM_QUANTITY, intQty);
    setCartItems(prev =>
      prev.map(item =>
        item.dish.id === dishId ? { ...item, quantity: cappedQty } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  // Totals calculation
  const totals = useMemo<CartTotals>(() => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.dish.price * item.quantity,
      0
    );
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    // Nepal standard hospitality service charge: 10%
    const serviceCharge = Math.round(subtotal * 0.10);
    // Standard Nepal VAT: 13% on (subtotal + service charge)
    const vat = Math.round((subtotal + serviceCharge) * 0.13);
    const grandTotal = subtotal + serviceCharge + vat;

    return {
      subtotal,
      serviceCharge,
      vat,
      grandTotal,
      itemCount
    };
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totals,
        isCartOpen,
        setIsCartOpen,
        openCart,
        closeCart,
        toast,
        hideToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
