import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../src/context/CartContext';
import { App } from '../src/App';

const renderAtRoute = (initialPath: string) => {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <CartProvider>
        <App />
      </CartProvider>
    </MemoryRouter>
  );
};

describe('React Router Route Loading & Navigation', () => {
  it('renders Home page at "/"', () => {
    renderAtRoute('/');
    expect(screen.getByRole('heading', { level: 1, name: /An Italian table, in the heart of Kathmandu/i })).toBeInTheDocument();
  });

  it('renders Complete Menu page at "/menu"', () => {
    renderAtRoute('/menu');
    expect(screen.getByRole('heading', { level: 1, name: /Our Complete Menu/i })).toBeInTheDocument();
  });

  it('renders Locations page at "/locations"', () => {
    renderAtRoute('/locations');
    expect(screen.getByRole('heading', { level: 1, name: /Our Locations/i })).toBeInTheDocument();
  });

  it('renders Thamel Branch Detail page at "/locations/thamel"', () => {
    renderAtRoute('/locations/thamel');
    expect(screen.getByRole('heading', { level: 1, name: /Thamel \(The Original\)/i })).toBeInTheDocument();
    expect(screen.getByText(/Kathmandu Flagship Hearth/i)).toBeInTheDocument();
  });

  it('renders Sanepa Branch Detail page at "/locations/sanepa"', () => {
    renderAtRoute('/locations/sanepa');
    expect(screen.getByRole('heading', { level: 1, name: /Sanepa \(Lalitpur Garden\)/i })).toBeInTheDocument();
  });

  it('renders Reservations & Contact page at "/contact"', () => {
    renderAtRoute('/contact');
    expect(screen.getByRole('heading', { level: 1, name: /Reservations & Enquiries/i })).toBeInTheDocument();
  });

  it('renders Our Story page at "/story"', () => {
    renderAtRoute('/story');
    expect(screen.getByRole('heading', { level: 1, name: /The Hearth & Heritage of Fire and Ice/i })).toBeInTheDocument();
  });

  it('renders Checkout Demo page at "/checkout"', () => {
    renderAtRoute('/checkout');
    expect(screen.getByRole('heading', { level: 1, name: /Checkout Demonstration/i })).toBeInTheDocument();
  });

  it('renders 404 page for unknown paths', () => {
    renderAtRoute('/non-existent-page-xyz');
    expect(screen.getByText(/404 — Culinary Page Lost/i)).toBeInTheDocument();
  });
});
