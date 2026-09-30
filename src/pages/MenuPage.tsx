import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MENU_ITEMS, CATEGORIES } from '../data/menuData';
import { DishCategory, DietaryTag, MenuItem } from '../types/menu';
import { MenuSearchBar } from '../components/menu/MenuSearchBar';
import { MenuFilterPills } from '../components/menu/MenuFilterPills';
import { DishCard } from '../components/menu/DishCard';
import { EmptyMenuState } from '../components/menu/EmptyMenuState';
import { DishDetailModal } from '../components/menu/DishDetailModal';
import { FloatingCartBar } from '../components/cart/FloatingCartBar';

export const MenuPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as DishCategory) || 'all';

  const [selectedCategory, setSelectedCategory] = useState<DishCategory>(initialCategory);
  const [selectedDiet, setSelectedDiet] = useState<DietaryTag | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  // Sync category param if URL changes
  useEffect(() => {
    const cat = searchParams.get('category') as DishCategory;
    if (cat && cat !== selectedCategory) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (cat: DishCategory) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: cat });
    }
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedDiet('all');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  // Filtered dishes memo
  const filteredDishes = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return MENU_ITEMS.filter(dish => {
      // 1. Category check
      if (selectedCategory !== 'all' && dish.category !== selectedCategory) {
        return false;
      }

      // 2. Dietary check
      if (selectedDiet !== 'all' && !dish.tags.includes(selectedDiet)) {
        return false;
      }

      // 3. Search query check
      if (q) {
        const inName = dish.name.toLowerCase().includes(q);
        const inItalian = dish.italianName?.toLowerCase().includes(q);
        const inDesc = dish.description.toLowerCase().includes(q);
        const inIngredients = dish.ingredients.some(ing => ing.toLowerCase().includes(q));
        const inCategory = dish.category.toLowerCase().includes(q);
        if (!inName && !inItalian && !inDesc && !inIngredients && !inCategory) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedDiet, searchQuery]);

  // Current category info banner
  const activeCategoryInfo = useMemo(() => {
    return CATEGORIES.find(c => c.id === selectedCategory) || CATEGORIES[0];
  }, [selectedCategory]);

  return (
    <div style={{ paddingBottom: '5rem' }}>
      {/* Menu Header Section */}
      <section
        style={{
          backgroundColor: 'var(--color-surface)',
          paddingTop: '2rem',
          paddingBottom: '1.5rem',
          borderBottom: '1px solid rgba(197, 170, 121, 0.3)'
        }}
      >
        <div className="container-custom">
          <div style={{ maxWidth: '720px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-secondary)',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                local_fire_department
              </span>
              <span>Cucina Tradizionale &bull; Kathmandu</span>
            </span>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                color: 'var(--color-on-surface)',
                fontWeight: 600,
                marginTop: '0.25rem',
                marginBottom: '0.5rem'
              }}
            >
              Our Complete Menu
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.15rem',
                color: 'var(--color-on-surface-variant)',
                lineHeight: '1.5'
              }}
            >
              Authentic Neapolitan wood-fired pizzas, handmade pastas, fresh insalate, and Italian desserts.
            </p>
          </div>

          {/* Search Bar */}
          <div style={{ marginTop: '1.5rem', maxWidth: '640px' }}>
            <MenuSearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
              resultCount={filteredDishes.length}
            />
          </div>
        </div>
      </section>

      {/* Sticky Filter Controls */}
      <section
        style={{
          position: 'sticky',
          top: 'var(--header-height)',
          zIndex: 80,
          backgroundColor: 'rgba(245, 241, 233, 0.95)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(197, 170, 121, 0.3)',
          paddingTop: '0.75rem',
          paddingBottom: '0.75rem',
          boxShadow: '0 2px 8px rgba(41, 41, 35, 0.04)'
        }}
      >
        <div className="container-custom">
          <MenuFilterPills
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
            selectedDiet={selectedDiet}
            onSelectDiet={setSelectedDiet}
          />
        </div>
      </section>

      {/* Main Dishes Stream */}
      <main className="container-custom" style={{ marginTop: '2rem' }}>
        {/* Active Filter Headline & Reset Shortcut */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            paddingBottom: '1rem',
            borderBottom: '1px solid rgba(197, 170, 121, 0.25)',
            marginBottom: '1.75rem',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.65rem',
                fontWeight: 600,
                color: 'var(--color-on-surface)'
              }}
            >
              {activeCategoryInfo.name}
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)', marginTop: '0.2rem' }}>
              {activeCategoryInfo.description}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-on-surface-muted)', fontWeight: 600 }}>
              Showing {filteredDishes.length} {filteredDishes.length === 1 ? 'item' : 'items'}
            </span>
            {(selectedCategory !== 'all' || selectedDiet !== 'all' || searchQuery) && (
              <button
                type="button"
                onClick={handleClearFilters}
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--color-secondary)',
                  fontWeight: 600,
                  textDecoration: 'underline'
                }}
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Dish Grid or Empty State */}
        {filteredDishes.length === 0 ? (
          <EmptyMenuState query={searchQuery} onReset={handleClearFilters} />
        ) : (
          <div
            id="menu-sections"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {filteredDishes.map(dish => (
              <DishCard
                key={dish.id}
                dish={dish}
                onOpenDetails={(d) => setSelectedDish(d)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Floating Bottom Cart Bar */}
      <FloatingCartBar />

      {/* Dish Detail Inspection Modal */}
      <DishDetailModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </div>
  );
};
