import React from 'react';
import { DishCategory, DietaryTag } from '../../types/menu';
import { CATEGORIES } from '../../data/menuData';

interface MenuFilterPillsProps {
  selectedCategory: DishCategory;
  onSelectCategory: (category: DishCategory) => void;
  selectedDiet: DietaryTag | 'all';
  onSelectDiet: (diet: DietaryTag | 'all') => void;
}

export const MenuFilterPills: React.FC<MenuFilterPillsProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedDiet,
  onSelectDiet
}) => {
  const dietaryOptions: { id: DietaryTag | 'all'; label: string; icon?: string }[] = [
    { id: 'all', label: 'All Diets' },
    { id: 'Vegetarian', label: 'Vegetarian', icon: 'eco' },
    { id: 'Spicy', label: 'Spicy / Fiery', icon: 'local_fire_department' },
    { id: 'Gluten-Free', label: 'Gluten-Free', icon: 'spa' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
      {/* Category Pills (Horizontal Scroller) */}
      <div
        className="hide-scrollbar"
        role="tablist"
        aria-label="Menu categories"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          overflowX: 'auto',
          paddingBottom: '0.25rem',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {CATEGORIES.map(cat => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isSelected}
              onClick={() => onSelectCategory(cat.id)}
              className="category-btn"
              data-cat={cat.id}
              style={{
                whiteSpace: 'nowrap',
                flexShrink: 0,
                padding: '0.6rem 1.15rem',
                borderRadius: '9999px',
                fontSize: '0.8125rem',
                fontWeight: isSelected ? 700 : 500,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                backgroundColor: isSelected ? 'var(--color-primary)' : 'var(--color-surface-container)',
                color: isSelected ? '#FFFFFF' : 'var(--color-on-surface)',
                border: isSelected ? '1px solid var(--color-primary)' : '1px solid rgba(197, 170, 121, 0.3)',
                boxShadow: isSelected ? 'var(--shadow-sm)' : 'none',
                minHeight: '40px',
                transition: 'all 0.15s ease'
              }}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Dietary Sub-Filters */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          flexWrap: 'wrap',
          paddingTop: '0.25rem'
        }}
      >
        <span
          style={{
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--color-on-surface-muted)',
            fontWeight: 600,
            marginRight: '0.25rem'
          }}
        >
          Filter Diet:
        </span>
        {dietaryOptions.map(diet => {
          const isSelected = selectedDiet === diet.id;
          return (
            <button
              key={diet.id}
              onClick={() => onSelectDiet(diet.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: isSelected ? 700 : 500,
                backgroundColor: isSelected ? 'var(--color-secondary)' : '#FFFFFF',
                color: isSelected ? '#FFFFFF' : 'var(--color-on-surface)',
                border: isSelected ? '1px solid var(--color-secondary)' : '1px solid rgba(197, 170, 121, 0.4)',
                minHeight: '32px',
                transition: 'all 0.15s ease'
              }}
            >
              {diet.icon && (
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                  {diet.icon}
                </span>
              )}
              <span>{diet.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
