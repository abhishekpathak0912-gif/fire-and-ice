import { CheckoutFormState, CheckoutValidationErrors } from '../types/checkout';
import { ReservationFormState, ReservationValidationErrors, ContactInquiryFormState, ContactValidationErrors } from '../types/contact';

export function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

export function isValidPhone(phone: string): boolean {
  const clean = phone.replace(/[\s\-\(\)\+]/g, '');
  return clean.length >= 7 && /^\d+$/.test(clean);
}

export function validateCheckoutForm(form: CheckoutFormState): CheckoutValidationErrors {
  const errors: CheckoutValidationErrors = {};

  if (!form.fullName || form.fullName.trim().length < 3) {
    errors.fullName = 'Please enter your full name (minimum 3 characters).';
  }

  if (!form.phone || !isValidPhone(form.phone)) {
    errors.phone = 'Please provide a valid contact phone number (at least 7 digits).';
  }

  if (form.email && form.email.trim().length > 0 && !isValidEmail(form.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!form.branch) {
    errors.branch = 'Please choose a pickup or preparation branch.';
  }

  if (form.orderType === 'delivery') {
    if (!form.deliveryAddress || form.deliveryAddress.trim().length < 5) {
      errors.deliveryAddress = 'Delivery address is required for doorstep delivery (street, landmark, area).';
    }
  }

  return errors;
}

export function validateReservationForm(form: ReservationFormState): ReservationValidationErrors {
  const errors: ReservationValidationErrors = {};

  if (!form.fullName || form.fullName.trim().length < 3) {
    errors.fullName = 'Please enter your full name.';
  }

  if (!form.email || !isValidEmail(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!form.phone || !isValidPhone(form.phone)) {
    errors.phone = 'Please enter a valid telephone number.';
  }

  if (!form.branch) {
    errors.branch = 'Please select a branch location.';
  }

  if (!form.date) {
    errors.date = 'Please select a reservation date.';
  }

  if (!form.time) {
    errors.time = 'Please select a preferred seating time.';
  }

  if (!form.guests || form.guests < 1 || form.guests > 30) {
    errors.guests = 'Party size must be between 1 and 30 guests.';
  }

  return errors;
}

export function validateContactForm(form: ContactInquiryFormState): ContactValidationErrors {
  const errors: ContactValidationErrors = {};

  if (!form.fullName || form.fullName.trim().length < 3) {
    errors.fullName = 'Please enter your name.';
  }

  if (!form.email || !isValidEmail(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!form.subject || form.subject.trim().length < 3) {
    errors.subject = 'Please enter a subject.';
  }

  if (!form.message || form.message.trim().length < 10) {
    errors.message = 'Please enter a message of at least 10 characters.';
  }

  return errors;
}
