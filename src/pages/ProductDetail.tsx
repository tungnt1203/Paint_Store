import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, CheckCircle2, Info, ArrowLeft, Phone, ShoppingCart, Droplets, Sparkles, Shield, ArrowRightLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/Layout';

const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const [selectedCapacity, setSelectedCapacity] = useState(product?.capacities?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.name || '');

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-bold text-primary">Sản phẩm không tồn tại.</h2>
        <Link to="/catalog" className="text-secondary underline mt-4 inline-block">Quay lại catalog</Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-28 pb-20 bg-surface-container-lowest">
      <Helmet>
        <title>{`${product.name} - ${product.brand} | Duyên Paint`}</title>
        <meta name="description" content={`${product.name} từ ${product.brand}. ${product.description.substring(0, 150)}...`} />
        <meta property="og:title" content={`${product.name} - ${product.brand} | Duyên Paint`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <link rel="canonical" href={`https://ais-pre-ighnbujlpckyiteo6aejeg-622160810419.asia-east1.run.app/product/${product.id}`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "image": product.image,
            "description": product.description,
            "brand": {
              "@type": "Brand",
              "name": product.brand
            },
            "offers": {
              "@type": "Offer",
              "url": `https://ais-pre-ighnbujlpckyiteo6aejeg-622160810419.asia-east1.run.app/product/${product.id}`,
              "priceCurrency": "VND",
              "price": product.price,
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm font-label text-on-surface-variant mb-12">
          <Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link>
          <ChevronRight size={14} />
          <Link to="/catalog" className="hover:text-primary transition-colors">Danh mục</Link>
          <ChevronRight size={14} />
          <span className="text-primary font-bold">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {/* Left: Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl aspect-square flex items-center justify-center p-12 industrial-shadow border border-outline-variant/10">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-white rounded-xl border border-outline-variant/20 cursor-pointer hover:border-primary hover:shadow-md transition-all"></div>
              ))}
            </div>
          </motion.div>

          {/* Right: Product Info & Selection */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {product.brand}
                </span>
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {product.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-headline font-black text-primary leading-tight mb-4">
                {product.name}
              </h1>
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-headline font-black text-on-surface">
                  {product.price.toLocaleString('vi-VN')}đ
                </span>
                {product.oldPrice && (
                  <span className="text-xl text-on-surface-variant line-through decoration-secondary/40">
                    {product.oldPrice.toLocaleString('vi-VN')}đ
                  </span>
                )}
              </div>
            </div>

            {/* Capacity Selection */}
            {product.capacities && (
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-primary uppercase tracking-widest">Chọn dung tích</h3>
                <div className="flex flex-wrap gap-3">
                  {product.capacities.map(cap => (
                    <button
                      key={cap}
                      onClick={() => setSelectedCapacity(cap)}
                      className={`px-6 py-2 rounded-full border-2 font-bold transition-all ${
                        selectedCapacity === cap 
                        ? 'border-primary bg-primary text-white shadow-lg' 
                        : 'border-outline-variant text-on-surface-variant hover:border-primary'
                      }`}
                    >
                      {cap}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && (
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-primary uppercase tracking-widest">Chọn màu sắc</h3>
                <div className="flex flex-wrap gap-4">
                  {product.colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`group relative w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === color.name ? 'border-primary scale-110' : 'border-transparent'
                      }`}
                      title={color.name}
                    >
                      <span 
                        className="absolute inset-1 rounded-full shadow-inner" 
                        style={{ backgroundColor: color.hex }}
                      />
                      {selectedColor === color.name && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-2 py-1 rounded whitespace-nowrap font-bold">
                          {color.name}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="flex-[2] bg-secondary text-on-secondary font-headline font-black py-5 rounded-2xl hover:bg-secondary-container hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl shadow-secondary/20">
                <ShoppingCart size={24} />
                MUA NGAY
              </button>
              <button className="flex-1 bg-primary text-on-primary font-headline font-bold py-5 rounded-2xl hover:bg-primary-container transition-all flex items-center justify-center gap-3">
                <Phone size={20} />
                Tư vấn
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-outline-variant/30">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-outline-variant/10">
                <ShieldCheck className="text-secondary" size={20} />
                <span className="text-xs font-bold text-primary">Chính hãng 100%</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-outline-variant/10">
                <CheckCircle2 className="text-secondary" size={20} />
                <span className="text-xs font-bold text-primary">Bảo hành dài hạn</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Description Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-3xl border border-outline-variant/10 industrial-shadow space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-headline font-bold text-primary">Độ bền vượt trội</h3>
            <p className="text-on-surface-variant leading-relaxed">
              {product.durability || 'Màng sơn bền bỉ, thách thức thời gian và điều kiện thời tiết khắc nghiệt.'}
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-outline-variant/10 industrial-shadow space-y-4">
            <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
              <Droplets size={24} />
            </div>
            <h3 className="text-xl font-headline font-bold text-primary">Chống thấm tuyệt đối</h3>
            <p className="text-on-surface-variant leading-relaxed">
              {product.waterproof || 'Công nghệ ngăn nước tiên tiến, bảo vệ tường nhà khỏi ẩm mốc và thấm dột.'}
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-outline-variant/10 industrial-shadow space-y-4">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-700">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-headline font-bold text-primary">Dễ dàng lau chùi</h3>
            <p className="text-on-surface-variant leading-relaxed">
              {product.cleaning || 'Bề mặt láng mịn giúp loại bỏ các vết bẩn cứng đầu chỉ với một lần lau nhẹ.'}
            </p>
          </div>
        </div>

        {/* Comparison Section: Dulux vs Jotun */}
        <section className="mb-24 bg-primary rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <ArrowRightLeft className="text-secondary" size={32} />
              <h2 className="text-3xl md:text-4xl font-headline font-black tracking-tight">So sánh: Dulux vs Jotun</h2>
            </div>
            <p className="text-white/70 max-w-2xl mb-12 text-lg">
              Hai "ông lớn" trong ngành sơn có gì khác biệt? Hãy cùng Duyên Paint phân tích để bạn có lựa chọn phù hợp nhất cho ngôi nhà mình.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                <h4 className="text-2xl font-headline font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-sm">D</span>
                  Sơn Dulux
                </h4>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-secondary mt-1 shrink-0" />
                    <span>Thương hiệu toàn cầu từ AkzoNobel, uy tín lâu đời.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-secondary mt-1 shrink-0" />
                    <span>Công nghệ Powerflexx co giãn màng sơn vượt trội.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-secondary mt-1 shrink-0" />
                    <span>Bảng màu đa dạng, xu hướng màu sắc hàng năm.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                <h4 className="text-2xl font-headline font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-sm">J</span>
                  Sơn Jotun
                </h4>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-secondary mt-1 shrink-0" />
                    <span>Thương hiệu Na Uy, nổi tiếng với độ bền màu rực rỡ.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-secondary mt-1 shrink-0" />
                    <span>Khả năng chống bám bụi và kháng tia cực tím tối ưu.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-secondary mt-1 shrink-0" />
                    <span>Phân khúc giá đa dạng, phù hợp nhiều nhu cầu.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <section>
            <h3 className="text-2xl font-headline font-bold text-primary mb-8 flex items-center gap-3">
              <Info size={24} className="text-secondary" />
              Thông số kỹ thuật
            </h3>
            <div className="space-y-0 border border-outline-variant/20 rounded-2xl overflow-hidden bg-white">
              {Object.entries(product.specs).map(([key, value], idx) => (
                <div key={key} className={`flex justify-between p-5 ${idx % 2 === 0 ? 'bg-surface-container-low/30' : 'bg-white'}`}>
                  <span className="font-bold text-on-surface-variant">{key}</span>
                  <span className="text-on-surface font-medium">{value}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-headline font-bold text-primary mb-8 flex items-center gap-3">
              <ShieldCheck size={24} className="text-secondary" />
              Đặc tính nổi bật
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {product.features.map(feature => (
                <li key={feature} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-outline-variant/10 hover:border-secondary transition-colors group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-secondary group-hover:scale-150 transition-transform"></div>
                  <span className="font-body text-on-surface-variant font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Related Products */}
        <section className="border-t border-outline-variant/30 pt-24">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-headline font-black text-primary tracking-tighter mb-2">Sản phẩm liên quan</h2>
              <p className="text-on-surface-variant">Có thể bạn cũng quan tâm đến các dòng sơn này</p>
            </div>
            <Link to="/catalog" className="text-primary font-bold border-b-2 border-primary flex items-center gap-2 hover:gap-4 transition-all">
              Xem tất cả <ChevronRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
