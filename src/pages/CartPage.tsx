import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CartItemRow } from '../components/cart/CartItemRow';
import { formatNPR } from '../utils/formatCurrency';

export const CartPage: React.FC = () => {
  const { cartItems, totals, clearCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="container-custom" style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem', borderBottom: '1px solid rgba(197, 170, 121, 0.3)', paddingBottom: '1rem' }}>
          <span className="badge-caps badge-terracotta" style={{ marginBottom: '0.4rem' }}>
            Local Order Review
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.5rem',
              fontWeight: 600,
              color: 'var(--color-on-surface)'
            }}
          >
            Shopping Cart ({totals.itemCount} items)
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)' }}>
            Review your selected dishes before proceeding to the checkout demonstration.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 1.5rem',
              backgroundColor: 'var(--color-surface-container)',
              borderRadius: '12px',
              border: '1px solid rgba(197, 170, 121, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                color: 'var(--color-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>
                shopping_basket
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', fontWeight: 600 }}>
              Your cart is empty
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)', maxWidth: '340px' }}>
              Explore our wood-fired pizzas, handmade pastas, and Italian desserts to begin your order.
            </p>
            <Link to="/menu" className="btn-primary" style={{ marginTop: '0.5rem' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                restaurant_menu
              </span>
              <span>Browse Complete Menu</span>
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Left: Items list */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(197, 170, 121, 0.35)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 600 }}>
                  Order Dishes
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm('Clear all dishes from your cart?')) {
                      clearCart();
                    }
                  }}
                  style={{ fontSize: '0.8rem', color: 'var(--color-error)', textDecoration: 'underline', fontWeight: 600 }}
                >
                  Clear Cart
                </button>
              </div>

              <div>
                {cartItems.map(item => (
                  <CartItemRow key={item.dish.id} item={item} />
                ))}
              </div>

              <div style={{ marginTop: '1.25rem' }}>
                <Link
                  to="/menu"
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-primary)',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                    add
                  </span>
                  <span>Add more dishes to order</span>
                </Link>
              </div>
            </div>

            {/* Right: Calculations & Checkout */}
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(197, 170, 121, 0.35)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                height: 'fit-content'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 600 }}>
                Order Summary
              </h3>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                <span>Subtotal ({totals.itemCount} items)</span>
                <span style={{ fontWeight: 600 }}>{formatNPR(totals.subtotal)}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--color-on-surface-muted)' }}>
                <span>Demo Service Charge (10%)</span>
                <span>{formatNPR(totals.serviceCharge)}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--color-on-surface-muted)' }}>
                <span>Demo Nepal VAT (13%)</span>
                <span>{formatNPR(totals.vat)}</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingTop: '0.75rem',
                  borderTop: '1px dashed rgba(197, 170, 121, 0.5)',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'var(--color-on-surface)'
                }}
              >
                <span>Estimated Total:</span>
                <span style={{ color: 'var(--color-secondary)' }}>
                  {formatNPR(totals.grandTotal)}
                </span>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--color-surface-container)',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  color: 'var(--color-on-surface-variant)',
                  lineHeight: '1.4'
                }}
              >
                &bull; <strong>Demo Notice:</strong> No payment details will be requested. This demo tests the client-side order creation workflow.
              </div>

              <button
                type="button"
                onClick={() => navigate('/checkout')}
                className="btn-primary"
                style={{ width: '100%', padding: '0.85rem' }}
              >
                <span>Proceed to Demo Checkout</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
