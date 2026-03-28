import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Phone, ArrowRight, Share2, Award, Star, ShoppingCart, MapPin, Mail, Palette, Truck, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { PRODUCTS, CONTACT_INFO } from '../constants';

const Logo = ({ className = "w-24 h-24", showText = false }: { className?: string, showText?: boolean }) => (
  <div className="flex items-center gap-3 group">
    <div className={`relative ${className} flex items-center justify-center flex-shrink-0`}>
      <img 
        src="/logo_sn_transparent.png" 
        alt={`Logo ${CONTACT_INFO.name}`} 
        className="w-full h-full object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
    {showText && (
      <div className="flex flex-col leading-none">
        <span className="text-3xl font-black tracking-tighter text-[#E61E50] uppercase">
          {CONTACT_INFO.name}
        </span>
        <span className="text-[10px] font-bold tracking-widest text-[#00AEEF] uppercase mt-1">
          {CONTACT_INFO.slogan}
        </span>
      </div>
    )}
  </div>
);

const TopBar = () => (
  <div className="bg-white border-b border-outline-variant py-2 px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-xs font-medium text-on-surface-variant gap-4">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <MapPin size={14} className="text-primary" />
          {CONTACT_INFO.address}
        </span>
        <span className="flex items-center gap-1.5">
          <Mail size={14} className="text-primary" />
          {CONTACT_INFO.email}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <Phone size={14} className="text-primary" />
          {CONTACT_INFO.phone} - {CONTACT_INFO.phone2}
        </span>
      </div>
    </div>
  </div>
);

const MainHeader = () => (
  <div className="bg-white py-6 px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <Link to="/" className="flex items-center">
        <Logo className="w-32 h-32" />
      </Link>
      
      <div className="flex flex-col items-center text-center flex-grow">
        <h3 className="text-primary font-headline font-bold text-lg md:text-xl mb-2">
          {CONTACT_INFO.headerTitle}
        </h3>
        <h1 className="text-[#E61E50] font-headline font-black text-5xl md:text-7xl uppercase tracking-tighter mb-2">
          {CONTACT_INFO.name}
        </h1>
        <p className="text-[#00AEEF] font-headline font-bold text-lg md:text-2xl uppercase tracking-[0.2em]">
          {CONTACT_INFO.slogan}
        </p>
      </div>
      
      <div className="hidden lg:flex flex-col items-end text-right">
        <div className="bg-primary text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-3">
          <Phone size={24} className="animate-bounce" />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Hotline 24/7</p>
            <p className="text-xl font-black">{CONTACT_INFO.phone}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const NavigationBar = () => {
  const location = useLocation();
  const navLinks = [
    { name: 'Thương hiệu sơn', path: '/#brands' },
    { name: 'Sản phẩm', path: '/catalog' },
    { name: 'Bảng giá', path: '/#pricing' },
    { name: 'Bảng màu', path: '/colors' },
    { name: 'Vận chuyển', path: '/#shipping' },
  ];

  return (
    <div className="bg-primary sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        <div className="flex items-center space-x-8 h-full">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`h-full flex items-center px-4 font-headline font-bold text-sm uppercase tracking-wider transition-all relative group ${
                location.pathname === link.path ? 'text-secondary' : 'text-white hover:text-secondary'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-1 bg-secondary transition-transform duration-300 origin-left ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          ))}
        </div>
        
        <button className="text-white hover:text-secondary transition-colors p-2">
          <Search size={24} />
        </button>
      </div>
    </div>
  );
};

