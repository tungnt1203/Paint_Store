import React, { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
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
      {/* Editorial Header */}
      <header className="mb-16">
        <p className="text-secondary font-label font-semibold tracking-widest uppercase mb-2">LỰA CHỌN CAO CẤP</p>
        <h1 className="font-headline font-extrabold text-5xl md:text-6xl text-primary tracking-tight max-w-3xl">
          Danh mục <br/><span className="text-on-surface-variant italic">Màu sắc Kiến trúc.</span>
        </h1>
      </header>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-10">
          <section>
            <h3 className="font-headline font-bold text-lg mb-6 border-b-2 border-primary-container inline-block">Thương hiệu</h3>
            <div className="space-y-4">
              {brands.map(brand => (
                <label key={brand} className="flex items-center space-x-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                  />
                  <span className="font-body text-on-surface-variant group-hover:text-primary transition-colors">{brand}</span>
                </label>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-headline font-bold text-lg mb-6 border-b-2 border-primary-container inline-block">Loại sản phẩm</h3>
            <div className="space-y-4">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input 
                  type="radio" 
                  name="category" 
                  checked={!selectedCategory}
                  onChange={() => setSelectedCategory(null)}
                  className="w-5 h-5 border-outline-variant text-secondary focus:ring-secondary"
                />
                <span className="font-body text-on-surface-variant group-hover:text-primary transition-colors">Tất cả</span>
              </label>
              {categories.map(cat => (
                <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="category" 
                    checked={selectedCategory === cat}
                    onChange={() => setSelectedCategory(cat)}
                    className="w-5 h-5 border-outline-variant text-secondary focus:ring-secondary"
                  />
                  <span className="font-body text-on-surface-variant group-hover:text-primary transition-colors">{cat}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Expert Advice Banner */}
          <div className="bg-surface-container-high p-8 rounded-xl relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-primary font-bold text-sm mb-2">Tư vấn chuyên gia</p>
              <h4 className="font-headline font-bold text-xl mb-4 leading-tight">Cần giúp đỡ chọn màu sắc?</h4>
              <button className="text-secondary font-bold text-sm flex items-center group">
                Liên hệ tư vấn
                <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-surface-container-low rounded-xl">
              <p className="text-on-surface-variant text-lg">Không tìm thấy sản phẩm phù hợp.</p>
            </div>
          )}

          {filteredProducts.length > 0 && (
            <div className="mt-20 flex justify-center">
              <button className="bg-surface-container-high hover:bg-surface-container-highest text-primary font-bold px-10 py-4 rounded-md transition-all">
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
