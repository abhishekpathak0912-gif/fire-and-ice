import { describe, it, expect } from 'vitest';
import { validateCheckoutForm, isValidEmail, isValidPhone } from '../src/utils/validation';
import { CheckoutFormState } from '../src/types/checkout';

describe('Checkout Form Validation & Demo Confirmation Logic', () => {
  it('validates email and phone format correctly', () => {
    expect(isValidEmail('maya@example.com')).toBe(true);
    expect(isValidEmail('invalid-email')).toBe(false);

    expect(isValidPhone('+977 9841234567')).toBe(true);
    expect(isValidPhone('4250210')).toBe(true);
    expect(isValidPhone('123')).toBe(false); // too short
  });

  it('rejects form when full name or phone are missing or too short', () => {
    const invalidForm: CheckoutFormState = {
      fullName: '',
      phone: '',
      email: '',
      orderType: 'takeaway',
      branch: 'thamel',
      deliveryAddress: '',
      tableNumber: '',
      notes: ''
    };

    const errors = validateCheckoutForm(invalidForm);
    expect(errors.fullName).toBeDefined();
    expect(errors.phone).toBeDefined();
  });

  it('requires deliveryAddress ONLY when orderType is delivery', () => {
    const deliveryFormWithoutAddress: CheckoutFormState = {
      fullName: 'Aarav Sharma',
      phone: '+977 9812345678',
      email: 'aarav@example.com',
      orderType: 'delivery',
      branch: 'thamel',
      deliveryAddress: '', // missing
      tableNumber: '',
      notes: ''
    };

    const deliveryErrors = validateCheckoutForm(deliveryFormWithoutAddress);
    expect(deliveryErrors.deliveryAddress).toBeDefined();

    // Now switch to takeaway
    const takeawayForm: CheckoutFormState = {
      ...deliveryFormWithoutAddress,
      orderType: 'takeaway'
    };
    const takeawayErrors = validateCheckoutForm(takeawayForm);
    expect(takeawayErrors.deliveryAddress).toBeUndefined();
    expect(Object.keys(takeawayErrors).length).toBe(0);
  });

  it('passes validation when all required fields are correctly supplied', () => {
    const validForm: CheckoutFormState = {
      fullName: 'Bikash Adhikari',
      phone: '+977 1 4250210',
      email: 'bikash@example.com',
      orderType: 'delivery',
      branch: 'sanepa',
      deliveryAddress: 'Sanepa Heights Ward 2, Lalitpur near British School',
      tableNumber: '',
      notes: 'Please bring hot chili flakes.'
    };

    const errors = validateCheckoutForm(validForm);
    expect(Object.keys(errors).length).toBe(0);
  });
});
