import React, { useState } from 'react';
import { MenuItem } from '../../types/menu';
import { useCart } from '../../context/CartContext';
import { formatNPR } from '../../utils/formatCurrency';

interface DishCardProps {
  dish: MenuItem;
  onOpenDetails: (dish: MenuItem) => void;
}

export const DishCard: React.FC<DishCardProps> = ({ dish, onOpenDetails }) => {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(dish, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 900);
  };

  return (
    <article
      className="dish-card"
      data-name={dish.name.toLowerCase()}
      data-desc={dish.description.toLowerCase()}
      onClick={() => onOpenDetails(dish)}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        border: '1px solid rgba(197, 170, 121, 0.35)',
        boxShadow: 'var(--shadow-sm)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      {/* Optional Feature Image */}
      {dish.imageUrl && (
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '180px',
            backgroundColor: 'var(--color-surface-container)',
            overflow: 'hidden'
          }}
        >
          <img
            src={dish.imageUrl}
            alt={dish.name}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.4s ease'
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)'
            }}
          />
          {dish.badge && (
            <span
              style={{
                position: 'absolute',
                top: '0.75rem',
                left: '0.75rem',
                backgroundColor: 'var(--color-primary)',
                color: '#FFFFFF',
                padding: '0.2rem 0.55rem',
                borderRadius: '4px',
                fontSize: '0.7rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em'
              }}
            >
              {dish.badge}
            </span>
          )}
        </div>
      )}

      {/* Card Content */}
      <div
        style={{
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between',
          gap: '0.75rem'
        }}
      >
        <div>
          {/* Header Row: Title & Price */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '0.5rem',
              marginBottom: '0.25rem'
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--color-on-surface)',
                  lineHeight: 1.2
                }}
              >
                {dish.name}
              </h3>
              {dish.italianName && (
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '0.875rem',
                    color: 'var(--color-secondary)',
                    display: 'block'
                  }}
                >
                  {dish.italianName}
                </span>
              )}
            </div>

            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--color-secondary)',
                whiteSpace: 'nowrap'
              }}
            >
              {formatNPR(dish.price)}
            </span>
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', margin: '0.4rem 0' }}>
            {dish.tags.map(tag => (
              <span
                key={tag}
                className={`badge-caps ${
                  tag === 'Spicy'
                    ? 'badge-terracotta'
                    : tag === 'Vegetarian'
                    ? 'badge-stone'
                    : 'badge-brass'
                }`}
                style={{ fontSize: '0.65rem' }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            className="line-clamp-2"
            style={{
              fontSize: '0.875rem',
              color: 'var(--color-on-surface-variant)',
              lineHeight: 1.5,
              marginTop: '0.35rem'
            }}
          >
            {dish.description}
          </p>
        </div>

        {/* Card Footer Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '0.75rem',
            borderTop: '1px solid rgba(197, 170, 121, 0.25)',
            marginTop: 'auto'
          }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(dish);
            }}
            style={{
              fontSize: '0.8rem',
              color: 'var(--color-primary)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              textDecoration: 'underline',
              display: 'flex',
              alignItems: 'center',
              gap: '0.2rem'
            }}
          >
            <span>Details</span>
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>
              info
            </span>
          </button>

          <button
            type="button"
            onClick={handleQuickAdd}
            aria-label={`Add ${dish.name} to cart`}
            className="add-dish-btn"
            style={{
              backgroundColor: justAdded ? 'var(--color-tertiary)' : 'var(--color-primary)',
              color: justAdded ? 'var(--color-on-surface)' : '#FFFFFF',
              borderRadius: '6px',
              padding: '0.45rem 0.85rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              minHeight: '36px',
              transition: 'background-color 0.2s ease, transform 0.1s ease'
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              {justAdded ? 'check' : 'add'}
            </span>
            <span>{justAdded ? 'Added' : 'Add'}</span>
          </button>
        </div>
      </div>
    </article>
  );
};
