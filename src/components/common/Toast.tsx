import React, { useEffect } from 'react';
import { useCart } from '../../context/CartContext';

export const Toast: React.FC = () => {
  const { toast, hideToast, openCart } = useCart();

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast.id, toast.visible, hideToast]);

  if (!toast.visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="toast-banner"
      id="cart-toast-banner"
    >
      <span className="material-symbols-outlined filled" style={{ color: 'var(--color-tertiary)' }}>
        check_circle
      </span>
      <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{toast.message}</span>
      <button
        onClick={() => {
          hideToast();
          openCart();
        }}
        style={{
          marginLeft: 'auto',
          padding: '0.2rem 0.5rem',
          backgroundColor: 'rgba(255,255,255,0.15)',
          color: '#FFFFFF',
          borderRadius: '4px',
          fontSize: '0.75rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}
      >
        View Cart
      </button>
      <button
        onClick={hideToast}
        aria-label="Dismiss notification"
        style={{ color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center' }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
          close
        </span>
      </button>
    </div>
  );
};
