import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Phone, ArrowRight, Share2, Award, Star, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Sản phẩm', path: '/catalog' },
    { name: 'Bảng màu', path: '/colors' },
    { name: 'Blog', path: '/#blog' },
    { name: 'Liên hệ', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-white py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black font-headline text-primary flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white italic">D</div>
          Duyên Paint
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 font-headline font-bold tracking-tight">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-all duration-300 relative group ${
                location.pathname === link.path ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-secondary transition-transform duration-300 origin-left ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button 
            aria-label="Tìm kiếm sản phẩm"
            className="p-2 text-primary hover:text-secondary transition-colors"
          >
            <Search size={22} />
          </button>
          <Link to="/catalog" className="hidden sm:flex bg-primary text-white px-8 py-3 rounded-full font-headline font-bold hover:brightness-110 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20 items-center gap-2">
            Báo giá ngay
          </Link>
          <button 
            aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 md:hidden bg-white"
          >
            <div className="p-6 flex justify-between items-center border-b border-outline-variant">
              <Link to="/" className="text-2xl font-black font-headline text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                Duyên Paint
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
              <Link 
                to="/catalog" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-white py-5 rounded-full text-xl shadow-xl shadow-primary/20"
              >
                Nhận báo giá
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="space-y-8">
          <div className="text-3xl font-black font-headline">Duyên Paint</div>
          <p className="text-white/70 font-body leading-relaxed">
            Đại lý ủy quyền chính hãng Dulux, Jotun, Nippon. Mang sắc màu hoàn mỹ và sự bền bỉ đến mọi công trình Việt.
          </p>
          <div className="flex space-x-4 items-center">
            <a href="https://facebook.com/duyenpaint" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-all">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" 
                alt="Facebook Duyên Paint" 
                className="w-6 h-6 invert"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </a>
            <a href="https://zalo.me/0901234567" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-all">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" 
                alt="Zalo Duyên Paint" 
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
            <li><Link to="/catalog" className="hover:text-white transition-colors">Sơn Nội Thất</Link></li>
            <li><Link to="/catalog" className="hover:text-white transition-colors">Sơn Ngoại Thất</Link></li>
            <li><Link to="/catalog" className="hover:text-white transition-colors">Sơn Chống Thấm</Link></li>
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
              123 Đường Kiến Trúc, Q.1, TP.HCM
            </p>
            <p className="flex items-center gap-3 text-white font-bold text-lg">
              <Phone size={20} className="text-secondary" />
              090 123 4567
            </p>
            <p className="text-sm italic">Mở cửa: 7:30 - 18:00 (T2 - CN)</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/10 text-center text-white/40 font-body text-sm">
        © 2026 Duyên Paint. All rights reserved. Thiết kế bởi tungnt.
      </div>
    </footer>
  );
};

export const FloatingActions = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50">
      <a 
        href="https://zalo.me/0901234567" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo với chúng tôi"
        className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer border-4 border-primary/5"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" 
          alt="Chat Zalo với Duyên Paint" 
          className="w-10 h-10"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </a>
      <a 
        href="tel:0901234567" 
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
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-outline-variant/10 flex flex-col h-full group"
    >
      <Link to={`/product/${product.id}`} className="relative aspect-square overflow-hidden bg-surface-container-low p-8">
        <img 
          src={product.image} 
          alt={`Sơn ${product.brand} ${product.name} chính hãng`}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest shadow-sm">
          {product.brand}
        </div>
        {product.oldPrice && (
          <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
            Giảm giá
          </div>
        )}
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map(star => (
            <Star key={star} size={12} className="fill-secondary text-secondary" />
          ))}
          <span className="text-[10px] text-on-surface-variant font-bold ml-1">(4.8)</span>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="font-headline font-bold text-lg text-primary mb-3 hover:text-secondary transition-colors line-clamp-2 min-h-[3.5rem]">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-auto">
          <div className="flex flex-col mb-4">
            {product.oldPrice && (
              <span className="text-xs text-on-surface-variant line-through mb-1">
                {product.oldPrice.toLocaleString('vi-VN')}đ
              </span>
            )}
            <span className="font-headline font-black text-xl text-primary">
              {product.price.toLocaleString('vi-VN')}đ
            </span>
          </div>
          
          <div className="grid grid-cols-5 gap-2">
            <Link to={`/product/${product.id}`} className="col-span-1 aspect-square rounded-xl bg-surface-container-low flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
              <Search size={18} />
            </Link>
            <button className="col-span-4 bg-primary text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-secondary hover:brightness-110 hover:scale-[1.02] transition-all shadow-lg shadow-primary/10">
              <ShoppingCart size={16} />
              Mua ngay
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

