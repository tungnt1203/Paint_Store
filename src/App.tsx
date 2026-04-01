import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar, Footer, FloatingActions } from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const ColorPalette = lazy(() => import('./pages/ColorPalette'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));

function RouteFallback() {
  return (
    <div className="flex-grow flex min-h-[50vh] items-center justify-center text-on-surface-variant">
      <p className="animate-pulse text-sm font-medium">Đang tải…</p>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/colors" element={<ColorPalette />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:id" element={<ProductDetail />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <FloatingActions />
        </div>
      </Router>
    </HelmetProvider>
  );
}
