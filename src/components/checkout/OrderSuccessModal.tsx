import React from 'react';
import { DemoOrderConfirmation } from '../../types/checkout';
import { formatNPR } from '../../utils/formatCurrency';

interface OrderSuccessModalProps {
  confirmation: DemoOrderConfirmation;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ confirmation, onClose }) => {
  return (
    <div
      className="drawer-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-success-title"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        zIndex: 300
      }}
    >
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '580px',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          padding: '2rem 1.75rem'
        }}
      >
        {/* Celebration Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-tertiary)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.75rem',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>
              task_alt
            </span>
          </div>

          <span className="badge-caps badge-terracotta" style={{ marginBottom: '0.4rem' }}>
            Frontend Demonstration Order
          </span>
          <h2
            id="order-success-title"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.85rem',
              color: 'var(--color-on-surface)',
              fontWeight: 600
            }}
          >
            Order Demonstration Confirmed
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-on-surface-variant)', marginTop: '0.25rem' }}>
            Demo Reference ID: <strong style={{ color: 'var(--color-secondary)' }}>{confirmation.orderId}</strong>
          </p>
        </div>

        {/* Demo Notice Banner */}
        <div
          style={{
            backgroundColor: 'var(--color-surface-container)',
            border: '1px solid rgba(197, 170, 121, 0.4)',
            borderRadius: '8px',
            padding: '0.75rem 1rem',
            fontSize: '0.825rem',
            color: 'var(--color-on-surface-variant)',
            lineHeight: '1.5',
            marginBottom: '1.25rem'
          }}
        >
          <strong>Notice:</strong> This is a successful client-side validation simulation. Because this is a frontend-only prototype, no payment was taken and no notification was dispatched to the restaurant. To place an authentic order, contact Fire &amp; Ice at <strong>{confirmation.branchPhone}</strong>.
        </div>

        {/* Order Details Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            backgroundColor: 'var(--color-surface)',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1.25rem',
            fontSize: '0.85rem'
          }}
        >
          <div>
            <span style={{ color: 'var(--color-on-surface-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>
              Customer
            </span>
            <strong style={{ color: 'var(--color-on-surface)' }}>{confirmation.form.fullName}</strong>
            <div style={{ color: 'var(--color-on-surface-variant)' }}>{confirmation.form.phone}</div>
          </div>

          <div>
            <span style={{ color: 'var(--color-on-surface-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>
              Service Branch
            </span>
            <strong style={{ color: 'var(--color-on-surface)' }}>{confirmation.branchName}</strong>
            <div style={{ color: 'var(--color-on-surface-variant)' }}>{confirmation.branchAddress}</div>
          </div>

          <div>
            <span style={{ color: 'var(--color-on-surface-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>
              Order Type
            </span>
            <strong style={{ textTransform: 'capitalize', color: 'var(--color-secondary)' }}>
              {confirmation.form.orderType}
            </strong>
            {confirmation.form.deliveryAddress && (
              <div style={{ color: 'var(--color-on-surface-variant)', fontSize: '0.8rem' }}>
                Deliver to: {confirmation.form.deliveryAddress}
              </div>
            )}
            {confirmation.form.tableNumber && (
              <div style={{ color: 'var(--color-on-surface-variant)', fontSize: '0.8rem' }}>
                Table: {confirmation.form.tableNumber}
              </div>
            )}
          </div>

          <div>
            <span style={{ color: 'var(--color-on-surface-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>
              Simulated Prep Time
            </span>
            <strong style={{ color: 'var(--color-primary)' }}>{confirmation.estimatedTime}</strong>
          </div>
        </div>

        {/* Ordered Items Summary */}
        <div style={{ marginBottom: '1.25rem' }}>
          <h4
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--color-primary)',
              fontWeight: 700,
              marginBottom: '0.5rem'
            }}
          >
            Ordered Items ({confirmation.totals.itemCount}):
          </h4>
          <div style={{ maxHeight: '160px', overflowY: 'auto', border: '1px solid var(--color-surface-container)', borderRadius: '6px' }}>
            {confirmation.items.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.85rem',
                  borderBottom: idx === confirmation.items.length - 1 ? 'none' : '1px solid var(--color-surface-container)'
                }}
              >
                <span>
                  <strong>{item.quantity}x</strong> {item.dish.name}
                </span>
                <span>{formatNPR(item.dish.price * item.quantity)}</span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '0.75rem',
              paddingTop: '0.5rem',
              borderTop: '1px solid var(--color-surface-container)',
              fontSize: '1.1rem',
              fontWeight: 700
            }}
          >
            <span>Total Demo Amount:</span>
            <span style={{ color: 'var(--color-secondary)' }}>
              {formatNPR(confirmation.totals.grandTotal)}
            </span>
          </div>
        </div>

        {/* Modal Actions */}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => window.print()}
            className="btn-secondary"
            style={{ fontSize: '0.8rem' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              print
            </span>
            <span>Print Receipt</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="btn-primary"
            style={{ fontSize: '0.8rem' }}
          >
            <span>Return to Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
};
