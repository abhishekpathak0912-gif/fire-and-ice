import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export const MobileBottomNav: React.FC = () => {
  const { totals, openCart } = useCart();

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile Navigation">
      <NavLink
        to="/"
        end
        style={({ isActive }) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2px',
          textDecoration: 'none',
          color: isActive ? 'var(--color-primary)' : 'var(--color-on-surface-muted)',
          fontWeight: isActive ? 700 : 500,
          fontSize: '0.6875rem',
          minWidth: '56px',
          minHeight: '48px'
        })}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
          home
        </span>
        <span>Home</span>
      </NavLink>

      <NavLink
        to="/menu"
        style={({ isActive }) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2px',
          textDecoration: 'none',
          color: isActive ? 'var(--color-primary)' : 'var(--color-on-surface-muted)',
          fontWeight: isActive ? 700 : 500,
          fontSize: '0.6875rem',
          minWidth: '56px',
          minHeight: '48px'
        })}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
          restaurant_menu
        </span>
        <span>Menu</span>
      </NavLink>

      {/* Cart Action Button */}
      <button
        onClick={openCart}
        aria-label={`Cart (${totals.itemCount} items)`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2px',
          color: totals.itemCount > 0 ? 'var(--color-secondary)' : 'var(--color-on-surface-muted)',
          fontWeight: 600,
          fontSize: '0.6875rem',
          position: 'relative',
          minWidth: '56px',
          minHeight: '48px'
        }}
      >
        <div style={{ position: 'relative' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
            shopping_bag
          </span>
          {totals.itemCount > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '-4px',
                right: '-8px',
                backgroundColor: 'var(--color-secondary)',
                color: '#FFFFFF',
                borderRadius: '9999px',
                fontSize: '0.65rem',
                fontWeight: 750,
                minWidth: '16px',
                height: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 3px'
              }}
            >
              {totals.itemCount}
            </span>
          )}
        </div>
        <span>Cart</span>
      </button>

      <NavLink
        to="/locations"
        style={({ isActive }) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2px',
          textDecoration: 'none',
          color: isActive ? 'var(--color-primary)' : 'var(--color-on-surface-muted)',
          fontWeight: isActive ? 700 : 500,
          fontSize: '0.6875rem',
          minWidth: '56px',
          minHeight: '48px'
        })}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
          pin_drop
        </span>
        <span>Visit</span>
      </NavLink>

      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2px',
          textDecoration: 'none',
          color: isActive ? 'var(--color-primary)' : 'var(--color-on-surface-muted)',
          fontWeight: isActive ? 700 : 500,
          fontSize: '0.6875rem',
          minWidth: '56px',
          minHeight: '48px'
        })}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
          table_restaurant
        </span>
        <span>Reserve</span>
      </NavLink>
    </nav>
  );
};
