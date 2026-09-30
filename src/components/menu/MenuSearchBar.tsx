import React from 'react';

interface MenuSearchBarProps {
  value: string;
  onChange: (val: string) => void;
  onClear: () => void;
  resultCount?: number;
}

export const MenuSearchBar: React.FC<MenuSearchBarProps> = ({
  value,
  onChange,
  onClear,
  resultCount
}) => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <label htmlFor="menu-search-input" className="sr-only" style={{ display: 'none' }}>
        Search dishes, ingredients, or allergens
      </label>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{
            position: 'absolute',
            left: '1rem',
            color: 'var(--color-on-surface-muted)',
            pointerEvents: 'none',
            fontSize: '22px'
          }}
        >
          search
        </span>
        <input
          id="menu-search-input"
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search pizzas, handmade pastas, ingredients (e.g., truffle, garlic, gelato)..."
          style={{
            width: '100%',
            height: '50px',
            paddingLeft: '3rem',
            paddingRight: value ? '5.5rem' : '1.25rem',
            backgroundColor: 'var(--color-surface-container)',
            borderRadius: '8px',
            border: '1px solid rgba(197, 170, 121, 0.4)',
            fontSize: '0.95rem'
          }}
        />
        {value && (
          <button
            type="button"
            onClick={onClear}
            id="clear-search"
            aria-label="Clear search query"
            style={{
              position: 'absolute',
              right: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.35rem 0.6rem',
              borderRadius: '4px',
              backgroundColor: 'var(--color-surface-dim)',
              color: 'var(--color-on-surface)',
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase'
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>
              close
            </span>
            <span>Clear</span>
          </button>
        )}
      </div>

      {value && typeof resultCount === 'number' && (
        <p
          style={{
            fontSize: '0.8rem',
            color: 'var(--color-on-surface-variant)',
            marginTop: '0.4rem',
            paddingLeft: '0.25rem'
          }}
          aria-live="polite"
        >
          Found {resultCount} {resultCount === 1 ? 'dish' : 'dishes'} matching "{value}"
        </p>
      )}
    </div>
  );
};
