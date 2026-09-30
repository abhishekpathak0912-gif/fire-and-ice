import React, { useState, useEffect } from 'react';
import { MenuItem } from '../../types/menu';
import { useCart } from '../../context/CartContext';
import { formatNPR } from '../../utils/formatCurrency';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose }) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState<number>(1);
  const [notes, setNotes] = useState<string>('');

  useEffect(() => {
    setQuantity(1);
    setNotes('');
  }, [dish]);

  // Keyboard escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && dish) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dish, onClose]);

  if (!dish) return null;

  const handleAddToCart = () => {
    addItem(dish, quantity, notes.trim() ? notes.trim() : undefined);
    onClose();
  };

  return (
    <div
      className="drawer-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-title"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        zIndex: 260
      }}
    >
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '560px',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          overflow: 'hidden'
        }}
      >
        {/* Dish Visual Header */}
        {dish.imageUrl && (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '220px',
              backgroundColor: 'var(--color-surface-container)'
            }}
          >
            <img
              src={dish.imageUrl}
              alt={dish.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)'
              }}
            />
            {dish.badge && (
              <span
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'var(--color-primary)',
                  color: '#FFFFFF',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em'
                }}
              >
                {dish.badge}
              </span>
            )}
            <button
              onClick={onClose}
              aria-label="Close dish details"
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>close</span>
            </button>
          </div>
        )}

        <div style={{ padding: '1.5rem' }}>
          {!dish.imageUrl && (
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.5rem' }}>
              <button
                onClick={onClose}
                aria-label="Close dish details"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--color-surface-container)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-secondary)',
                  fontWeight: 600
                }}
              >
                {dish.category}
              </span>
              <h2
                id="dish-modal-title"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  color: 'var(--color-on-surface)',
                  fontWeight: 600,
                  marginTop: '0.15rem'
                }}
              >
                {dish.name}
              </h2>
              {dish.italianName && (
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    color: 'var(--color-secondary)',
                    fontSize: '1rem',
                    marginBottom: '0.5rem'
                  }}
                >
                  {dish.italianName}
                </p>
              )}
            </div>

            <div style={{ textAlign: 'right' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  color: 'var(--color-secondary)',
                  fontWeight: 700,
                  whiteSpace: 'nowrap'
                }}
              >
                {formatNPR(dish.price)}
              </span>
              {dish.calories && (
                <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--color-on-surface-muted)' }}>
                  ~{dish.calories} kcal
                </span>
              )}
            </div>
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
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
              >
                {tag}
              </span>
            ))}
            {dish.crustType && (
              <span className="badge-caps badge-stone">
                {dish.crustType}
              </span>
            )}
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--color-on-surface-variant)',
              lineHeight: '1.6',
              marginTop: '1rem',
              marginBottom: '1.25rem'
            }}
          >
            {dish.description}
          </p>

          {/* Ingredients list */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid rgba(197, 170, 121, 0.25)',
              marginBottom: '1.25rem'
            }}
          >
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-primary)',
                fontWeight: 700,
                marginBottom: '0.4rem'
              }}
            >
              Artisanal Ingredients &amp; Recipe:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {dish.ingredients.map((ing, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(197, 170, 121, 0.3)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    color: 'var(--color-on-surface)'
                  }}
                >
                  {ing}
                </span>
              ))}
            </div>
            {dish.preparationNote && (
              <p
                style={{
                  fontSize: '0.8rem',
                  fontStyle: 'italic',
                  color: 'var(--color-secondary)',
                  marginTop: '0.5rem'
                }}
              >
                &bull; {dish.preparationNote}
              </p>
            )}
          </div>

          {/* Special instructions */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label
              htmlFor="special-dish-notes"
              style={{
                display: 'block',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--color-on-surface)',
                marginBottom: '0.35rem'
              }}
            >
              Special Dietary or Preparation Requests (Optional):
            </label>
            <input
              id="special-dish-notes"
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. extra crispy, olive oil on side, no oregano"
              style={{ width: '100%' }}
            />
          </div>

          {/* Footer Action: Stepper and Add Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--color-surface-container)'
            }}
          >
            {/* Quantity Stepper */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                border: '1px solid rgba(197, 170, 121, 0.5)',
                borderRadius: '8px',
                backgroundColor: 'var(--color-surface)'
              }}
            >
              <button
                type="button"
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                aria-label="Decrease quantity"
                style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'var(--color-on-surface)'
                }}
              >
                -
              </button>
              <span
                style={{
                  minWidth: '36px',
                  textAlign: 'center',
                  fontWeight: 700,
                  fontSize: '1rem'
                }}
                aria-label={`Quantity: ${quantity}`}
              >
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(prev => Math.min(50, prev + 1))}
                aria-label="Increase quantity"
                style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'var(--color-on-surface)'
                }}
              >
                +
              </button>
            </div>

            {/* Submit button */}
            <button
              onClick={handleAddToCart}
              className="btn-primary"
              style={{ flex: 1 }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                shopping_bag
              </span>
              <span>Add to Cart &bull; {formatNPR(dish.price * quantity)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
