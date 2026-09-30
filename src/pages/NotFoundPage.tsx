import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div
      className="container-custom"
      style={{
        paddingTop: '5rem',
        paddingBottom: '6rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.25rem'
      }}
    >
      <div
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-surface-container)',
          color: 'var(--color-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '36px'
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '40px' }}>
          error_outline
        </span>
      </div>

      <span className="badge-caps badge-terracotta">Page Not Found</span>

      <h1
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '3rem',
          fontWeight: 600,
          color: 'var(--color-on-surface)'
        }}
      >
        404 &mdash; Culinary Page Lost
      </h1>

      <p
        style={{
          fontSize: '1.05rem',
          color: 'var(--color-on-surface-variant)',
          maxWidth: '460px',
          lineHeight: '1.6'
        }}
      >
        The page you are looking for does not exist or has been relocated. Return to the hearth of Fire and Ice.
      </p>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
        <Link to="/menu" className="btn-secondary">
          Explore Menu
        </Link>
      </div>
    </div>
  );
};
