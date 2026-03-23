import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CreditCard, Truck } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { ProductCard } from '../components/Layout';

const Home = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-primary px-6 md:px-8 pt-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <span className="text-secondary-fixed-dim font-headline font-extrabold uppercase tracking-[0.2em] text-sm mb-4 block">Authorized Retailer</span>
            <h1 className="text-white font-headline font-extrabold text-5xl md:text-7xl leading-[1.1] tracking-tight mb-8">
              Chuyên sơn chính hãng <span className="italic text-primary-fixed-dim">Dulux, Jotun…</span>
            </h1>
            <p className="text-primary-fixed-dim text-lg md:text-xl max-w-md mb-10 font-light leading-relaxed">
              Elevate your architectural vision with premium finishes and technical expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/catalog" className="bg-secondary text-white px-8 py-4 rounded-lg font-headline font-bold text-lg hover:bg-secondary-container transition-all flex items-center gap-3">
                Nhận báo giá
                <ArrowRight size={20} />
              </Link>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-headline font-bold text-lg backdrop-blur-md transition-all border border-white/20">
                Gọi ngay
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden md:block"
          >
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl scale-110 translate-x-12 translate-y-6">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG0twnabC6d-xkje5HAnXLyYdf2vyPKOmWX83oc5ooTClhn16rdYnxHq9NLANep5P3-D1jr-juiz7sNrDmlDCr-qyMLNj0dyCeX5174icqVFSzNqifCEJUG9NfEMebx7abmtBlSdgafCIfwsIXRnTLKxmcorBSthtkTLOYAAVG0zS0vKOEOrSzQRDtS_1p-xS0MbVJWx2E8Fm2NOmMxeVGGXrzeLnMVfGbJdqx09lQDBOm14zWeedvoD6b7fjXMp-rEPj1wtwha-Q" 
                alt="Luxury interior" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Factors */}
      <section className="bg-surface-container-low py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex items-center gap-6">
            <div className="bg-primary-container p-4 rounded-xl text-on-primary-container">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h3 className="font-headline font-extrabold text-primary text-xl">Chính hãng</h3>
              <p className="text-on-surface-variant font-body">100% authorized partner of Dulux & Jotun.</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="bg-primary-container p-4 rounded-xl text-on-primary-container">
              <CreditCard size={32} />
            </div>
            <div>
              <h3 className="font-headline font-extrabold text-primary text-xl">Giá tốt</h3>
              <p className="text-on-surface-variant font-body">Competitive wholesale pricing for retailers.</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="bg-primary-container p-4 rounded-xl text-on-primary-container">
              <Truck size={32} />
            </div>
            <div>
              <h3 className="font-headline font-extrabold text-primary text-xl">Giao nhanh</h3>
              <p className="text-on-surface-variant font-body">Same-day delivery for all city projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-secondary font-headline font-extrabold uppercase tracking-widest text-sm mb-2 block">Collections</span>
          <h2 className="text-4xl md:text-5xl font-headline font-black text-primary tracking-tighter">Essential Solutions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-highest min-h-[400px]">
            <img 
              src={CATEGORIES[0].image} 
              alt="Interior" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-12">
              <h3 className="text-white text-3xl font-headline font-bold mb-4">Sơn nội thất</h3>
              <p className="text-primary-fixed-dim max-w-md mb-6">Create breathtaking spaces with high-end interior finishes.</p>
              <Link to="/catalog" className="text-secondary-fixed-dim font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Explore Collection <ArrowRight size={20} />
              </Link>
            </div>
          </div>
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-highest min-h-[400px]">
            <img 
              src={CATEGORIES[1].image} 
              alt="Exterior" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-headline font-bold mb-4">Sơn ngoại thất</h3>
              <Link to="/catalog" className="text-secondary-fixed-dim font-bold flex items-center gap-2">View Catalog</Link>
            </div>
          </div>
          <div className="md:col-span-12 group relative overflow-hidden rounded-xl bg-surface-container-highest h-[300px]">
            <img 
              src={CATEGORIES[2].image} 
              alt="Waterproofing" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent flex flex-col justify-center p-12">
              <h3 className="text-white text-3xl font-headline font-bold mb-4">Sơn chống thấm</h3>
              <p className="text-primary-fixed-dim max-w-sm">Extreme durability for tropical climates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-surface py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-secondary font-headline font-extrabold uppercase tracking-widest text-sm mb-2 block">Bestsellers</span>
              <h2 className="text-4xl font-headline font-black text-primary tracking-tighter">Featured Products</h2>
            </div>
            <Link to="/catalog" className="hidden md:flex items-center gap-2 text-primary font-bold border-b-2 border-primary">
              See All Products <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
