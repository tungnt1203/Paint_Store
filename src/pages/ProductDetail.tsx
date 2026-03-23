import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, CheckCircle2, Info, ArrowLeft, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/Layout';

const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);

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
    <div className="pt-28 pb-20">
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Trang chủ",
                "item": "https://ais-pre-ighnbujlpckyiteo6aejeg-622160810419.asia-east1.run.app/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Danh mục",
                "item": "https://ais-pre-ighnbujlpckyiteo6aejeg-622160810419.asia-east1.run.app/catalog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": product.name,
                "item": `https://ais-pre-ighnbujlpckyiteo6aejeg-622160810419.asia-east1.run.app/product/${product.id}`
              }
            ]
          })}
        </script>
      </Helmet>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm font-label text-on-surface-variant mb-12">
          <Link to="/" className="hover:text-primary">Trang chủ</Link>
          <ChevronRight size={14} />
          <Link to="/catalog" className="hover:text-primary">Danh mục</Link>
          <ChevronRight size={14} />
          <span className="text-primary font-bold">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          {/* Image Gallery */}
          <div className="lg:col-span-6">
            <div className="bg-surface-container-highest rounded-2xl aspect-square flex items-center justify-center p-16 mb-6 industrial-shadow">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-surface-container-low rounded-lg border border-outline-variant/20 cursor-pointer hover:border-primary transition-all"></div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <span className="text-secondary font-label font-bold uppercase tracking-widest text-sm mb-2 block">{product.brand}</span>
              <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tight mb-6">{product.name}</h1>
              <div className="flex items-baseline space-x-4 mb-8">
                <span className="text-3xl font-headline font-black text-on-surface">
                  {product.price.toLocaleString('vi-VN')}đ
                </span>
                {product.oldPrice && (
                  <span className="text-xl text-on-surface-variant line-through decoration-secondary/40">
                    {product.oldPrice.toLocaleString('vi-VN')}đ
                  </span>
                )}
              </div>
              <p className="text-lg text-on-surface-variant leading-relaxed font-body">
                {product.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-outline-variant">
              <button className="flex-1 bg-primary text-on-primary font-headline font-bold py-5 rounded-xl hover:bg-primary-container transition-all flex items-center justify-center gap-3">
                <Phone size={20} />
                Gọi tư vấn ngay
              </button>
              <button className="flex-1 bg-secondary text-on-secondary font-headline font-bold py-5 rounded-xl hover:bg-secondary-container transition-all">
                Yêu cầu báo giá
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-6 bg-surface-container-low p-8 rounded-2xl">
              <div className="flex items-center gap-4">
                <ShieldCheck className="text-secondary" size={24} />
                <span className="text-sm font-bold text-primary">Chính hãng 100%</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-secondary" size={24} />
                <span className="text-sm font-bold text-primary">Bảo hành 12 năm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Specs & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <section>
            <h3 className="text-2xl font-headline font-bold text-primary mb-8 flex items-center gap-3">
              <Info size={24} className="text-secondary" />
              Thông số kỹ thuật
            </h3>
            <div className="space-y-0 border border-outline-variant/20 rounded-xl overflow-hidden">
              {Object.entries(product.specs).map(([key, value], idx) => (
                <div key={key} className={`flex justify-between p-4 ${idx % 2 === 0 ? 'bg-surface-container-low' : 'bg-white'}`}>
                  <span className="font-bold text-on-surface-variant">{key}</span>
                  <span className="text-on-surface">{value}</span>
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
                <li key={feature} className="flex items-start gap-3 group">
                  <div className="mt-1 w-2 h-2 rounded-full bg-secondary group-hover:scale-150 transition-transform"></div>
                  <span className="font-body text-on-surface-variant">{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Related Products */}
        <section className="border-t border-outline-variant pt-24">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl font-headline font-black text-primary tracking-tighter">Sản phẩm liên quan</h2>
            <Link to="/catalog" className="text-primary font-bold border-b-2 border-primary flex items-center gap-2">
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
