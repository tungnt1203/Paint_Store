import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Phone, Share2, Award, MapPin, Mail, Palette, Truck, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '../images/logo_sn_transparent_opt.png';

import { CONTACT_INFO } from '../constants';

const Logo = ({
  className = "w-24 h-24",
  showText = false,
  darkBackground = false,
}: {
  className?: string,
  showText?: boolean,
  darkBackground?: boolean
}) => (
  <div className="flex items-center gap-3 group">
    <div className={`relative ${className} flex items-center justify-center flex-shrink-0`}>
      <img 
        src={logoImg} 
        alt={`Logo ${CONTACT_INFO.name}`} 
        className="w-full h-full object-cover"
        width={296}
        height={384}
        decoding="async"
        referrerPolicy="no-referrer"
      />
    </div>
    {showText && (
      <div className="flex flex-col leading-none min-w-0 text-left">
        <span
          className={`text-xl sm:text-2xl md:text-3xl font-black tracking-tighter uppercase truncate max-w-[65vw] sm:max-w-none ${
            darkBackground ? 'text-white' : 'text-[#B01244]'
          }`}
        >
          {CONTACT_INFO.name}
        </span>
        <span
          className={`text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mt-1 line-clamp-2 ${
            darkBackground ? 'text-white/90' : 'text-[#0B5CAD]'
          }`}
        >
          {CONTACT_INFO.slogan}
        </span>
      </div>
    )}
  </div>
);

const TopBar = () => (
  <div className="hidden md:block bg-white border-b border-outline-variant py-2 px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-xs font-medium text-on-surface-variant gap-4">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <MapPin size={14} className="text-primary shrink-0" />
          {CONTACT_INFO.address}
        </span>
        <span className="flex items-center gap-1.5">
          <Mail size={14} className="text-primary shrink-0" />
          {CONTACT_INFO.email}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <Phone size={14} className="text-primary shrink-0" />
          {CONTACT_INFO.phone} - {CONTACT_INFO.phone2}
        </span>
      </div>
    </div>
  </div>
);

