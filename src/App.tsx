import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { MobileBottomNav } from './components/common/MobileBottomNav';
import { DemoBanner } from './components/common/DemoBanner';
import { Toast } from './components/common/Toast';
import { CartDrawer } from './components/cart/CartDrawer';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { LocationsPage } from './pages/LocationsPage';
import { BranchDetailPage } from './pages/BranchDetailPage';
import { ContactPage } from './pages/ContactPage';
import { StoryPage } from './pages/StoryPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top helper on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollToTop />

      {/* Top Demo Disclosure Banner */}
      <DemoBanner />

      {/* Main Glass Header */}
      <Header />

      {/* Main Content Area (offset by fixed header & banner) */}
      <div style={{ flex: 1, paddingTop: 'calc(var(--header-height) + 26px)' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/locations/:branchId" element={<BranchDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Navigation Bar */}
      <MobileBottomNav />

      {/* Global Interactive Elements */}
      <CartDrawer />
      <Toast />
    </div>
  );
};
