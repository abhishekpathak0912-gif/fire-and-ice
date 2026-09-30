import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { BRANCHES } from '../data/branchData';
import { CheckoutFormState, CheckoutValidationErrors, DemoOrderConfirmation } from '../types/checkout';
import { validateCheckoutForm } from '../utils/validation';
import { formatNPR } from '../utils/formatCurrency';
import { OrderSuccessModal } from '../components/checkout/OrderSuccessModal';

export const CheckoutPage: React.FC = () => {
  const { cartItems, totals, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState<CheckoutFormState>({
    fullName: '',
    phone: '',
    email: '',
    orderType: 'takeaway',
    branch: 'thamel',
    deliveryAddress: '',
    tableNumber: '',
    notes: ''
  });

  const [errors, setErrors] = useState<CheckoutValidationErrors>({});
  const [confirmation, setConfirmation] = useState<DemoOrderConfirmation | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error for field
    if (errors[name as keyof CheckoutValidationErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert('Your cart is empty. Please add dishes before placing an order.');
      navigate('/menu');
      return;
    }

    const validationErrors = validateCheckoutForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      const firstErrorKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(`field-${firstErrorKey}`);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);

    // Simulate network response
    setTimeout(() => {
      const selectedBranch = BRANCHES[form.branch];
      const randomId = 'FNI-' + Math.floor(10000 + Math.random() * 90000);
      const estTime = form.orderType === 'delivery' ? '35 – 45 mins' : '20 – 30 mins';

      const demoConfirmation: DemoOrderConfirmation = {
        orderId: randomId,
        placedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        form: { ...form },
        items: [...cartItems],
        totals: { ...totals },
        estimatedTime: estTime,
        branchName: selectedBranch.name,
        branchPhone: selectedBranch.displayPhone,
        branchAddress: selectedBranch.address
      };

      setConfirmation(demoConfirmation);
      setIsSubmitting(false);
      clearCart();
    }, 600);
  };

  return (
    <div className="container-custom" style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Title */}
        <div style={{ marginBottom: '1.75rem', borderBottom: '1px solid rgba(197, 170, 121, 0.3)', paddingBottom: '1rem' }}>
          <span className="badge-caps badge-terracotta" style={{ marginBottom: '0.4rem' }}>
            Interactive Demo
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.5rem',
              fontWeight: 600,
              color: 'var(--color-on-surface)'
            }}
          >
            Checkout Demonstration
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)' }}>
            Complete customer and delivery details for client-side order simulation.
          </p>
        </div>

        {/* Prominent Demo Disclaimer Banner */}
        <div
          style={{
            backgroundColor: '#354638',
            color: '#F5F1E9',
            padding: '1rem 1.25rem',
            borderRadius: '8px',
            border: '1px solid var(--color-tertiary)',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <span className="material-symbols-outlined" style={{ color: 'var(--color-tertiary)', fontSize: '24px' }}>
            info
          </span>
          <div style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
            <strong>DEMONSTRATION CHECKOUT:</strong> No credit card or payment credentials will be requested. Submitting this form validates the required fields locally and simulates the order confirmation process. No live kitchen tickets are dispatched without an active backend.
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '3rem 1.5rem',
              backgroundColor: 'var(--color-surface-container)',
              borderRadius: '12px',
              border: '1px solid rgba(197, 170, 121, 0.4)'
            }}
          >
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Your cart is empty
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-on-surface-variant)', marginBottom: '1.25rem' }}>
              Please add dishes from our menu before proceeding through checkout.
            </p>
            <Link to="/menu" className="btn-primary">
              Browse Menu
            </Link>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'flex-start'
            }}
          >
            {/* Left: Validated Checkout Form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{
                backgroundColor: '#FFFFFF',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid rgba(197, 170, 121, 0.35)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  borderBottom: '1px solid var(--color-surface-container)',
                  paddingBottom: '0.5rem'
                }}
              >
                1. Order Details &amp; Contact
              </h2>

              {/* Full Name */}
              <div>
                <label
                  htmlFor="field-fullName"
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}
                >
                  Full Name <span style={{ color: 'var(--color-error)' }}>*</span>
                </label>
                <input
                  id="field-fullName"
                  name="fullName"
                  type="text"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'err-fullName' : undefined}
                  value={form.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Maya Shrestha"
                  className={errors.fullName ? 'is-invalid' : ''}
                  style={{ width: '100%' }}
                />
                {errors.fullName && (
                  <p id="err-fullName" style={{ color: 'var(--color-error)', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Phone & Email Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                <div>
                  <label
                    htmlFor="field-phone"
                    style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}
                  >
                    Phone Number <span style={{ color: 'var(--color-error)' }}>*</span>
                  </label>
                  <input
                    id="field-phone"
                    name="phone"
                    type="tel"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'err-phone' : undefined}
                    value={form.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +977 9841234567"
                    className={errors.phone ? 'is-invalid' : ''}
                    style={{ width: '100%' }}
                  />
                  {errors.phone && (
                    <p id="err-phone" style={{ color: 'var(--color-error)', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="field-email"
                    style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}
                  >
                    Email Address (Optional)
                  </label>
                  <input
                    id="field-email"
                    name="email"
                    type="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'err-email' : undefined}
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="maya@example.com"
                    className={errors.email ? 'is-invalid' : ''}
                    style={{ width: '100%' }}
                  />
                  {errors.email && (
                    <p id="err-email" style={{ color: 'var(--color-error)', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Order Type Selector */}
              <div>
                <label
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}
                >
                  Order Type <span style={{ color: 'var(--color-error)' }}>*</span>
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                  {(['takeaway', 'delivery', 'dine-in'] as const).map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setForm(prev => ({ ...prev, orderType: type }))}
                      style={{
                        padding: '0.65rem 0.5rem',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: form.orderType === type ? 700 : 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        border: form.orderType === type ? '2px solid var(--color-primary)' : '1px solid rgba(197, 170, 121, 0.4)',
                        backgroundColor: form.orderType === type ? 'var(--color-surface-container)' : '#FFFFFF',
                        color: form.orderType === type ? 'var(--color-primary)' : 'var(--color-on-surface)'
                      }}
                    >
                      {type === 'takeaway' ? 'Takeaway' : type === 'delivery' ? 'Delivery' : 'Dine-In'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Branch Selection */}
              <div>
                <label
                  htmlFor="field-branch"
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}
                >
                  Preparing Branch <span style={{ color: 'var(--color-error)' }}>*</span>
                </label>
                <select
                  id="field-branch"
                  name="branch"
                  value={form.branch}
                  onChange={handleInputChange}
                  style={{ width: '100%', height: '46px' }}
                >
                  <option value="thamel">Thamel Branch — Tridevi Marg (Kathmandu Flagship)</option>
                  <option value="sanepa">Sanepa Branch — Jhamsikhel Road (Lalitpur Garden)</option>
                </select>
              </div>

              {/* Conditional Delivery Address */}
              {form.orderType === 'delivery' && (
                <div>
                  <label
                    htmlFor="field-deliveryAddress"
                    style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}
                  >
                    Doorstep Delivery Address <span style={{ color: 'var(--color-error)' }}>*</span>
                  </label>
                  <textarea
                    id="field-deliveryAddress"
                    name="deliveryAddress"
                    rows={3}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.deliveryAddress}
                    aria-describedby={errors.deliveryAddress ? 'err-address' : undefined}
                    value={form.deliveryAddress}
                    onChange={handleInputChange}
                    placeholder="Street name, house/hotel number, nearby landmark, Kathmandu or Patan ward"
                    className={errors.deliveryAddress ? 'is-invalid' : ''}
                    style={{ width: '100%' }}
                  />
                  {errors.deliveryAddress && (
                    <p id="err-address" style={{ color: 'var(--color-error)', fontSize: '0.8rem', marginTop: '0.3rem' }}>
                      {errors.deliveryAddress}
                    </p>
                  )}
                </div>
              )}

              {/* Conditional Dine-in Table Number */}
              {form.orderType === 'dine-in' && (
                <div>
                  <label
                    htmlFor="field-tableNumber"
                    style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}
                  >
                    Table Number (if currently seated)
                  </label>
                  <input
                    id="field-tableNumber"
                    name="tableNumber"
                    type="text"
                    value={form.tableNumber}
                    onChange={handleInputChange}
                    placeholder="e.g. Table 7 (or leave blank if ordering at counter)"
                    style={{ width: '100%' }}
                  />
                </div>
              )}

              {/* Special Instructions */}
              <div>
                <label
                  htmlFor="field-notes"
                  style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}
                >
                  Kitchen Notes or Cutlery Requests (Optional)
                </label>
                <textarea
                  id="field-notes"
                  name="notes"
                  rows={2}
                  value={form.notes}
                  onChange={handleInputChange}
                  placeholder="e.g. Please include extra chili flakes, no plastic cutlery"
                  style={{ width: '100%' }}
                />
              </div>

              {/* Submit CTA */}
              <div style={{ paddingTop: '0.5rem' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.9rem', fontSize: '0.9rem' }}
                >
                  {isSubmitting ? (
                    <span>Validating &amp; Creating Demo Order...</span>
                  ) : (
                    <>
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                        check_circle
                      </span>
                      <span>Submit Demo Order ({formatNPR(totals.grandTotal)})</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Right: Order Summary Breakdown */}
            <aside
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: '12px',
                border: '1px solid rgba(197, 170, 121, 0.4)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', fontWeight: 600 }}>
                Order Summary ({totals.itemCount} items)
              </h2>

              <div style={{ maxHeight: '240px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {cartItems.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      fontSize: '0.875rem',
                      paddingBottom: '0.5rem',
                      borderBottom: '1px solid rgba(197, 170, 121, 0.2)'
                    }}
                  >
                    <div>
                      <strong>{item.quantity}x</strong> {item.dish.name}
                      {item.specialInstructions && (
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontStyle: 'italic' }}>
                          {item.specialInstructions}
                        </div>
                      )}
                    </div>
                    <span style={{ fontWeight: 600 }}>
                      {formatNPR(item.dish.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Calculations */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', paddingTop: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span>Subtotal</span>
                  <span>{formatNPR(totals.subtotal)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--color-on-surface-muted)' }}>
                  <span>Demo Service Charge (10%)</span>
                  <span>{formatNPR(totals.serviceCharge)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--color-on-surface-muted)' }}>
                  <span>Demo Nepal VAT (13%)</span>
                  <span>{formatNPR(totals.vat)}</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: '0.75rem',
                    borderTop: '1px dashed rgba(197, 170, 121, 0.5)',
                    fontSize: '1.25rem',
                    fontWeight: 700
                  }}
                >
                  <span>Grand Total:</span>
                  <span style={{ color: 'var(--color-secondary)' }}>
                    {formatNPR(totals.grandTotal)}
                  </span>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--color-surface-container)',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  color: 'var(--color-on-surface-variant)',
                  marginTop: '0.5rem'
                }}
              >
                Selected Branch: <strong>{BRANCHES[form.branch].name}</strong> ({BRANCHES[form.branch].neighborhood})
              </div>
            </aside>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {confirmation && (
        <OrderSuccessModal
          confirmation={confirmation}
          onClose={() => {
            setConfirmation(null);
            navigate('/menu');
          }}
        />
      )}
    </div>
  );
};
