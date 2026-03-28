import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, ChevronRight, Info, ShoppingCart, CheckCircle2, Sparkles, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COLOR_PALETTE, PRODUCTS, CONTACT_INFO } from '../constants';

const ColorPalettePage = () => {
  const [activeColor, setActiveColor] = useState(COLOR_PALETTE[0]);
  const [filter, setFilter] = useState('All');

  const moods = ['All', 'Ấm áp', 'Bình yên', 'Hiện đại', 'Năng lượng', 'Tinh khôi'];

  const filteredColors = COLOR_PALETTE.filter(color => {
    if (filter === 'All') return true;
    return color.description.toLowerCase().includes(filter.toLowerCase()) || 
           color.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="pt-28 pb-20 bg-surface-container-lowest min-h-screen">
      <Helmet>
        <title>Bảng màu sơn chính hãng 2026 | {CONTACT_INFO.name} - Phối màu chuyên nghiệp</title>
        <meta name="description" content={`Khám phá bảng màu sơn mới nhất 2026 tại ${CONTACT_INFO.name}. Xem trước màu sơn trong không gian thực tế, nhận tư vấn phối màu từ chuyên gia.`} />
        <link rel="canonical" href="https://ais-pre-ighnbujlpckyiteo6aejeg-622160810419.asia-east1.run.app/colors" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <header className="mb-20 text-center max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-headline font-black uppercase tracking-[0.3em] text-sm block mb-6"
          >
            Khám phá sắc màu
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-headline font-black text-primary tracking-tighter leading-[0.9] mb-8"
          >
            Bảng màu <br/>Kiến trúc <span className="italic text-on-surface-variant">2026.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-xl leading-relaxed"
          >
            Đừng chỉ chọn một màu sơn, hãy chọn một cảm xúc cho ngôi nhà của bạn. 
            Hệ thống phối màu thực tế giúp bạn hình dung không gian sống mơ ước.
          </motion.p>
        </header>

        {/* Interactive Visualizer Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          {/* Left: Color Selection & Filters */}
          <div className="lg:col-span-5 space-y-10">
            <div className="flex flex-wrap gap-2">
              {moods.map(m => (
                <button
                  key={m}
                  onClick={() => setFilter(m)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    filter === m 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-white text-on-surface-variant border border-outline-variant/20 hover:border-primary'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {filteredColors.map((color) => (
                <motion.button
                  key={color.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveColor(color)}
                  className={`group relative p-4 rounded-3xl transition-all duration-300 border-2 text-left ${
                    activeColor.id === color.id 
                      ? 'border-primary bg-white shadow-2xl z-10' 
                      : 'border-transparent bg-white/50 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div 
                    className="w-full aspect-square rounded-2xl mb-4 shadow-inner relative overflow-hidden"
                    style={{ backgroundColor: color.hex }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  </div>
                  <p className="font-headline font-black text-sm text-primary truncate">{color.name}</p>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{color.code}</p>
                </motion.button>
              ))}
            </div>

            {/* Expert Advice Card */}
            <div className="bg-primary rounded-[2.5rem] p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 blur-3xl rounded-full"></div>
              <h4 className="text-xl font-headline font-black mb-4 relative z-10">Bạn phân vân giữa các màu?</h4>
              <p className="text-white/70 text-sm mb-6 relative z-10">
                Chuyên gia của {CONTACT_INFO.name} sẽ giúp bạn phối màu 3D miễn phí cho công trình của mình.
              </p>
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\./g, '')}`} 
                className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform relative z-10"
              >
                Nhận tư vấn ngay <ChevronRight size={16} />
              </a>
            </div>
          </div>

          {/* Right: Immersive Preview */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeColor.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-outline-variant/10 h-full flex flex-col"
              >
                <div className="relative flex-grow">
                  <img 
                    src={activeColor.preview} 
                    alt={`Phòng mẫu màu ${activeColor.name}`} 
                    className="w-full h-full object-cover min-h-[500px]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                    <div className="text-white">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-6 h-6 rounded-full border-2 border-white shadow-lg" style={{ backgroundColor: activeColor.hex }}></div>
                        <span className="text-xs font-black uppercase tracking-[0.2em]">{activeColor.code}</span>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-headline font-black tracking-tight">{activeColor.name}</h3>
                    </div>
                    <div className="hidden md:block">
                      <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-white text-xs font-bold">
                        Phòng khách hiện đại
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-10 md:p-12 space-y-8">
                  <p className="text-on-surface-variant text-xl leading-relaxed italic font-medium">
                    "{activeColor.description}"
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-outline-variant/20">
                    <div>
                      <h5 className="text-xs font-black text-primary uppercase tracking-widest mb-6">Sản phẩm tương thích</h5>
                      <div className="space-y-4">
                        {activeColor.relatedProducts.map(id => {
                          const p = PRODUCTS.find(prod => prod.id === id);
                          if (!p) return null;
                          return (
                            <div key={id} className="flex items-center gap-4 bg-surface-container-low/50 p-3 rounded-2xl">
                              <div className="w-14 h-14 rounded-xl bg-white p-2 overflow-hidden flex-shrink-0 shadow-sm">
                                <img src={p.image} alt={p.name} className="w-full h-full object-contain mix-blend-multiply" />
                              </div>
                              <div>
                                <p className="text-[10px] font-black text-secondary uppercase tracking-widest">{p.brand}</p>
                                <p className="text-sm font-bold text-primary line-clamp-1">{p.name}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="space-y-6">
                      <h5 className="text-xs font-black text-primary uppercase tracking-widest mb-6">Đặc tính màu sắc</h5>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 text-on-surface-variant">
                          <Sparkles size={16} className="text-secondary" />
                          <span className="text-sm font-bold">Bền màu 12 năm</span>
                        </div>
                        <div className="flex items-center gap-2 text-on-surface-variant">
                          <Droplets size={16} className="text-secondary" />
                          <span className="text-sm font-bold">Chống bám bẩn</span>
                        </div>
                        <div className="flex items-center gap-2 text-on-surface-variant">
                          <CheckCircle2 size={16} className="text-secondary" />
                          <span className="text-sm font-bold">Kháng tia UV</span>
                        </div>
                        <div className="flex items-center gap-2 text-on-surface-variant">
                          <Info size={16} className="text-secondary" />
                          <span className="text-sm font-bold">Thân thiện môi trường</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Color Trends Section */}
        <section className="py-24 border-t border-outline-variant/20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-headline font-black text-primary tracking-tighter mb-4">Xu hướng phối màu 2026</h2>
              <p className="text-on-surface-variant text-lg">Những bộ sưu tập màu sắc được các kiến trúc sư hàng đầu lựa chọn cho năm nay.</p>
            </div>
            <Link to="/catalog" className="bg-primary text-white px-8 py-4 rounded-full font-headline font-bold hover:bg-secondary transition-all shadow-xl shadow-primary/20">
              Xem tất cả sản phẩm
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Minimalist Zen', color: '#E4E3E0', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800' },
              { title: 'Urban Industrial', color: '#4A4A4A', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800' },
              { title: 'Tropical Oasis', color: '#2D5A27', image: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
            ].map((trend, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-xl"
              >
                <img src={trend.image} alt={trend.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="w-12 h-12 rounded-2xl mb-4 shadow-lg border-2 border-white" style={{ backgroundColor: trend.color }}></div>
                  <h4 className="text-2xl font-headline font-black text-white mb-2">{trend.title}</h4>
                  <p className="text-white/70 text-sm font-bold uppercase tracking-widest">Bộ sưu tập giới hạn</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ColorPalettePage;
