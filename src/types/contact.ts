import { BranchId } from './checkout';

export interface ReservationFormState {
  fullName: string;
  email: string;
  phone: string;
  branch: BranchId;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'indoor-hearth' | 'garden-terrace' | 'no-preference';
  specialRequests: string;
}

export interface ReservationValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  branch?: string;
  date?: string;
  time?: string;
  guests?: string;
}

export interface DemoReservationConfirmation {
  reservationId: string;
  submittedAt: string;
  form: ReservationFormState;
  branchName: string;
}

export interface ContactInquiryFormState {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactValidationErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}
