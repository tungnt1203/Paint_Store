import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Phone, ArrowRight, Share2, Award } from 'lucide-react';
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
    { name: 'Danh mục', path: '/catalog' },
    { name: 'Giới thiệu', path: '/about' },
    { name: 'Liên hệ', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-black italic font-headline transition-colors duration-300 ${isScrolled ? 'text-primary' : (isHomePage ? 'text-white' : 'text-primary')}`}>
          Duyên Paint
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-headline font-bold tracking-tight">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors duration-300 ${
                location.pathname === link.path
                  ? (isScrolled ? 'text-primary border-b-2 border-secondary pb-1' : (isHomePage ? 'text-white border-b-2 border-secondary pb-1' : 'text-primary border-b-2 border-secondary pb-1'))
                  : (isScrolled ? 'text-on-surface-variant hover:text-secondary' : (isHomePage ? 'text-white/80 hover:text-white' : 'text-on-surface-variant hover:text-secondary'))
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button className={`p-2 transition-colors ${isScrolled ? 'text-primary hover:text-secondary' : (isHomePage ? 'text-white hover:text-secondary-fixed-dim' : 'text-primary hover:text-secondary')}`}>
            <Search size={20} />
          </button>
          <button className="hidden sm:block bg-secondary text-on-secondary px-6 py-2 rounded-lg font-headline font-bold scale-95 active:scale-90 transition-transform hover:bg-secondary-container industrial-button">
            Nhận báo giá
          </button>
          <button 
            className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-primary' : (isHomePage ? 'text-white' : 'text-primary')}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-outline-variant overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6 font-headline font-bold">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg ${location.pathname === link.path ? 'text-primary' : 'text-on-surface-variant'}`}
                >
                  {link.name}
                </Link>
              ))}
              <button className="bg-secondary text-on-secondary w-full py-4 rounded-lg font-bold">
                Nhận báo giá
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="text-xl font-bold text-primary font-headline">Duyên Paint</div>
          <p className="text-on-surface-variant font-body text-sm leading-relaxed">
            Nâng tầm không gian sống với những dòng sơn cao cấp từ các thương hiệu hàng đầu thế giới.
          </p>
          <div className="flex space-x-4 items-center">
            <a href="https://facebook.com/duyenpaint" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-all shadow-sm overflow-hidden">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" 
                alt="Facebook" 
                className="w-full h-full"
                referrerPolicy="no-referrer"
              />
            </a>
            <Share2 size={20} className="text-primary cursor-pointer hover:text-secondary transition-colors" />
            <Award size={20} className="text-primary cursor-pointer hover:text-secondary transition-colors" />
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-headline font-bold text-primary">Sản phẩm</h4>
          <ul className="space-y-2 text-sm text-on-surface-variant font-body">
            <li><Link to="/catalog" className="hover:text-primary underline underline-offset-4">Sơn Nội Thất</Link></li>
            <li><Link to="/catalog" className="hover:text-primary underline underline-offset-4">Sơn Ngoại Thất</Link></li>
            <li><Link to="/catalog" className="hover:text-primary underline underline-offset-4">Sơn Công Nghiệp</Link></li>
            <li><Link to="/catalog" className="hover:text-primary underline underline-offset-4">Dụng Cụ Sơn</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-headline font-bold text-primary">Hỗ trợ</h4>
          <ul className="space-y-2 text-sm text-on-surface-variant font-body">
            <li><Link to="/about" className="hover:text-primary underline underline-offset-4">Tư vấn chuyên gia</Link></li>
            <li><Link to="#" className="hover:text-primary underline underline-offset-4">Thông tin vận chuyển</Link></li>
            <li><Link to="#" className="hover:text-primary underline underline-offset-4">Chính sách đổi trả</Link></li>
            <li><Link to="#" className="hover:text-primary underline underline-offset-4">Chính sách bảo mật</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-headline font-bold text-primary">Liên hệ</h4>
          <p className="text-sm text-on-surface-variant font-body">123 Đường Kiến Trúc, Q.1, TP.HCM</p>
          <p className="text-sm font-bold text-secondary">Hotline: 1800-PAINT-01</p>
          <div className="flex space-x-4">
            {/* Social Icons Placeholder */}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-outline-variant/10 text-center text-on-surface-variant font-body text-xs">
        © 2024 Duyên Paint Retail. Đối tác ủy quyền của Dulux & Jotun.
      </div>
    </footer>
  );
};

export const FloatingActions = () => {
  return (
    <div className="fixed bottom-10 right-10 flex flex-col space-y-4 z-50">
      <a 
        href="https://zalo.me/0901234567" 
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer border border-blue-100"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" 
          alt="Zalo" 
          className="w-10 h-10"
          referrerPolicy="no-referrer"
        />
      </a>
      <a 
        href="tel:1800-PAINT-01" 
        className="w-14 h-14 bg-secondary text-on-secondary rounded-full flex items-center justify-center industrial-shadow hover:scale-110 transition-transform cursor-pointer"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export const ProductCard = ({ product }: { product: any, key?: string }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link to={`/product/${product.id}`}>
        <div className="bg-surface-container-highest aspect-[4/5] rounded-xl mb-6 overflow-hidden flex items-center justify-center p-12 transition-transform duration-500 group-hover:scale-[1.02]">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </div>
      </Link>
      <p className="font-label text-xs font-bold text-secondary tracking-widest uppercase mb-1">{product.brand}</p>
      <Link to={`/product/${product.id}`}>
        <h3 className="font-headline font-bold text-xl text-primary mb-2 hover:text-secondary transition-colors">{product.name}</h3>
      </Link>
      <div className="flex items-end justify-between">
        <span className="font-body font-semibold text-lg text-on-surface">
          {product.price.toLocaleString('vi-VN')}đ
        </span>
        <div className="flex space-x-2">
          <Link to={`/product/${product.id}`} className="p-2 rounded-md bg-surface-container-low hover:bg-surface-container-high transition-colors">
            <Search size={20} className="text-primary" />
          </Link>
          <button className="bg-secondary text-white px-4 py-2 rounded-md font-bold text-sm industrial-button">
            Liên hệ
          </button>
        </div>
      </div>
    </motion.div>
  );
};
