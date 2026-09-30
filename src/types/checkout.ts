import { CartItem, CartTotals } from './cart';

export type OrderType = 'dine-in' | 'takeaway' | 'delivery';
export type BranchId = 'thamel' | 'sanepa';

export interface CheckoutFormState {
  fullName: string;
  phone: string;
  email: string;
  orderType: OrderType;
  branch: BranchId;
  deliveryAddress: string;
  tableNumber: string;
  notes: string;
}

export interface CheckoutValidationErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  deliveryAddress?: string;
  tableNumber?: string;
  branch?: string;
}

export interface DemoOrderConfirmation {
  orderId: string;
  placedAt: string;
  form: CheckoutFormState;
  items: CartItem[];
  totals: CartTotals;
  estimatedTime: string;
  branchName: string;
  branchPhone: string;
  branchAddress: string;
}
