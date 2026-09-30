import React from 'react';
import { Link } from 'react-router-dom';
import { TIMELINE, PRESS_QUOTES } from '../data/storyData';

export const StoryPage: React.FC = () => {
  return (
    <div style={{ paddingBottom: '5rem' }}>
      {/* Story Hero */}
      <section
        style={{
          position: 'relative',
          paddingTop: '3.5rem',
          paddingBottom: '3rem',
          backgroundColor: 'var(--color-surface)',
          borderBottom: '1px solid rgba(197, 170, 121, 0.3)'
        }}
      >
        <div className="container-custom" style={{ maxWidth: '840px', textAlign: 'center' }}>
          <span className="badge-caps badge-terracotta" style={{ marginBottom: '0.5rem' }}>
            Kathmandu Heritage Since 1996
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              color: 'var(--color-on-surface)',
              fontWeight: 600,
              lineHeight: 1.15
            }}
          >
            The Hearth &amp; Heritage of Fire and Ice
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '1.25rem',
              color: 'var(--color-secondary)',
              marginTop: '0.75rem',
              lineHeight: '1.5'
            }}
          >
            "How an Italian vision brought the aromas of wood smoke, mozzarella, and espresso to the foothills of the Himalayas."
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <div className="container-custom" style={{ maxWidth: '800px', marginTop: '3rem' }}>
        <article style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-on-surface)' }}>
          <p>
            In the winter of 1996, Italian native <strong>Annamaria Forgione</strong> founded Fire and Ice Pizzeria in Thamel, Kathmandu. At a time when authentic European cuisine was virtually unheard of in Nepal, Annamaria envisioned creating a culinary sanctuary — a place where travelers, mountaineers returning from Himalayan expeditions, and local residents could gather around a glowing wood hearth.
          </p>

          {/* Quote Inset */}
          <div
            style={{
              backgroundColor: 'var(--color-surface-container)',
              padding: '2rem',
              borderRadius: '12px',
              borderLeft: '4px solid var(--color-secondary)',
              borderTop: '1px solid rgba(197, 170, 121, 0.3)',
              borderRight: '1px solid rgba(197, 170, 121, 0.3)',
              borderBottom: '1px solid rgba(197, 170, 121, 0.3)'
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.25rem',
                color: 'var(--color-primary)',
                lineHeight: '1.5',
                marginBottom: '0.5rem'
              }}
            >
              "We didn't just want to bake pizza. We wanted to import the genuine soul of the Italian kitchen — refractory clay from Italy, the finest Caputo wheat, and the timeless tradition of unhurried hospitality."
            </p>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              &mdash; Annamaria Forgione, Founder
            </span>
          </div>

          <p>
            To achieve true Neapolitan standards, refractory clay bricks were imported directly from Italy to construct Kathmandu’s first genuine wood-fired pizza oven. Fired at over 450°C, the intense embers create the characteristic leopard-spotted, airy, and crisp crust that has defined Fire &amp; Ice for nearly three decades.
          </p>

          <p>
            In 2001, Fire and Ice imported Nepal’s first authentic Carpigiani gelato batch freezer. Using whole milk from Himalayan dairy farms, Italian pistachio pastes, and pure Madagascar vanilla, the gelateria became an instant Kathmandu sensation, offering relief from the summer heat and an exquisite finish to fireside dinners.
          </p>
        </article>

        {/* Timeline Milestones */}
        <section style={{ marginTop: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge-caps badge-brass">Historical Milestones</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', fontWeight: 600, marginTop: '0.25rem' }}>
              Our 28-Year Journey
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {TIMELINE.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                  backgroundColor: '#FFFFFF',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(197, 170, 121, 0.35)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--color-tertiary)',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {item.year}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 600, color: 'var(--color-on-surface)' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--color-on-surface-variant)', lineHeight: '1.6', marginTop: '0.35rem' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Press Accolades */}
        <section style={{ marginTop: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="badge-caps badge-terracotta">Accolades &amp; Voices</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', fontWeight: 600, marginTop: '0.25rem' }}>
              What the World Says
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {PRESS_QUOTES.map((pq, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(197, 170, 121, 0.35)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: '1.5' }}>
                  "{pq.quote}"
                </p>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-secondary)', marginTop: 'auto' }}>
                  &mdash; {pq.source}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Story CTA */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            Experience the Wood-Fired Tradition
          </h3>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/menu" className="btn-primary">
              Explore Our Menu
            </Link>
            <Link to="/locations" className="btn-secondary">
              Find Our Locations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
