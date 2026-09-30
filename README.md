# Fire & Ice Pizzeria Kathmandu — Frontend Rebrand & Interactive Client Demo

A high-fidelity, fully interactive frontend web application for **Fire and Ice Pizzeria Kathmandu** (Est. 1996), built with React 18, React Router v6, TypeScript, Vite, and the **Tuscan Heritage & Hearth** design system.

---

## Architecture & Implementation Overview

### 1. Navigation & Routing (React Router v6)
- **Direct URL & Back/Forward Navigation:** All pages are routed through React Router with immediate browser back/forward and deep linking support.
  - `/` — Homepage (Hero, Brand Story Teaser, Signature Dishes, Breakfast Feature, Twin Locations Preview, Press Reviews, FAQs)
  - `/menu` — Complete Menu with live search, category pills, dietary filters, dish details modal, and empty state
  - `/cart` — Dedicated Shopping Cart page with quantity adjustments and cost breakdown
  - `/checkout` — Validated Frontend Checkout Demo with order type selection, conditional delivery address, and demo receipt confirmation
  - `/locations` — Twin Locations Overview (Thamel & Sanepa comparison, hours, amenities)
  - `/locations/thamel` — Dedicated Thamel Flagship Branch Page with verified telephone, address, and directions
  - `/locations/sanepa` — Dedicated Sanepa Garden Branch Page with verified telephone, address, and directions
  - `/contact` — Table Reservations & General Inquiries with field validation and confirmation
  - `/story` — 28-Year Heritage narrative (Annamaria Forgione, 1996 brick oven, timeline, press praise)
  - `*` — Custom 404 Page Not Found with return actions
- **Active Navigation Highlights:** Both desktop header and mobile drawer highlight the active page.
- **Mobile Navigation:**
  - Slide-over mobile drawer (`<aside>`) with smooth toggle, backdrop dismissal, and keyboard `Escape` dismissal.
  - Fixed mobile bottom navigation bar (`.mobile-bottom-nav`) with live cart item counter badge.

### 2. Menu & Typing
- **Typed Local Data:** Sourced directly from Fire and Ice Pizzeria's authentic catalog (`src/data/menuData.ts`).
- **Interactive Category Filtering:** Filters across *All Offerings*, *Wood-Fired Pizza*, *Handmade Pasta*, *Dolci & Gelato*, *Breakfast*, *Insalate & Antipasti*, and *Beverages & Wine*.
- **Live Search & Clear:** Instantly matches dish names, Italian titles, descriptions, and ingredients with a one-click "Clear" button and result counter.
- **Dietary Tag Filtering:** Quick toggles for *Vegetarian*, *Spicy*, and *Gluten-Free*.
- **Dish Detail Inspection Modal:** Complete ingredient breakdowns, preparation notes (e.g. 450°C wood oven blistered), calories, and quantity adder.
- **Empty States:** When no dishes match query/filter, an empty state renders with an instant "View Full Menu & Clear Filters" CTA.

### 3. Client-Side Shopping Cart
- **Cart State Management (`useCart` Hook & `CartContext`):**
  - Add dishes from menu cards, detail modals, or homepage specials.
  - Quantity steppers (`+` and `-`) with validation (capped between 1 and 50).
  - Removing items directly or by decrementing to zero.
  - Clear entire cart action with confirmation safeguard.
- **Totals & Taxation Calculations (Nepal Standard):**
  - Subtotal: accurate sum of item prices in Nepalese Rupees (NPR).
  - Service Charge: 10% standard restaurant hospitality charge in Nepal.
  - Value Added Tax (VAT): 13% standard Nepal VAT calculated on (subtotal + service charge).
  - Grand Total: consistent calculation across Drawer, Cart Page, and Checkout.
- **Persistence & Error Safety:**
  - Persisted in `localStorage` under `fire_and_ice_cart_demo_v1`.
  - Wrapped in `try/catch` with fallback to prevent crashes if storage is restricted.
- **Mobile Accessibility:** Floating bottom summary pill (`#floating-cart-bar`) appears whenever the cart contains items, allowing one-tap checkout or drawer opening.

### 4. Checkout Demonstration
- **Validated Fields:**
  - Full Name (required, min 3 chars).
  - Phone Number (required, min 7 digits, validates format).
  - Order Type: *Takeaway*, *Doorstep Delivery*, or *Dine-In*.
  - Preparing Branch: *Thamel Flagship* or *Sanepa Garden*.
  - Delivery Address: dynamically shown and strictly validated **only** when *Delivery* is selected.
  - Table Number: available when *Dine-In* is selected.
  - Kitchen instructions & notes.
