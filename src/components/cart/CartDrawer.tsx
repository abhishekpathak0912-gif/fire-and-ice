import React, { useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { CartItemRow } from './CartItemRow';
import { formatNPR } from '../../utils/formatCurrency';

export const CartDrawer: React.FC = () => {
  const { isCartOpen, closeCart, cartItems, clearCart, totals } = useCart();
  const navigate = useNavigate();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, closeCart]);

  // Lock body scroll
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const handleCheckoutClick = () => {
    closeCart();
    navigate('/checkout');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="drawer-backdrop"
        onClick={closeCart}
        aria-hidden="true"
        style={{ opacity: 1 }}
      />

      {/* Slide-over Drawer Panel */}
      <aside
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        className="drawer-panel"
        style={{
          width: '90%',
          maxWidth: '440px',
          right: 0,
          left: 'auto',
          transform: 'translateX(0)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderLeft: '1px solid rgba(197, 170, 121, 0.4)',
          zIndex: 250
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid var(--color-surface-container)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--color-surface)'
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-secondary)',
                fontWeight: 600
              }}
            >
              Order Demonstration
            </span>
            <h3
              id="cart-drawer-title"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                fontWeight: 600,
                color: 'var(--color-on-surface)'
              }}
            >
              Your Order ({totals.itemCount})
            </h3>
          </div>

          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart drawer"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              backgroundColor: 'var(--color-surface-container)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-on-surface)'
            }}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Drawer Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem 1.5rem' }}>
          {cartItems.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '3rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(197, 170, 121, 0.4)'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>
                  shopping_basket
                </span>
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 600 }}>
                Your order is currently empty
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)', maxWidth: '280px' }}>
                Explore our wood-fired pizzas, fresh handmade pastas, and authentic Italian gelato.
              </p>
              <Link
                to="/menu"
                onClick={closeCart}
                className="btn-primary"
                style={{ marginTop: '0.5rem' }}
              >
                Browse Menu
              </Link>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-on-surface-muted)', fontWeight: 600 }}>
                  Selected Dishes
                </span>
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm('Are you sure you want to clear your demo cart?')) {
                      clearCart();
                    }
                  }}
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-error)',
                    textDecoration: 'underline',
                    fontWeight: 600
                  }}
                >
                  Clear Cart
                </button>
              </div>

              {cartItems.map(item => (
                <CartItemRow key={item.dish.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer with Calculations */}
        {cartItems.length > 0 && (
          <div
            style={{
              padding: '1.25rem 1.5rem',
              backgroundColor: 'var(--color-surface)',
              borderTop: '1px solid rgba(197, 170, 121, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem'
            }}
          >
            {/* Calculation Breakdowns */}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--color-on-surface-variant)' }}>
              <span>Subtotal</span>
              <span style={{ fontWeight: 600 }}>{formatNPR(totals.subtotal)}</span>
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
                paddingTop: '0.5rem',
                borderTop: '1px dashed rgba(197, 170, 121, 0.4)',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--color-on-surface)'
              }}
            >
              <span>Estimated Total:</span>
              <span style={{ color: 'var(--color-secondary)' }}>
                {formatNPR(totals.grandTotal)}
              </span>
            </div>

            <p style={{ fontSize: '0.7rem', color: 'var(--color-on-surface-muted)', textAlign: 'center', marginTop: '0.2rem' }}>
              &bull; Demonstration only: no payment collected.
            </p>

            <button
              type="button"
              onClick={handleCheckoutClick}
              className="btn-primary"
              style={{ width: '100%', marginTop: '0.25rem' }}
            >
              <span>Proceed to Demo Checkout</span>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                arrow_forward
              </span>
            </button>
          </div>
        )}
      </aside>
    </>
  );
};
