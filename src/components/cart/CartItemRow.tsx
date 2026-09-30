import React from 'react';
import { CartItem } from '../../types/cart';
import { useCart } from '../../context/CartContext';
import { formatNPR } from '../../utils/formatCurrency';

interface CartItemRowProps {
  item: CartItem;
}

export const CartItemRow: React.FC<CartItemRowProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();
  const { dish, quantity, specialInstructions } = item;

  return (
    <div
      style={{
        padding: '0.85rem 0',
        borderBottom: '1px solid var(--color-surface-container)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.05rem',
              fontWeight: 600,
              color: 'var(--color-on-surface)',
              lineHeight: 1.2
            }}
          >
            {dish.name}
          </h4>
          <span style={{ fontSize: '0.8rem', color: 'var(--color-on-surface-muted)' }}>
            {formatNPR(dish.price)} each
          </span>
          {specialInstructions && (
            <p style={{ fontSize: '0.75rem', fontStyle: 'italic', color: 'var(--color-secondary)', marginTop: '0.15rem' }}>
              Note: {specialInstructions}
            </p>
          )}
        </div>

        {/* Item Total */}
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.05rem',
            fontWeight: 700,
            color: 'var(--color-secondary)',
            whiteSpace: 'nowrap'
          }}
        >
          {formatNPR(dish.price * quantity)}
        </span>
      </div>

      {/* Steppers & Delete Button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.2rem' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            border: '1px solid rgba(197, 170, 121, 0.45)',
            borderRadius: '6px',
            backgroundColor: 'var(--color-surface)'
          }}
        >
          <button
            type="button"
            onClick={() => updateQuantity(dish.id, quantity - 1)}
            aria-label={`Decrease ${dish.name} quantity`}
            style={{
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-on-surface)',
              fontWeight: 600
            }}
          >
            -
          </button>
          <span
            style={{
              minWidth: '28px',
              textAlign: 'center',
              fontSize: '0.875rem',
              fontWeight: 700
            }}
            aria-label={`Quantity: ${quantity}`}
          >
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => updateQuantity(dish.id, quantity + 1)}
            aria-label={`Increase ${dish.name} quantity`}
            style={{
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-on-surface)',
              fontWeight: 600
            }}
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={() => removeItem(dish.id)}
          aria-label={`Remove ${dish.name} from cart`}
          style={{
            color: 'var(--color-on-surface-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.2rem',
            fontSize: '0.75rem',
            padding: '0.3rem 0.5rem',
            borderRadius: '4px'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-error)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-on-surface-muted)')}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
            delete
          </span>
          <span>Remove</span>
        </button>
      </div>
    </div>
  );
};
