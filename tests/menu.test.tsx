import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../src/context/CartContext';
import { MenuPage } from '../src/pages/MenuPage';

const renderMenuPage = (initialEntries = ['/menu']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <CartProvider>
        <MenuPage />
      </CartProvider>
    </MemoryRouter>
  );
};

describe('Menu Filtering and Search Feature', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('loads all menu items from typed local data initially', () => {
    renderMenuPage();
    // Verify that signature pizzas appear
    expect(screen.getByText('Margherita Classica')).toBeInTheDocument();
    expect(screen.getByText('Fire & Ice Special')).toBeInTheDocument();
    expect(screen.getByText('NPR 920')).toBeInTheDocument();
  });

  it('filters dishes when selecting a category pill', () => {
    renderMenuPage();
    const pastaBtn = screen.getByRole('tab', { name: /Handmade Pasta/i });
    fireEvent.click(pastaBtn);

    // Pasta items should be visible
    expect(screen.getByText('Spaghetti alla Bolognese')).toBeInTheDocument();
    expect(screen.getByText('Penne all\'Arrabbiata')).toBeInTheDocument();

    // Pizza-only items should not be visible
    expect(screen.queryByText('Margherita Classica')).not.toBeInTheDocument();
  });

  it('filters dishes by live search query across name and ingredients', () => {
    renderMenuPage();
    const searchInput = screen.getByPlaceholderText(/Search pizzas, handmade pastas/i);
    
    // Search for Tiramisu
    fireEvent.change(searchInput, { target: { value: 'Tiramisù' } });
    expect(screen.getByText('Traditional Tiramisù')).toBeInTheDocument();
    expect(screen.queryByText('Spaghetti alla Bolognese')).not.toBeInTheDocument();

    // Clear search using clear button
    const clearBtn = screen.getByRole('button', { name: /Clear search query/i });
    fireEvent.click(clearBtn);

    // Dishes should be restored
    expect(screen.getByText('Margherita Classica')).toBeInTheDocument();
  });

  it('displays empty state when search returns zero matches and allows filter reset', () => {
    renderMenuPage();
    const searchInput = screen.getByPlaceholderText(/Search pizzas, handmade pastas/i);
    fireEvent.change(searchInput, { target: { value: 'xyznonexistentdish123' } });

    expect(screen.getByText(/No culinary match found/i)).toBeInTheDocument();
    
    // Click reset button
    const resetBtn = screen.getByRole('button', { name: /View Full Menu & Clear Filters/i });
    fireEvent.click(resetBtn);

    expect(screen.getByText('Margherita Classica')).toBeInTheDocument();
  });

  it('filters by dietary tag correctly (e.g. Vegetarian)', () => {
    renderMenuPage();
    const vegBtn = screen.getByRole('button', { name: /Vegetarian/i });
    fireEvent.click(vegBtn);

    // Margherita is vegetarian
    expect(screen.getByText('Margherita Classica')).toBeInTheDocument();
    // Prosciutto is not vegetarian
    expect(screen.queryByText('Prosciutto e Funghi')).not.toBeInTheDocument();
  });
});
