import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BRANCHES } from '../data/branchData';

export const BranchDetailPage: React.FC = () => {
  const { branchId } = useParams<{ branchId: string }>();
  const branch = branchId && (branchId === 'thamel' || branchId === 'sanepa')
    ? BRANCHES[branchId]
    : null;

  if (!branch) {
    return (
      <div className="container-custom" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>Branch Not Found</h2>
        <p style={{ marginTop: '0.5rem', color: 'var(--color-on-surface-variant)' }}>
          The requested branch location could not be located.
        </p>
        <Link to="/locations" className="btn-primary" style={{ marginTop: '1.5rem' }}>
          View All Locations
        </Link>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: '5rem' }}>
      {/* Branch Hero Banner */}
      <section
        style={{
          position: 'relative',
          height: '380px',
          width: '100%',
          backgroundColor: 'var(--color-primary)',
          color: '#FFFFFF'
        }}
      >
        <img
          src={branch.heroImage}
          alt={branch.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.65 }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(53, 70, 56, 0.95) 0%, rgba(53, 70, 56, 0.4) 60%, transparent 100%)'
          }}
        />
        <div
          className="container-custom"
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}
        >
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Link to="/locations" style={{ color: 'var(--color-tertiary)', fontSize: '0.85rem', textDecoration: 'none' }}>
              &larr; All Locations
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
            <span className="badge-caps badge-brass" style={{ fontSize: '0.7rem' }}>
              Est. {branch.established}
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
              color: '#FFFFFF',
              fontWeight: 600,
              lineHeight: 1.1
            }}
          >
            {branch.name}
          </h1>

          <span style={{ fontSize: '0.95rem', color: 'var(--color-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {branch.subtitle}
          </span>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '1.25rem',
              color: 'var(--color-tertiary)',
              maxWidth: '640px'
            }}
          >
            "{branch.tagline}"
          </p>
        </div>
      </section>

      {/* Main Body */}
      <div className="container-custom" style={{ marginTop: '2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {/* Left Column: Story, Highlights & Amenities */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <span className="badge-caps badge-terracotta" style={{ marginBottom: '0.4rem' }}>
                Neighborhood &amp; Atmosphere
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                About {branch.name}
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-on-surface-variant)', lineHeight: '1.7', marginBottom: '1rem' }}>
                {branch.description}
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)', lineHeight: '1.6' }}>
                {branch.historicalContext}
              </p>
            </div>

            {/* Directions & Finding Us */}
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(197, 170, 121, 0.35)'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                Getting Here
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-on-surface-variant)', lineHeight: '1.5' }}>
                {branch.directionsNote}
              </p>
              <div style={{ marginTop: '1rem' }}>
                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '0.85rem' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>navigation</span>
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Amenities Grid */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                Branch Features &amp; Hospitality
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                {branch.amenities.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '8px',
                      border: '1px solid rgba(197, 170, 121, 0.3)',
                      fontSize: '0.85rem',
                      fontWeight: 500
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)', fontSize: '18px' }}>
                      check_circle
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Details Card & Ordering Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <aside
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(197, 170, 121, 0.4)',
                boxShadow: 'var(--shadow-md)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, borderBottom: '1px solid var(--color-surface-container)', paddingBottom: '0.5rem' }}>
                Contact &amp; Hours
              </h3>

              {/* Address */}
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-on-surface-muted)', fontWeight: 600, display: 'block' }}>
                  Location Address
                </span>
                <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-on-surface)' }}>
                  {branch.address}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-on-surface-variant)' }}>
                  {branch.city}
                </p>
              </div>

              {/* Telephone */}
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-on-surface-muted)', fontWeight: 600, display: 'block' }}>
                  Direct Telephone
                </span>
                <a
                  href={`tel:${branch.phone}`}
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--color-secondary)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    marginTop: '0.15rem'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>call</span>
                  {branch.displayPhone}
                </a>
              </div>

              {/* Operating Hours */}
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-on-surface-muted)', fontWeight: 600, display: 'block' }}>
                  Service Schedule
                </span>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-on-surface)' }}>
                  Daily: {branch.hours.weekdays}
                </p>
                {branch.hours.breakfast && (
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontStyle: 'italic' }}>
                    Breakfast: {branch.hours.breakfast}
                  </p>
                )}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '0.5rem' }}>
                <Link
                  to="/contact"
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.8rem' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>table_restaurant</span>
                  <span>Book a Table at {branch.neighborhood}</span>
                </Link>

                <a
                  href={branch.deliveryPartnerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ width: '100%', padding: '0.8rem' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delivery_dining</span>
                  <span>Order on Foodmandu</span>
                </a>
              </div>
            </aside>

            {/* Other Branch Quick Link */}
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                padding: '1.25rem',
                borderRadius: '12px',
                border: '1px solid rgba(197, 170, 121, 0.3)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-on-surface-muted)' }}>
                  Looking for our other location?
                </span>
                <p style={{ fontWeight: 600, color: 'var(--color-on-surface)' }}>
                  {branch.id === 'thamel' ? 'Sanepa (Lalitpur Garden)' : 'Thamel (Kathmandu Flagship)'}
                </p>
              </div>
              <Link
                to={`/locations/${branch.id === 'thamel' ? 'sanepa' : 'thamel'}`}
                className="btn-outline"
                style={{ fontSize: '0.75rem', padding: '0.4rem 0.75rem' }}
              >
                Switch &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
