import React, { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when drawer open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { label: 'Home', path: '/', icon: 'local_pizza' },
    { label: 'Complete Menu', path: '/menu', icon: 'restaurant_menu' },
    { label: 'Our Story', path: '/story', icon: 'auto_stories' },
    { label: 'Locations & Directions', path: '/locations', icon: 'pin_drop' },
    { label: 'Thamel Branch', path: '/locations/thamel', icon: 'storefront' },
    { label: 'Sanepa Branch', path: '/locations/sanepa', icon: 'yard' },
    { label: 'Table Reservation', path: '/contact', icon: 'table_restaurant' },
    { label: 'Checkout Demo', path: '/checkout', icon: 'shopping_bag' }
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="drawer-backdrop"
        onClick={onClose}
        aria-hidden="true"
        style={{ opacity: isOpen ? 1 : 0 }}
      />

      {/* Drawer Panel */}
      <aside
        ref={drawerRef}
        className="drawer-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation drawer"
        style={{
          width: '85%',
          maxWidth: '340px',
          left: 0,
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          backgroundColor: '#FFFFFF',
          borderRight: '1px solid rgba(197, 170, 121, 0.35)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          zIndex: 250
        }}
      >
        <div style={{ padding: '1.25rem 1.5rem', overflowY: 'auto' }}>
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid var(--color-surface-container)'
            }}
          >
            <Link
              to="/"
              onClick={onClose}
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  lineHeight: 1.1
                }}
              >
                Fire &amp; Ice
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--color-secondary)',
                  fontWeight: 600,
                  marginTop: '0.2rem'
                }}
              >
                Kathmandu 1996
              </span>
            </Link>

            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                backgroundColor: 'var(--color-surface-container)',
                color: 'var(--color-on-surface)'
              }}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: '1.25rem' }}>
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `drawer-nav-item ${isActive ? 'active-drawer-nav' : ''}`
                }
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--color-primary)' : 'var(--color-on-surface)',
                  backgroundColor: isActive ? 'var(--color-surface-container)' : 'transparent',
                  borderLeft: isActive ? '3px solid var(--color-secondary)' : '3px solid transparent'
                })}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: '20px',
                    color: 'var(--color-secondary)'
                  }}
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Footer Quote in Drawer */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            backgroundColor: 'var(--color-surface)',
            borderTop: '1px solid rgba(197, 170, 121, 0.25)'
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '0.95rem',
              color: 'var(--color-secondary)',
              lineHeight: 1.4,
              marginBottom: '0.5rem'
            }}
          >
            "Kathmandu's wood-fired tradition since 1996."
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.75rem', color: 'var(--color-on-surface-muted)' }}>
            <span>Thamel: +977 1 4250210</span>
            <span>•</span>
            <span>Sanepa: +977 1 5538825</span>
          </div>
        </div>
      </aside>
    </>
  );
};