const ServiceBar = () => (
  <div className="bg-surface-container-lowest border-b border-outline-variant/10 py-4 px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8">
      <div className="flex items-center gap-3 group">
        <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
          <Palette size={24} />
        </div>
        <div>
          <p className="font-headline font-bold text-sm text-primary uppercase">Tư vấn miễn phí</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 group">
        <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
          <Wrench size={24} />
        </div>
        <div>
          <p className="font-headline font-bold text-sm text-primary uppercase">Hỗ trợ kỹ thuật 24/7</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 group">
        <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
          <Truck size={24} />
        </div>
        <div>
          <p className="font-headline font-bold text-sm text-primary uppercase">Giao hàng nhanh</p>
        </div>
      </div>
    </div>
  </div>
);

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Sản phẩm', path: '/catalog' },
    { name: 'Bảng màu', path: '/colors' },
    { name: 'Blog', path: '/#blog' },
    { name: 'Liên hệ', path: '/contact' },
  ];

  return (
    <>
      <TopBar />
      <MainHeader />
      <NavigationBar />
      <ServiceBar />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] md:hidden bg-white"
          >
            <div className="p-6 flex justify-between items-center border-b border-outline-variant">
              <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                <Logo showText={true} />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-primary">
                <X size={28} />
              </button>
            </div>
            <div className="px-6 py-12 flex flex-col space-y-8 font-headline font-bold text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl ${location.pathname === link.path ? 'text-primary' : 'text-on-surface-variant'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Mobile Menu Trigger (Sticky) */}
      <div className="md:hidden sticky top-0 z-50 bg-white shadow-md p-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo className="w-10 h-10" />
        </Link>
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-primary">
          <Menu size={28} />
        </button>
      </div>
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="space-y-8">
          <Link to="/" className="flex items-center">
            <Logo className="w-14 h-14" showText={true} />
          </Link>
          <p className="text-white/70 font-body leading-relaxed">
            Tổng đại lý sơn chính hãng. Chuyên cung cấp sơn nước, sơn dầu, sơn epoxy, sơn sắt thép, sơn chống thấm và vật tư ngành sơn. {CONTACT_INFO.slogan}.
          </p>
          <div className="flex space-x-4 items-center">
            <a href="https://facebook.com/sonnganpaint" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-all">
              <Share2 size={20} className="text-white" />
            </a>
            <a href={`https://zalo.me/${CONTACT_INFO.phone.replace(/\./g, '')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-all">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" 
                alt={`Zalo ${CONTACT_INFO.name}`} 
                className="w-6 h-6"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-headline font-bold text-xl text-secondary">Sản phẩm</h4>
          <ul className="space-y-4 text-white/70 font-body">
            {CONTACT_INFO.services.slice(0, 4).map(service => (
              <li key={service}><Link to="/catalog" className="hover:text-white transition-colors">{service}</Link></li>
            ))}
            <li><Link to="/catalog" className="hover:text-white transition-colors">Bảng màu 2026</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-headline font-bold text-xl text-secondary">Hỗ trợ khách hàng</h4>
          <ul className="space-y-4 text-white/70 font-body">
            <li><Link to="/contact" className="hover:text-white transition-colors">Tư vấn kỹ thuật</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Chính sách vận chuyển</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Chính sách bảo hành</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Hướng dẫn thi công</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-headline font-bold text-xl text-secondary">Thông tin liên hệ</h4>
          <div className="space-y-4 text-white/70">
            <p className="flex items-start gap-3">
              <Award size={20} className="text-secondary flex-shrink-0" />
              {CONTACT_INFO.address}
            </p>
            <p className="flex items-center gap-3 text-white font-bold text-lg">
              <Phone size={20} className="text-secondary" />
              {CONTACT_INFO.phone}
            </p>
            <p className="flex items-center gap-3 text-white font-bold text-lg">
              <Phone size={20} className="text-secondary" />
              {CONTACT_INFO.phone2}
            </p>
            <p className="text-sm italic">Mở cửa: {CONTACT_INFO.workingHours}</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/10 text-center text-white/40 font-body text-sm">
        © 2026 {CONTACT_INFO.name}. All rights reserved. Thiết kế bởi tungnt.
      </div>
    </footer>
  );
};

export const FloatingActions = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50">
      <a 
        href={`https://zalo.me/${CONTACT_INFO.phone.replace(/\./g, '')}`} 
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat Zalo với ${CONTACT_INFO.name}`}
        className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer border-4 border-primary/5"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" 
          alt={`Chat Zalo với ${CONTACT_INFO.name}`} 
          className="w-10 h-10"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </a>
      <a 
        href={`tel:${CONTACT_INFO.phone.replace(/\./g, '')}`} 
        aria-label="Gọi hotline cho chúng tôi"
        className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer animate-bounce"
      >
        <Phone size={28} />
      </a>
    </div>
  );
};

export const ProductCard = ({ product }: { product: any, key?: string }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-outline-variant/10 flex flex-col h-full group"
    >
      <Link to={`/product/${product.id}`} className="relative aspect-square overflow-hidden bg-surface-container-low p-6">
        <img 
          src={product.image} 
          alt={`Sơn ${product.brand} ${product.name} chính hãng`}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold text-primary uppercase tracking-widest shadow-sm">
          {product.brand}
        </div>
      </Link>
      
      <div className="p-4 flex flex-col flex-grow text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-headline font-bold text-base text-primary mb-2 hover:text-secondary transition-colors line-clamp-2 min-h-[3rem]">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-auto">
          <div className="flex flex-col mb-3">
            <span className="font-headline font-black text-lg text-[#E61E50]">
              {product.price > 0 ? `${product.price.toLocaleString('vi-VN')}đ` : 'Liên hệ báo giá'}
            </span>
          </div>
          
          <a 
            href={`tel:${CONTACT_INFO.phone.replace(/\./g, '')}`}
            className="w-full bg-primary text-white py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-secondary transition-all shadow-lg shadow-primary/10"
          >
            <Phone size={16} />
            LH: {CONTACT_INFO.phone}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

