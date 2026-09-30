import React, { useState } from 'react';

export const DemoBanner: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div
        className="demo-badge-banner"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap'
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '15px', color: 'var(--color-tertiary)' }}>
          verified_user
        </span>
        <span>
          <strong>FRONTEND DEMONSTRATION ONLY:</strong> Local client-side orders & reservations. No real payments or restaurant kitchen transmissions are processed.
        </span>
        <button
          onClick={() => setShowModal(true)}
          style={{
            textDecoration: 'underline',
            color: 'var(--color-tertiary)',
            fontWeight: 600,
            fontSize: '0.75rem',
            marginLeft: '0.25rem',
            background: 'none',
            border: 'none',
            padding: 0
          }}
          aria-haspopup="dialog"
        >
          View System Architecture & Limitations
        </button>
      </div>

      {showModal && (
        <div
          className="drawer-backdrop"
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
        >
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '640px',
              width: '100%',
              padding: '1.75rem',
              backgroundColor: '#FFFFFF',
              color: 'var(--color-on-surface)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <span className="badge-caps badge-terracotta" style={{ marginBottom: '0.35rem' }}>
                  Architecture &amp; Limitations Notice
                </span>
                <h3 id="demo-modal-title" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  Frontend Demonstration Details
                </h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                aria-label="Close dialog"
                style={{
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px',
                  backgroundColor: 'var(--color-surface-container)'
                }}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--color-on-surface-variant)' }}>
              <p style={{ marginBottom: '0.75rem' }}>
                This web application is a high-fidelity frontend rebrand demonstration for <strong>Fire and Ice Pizzeria Kathmandu</strong>. It delivers complete client-side interactions, cart state persistence, routing, and form validation.
              </p>

              <h4 style={{ color: 'var(--color-primary)', fontSize: '1rem', marginTop: '1rem', marginBottom: '0.4rem' }}>
                What Operates Locally:
              </h4>
              <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
                <li>Cart addition, quantity increment/decrement, subtotal and Nepal tax (VAT &amp; service charge) calculations.</li>
                <li>Local persistence in your browser’s localStorage.</li>
                <li>Menu search, filtering by category, and dish details inspection.</li>
                <li>Comprehensive checkout &amp; reservation form validation with client-side demo receipt generation.</li>
              </ul>

              <h4 style={{ color: 'var(--color-secondary)', fontSize: '1rem', marginTop: '1rem', marginBottom: '0.4rem' }}>
                Requirements for Production Connection:
              </h4>
              <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem' }}>
                <li><strong>Payment Gateway:</strong> Integration with Nepali payment APIs (eSewa, Khalti, ConnectIPS, Fonepay) or international credit card processors (Stripe).</li>
                <li><strong>Backend API &amp; POS:</strong> Node.js/Go backend server with webhook dispatch to Fire and Ice kitchen ticket printers (ESC/POS).</li>
                <li><strong>Messaging / Email:</strong> Transactional email service (Resend, SendGrid) and SMS dispatch (Sparrow SMS Nepal) for customer order confirmations and branch staff alerts.</li>
                <li><strong>Real Table Management:</strong> Two-way calendar sync with floor management software.</li>
              </ul>

              <div
                style={{
                  backgroundColor: 'var(--color-surface-container)',
                  padding: '0.75rem 1rem',
                  borderRadius: '6px',
                  marginTop: '1.25rem',
                  fontSize: '0.85rem'
                }}
              >
                <strong>For Real Dining &amp; Takeaway:</strong> Please contact the Thamel branch at <a href="tel:+97714250210" style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>+977 1 4250210</a> or the Sanepa branch at <a href="tel:+97715538825" style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>+977 1 5538825</a>.
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
              <button className="btn-primary" onClick={() => setShowModal(false)}>
                Understood, Proceed with Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
