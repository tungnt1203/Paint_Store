import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Palette, 
  Wrench, 
  ChevronRight, 
  Phone, 
  MessageCircle,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import heroVideo from '../videos/son_ngan_intro.webm';
import { SeoMeta } from '../components/SeoMeta';
import { 
  PRODUCTS, 
  COLOR_PALETTE, 
  PROJECTS, 
  BLOG_POSTS, 
  SERVICES,
  BRANDS,
  CONTACT_INFO
} from '../constants';
import { ProductCard } from '../components/Layout';

const HERO_POSTER =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=75&w=1920';

const Home = () => {
  const [activeColor, setActiveColor] = useState(COLOR_PALETTE[0]);
  const [productFilter, setProductFilter] = useState('Dulux');

  const filteredProducts = PRODUCTS.filter(p => {
    if (productFilter === 'All') return true;
    return p.brand.toLowerCase().includes(productFilter.toLowerCase());
  }).slice(0, 8);

  const iconMap: { [key: string]: any } = {
    Palette: Palette,
    Truck: Truck,
    ShieldCheck: ShieldCheck,
    Wrench: Wrench
  };

  return (
    <div className="space-y-0 pb-0">
      <SeoMeta
        path="/"
        title={`${CONTACT_INFO.fullName} - ${CONTACT_INFO.headerTitle}`}
        description={`${CONTACT_INFO.fullName} tại ${CONTACT_INFO.address}. Chuyên ${CONTACT_INFO.services.join(', ')} chính hãng Dulux, Jotun, Nippon, Kova. Tư vấn kỹ thuật, giao hàng toàn quốc.`}
      />

      {/* SECTION 1 – Hero Slider */}
      <section className="relative w-full aspect-video md:aspect-auto md:h-[80vh] overflow-hidden bg-surface">
        <video
          className="absolute inset-0 w-full h-full object-contain md:object-cover"
          src={heroVideo}
          poster={HERO_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Video giới thiệu Sơn Ngân"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="w-full h-full"
          />
        </div>
        
      </section>

      {/* SECTION 1.5 – Giới thiệu */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-headline font-black text-primary tracking-tighter uppercase mb-8">
                Giới thiệu về Đại lý chúng tôi
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                <p>
                  Chào mừng quý khách đến với <strong>Công ty TNHH TM &amp; XD Sơn Ngân</strong>. Chúng tôi tự hào là tổng đại lý phân phối sơn chính hãng hàng đầu tại Việt Nam, mang đến giải pháp hoàn thiện tối ưu nhất cho mọi công trình kiến trúc.
                </p>
                <p>
                  Đến với đại lý Sơn Ngân, quý khách hàng cần sơn gì có sơn đó: sơn bền, giá tốt, đa sắc màu. Chúng tôi cung cấp đầy đủ và đa dạng các dòng sơn như sơn trang trí, sơn dân dụng, sơn bảo vệ bề mặt bê tông, kim loại, gỗ, cùng các giải pháp sơn cho hệ thống kết cấu hạ tầng.
                </p>
                <p>
                  Với nhiều năm kinh nghiệm trong ngành, chúng tôi cam kết giúp khách hàng chọn đúng sơn, dùng đúng mục đích với giá thành hợp lý. Đội ngũ luôn theo sát và hỗ trợ khách hàng xuyên suốt từ khâu tư vấn, mua hàng đến hoàn thiện thi công.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8"
            >
              <div className="bg-surface-container-low p-8 rounded-3xl text-center hover:bg-primary hover:text-white transition-all duration-500 group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20">
                  <Truck size={32} className="text-primary group-hover:text-white" />
                </div>
                <h3 className="font-headline font-bold text-lg mb-2">Giao hàng toàn quốc</h3>
              </div>
              
              <div className="bg-surface-container-low p-8 rounded-3xl text-center hover:bg-primary hover:text-white transition-all duration-500 group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20">
                  <CheckCircle2 size={32} className="text-primary group-hover:text-white" />
                </div>
                <h3 className="font-headline font-bold text-lg mb-2">Thanh toán dễ dàng</h3>
              </div>
              
              <div className="bg-surface-container-low p-8 rounded-3xl text-center hover:bg-primary hover:text-white transition-all duration-500 group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20">
                  <Phone size={32} className="text-primary group-hover:text-white" />
                </div>
                <h3 className="font-headline font-bold text-lg mb-2">Tư vấn miễn phí 24/7</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – Sơn Nước và Bột Trét */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-headline font-black text-primary tracking-tighter uppercase mb-8">
            Sơn Nước và Bột Trét
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-10">
            Các thương hiệu nổi tiếng và chất lượng
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Dulux', 'Jotun', 'Nippon', 'Kova', 'TOA', 'Spec'].map(brand => (
              <button
                key={brand}
                onClick={() => setProductFilter(brand)}
                className={`px-8 py-3 rounded-xl font-headline font-bold text-sm uppercase tracking-widest transition-all border-2 ${
                  productFilter === brand 
                    ? 'bg-primary text-white border-primary shadow-xl' 
                    : 'bg-white text-on-surface-variant border-outline-variant hover:border-primary hover:text-primary'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/catalog" className="inline-flex items-center gap-2 bg-surface-container-low text-primary px-10 py-4 rounded-full font-headline font-bold hover:bg-primary hover:text-white transition-all group">
            Xem tất cả sản phẩm
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* SECTION 2.5 – Sơn chống thấm */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-headline font-black text-primary tracking-tighter uppercase mb-4">
              Sơn chống thấm
            </h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              Giải pháp ngăn chặn ẩm mốc, bảo vệ tường và sàn tuyệt đối cho công trình của bạn.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {['KOVA', 'YURI', 'SIKA', 'FLINKOTE'].map((brand) => (
                <span
                  key={brand}
                  className="px-8 py-3 rounded-xl font-headline font-bold text-sm uppercase tracking-widest bg-white text-on-surface-variant border-2 border-outline-variant hover:border-primary hover:text-primary transition-all"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.filter(p => p.category === 'Sơn chống thấm').slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/catalog" className="inline-flex items-center gap-2 bg-white text-primary px-10 py-4 rounded-full font-headline font-bold hover:bg-primary hover:text-white transition-all group shadow-sm">
              Tất cả sơn chống thấm
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2.6 – Sơn dầu */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-headline font-black text-primary tracking-tighter uppercase mb-4">
              Sơn dầu cho kim loại và gỗ
            </h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              Bảo vệ và làm đẹp bề mặt gỗ, kim loại với độ bóng cao và khả năng chống rỉ sét vượt trội.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {['EXPO', 'BẠCH TUYẾT', 'CADIN'].map((brand) => (
                <span
                  key={brand}
                  className="px-8 py-3 rounded-xl font-headline font-bold text-sm uppercase tracking-widest bg-white text-on-surface-variant border-2 border-outline-variant hover:border-primary hover:text-primary transition-all"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.filter(p => p.category === 'Sơn dầu').slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/catalog" className="inline-flex items-center gap-2 bg-surface-container-low text-primary px-10 py-4 rounded-full font-headline font-bold hover:bg-primary hover:text-white transition-all group">
              Tất cả sơn dầu
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2.7 – Sơn Epoxy */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-headline font-black text-primary tracking-tighter uppercase mb-4">
              Epoxy cho sàn bê tông và kim loại
            </h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              Giải pháp bảo vệ bề mặt công nghiệp, chịu mài mòn, va đập và chống ăn mòn vượt trội.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {['KCC', 'JOTUN CÔNG NGHIỆP'].map((brand) => (
                <span
                  key={brand}
                  className="px-8 py-3 rounded-xl font-headline font-bold text-sm uppercase tracking-widest bg-white text-on-surface-variant border-2 border-outline-variant hover:border-primary hover:text-primary transition-all"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.filter(p => p.category === 'Sơn Epoxy').slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/catalog" className="inline-flex items-center gap-2 bg-surface-container-low text-primary px-10 py-4 rounded-full font-headline font-bold hover:bg-primary hover:text-white transition-all group">
              Tất cả sơn Epoxy
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
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
            <h2 className="text-3xl md:text-4xl font-headline font-black text-primary tracking-tighter mb-4">Thương hiệu chúng tôi phân phối</h2>
            <p className="text-on-surface-variant text-base max-w-2xl mx-auto">{CONTACT_INFO.name} tự hào là nhà phân phối chính hãng của các thương hiệu sơn hàng đầu thế giới.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10 items-stretch">
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
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">Minh chứng cho chất lượng và sự tận tâm của {CONTACT_INFO.name} qua từng dự án.</p>
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
                    <div className="absolute top-4 right-4 bg-secondary text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Sau</div>
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
              <h2 className="text-4xl font-headline font-black text-primary tracking-tighter mb-4 uppercase">Tư vấn - cách chọn và thi công sơn</h2>
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
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\./g, '')}`} 
                className="w-full sm:w-auto bg-secondary text-primary px-5 py-2.5 text-sm font-headline font-bold rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-secondary/20 sm:px-7 sm:py-3 sm:text-base sm:gap-2.5 md:px-10 md:py-5 md:text-xl md:gap-3"
              >
                <Phone className="w-5 h-5 shrink-0 md:w-6 md:h-6" aria-hidden />
                {CONTACT_INFO.phone}
              </a>
              <a 
                href={`https://zalo.me/${CONTACT_INFO.phone.replace(/\./g, '')}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-primary px-5 py-2.5 text-sm font-headline font-bold rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl sm:px-7 sm:py-3 sm:text-base sm:gap-2.5 md:px-10 md:py-5 md:text-xl md:gap-3"
              >
                <MessageCircle className="w-5 h-5 shrink-0 md:w-6 md:h-6" aria-hidden />
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

