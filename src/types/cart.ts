import { MenuItem } from './menu';

export interface CartItem {
  dish: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface CartTotals {
  subtotal: number;
  serviceCharge: number; // Demo 10% standard restaurant service
  vat: number;           // Demo 13% standard Nepal VAT
  grandTotal: number;
  itemCount: number;
}
