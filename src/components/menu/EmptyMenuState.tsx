import React from 'react';

interface EmptyMenuStateProps {
  query: string;
  onReset: () => void;
}

export const EmptyMenuState: React.FC<EmptyMenuStateProps> = ({ query, onReset }) => {
  return (
    <div
      id="no-results-state"
      role="region"
      aria-label="No results found"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '3.5rem 1.5rem',
        backgroundColor: 'var(--color-surface-container)',
        borderRadius: '12px',
        border: '1px solid rgba(197, 170, 121, 0.4)',
        marginTop: '1.5rem',
        width: '100%'
      }}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          color: 'var(--color-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '1rem'
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
          soup_kitchen
        </span>
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.5rem',
          fontWeight: 600,
          color: 'var(--color-on-surface)',
          marginBottom: '0.4rem'
        }}
      >
        No culinary match found
      </h3>

      <p
        style={{
          fontSize: '0.925rem',
          color: 'var(--color-on-surface-variant)',
          maxWidth: '440px',
          lineHeight: '1.5',
          marginBottom: '1.25rem'
        }}
      >
        {query
          ? `We couldn't locate any dish matching "${query}". Try searching for terms like "Margherita", "truffle", "tiramisu", or reset your filters.`
          : 'No dishes are available for the selected category or dietary filter combination.'}
      </p>

      <button
        type="button"
        id="reset-filter-btn"
        onClick={onReset}
        className="btn-primary"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
          restart_alt
        </span>
        <span>View Full Menu &amp; Clear Filters</span>
      </button>
    </div>
  );
};
