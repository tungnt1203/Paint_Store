import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Palette, 
  Wrench, 
  ChevronRight, 
  Star, 
  Phone, 
  MessageCircle,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  PRODUCTS, 
  COLOR_PALETTE, 
  PROJECTS, 
  BLOG_POSTS, 
  SERVICES,
  BRANDS 
} from '../constants';
import { ProductCard } from '../components/Layout';

const Home = () => {
  const [activeColor, setActiveColor] = useState(COLOR_PALETTE[0]);
  const [productFilter, setProductFilter] = useState('All');

  const filteredProducts = PRODUCTS.filter(p => {
    if (productFilter === 'All') return true;
    return p.brand.includes(productFilter) || p.category === productFilter;
  }).slice(0, 4);

  const iconMap: { [key: string]: any } = {
    Palette: Palette,
    Truck: Truck,
    ShieldCheck: ShieldCheck,
    Wrench: Wrench
  };

  return (
    <div className="space-y-0 pb-0">
      <Helmet>
        <title>Duyên Paint - Sơn đẹp, bền màu theo thời gian | Đại lý Dulux, Jotun, Nippon</title>
        <meta name="description" content="Duyên Paint chuyên cung cấp sơn Dulux, Jotun, Nippon chính hãng. Tư vấn màu sắc miễn phí, giao hàng tận nơi, cam kết chất lượng cho mọi công trình." />
        <link rel="canonical" href="https://ais-pre-ighnbujlpckyiteo6aejeg-622160810419.asia-east1.run.app/" />
      </Helmet>

      {/* SECTION 1 – Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-white pt-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h1 className="text-primary font-headline font-extrabold text-5xl md:text-7xl leading-[1.1] tracking-tight mb-6">
              Sơn đẹp – <br/>
              <span className="text-secondary">Bền màu</span> theo thời gian
            </h1>
            <p className="text-on-surface-variant text-xl md:text-2xl mb-10 font-medium leading-relaxed max-w-lg">
              Phân phối chính hãng <span className="text-primary font-bold">Dulux, Jotun, Nippon</span>. Mang lại vẻ đẹp hoàn mỹ cho ngôi nhà của bạn.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/catalog" className="bg-primary text-white px-10 py-5 rounded-full font-headline font-bold text-lg hover:brightness-110 hover:scale-[1.02] transition-all flex items-center gap-3 shadow-lg shadow-primary/20">
                Xem bảng màu
                <Palette size={20} />
              </Link>
              <Link to="/catalog" className="bg-secondary text-white px-10 py-5 rounded-full font-headline font-bold text-lg hover:brightness-110 hover:scale-[1.02] transition-all flex items-center gap-3 shadow-lg shadow-secondary/20">
                Mua ngay
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
                alt="Nhà đẹp phối màu sơn hiện đại" 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl flex items-center justify-between shadow-xl">
                <div>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Màu sắc thực tế</p>
                  <p className="text-primary font-headline font-bold">Vinhomes Grand Park Project</p>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-[#1E3A8A] border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-[#F5F5DC] border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-[#FFFFFF] border-2 border-white"></div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 – Bảng màu sơn */}
      <section id="color-palette" className="py-32 bg-surface px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-headline font-black text-primary tracking-tighter mb-4">Khám phá bảng màu</h2>
              <p className="text-on-surface-variant text-lg">Chọn gam màu yêu thích và xem trước không gian sống của bạn sẽ thay đổi như thế nào.</p>
            </div>
            <Link to="/colors" className="bg-primary text-white px-8 py-4 rounded-full font-headline font-bold hover:bg-secondary transition-all shadow-xl shadow-primary/20">
              Xem tất cả màu sắc
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Color Grid */}
            <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
              {COLOR_PALETTE.slice(0, 6).map((color) => (
                <button
                  key={color.id}
                  onClick={() => setActiveColor(color)}
                  className={`group relative p-6 rounded-2xl transition-all duration-300 border-2 ${
                    activeColor.id === color.id 
                      ? 'border-primary bg-white shadow-xl scale-105' 
                      : 'border-transparent bg-white/50 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div 
                    className="w-full aspect-square rounded-xl mb-4 shadow-inner"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <p className="font-headline font-bold text-sm text-primary">{color.name}</p>
                  <p className="text-xs text-on-surface-variant">{color.code}</p>
                </button>
              ))}
              <Link to="/colors" className="col-span-full mt-4 flex items-center justify-center gap-2 p-6 rounded-3xl border-2 border-dashed border-outline-variant/30 text-on-surface-variant font-bold hover:border-primary hover:text-primary transition-all group">
                Khám phá thêm 2000+ màu <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Preview Area */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeColor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/20"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-[400px] md:h-auto">
                      <img 
                        src={activeColor.preview} 
                        alt={`Phòng mẫu màu ${activeColor.name}`} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: activeColor.hex }}></div>
                        <span className="text-xs font-bold text-primary uppercase tracking-widest">{activeColor.code}</span>
                      </div>
                    </div>
                    <div className="p-10 flex flex-col justify-center">
                      <h3 className="text-3xl font-headline font-black text-primary mb-4">{activeColor.name}</h3>
                      <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                        {activeColor.description}
                      </p>
                      
                      <div className="space-y-6">
                        <p className="text-sm font-bold text-secondary uppercase tracking-[0.2em]">Sản phẩm khuyên dùng</p>
                        <div className="grid grid-cols-2 gap-4">
                          {activeColor.relatedProducts.map(id => {
                            const p = PRODUCTS.find(prod => prod.id === id);
                            if (!p) return null;
                            return (
                              <Link key={id} to={`/product/${id}`} className="flex items-center gap-3 group">
                                <div className="w-12 h-12 rounded-lg bg-surface-container-low p-2 overflow-hidden flex-shrink-0">
                                  <img src={p.image} alt={p.name} className="w-full h-full object-contain mix-blend-multiply" />
                                </div>
                                <span className="text-xs font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">{p.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      <Link to="/catalog" className="mt-10 inline-flex items-center gap-2 text-primary font-bold border-b-2 border-primary hover:text-secondary hover:border-secondary transition-all">
                        Xem tất cả sản phẩm màu này <ChevronRight size={18} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 – Sản phẩm nổi bật */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-black text-primary tracking-tighter mb-4">Sản phẩm nổi bật</h2>
            <div className="flex flex-wrap gap-3">
              {['All', 'Dulux', 'Jotun', 'Nippon', 'Sơn nội thất', 'Sơn ngoại thất'].map(filter => (
                <button
                  key={filter}
                  onClick={() => setProductFilter(filter)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    productFilter === filter 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <Link to="/catalog" className="text-primary font-bold flex items-center gap-2 group">
            Xem tất cả sản phẩm
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* SECTION 4 – Dịch vụ (Trust) */}
      <section className="bg-primary py-24 px-6 md:px-12 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-all duration-500 group-hover:scale-110">
                  <Icon size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-headline font-bold mb-3">{service.title}</h3>
                <p className="text-white/70 font-body leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
        {/* Background decorative text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.03] whitespace-nowrap pointer-events-none select-none">
          TRUST & QUALITY
        </div>
      </section>

      {/* NEW SECTION – Danh sách các hãng sơn */}
      <section className="py-24 bg-surface-container-lowest border-y border-outline-variant/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-black text-primary tracking-tighter mb-4">Đối tác chiến lược</h2>
            <p className="text-on-surface-variant text-base max-w-2xl mx-auto">Duyên Paint tự hào là nhà phân phối chính hãng của các thương hiệu sơn hàng đầu thế giới.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center">
            {BRANDS.map((brand) => (
              <motion.div
                key={brand.id}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-full aspect-video bg-white rounded-2xl p-6 flex items-center justify-center shadow-sm border border-outline-variant/10 group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-500 overflow-hidden">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-sm font-headline font-black text-primary">{brand.name}</h4>
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">{brand.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 – Công trình thực tế */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-headline font-black text-primary tracking-tighter mb-4">Công trình thực tế</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">Minh chứng cho chất lượng và sự tận tâm của Duyên Paint qua từng dự án.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group flex flex-col">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-xl">
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className="relative overflow-hidden border-r border-white/20">
                    <img src={project.before} alt="Trước khi sơn" className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Trước</div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img src={project.after} alt="Sau khi sơn" className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Sau</div>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-8 text-center">
                  <p className="text-white/80 text-sm font-bold uppercase tracking-widest mb-2">{project.type}</p>
                  <h4 className="text-white text-2xl font-headline font-bold mb-4">{project.title}</h4>
                  <p className="text-white/70 text-sm mb-6">{project.description}</p>
                  <button className="bg-white text-primary px-6 py-2 rounded-full font-bold text-sm">Chi tiết dự án</button>
                </div>
              </div>
              <h4 className="text-xl font-headline font-bold text-primary group-hover:text-secondary transition-colors">{project.title}</h4>
              <p className="text-on-surface-variant text-sm mt-1">{project.type}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 – Blog SEO */}
      <section id="blog" className="bg-surface-container-low py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-headline font-black text-primary tracking-tighter mb-4">Kiến thức sơn nhà</h2>
              <p className="text-on-surface-variant">Cập nhật xu hướng màu sắc và kỹ thuật thi công mới nhất.</p>
            </div>
            <Link to="/about" className="hidden md:flex items-center gap-2 text-primary font-bold group">
              Xem tất cả bài viết
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <div className="relative aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary flex items-center gap-1">
                    <Clock size={12} />
                    {post.date}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-headline font-bold text-primary mb-4 line-clamp-2 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link to="/about" className="text-primary font-bold text-sm flex items-center gap-2 group/link">
                    Đọc tiếp
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 – CTA cuối */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-white text-4xl md:text-6xl font-headline font-black mb-8">Bạn cần tư vấn màu sơn?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
              Đừng ngần ngại liên hệ với chúng tôi để nhận được sự hỗ trợ tận tình nhất từ các chuyên gia hàng đầu.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="tel:0901234567" 
                className="w-full sm:w-auto bg-secondary text-white px-10 py-5 rounded-full font-headline font-bold text-xl flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-xl shadow-secondary/20"
              >
                <Phone size={24} />
                090 123 4567
              </a>
              <a 
                href="https://zalo.me/0901234567" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-primary px-10 py-5 rounded-full font-headline font-bold text-xl flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-xl"
              >
                <MessageCircle size={24} />
                Chat Zalo ngay
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-white/60 text-sm font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-secondary" />
                Miễn phí 100%
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-secondary" />
                Phản hồi trong 5p
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

