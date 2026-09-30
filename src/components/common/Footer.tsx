import React from 'react';
import { Link } from 'react-router-dom';
import { BRANCHES } from '../../data/branchData';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-primary)',
        color: '#F5F1E9',
        borderTop: '1px solid rgba(197, 170, 121, 0.35)',
        marginTop: 'auto',
        paddingTop: '3.5rem',
        paddingBottom: '5rem' // extra padding for mobile bottom bar
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '2.5rem'
          }}
        >
          {/* Col 1: Brand & Philosophy */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.65rem',
                color: '#FFFFFF',
                marginBottom: '0.4rem',
                fontWeight: 600
              }}
            >
              Fire &amp; Ice Pizzeria
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                color: 'var(--color-tertiary)',
                fontSize: '1.05rem',
                marginBottom: '1rem'
              }}
            >
              "The warmth of an Italian home in the Himalayas since 1996."
            </p>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'rgba(245, 241, 233, 0.82)',
                lineHeight: '1.6'
              }}
            >
              Founded by Annamaria Forgione, introducing true Italian wood-fired pizza, handmade egg pastas, and artisanal gelato to Kathmandu.
            </p>
          </div>

          {/* Col 2: Thamel Flagship Branch */}
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.22)',
              padding: '1.25rem',
              borderRadius: '8px',
              border: '1px solid rgba(197, 170, 121, 0.25)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <h4
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  color: 'var(--color-tertiary)',
                  fontWeight: 600
                }}
              >
                Thamel Branch
              </h4>
              <span className="badge-caps badge-brass" style={{ fontSize: '0.65rem' }}>
                Est. 1996
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(245, 241, 233, 0.9)', marginBottom: '0.4rem' }}>
              {BRANCHES.thamel.address}
            </p>
            <p style={{ fontSize: '0.8rem', color: 'rgba(245, 241, 233, 0.75)', marginBottom: '0.6rem' }}>
              Daily: {BRANCHES.thamel.hours.weekdays}
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href={`tel:${BRANCHES.thamel.phone}`}
                style={{
                  color: 'var(--color-tertiary)',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>call</span>
                +977 1 4250210
              </a>
              <Link
                to="/locations/thamel"
                style={{
                  color: '#FFFFFF',
                  fontSize: '0.85rem',
                  textDecoration: 'underline',
                  opacity: 0.85
                }}
              >
                Branch details &rarr;
              </Link>
            </div>
          </div>

          {/* Col 3: Sanepa Branch */}
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.22)',
              padding: '1.25rem',
              borderRadius: '8px',
              border: '1px solid rgba(197, 170, 121, 0.25)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <h4
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  color: 'var(--color-tertiary)',
                  fontWeight: 600
                }}
              >
                Sanepa Branch
              </h4>
              <span className="badge-caps badge-brass" style={{ fontSize: '0.65rem' }}>
                Garden Terrace
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(245, 241, 233, 0.9)', marginBottom: '0.4rem' }}>
              {BRANCHES.sanepa.address}
            </p>
            <p style={{ fontSize: '0.8rem', color: 'rgba(245, 241, 233, 0.75)', marginBottom: '0.6rem' }}>
              Daily: {BRANCHES.sanepa.hours.weekdays}
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href={`tel:${BRANCHES.sanepa.phone}`}
                style={{
                  color: 'var(--color-tertiary)',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>call</span>
                +977 1 5538825
              </a>
              <Link
                to="/locations/sanepa"
                style={{
                  color: '#FFFFFF',
                  fontSize: '0.85rem',
                  textDecoration: 'underline',
                  opacity: 0.85
                }}
              >
                Branch details &rarr;
              </Link>
            </div>
          </div>

          {/* Col 4: Quick Navigation & Verified Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                color: 'var(--color-tertiary)',
                marginBottom: '0.75rem',
                fontWeight: 600
              }}
            >
              Explore
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
              <li>
                <Link to="/menu" style={{ color: 'rgba(245, 241, 233, 0.85)', textDecoration: 'none' }}>
                  Complete Menu &amp; Specials
                </Link>
              </li>
              <li>
                <Link to="/story" style={{ color: 'rgba(245, 241, 233, 0.85)', textDecoration: 'none' }}>
                  Our 28-Year Heritage
                </Link>
              </li>
              <li>
                <Link to="/locations" style={{ color: 'rgba(245, 241, 233, 0.85)', textDecoration: 'none' }}>
                  Branch Locations &amp; Maps
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'rgba(245, 241, 233, 0.85)', textDecoration: 'none' }}>
                  Reserve a Table
                </Link>
              </li>
              <li>
                <Link to="/checkout" style={{ color: 'rgba(245, 241, 233, 0.85)', textDecoration: 'none' }}>
                  Frontend Checkout Demo
                </Link>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Fire+and+Ice+Pizzeria+Thamel"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-tertiary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>open_in_new</span>
                  Google Maps Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(197, 170, 121, 0.25)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            fontSize: '0.8rem',
            color: 'rgba(245, 241, 233, 0.7)'
          }}
        >
          <p>
            <strong>Frontend Demonstration Notice:</strong> This web application demonstrates the frontend design and interactive features for Fire and Ice Pizzeria Kathmandu. It does not transmit live orders to the kitchen or charge payment cards. For real takeaway or delivery, please call our branches directly or use authorized delivery partners.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}
          >
            <span>&copy; {new Date().getFullYear()} Fire and Ice Pizzeria Kathmandu. Crafted with authentic heritage.</span>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <span>Thamel 1996</span>
              <span>•</span>
              <span>Sanepa 2021</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
