import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from '../data/menuData';
import { BRANCHES } from '../data/branchData';
import { PRESS_QUOTES, FAQS } from '../data/storyData';
import { DishCard } from '../components/menu/DishCard';
import { Accordion } from '../components/common/Accordion';
import { DishDetailModal } from '../components/menu/DishDetailModal';
import { MenuItem } from '../types/menu';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { openCart } = useCart();
  const [selectedDish, setSelectedDish] = React.useState<MenuItem | null>(null);

  // Signature dishes to feature on the homepage
  const signatureDishes = MENU_ITEMS.filter(item =>
    ['pizza-fire-ice-special', 'pizza-margherita-classica', 'pizza-quattro-formaggi', 'pasta-tagliatelle-funghi'].includes(item.id)
  );

  const faqAccordionItems = FAQS.map((faq, index) => ({
    id: `faq-${index}`,
    title: faq.q,
    content: <p style={{ margin: 0 }}>{faq.a}</p>
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', paddingBottom: '3rem' }}>
      {/* 1. HERO SECTION */}
      <section
        style={{
          paddingTop: '2rem',
          paddingBottom: '1rem'
        }}
      >
        <div className="container-custom">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            {/* Left Hero Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="badge-caps badge-stone" style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-secondary)',
                      display: 'inline-block'
                    }}
                  />
                  EST. 1996 &bull; THAMEL &amp; SANEPA, KATHMANDU
                </span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                  lineHeight: '1.1',
                  color: 'var(--color-on-surface)',
                  letterSpacing: '-0.02em',
                  fontWeight: 500
                }}
              >
                An Italian table, in the heart of Kathmandu.
              </h1>

              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                  color: 'var(--color-on-surface-variant)',
                  lineHeight: '1.5'
                }}
              >
                Wood-fired pizza, handmade pasta, and Italian espresso crafted with genuine heritage since 1996.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
                <Link to="/menu" className="btn-primary" style={{ padding: '0.85rem 1.6rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                    restaurant_menu
                  </span>
                  <span>Explore Menu</span>
                </Link>

                <button
                  type="button"
                  onClick={openCart}
                  className="btn-secondary"
                  style={{ padding: '0.85rem 1.6rem' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                    shopping_bag
                  </span>
                  <span>Order Demo Cart</span>
                </button>
              </div>

              {/* Quick Trust Badges */}
              <div
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'center',
                  paddingTop: '0.5rem',
                  color: 'var(--color-secondary)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>local_fire_department</span>
                  <span>450°C Wood Oven</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>bakery_dining</span>
                  <span>48h Cold Ferment</span>
                </div>
              </div>
            </div>

            {/* Right Hero Framing Image */}
            <div
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid rgba(197, 170, 121, 0.4)',
                aspectRatio: '1.4 / 1',
                backgroundColor: 'var(--color-surface-container)'
              }}
            >
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1UUXYhO_Hscx7jwY4l7Tm70zaC9AHMzTdmq-H8mdevRgE-SV3Ufk6JLdOQR7UM_qkhxk6xsUtFY2c9qAPQ29373K6jFfh0E4jGmAUOtPFDbT1U75DcYy825UeHOeFyY0RNXUJllhFP9AUUZnpyd1hkenxgJ1WlVMsJiZSz2-bRUUfS6eFCqxK2vfCLleiZ6Y68li1xNxHdm3p2pxPe0lEQ2wnsa0P9J-31UY5gEHkP8knV-mGiZUVnHsxg"
                alt="Artisanal Neapolitan wood-fired pizza with bubbling mozzarella and charred blistered crust"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  right: '1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: '#FFFFFF'
                }}
              >
                <span
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(4px)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    border: '1px solid rgba(255,255,255,0.15)'
                  }}
                >
                  Wood-fired since 1996
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    color: 'var(--color-tertiary)',
                    fontSize: '1rem'
                  }}
                >
                  Fornitura Tradizionale
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HERITAGE TEASER BANNER */}
      <section>
        <div className="container-custom">
          <div
            style={{
              backgroundColor: 'var(--color-surface-container)',
              borderRadius: '12px',
              padding: '1.75rem',
              border: '1px solid rgba(197, 170, 121, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: 'rgba(182, 94, 70, 0.15)',
                color: 'var(--color-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                auto_stories
              </span>
            </div>

            <div style={{ flex: 1, minWidth: '260px' }}>
              <span className="badge-caps badge-terracotta" style={{ marginBottom: '0.35rem' }}>
                Our 28-Year Story
              </span>
              <p style={{ fontSize: '0.975rem', color: 'var(--color-on-surface)', lineHeight: '1.6' }}>
                Founded in 1996 by Annamaria Forgione, introducing true Italian wood-fired pizza and artisanal batch-churned gelato to Nepal. Over 28 years of culinary warmth and memory.
              </p>
            </div>

            <Link
              to="/story"
              className="btn-outline"
              style={{ whiteSpace: 'nowrap' }}
            >
              <span>Read Full Story</span>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE DISHES */}
      <section>
        <div className="container-custom">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-secondary)',
                  fontWeight: 600
                }}
              >
                LE SPECIALITÀ DELLA CASA
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: 'var(--color-on-surface)'
                }}
              >
                Signature Dishes
              </h2>
            </div>

            <Link
              to="/menu"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--color-secondary)',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}
            >
              <span>View Complete Menu</span>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                arrow_forward
              </span>
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {signatureDishes.map(dish => (
              <DishCard
                key={dish.id}
                dish={dish}
                onOpenDetails={(d) => setSelectedDish(d)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. BREAKFAST EXPERIENCE SPOTLIGHT */}
      <section>
        <div className="container-custom">
          <div
            style={{
              backgroundColor: 'var(--color-surface-container)',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(197, 170, 121, 0.35)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              alignItems: 'center'
            }}
          >
            <div style={{ position: 'relative', height: '100%', minHeight: '260px' }}>
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1VbEFk6zpn_uan6ecvtSze59qdzhd1ifTlolO4CTL5jP2ZhXLPiagUnVydLp9sm2ndHVVgqiP19e5DjHuoGNIQoVDAov0x8iPttZfp0Un0V9h9Czc9IBOIpriqbarBkDD8x9-_SqwOS09CWCRkmJ8a8zP73SjV2I_nLGyNt7ELqjqUQ-puN2J4_LkkaoHPYPWOoOsHQhP7xKNiWQfpcamDqGu0ykPyD0Vp0nkhZAJPh6KWibY0ll9OEsukk"
                alt="Fresh Italian breakfast croissants and espresso"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'rgba(0,0,0,0.65)',
                  color: '#FFFFFF',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}
              >
                Daily from 8:00 AM
              </span>
            </div>

            <div style={{ padding: '2.25rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span className="badge-caps badge-terracotta">
                Morning in Kathmandu
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.85rem',
                  fontWeight: 600,
                  color: 'var(--color-on-surface)'
                }}
              >
                Italian Mornings &amp; Espresso Bar
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-on-surface-variant)', lineHeight: '1.6' }}>
                Start your Kathmandu morning with freshly baked Italian cornetti, cast-iron farm frittatas, seasonal fruit bowls, and freshly pulled Illy dark roast espresso. Served daily at both our Thamel and Sanepa locations.
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => navigate('/menu?category=breakfast')}
                  className="btn-primary"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                    bakery_dining
                  </span>
                  <span>Explore Breakfast Menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TWIN LOCATIONS SPOTLIGHT */}
      <section>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-secondary)',
                fontWeight: 600
              }}
            >
              TWO HISTORIC NEIGHBORHOODS
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.25rem',
                fontWeight: 600,
                color: 'var(--color-on-surface)',
                marginTop: '0.2rem'
              }}
            >
              Our Kathmandu Locations
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: 'var(--color-on-surface-variant)',
                maxWidth: '540px',
                margin: '0.5rem auto 0'
              }}
            >
              Whether bustling in central Thamel or relaxing in the Sanepa garden, experience the same refractory hearth excellence.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem'
            }}
          >
            {/* Thamel Branch */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid rgba(197, 170, 121, 0.4)',
                boxShadow: 'var(--shadow-sm)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '200px', width: '100%', position: 'relative' }}>
                <img
                  src={BRANCHES.thamel.heroImage}
                  alt={BRANCHES.thamel.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'var(--color-primary)',
                    color: '#FFFFFF',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase'
                  }}
                >
                  The Original Since 1996
                </span>
              </div>

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '0.75rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', fontWeight: 600 }}>
                  {BRANCHES.thamel.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)' }}>
                  {BRANCHES.thamel.address}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--color-on-surface-variant)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--color-secondary)' }}>schedule</span>
                    <span>Daily: {BRANCHES.thamel.hours.weekdays}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--color-secondary)' }}>call</span>
                    <a href={`tel:${BRANCHES.thamel.phone}`} style={{ color: 'var(--color-on-surface)', textDecoration: 'none', fontWeight: 600 }}>
                      {BRANCHES.thamel.displayPhone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto', paddingTop: '1rem' }}>
                  <Link
                    to="/locations/thamel"
                    className="btn-secondary"
                    style={{ flex: 1, fontSize: '0.8rem', padding: '0.6rem' }}
                  >
                    Branch Details
                  </Link>
                  <a
                    href={BRANCHES.thamel.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ flex: 1, fontSize: '0.8rem', padding: '0.6rem' }}
                  >
                    Directions &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Sanepa Branch */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid rgba(197, 170, 121, 0.4)',
                boxShadow: 'var(--shadow-sm)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '200px', width: '100%', position: 'relative' }}>
                <img
                  src={BRANCHES.sanepa.heroImage}
                  alt={BRANCHES.sanepa.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'var(--color-primary)',
                    color: '#FFFFFF',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase'
                  }}
                >
                  Lalitpur Garden Courtyard
                </span>
              </div>

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '0.75rem' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', fontWeight: 600 }}>
                  {BRANCHES.sanepa.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)' }}>
                  {BRANCHES.sanepa.address}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--color-on-surface-variant)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--color-secondary)' }}>schedule</span>
                    <span>Daily: {BRANCHES.sanepa.hours.weekdays}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--color-secondary)' }}>call</span>
                    <a href={`tel:${BRANCHES.sanepa.phone}`} style={{ color: 'var(--color-on-surface)', textDecoration: 'none', fontWeight: 600 }}>
                      {BRANCHES.sanepa.displayPhone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto', paddingTop: '1rem' }}>
                  <Link
                    to="/locations/sanepa"
                    className="btn-secondary"
                    style={{ flex: 1, fontSize: '0.8rem', padding: '0.6rem' }}
                  >
                    Branch Details
                  </Link>
                  <a
                    href={BRANCHES.sanepa.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ flex: 1, fontSize: '0.8rem', padding: '0.6rem' }}
                  >
                    Directions &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CRITICAL PRAISE & REVIEWS */}
      <section>
        <div className="container-custom">
          <div style={{ marginBottom: '1.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-secondary)',
                fontWeight: 600
              }}
            >
              CRITICAL PRAISE
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                fontWeight: 600,
                color: 'var(--color-on-surface)'
              }}
            >
              Press &amp; Accolades
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {PRESS_QUOTES.map((pq, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--color-surface-low)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(197, 170, 121, 0.35)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', gap: '2px', color: 'var(--color-tertiary)' }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined filled" style={{ fontSize: '18px' }}>
                      star
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '1.05rem',
                    color: 'var(--color-on-surface)',
                    lineHeight: '1.5'
                  }}
                >
                  "{pq.quote}"
                </p>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--color-secondary)',
                    marginTop: 'auto'
                  }}
                >
                  &mdash; {pq.source} ({pq.year})
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section>
        <div className="container-custom">
          <div style={{ marginBottom: '1.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-secondary)',
                fontWeight: 600
              }}
            >
              EVERYTHING YOU NEED TO KNOW
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                fontWeight: 600,
                color: 'var(--color-on-surface)'
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion items={faqAccordionItems} allowMultiple={false} defaultOpenId="faq-0" />
        </div>
      </section>

      {/* 8. ATMOSPHERIC CALL TO ACTION */}
      <section>
        <div className="container-custom">
          <div
            style={{
              backgroundColor: 'var(--color-primary)',
              color: '#FFFFFF',
              borderRadius: '16px',
              padding: '2.5rem 2rem',
              border: '1px solid rgba(197, 170, 121, 0.4)',
              boxShadow: 'var(--shadow-xl)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              textAlign: 'center',
              alignItems: 'center'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-tertiary)',
                fontWeight: 600
              }}
            >
              Hospitality &amp; Hearth
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                color: '#FFFFFF',
                fontWeight: 500,
                maxWidth: '600px'
              }}
            >
              Reserve Your Table or Build a Demo Order Tonight
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.88)',
                maxWidth: '540px',
                lineHeight: '1.6'
              }}
            >
              Gather with family and friends around glowing wood embers in Thamel or the serene garden in Sanepa.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/contact" className="btn-terracotta" style={{ padding: '0.85rem 1.75rem' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  table_restaurant
                </span>
                <span>Book a Table</span>
              </Link>
              <Link to="/menu" className="btn-secondary" style={{ padding: '0.85rem 1.75rem' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  restaurant_menu
                </span>
                <span>View Full Menu</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dish Detail Modal */}
      <DishDetailModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </div>
  );
};
