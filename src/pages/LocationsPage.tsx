import React from 'react';
import { Link } from 'react-router-dom';
import { BRANCHES, BranchDetails } from '../data/branchData';

export const LocationsPage: React.FC = () => {
  const branchesList: BranchDetails[] = [BRANCHES.thamel, BRANCHES.sanepa];

  return (
    <div className="container-custom" style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span className="badge-caps badge-terracotta" style={{ marginBottom: '0.4rem' }}>
          Kathmandu Valley Destinations
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.85rem',
            fontWeight: 600,
            color: 'var(--color-on-surface)'
          }}
        >
          Our Locations
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '1.2rem',
            color: 'var(--color-on-surface-variant)',
            maxWidth: '580px',
            margin: '0.5rem auto 0'
          }}
        >
          Two historic dining sanctuaries across Kathmandu and Lalitpur, unified by authentic refractory wood hearths and classic Italian hospitality.
        </p>
      </div>

      {/* Branches Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.5rem' }}>
        {branchesList.map((branch: BranchDetails) => (
          <div
            key={branch.id}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid rgba(197, 170, 121, 0.4)',
              boxShadow: 'var(--shadow-md)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Visual Frame */}
            <div style={{ position: 'relative', height: '240px', width: '100%' }}>
              <img
                src={branch.heroImage}
                alt={branch.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)'
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'var(--color-primary)',
                  color: '#FFFFFF',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em'
                }}
              >
                Est. {branch.established} &bull; {branch.neighborhood}
              </span>
              <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem', right: '1.25rem', color: '#FFFFFF' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', fontWeight: 600, color: '#FFFFFF' }}>
                  {branch.name}
                </h2>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-tertiary)' }}>{branch.subtitle}</span>
              </div>
            </div>

            {/* Content & Details */}
            <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '1rem' }}>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-on-surface-variant)', lineHeight: '1.6' }}>
                {branch.description}
              </p>

              {/* Quick Details Table */}
              <div
                style={{
                  backgroundColor: 'var(--color-surface)',
                  padding: '1.25rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(197, 170, 121, 0.25)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  fontSize: '0.875rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)', fontSize: '18px' }}>
                    location_on
                  </span>
                  <span>{branch.address}, {branch.city}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)', fontSize: '18px' }}>
                    schedule
                  </span>
                  <span>Daily: {branch.hours.weekdays}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)', fontSize: '18px' }}>
                    call
                  </span>
                  <a href={`tel:${branch.phone}`} style={{ color: 'var(--color-on-surface)', fontWeight: 600, textDecoration: 'none' }}>
                    {branch.displayPhone}
                  </a>
                </div>
              </div>

              {/* Amenities chips */}
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-on-surface-muted)', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                  Key Amenities:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {branch.amenities.map((amenity, i) => (
                    <span key={i} className="badge-caps badge-stone" style={{ fontSize: '0.7rem' }}>
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: 'auto', paddingTop: '1rem' }}>
                <Link
                  to={`/locations/${branch.id}`}
                  className="btn-primary"
                  style={{ flex: 1, fontSize: '0.8rem', padding: '0.65rem' }}
                >
                  Branch Overview &rarr;
                </Link>
                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ flex: 1, fontSize: '0.8rem', padding: '0.65rem' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>navigation</span>
                  <span>Directions</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
