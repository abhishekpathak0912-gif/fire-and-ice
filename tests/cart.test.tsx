import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, renderHook, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider, useCart } from '../src/context/CartContext';
import { CartPage } from '../src/pages/CartPage';
import { MENU_ITEMS } from '../src/data/menuData';

const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <BrowserRouter>
    <CartProvider>{children}</CartProvider>
  </BrowserRouter>
);

describe('Shopping Cart Calculations & Quantity Management', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('initializes with an empty cart and shows empty state', () => {
    render(<CartPage />, { wrapper });
    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
  });

  it('adds item to cart and correctly computes subtotal, service charge, and VAT', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    const margherita = MENU_ITEMS.find(m => m.id === 'pizza-margherita-classica')!; // NPR 920

    act(() => {
      result.current.addItem(margherita, 1);
    });

    expect(result.current.cartItems.length).toBe(1);
    expect(result.current.totals.itemCount).toBe(1);
    expect(result.current.totals.subtotal).toBe(920);

    // 10% Service Charge on 920 = 92
    expect(result.current.totals.serviceCharge).toBe(92);

    // 13% VAT on (920 + 92 = 1012) = 131.56 -> rounded to 132
    expect(result.current.totals.vat).toBe(132);

    // Grand total = 920 + 92 + 132 = 1144
    expect(result.current.totals.grandTotal).toBe(1144);
  });

  it('increments and decrements item quantities properly', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const margherita = MENU_ITEMS.find(m => m.id === 'pizza-margherita-classica')!;

    act(() => {
      result.current.addItem(margherita, 1);
    });

    // Increment
    act(() => {
      result.current.updateQuantity(margherita.id, 2);
    });
    expect(result.current.totals.itemCount).toBe(2);
    expect(result.current.totals.subtotal).toBe(920 * 2);

    // Decrement
    act(() => {
      result.current.updateQuantity(margherita.id, 1);
    });
    expect(result.current.totals.itemCount).toBe(1);
    expect(result.current.totals.subtotal).toBe(920);

    // Decrement to 0 removes the item
    act(() => {
      result.current.updateQuantity(margherita.id, 0);
    });
    expect(result.current.cartItems.length).toBe(0);
    expect(result.current.totals.itemCount).toBe(0);
  });

  it('removes item directly via removeItem', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const margherita = MENU_ITEMS.find(m => m.id === 'pizza-margherita-classica')!;
    const tiramisu = MENU_ITEMS.find(m => m.id === 'dessert-tiramisu')!;

    act(() => {
      result.current.addItem(margherita, 1);
      result.current.addItem(tiramisu, 1);
    });

    expect(result.current.cartItems.length).toBe(2);

    act(() => {
      result.current.removeItem(margherita.id);
    });

    expect(result.current.cartItems.length).toBe(1);
    expect(result.current.cartItems[0].dish.id).toBe(tiramisu.id);
  });

  it('clears entire cart via clearCart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const margherita = MENU_ITEMS.find(m => m.id === 'pizza-margherita-classica')!;

    act(() => {
      result.current.addItem(margherita, 3);
    });
    expect(result.current.totals.itemCount).toBe(3);

    act(() => {
      result.current.clearCart();
    });

    expect(result.current.cartItems.length).toBe(0);
    expect(result.current.totals.itemCount).toBe(0);
    expect(result.current.totals.subtotal).toBe(0);
    expect(result.current.totals.grandTotal).toBe(0);
  });

  it('persists cart state safely in localStorage', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const margherita = MENU_ITEMS.find(m => m.id === 'pizza-margherita-classica')!;

    act(() => {
      result.current.addItem(margherita, 2);
    });

    const stored = window.localStorage.getItem('fire_and_ice_cart_demo_v1');
    expect(stored).not.toBeNull();
    const parsed = JSON.parse(stored!);
    expect(parsed.length).toBe(1);
    expect(parsed[0].quantity).toBe(2);
  });
});
