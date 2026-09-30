import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { MobileDrawer } from './MobileDrawer';

export const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { totals, openCart } = useCart();

  return (
    <>
      <header className="header-glass" role="banner">
        <div
          className="container-custom"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%'
          }}
        >
          {/* Left: Mobile Menu Trigger + Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              id="menu-open-btn"
              style={{
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                color: 'var(--color-on-surface)',
                backgroundColor: 'rgba(229, 222, 210, 0.4)'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                menu
              </span>
            </button>

            <Link
              to="/"
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em'
                }}
              >
                Fire &amp; Ice
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.65rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: 'var(--color-secondary)',
                  fontWeight: 600,
                  marginTop: '0.1rem'
                }}
              >
                Kathmandu 1996
              </span>
            </Link>
          </div>

          {/* Center: Desktop Navigation Bar */}
          <nav
            style={{
              display: 'none',
              gap: '1.75rem',
              alignItems: 'center'
            }}
            className="desktop-nav-links"
          >
            <style>{`
              @media (min-width: 900px) {
                .desktop-nav-links {
                  display: flex !important;
                }
              }
            `}</style>
            <NavLink
              to="/"
              end
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-primary)' : 'var(--color-on-surface)',
                borderBottom: isActive ? '2px solid var(--color-secondary)' : '2px solid transparent',
                paddingBottom: '0.2rem',
                transition: 'all 0.15s ease'
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-primary)' : 'var(--color-on-surface)',
                borderBottom: isActive ? '2px solid var(--color-secondary)' : '2px solid transparent',
                paddingBottom: '0.2rem',
                transition: 'all 0.15s ease'
              })}
            >
              Menu
            </NavLink>
            <NavLink
              to="/story"
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-primary)' : 'var(--color-on-surface)',
                borderBottom: isActive ? '2px solid var(--color-secondary)' : '2px solid transparent',
                paddingBottom: '0.2rem',
                transition: 'all 0.15s ease'
              })}
            >
              Our Story
            </NavLink>
            <NavLink
              to="/locations"
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-primary)' : 'var(--color-on-surface)',
                borderBottom: isActive ? '2px solid var(--color-secondary)' : '2px solid transparent',
                paddingBottom: '0.2rem',
                transition: 'all 0.15s ease'
              })}
            >
              Locations
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-primary)' : 'var(--color-on-surface)',
                borderBottom: isActive ? '2px solid var(--color-secondary)' : '2px solid transparent',
                paddingBottom: '0.2rem',
                transition: 'all 0.15s ease'
              })}
            >
              Reservations
            </NavLink>
          </nav>

          {/* Right: Cart Button & Action */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={openCart}
              aria-label={`Open Cart (${totals.itemCount} items)`}
              id="header-cart-btn"
              className="btn-primary"
              style={{
                padding: '0.55rem 0.95rem',
                fontSize: '0.8rem',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '19px' }}>
                shopping_bag
              </span>
              <span style={{ fontWeight: 600 }}>Cart</span>
              {totals.itemCount > 0 && (
                <span
                  style={{
                    backgroundColor: 'var(--color-secondary)',
                    color: '#FFFFFF',
                    borderRadius: '9999px',
                    minWidth: '20px',
                    height: '20px',
                    padding: '0 5px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '0.15rem'
                  }}
                  id="header-cart-badge"
                >
                  {totals.itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Drawer */}
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};
