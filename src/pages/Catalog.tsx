import React, { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { PRODUCTS, CONTACT_INFO } from '../constants';
import { ProductCard } from '../components/Layout';

const Catalog = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const brands = Array.from(new Set(PRODUCTS.map(p => p.brand)));
  const categories = Array.from(new Set(PRODUCTS.map(p => p.category)));

  const filteredProducts = PRODUCTS.filter(product => {
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const categoryMatch = !selectedCategory || product.category === selectedCategory;
    return brandMatch && categoryMatch;
  });

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-8">
      <Helmet>
        <title>Danh Mục Sản Phẩm Sơn Chính Hãng - {CONTACT_INFO.name}</title>
        <meta name="description" content={`Khám phá danh mục sơn nội thất, ngoại thất, chống thấm và sơn công nghiệp cao cấp tại ${CONTACT_INFO.name}. Phân phối chính hãng Dulux, Jotun, Nippon, Kova, TOA, Spec.`} />
        <link rel="canonical" href="https://ais-pre-ighnbujlpckyiteo6aejeg-622160810419.asia-east1.run.app/catalog" />
      </Helmet>
      {/* Editorial Header */}
      <header className="mb-20 text-center max-w-4xl mx-auto">
        <p className="text-secondary font-headline font-black uppercase tracking-[0.3em] text-sm mb-4">Danh mục sản phẩm</p>
        <h1 className="font-headline font-black text-5xl md:text-7xl text-primary tracking-tighter mb-6">
          Sắc màu <span className="text-on-surface-variant italic">Kiến trúc.</span>
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed">
          Khám phá bộ sưu tập sơn cao cấp từ các thương hiệu hàng đầu thế giới. Chúng tôi mang đến giải pháp tối ưu cho mọi không gian sống.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 space-y-12">
          <section className="bg-surface p-8 rounded-3xl border border-outline-variant/10 shadow-sm">
            <h3 className="font-headline font-black text-xl text-primary mb-8 flex items-center gap-2">
              <div className="w-2 h-6 bg-secondary rounded-full"></div>
              Thương hiệu
            </h3>
            <div className="space-y-5">
              {brands.map(brand => (
                <label key={brand} className="flex items-center space-x-4 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="checkbox" 
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="peer appearance-none w-6 h-6 rounded-lg border-2 border-outline-variant checked:bg-primary checked:border-primary transition-all cursor-pointer"
                    />
                    <Search size={12} className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <span className="font-headline font-bold text-on-surface-variant group-hover:text-primary transition-colors">{brand}</span>
                </label>
              ))}
            </div>
          </section>

          <section className="bg-surface p-8 rounded-3xl border border-outline-variant/10 shadow-sm">
            <h3 className="font-headline font-black text-xl text-primary mb-8 flex items-center gap-2">
              <div className="w-2 h-6 bg-secondary rounded-full"></div>
              Loại sản phẩm
            </h3>
            <div className="space-y-5">
              <label className="flex items-center space-x-4 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input 
                    type="radio" 
                    name="category" 
                    checked={!selectedCategory}
                    onChange={() => setSelectedCategory(null)}
                    className="peer appearance-none w-6 h-6 rounded-full border-2 border-outline-variant checked:border-primary checked:border-[6px] transition-all cursor-pointer"
                  />
                </div>
                <span className="font-headline font-bold text-on-surface-variant group-hover:text-primary transition-colors">Tất cả</span>
              </label>
              {categories.map(cat => (
                <label key={cat} className="flex items-center space-x-4 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="radio" 
                      name="category" 
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                      className="peer appearance-none w-6 h-6 rounded-full border-2 border-outline-variant checked:border-primary checked:border-[6px] transition-all cursor-pointer"
                    />
                  </div>
                  <span className="font-headline font-bold text-on-surface-variant group-hover:text-primary transition-colors">{cat}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Expert Advice Banner */}
          <div className="bg-primary p-10 rounded-[2rem] relative overflow-hidden text-white shadow-xl">
            <div className="relative z-10">
              <p className="text-secondary font-black text-xs uppercase tracking-widest mb-4">Tư vấn chuyên gia</p>
              <h4 className="font-headline font-black text-2xl mb-6 leading-tight">Cần giúp đỡ chọn màu sắc?</h4>
              <button className="bg-white text-primary px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 group hover:bg-secondary hover:text-white transition-all">
                Liên hệ ngay
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-32 bg-surface rounded-[2rem] border-2 border-dashed border-outline-variant/20">
              <p className="text-on-surface-variant text-xl font-bold">Không tìm thấy sản phẩm phù hợp.</p>
              <button 
                onClick={() => { setSelectedBrands([]); setSelectedCategory(null); }}
                className="mt-6 text-primary font-bold border-b-2 border-primary"
              >
                Xóa tất cả bộ lọc
              </button>
            </div>
          )}

          {filteredProducts.length > 0 && (
            <div className="mt-24 flex justify-center">
              <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-black px-12 py-5 rounded-full transition-all shadow-lg hover:shadow-primary/20">
                Tải thêm sản phẩm
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