- **Order Confirmation:**
  - Client-side confirmation receipt with unique generated order ID (e.g., `#FNI-84920`), timestamp, simulated prep time, and itemized breakdown.
  - Automatic cart clearing upon successful checkout placement.

### 5. Contact & Table Reservations
- Working client-side booking form with party size (1–30 guests), date picker, time slot selector, branch selector, and seating preferences (indoor hearth vs garden terrace).
- General enquiry form tab for events and feedback.
- Accessible validation error messages with `aria-invalid` and live error banners.

### 6. Locations & Verified Contact Links
- Dedicated pages for both branches:
  - **Thamel Branch:** 219 Tridevi Marg, Thamel; Phone: `+977 1 4250210`; Daily 8:00 AM – 10:00 PM; Verified Google Maps link.
  - **Sanepa Branch:** Jhamsikhel Road, Lalitpur; Phone: `+977 1 5538825`; Daily 10:00 AM – 10:00 PM; Verified Google Maps link.
- External delivery partner link directed to Foodmandu.

### 7. Interactive Elements & Keyboard Accessibility
- Every visible button performs its labelled action.
- Interactive accordions (`<Accordion />`) with keyboard expand/collapse for FAQs and story milestones.
- Modal dialogs dismissable via backdrop click, close button, and keyboard `Escape` key.
- Toast notification feedback banner on adding dishes.

---

## Automated Test Results

Automated test suites executed with **Vitest v2.1.9** and **@testing-library/react v16.0.1**:

```bash
✓ tests/cart.test.tsx (6 tests)
  - initializes with an empty cart and shows empty state
  - adds item to cart and correctly computes subtotal, service charge, and VAT
  - increments and decrements item quantities properly
  - removes item directly via removeItem
  - clears entire cart via clearCart
  - persists cart state safely in localStorage

✓ tests/menu.test.tsx (5 tests)
  - loads all menu items from typed local data initially
  - filters dishes when selecting a category pill
  - filters dishes by live search query across name and ingredients
  - displays empty state when search returns zero matches and allows filter reset
  - filters by dietary tag correctly (e.g. Vegetarian)

✓ tests/checkout.test.tsx (4 tests)
  - validates email and phone format correctly
  - rejects form when full name or phone are missing or too short
  - requires deliveryAddress ONLY when orderType is delivery
  - passes validation when all required fields are correctly supplied

✓ tests/routes.test.tsx (9 tests)
  - renders Home page at "/"
  - renders Complete Menu page at "/menu"
  - renders Locations page at "/locations"
  - renders Thamel Branch Detail page at "/locations/thamel"
  - renders Sanepa Branch Detail page at "/locations/sanepa"
  - renders Reservations & Contact page at "/contact"
  - renders Our Story page at "/story"
  - renders Checkout Demo page at "/checkout"
  - renders 404 page for unknown paths

Total Test Suites: 4 passed (4)
Total Tests: 24 passed (24)
TypeScript Checks (tsc --noEmit): Passed (0 errors)
Production Build (vite build): Passed (dist/ bundle ready in 1.80s)
```

---

## Honest Limitations & Real Backend Integration Guide

As a frontend-only demonstration:
1. **No Live Orders:** No kitchen order tickets (KOT) are transmitted to the refractory oven stations without a connected backend server.
2. **No Payments Collected:** Credit cards and digital wallet credentials (eSewa / Khalti / Fonepay) are intentionally not collected.
3. **No Emails Dispatched:** Form submissions validate locally and do not dispatch external SMTP or REST API emails.

### Steps to Connect Production Services:
1. **API & Database:** Set up a Node.js/Express or Supabase backend with PostgreSQL for dish catalog management, inventory tracking, and reservation storage.
2. **Payment Gateway Integration:**
   - Integrate **eSewa** or **Khalti** payment gateways using their server-to-server verification APIs.
   - For international tourists and trekkers, integrate **Stripe Checkout**.
3. **Kitchen Ticket Printers (POS):**
   - Connect ESC/POS thermal printers via WebSocket or WebUSB to print kitchen orders directly at the Thamel and Sanepa pizza hearth stations.
4. **Email & SMS Notifications:**
   - Integrate **Resend** or **SendGrid** for transactional confirmation emails.
   - Integrate **Sparrow SMS Nepal** for automated SMS dispatch of reservation approvals and order tracking to Nepali mobile numbers.
