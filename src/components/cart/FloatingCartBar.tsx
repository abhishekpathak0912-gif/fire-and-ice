import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatNPR } from '../../utils/formatCurrency';

export const FloatingCartBar: React.FC = () => {
  const { totals, openCart, clearCart } = useCart();
  const navigate = useNavigate();

  if (totals.itemCount === 0) return null;

  return (
    <aside
      className="floating-cart-bar"
      id="floating-cart-bar"
      aria-label="Floating cart summary"
    >
      {/* Left info: item count & subtotal */}
      <div
        onClick={openCart}
        style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer', flex: 1 }}
      >
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '8px',
            backgroundColor: 'var(--color-primary)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-serif)',
            fontSize: '1.25rem',
            fontWeight: 700,
            border: '1px solid var(--color-tertiary)'
          }}
          id="cart-item-count"
        >
          {totals.itemCount}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-surface-dim)' }}>
            Demo Cart Subtotal
          </span>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#FFFFFF'
            }}
            id="cart-total-price"
          >
            {formatNPR(totals.subtotal)}
          </span>
        </div>
      </div>

      {/* Right actions: clear & checkout */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <button
          type="button"
          onClick={() => {
            if (window.confirm('Clear all items from your demo order?')) {
              clearCart();
            }
          }}
          id="quick-clear-cart"
          aria-label="Clear cart items"
          title="Clear order"
          style={{
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-tertiary)',
            borderRadius: '6px'
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
            delete_sweep
          </span>
        </button>

        <button
          type="button"
          onClick={() => navigate('/checkout')}
          className="btn-primary"
          style={{
            backgroundColor: 'var(--color-primary)',
            color: '#FFFFFF',
            border: '1px solid var(--color-tertiary)',
            padding: '0.55rem 1rem',
            fontSize: '0.8rem',
            borderRadius: '6px'
          }}
        >
          <span>Checkout</span>
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
            arrow_forward
          </span>
        </button>
      </div>
    </aside>
  );
};
