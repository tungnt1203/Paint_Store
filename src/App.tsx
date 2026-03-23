import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar, Footer, FloatingActions } from './components/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </main>
          <Footer />
          <FloatingActions />
        </div>
      </Router>
    </HelmetProvider>
  );
}