const MainHeader = () => (
  <div className="hidden md:block bg-white py-6 px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <Link to="/" className="flex items-center">
        <Logo className="w-32 h-32" />
      </Link>
      
      <div className="flex flex-col items-center text-center flex-grow">
        <h3 className="text-primary font-headline font-bold text-lg md:text-xl mb-2">
          {CONTACT_INFO.headerTitle}
        </h3>
        <h1 className="text-[#B01244] font-headline font-black text-5xl md:text-7xl uppercase tracking-tighter mb-2">
          {CONTACT_INFO.name}
        </h1>
        <p className="text-[#0B5CAD] font-headline font-bold text-lg md:text-2xl uppercase tracking-[0.2em]">
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
    { name: 'Thương hiệu sơn', path: '/' },
    { name: 'Sản phẩm', path: '/catalog' },
    { name: 'Bảng giá', path: '/#pricing' },
    { name: 'Bảng màu', path: '/#color' },
    { name: 'Vận chuyển', path: '/#shipping' },
    { name: 'Liên hệ', path: '/contact' },
  ];

  return (
    <div className="hidden md:block bg-primary sticky top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        <div className="flex items-center space-x-6 lg:space-x-8 h-full overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {navLinks.map((link) => (
            <Link
              key={`${link.path}-${link.name}`}
              to={link.path}
              className={`h-full flex items-center px-4 font-headline font-bold text-sm uppercase tracking-wider transition-all relative group ${
                location.pathname === link.path ? 'text-amber-200' : 'text-white hover:text-amber-200'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-1 bg-secondary transition-transform duration-300 origin-left ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          ))}
        </div>
        
        <button
          type="button"
          aria-label="Mở tìm kiếm"
          className="text-white hover:text-secondary transition-colors p-2"
        >
          <Search size={24} />
        </button>
      </div>
    </div>
  );
};

const ServiceBar = () => (
  <div className="hidden md:block bg-surface-container-lowest border-b border-outline-variant/10 py-4 px-6 md:px-12">
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

  const mobileNavLinks = [
    { name: 'Thương hiệu sơn', path: '/' },
    { name: 'Sản phẩm', path: '/catalog' },
    { name: 'Bảng giá', path: '/#pricing' },
    { name: 'Bảng màu', path: '/#color' },
    { name: 'Vận chuyển', path: '/#shipping' },
    { name: 'Liên hệ', path: '/contact' },
  ];

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMobileMenuOpen]);

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
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed inset-0 z-[60] md:hidden bg-white flex flex-col h-[100dvh] max-h-[100dvh]"
            role="dialog"
            aria-modal="true"
            aria-label="Menu điều hướng"
          >
            <div className="shrink-0 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3 sm:px-4 sm:pb-4 flex justify-between items-center gap-2 border-b border-outline-variant">
              <Link
                to="/"
                className="flex items-center gap-2 min-w-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Logo className="w-11 h-11 shrink-0" showText={true} />
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 text-primary rounded-xl hover:bg-primary/5 min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
                aria-label="Đóng menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
              <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-4 px-1">Danh mục</p>
              <ul className="flex flex-col gap-1 font-headline font-bold">
                {mobileNavLinks.map((link) => {
                  const active =
                    link.path.startsWith('/#')
                      ? false
                      : location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                  return (
                    <li key={`${link.path}-${link.name}`}>
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-3.5 px-3 rounded-xl text-lg sm:text-xl transition-colors ${
                          active ? 'bg-primary/10 text-primary' : 'text-on-surface-variant active:bg-surface-container-low'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\./g, '')}`}
                className="mt-8 flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-primary text-white font-headline font-bold text-base shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone size={20} />
                Gọi {CONTACT_INFO.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Thanh mobile: logo + tên + nút menu */}
      <div className="md:hidden sticky top-0 z-50 bg-white shadow-md border-b border-outline-variant/30 px-3 pt-[max(0.5rem,env(safe-area-inset-top))] pb-2 flex justify-between items-center gap-2">
        <Link to="/" className="flex items-center gap-2.5 min-w-0 flex-1">
          <Logo className="w-11 h-11 shrink-0" />
          <div className="min-w-0 text-left">
            <span className="block font-headline font-black text-sm text-[#B01244] uppercase tracking-tight leading-tight truncate">
              {CONTACT_INFO.name}
            </span>
            <span className="block text-[10px] font-bold text-on-surface-variant/80 truncate">
              {CONTACT_INFO.headerTitle}
            </span>
          </div>
        </Link>
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2.5 text-primary rounded-xl hover:bg-primary/5 min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
          aria-expanded={isMobileMenuOpen}
          aria-label="Mở menu"
        >
          <Menu size={24} />
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
            <Logo className="w-14 h-14" showText={true} darkBackground={true} />
          </Link>
          <p className="text-white/70 font-body leading-relaxed">
            Nhà phân phối sơn chính hãng. Chuyên cung cấp sơn nước, sơn dầu, sơn epoxy, sơn sắt thép, sơn chống thấm và vật tư ngành sơn. {CONTACT_INFO.slogan}.
          </p>
          <div className="flex space-x-4 items-center">
            <a href="https://www.facebook.com/profile.php?id=61574350202481" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-all">
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
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/10 text-center text-white/70 font-body text-sm">
        © 2026 {CONTACT_INFO.name}. All rights reserved. Thiết kế bởi{' '}
        <a
          href="https://www.facebook.com/profile.php?id=61574350202481"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white transition-colors"
        >
          tungnt
        </a>
        .
      </div>
    </footer>
  );
};

export const FloatingActions = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50">
      <a
        href="https://www.facebook.com/profile.php?id=61574350202481"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Mở Facebook của ${CONTACT_INFO.name}`}
        className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer border-4 border-primary/5"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-10 h-10 text-[#1877F2]"
          aria-hidden="true"
          fill="currentColor"
        >
          <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.019 4.388 11.01 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.017 1.791-4.686 4.533-4.686 1.313 0 2.686.236 2.686.236v2.963h-1.513c-1.49 0-1.956.93-1.956 1.885v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.083 24 18.092 24 12.073z" />
        </svg>
      </a>
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
      <div className="relative aspect-square overflow-hidden bg-surface-container-low p-6">
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
      </div>
      
      <div className="p-4 flex flex-col flex-grow text-center">
        <h3 className="font-headline font-bold text-base text-primary mb-2 line-clamp-2 min-h-[3rem]">
          {product.name}
        </h3>
        
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

