import React from 'react';
import { ShieldCheck, Ruler, Package, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SeoMeta } from '../components/SeoMeta';
import { BRANDS, CONTACT_INFO } from '../constants';

const About = () => {
  return (
    <div className="pt-24">
      <SeoMeta
        path="/about"
        title={`Về ${CONTACT_INFO.name} - Nhà phân phối sơn chính hãng`}
        description={`${CONTACT_INFO.fullName} — phân phối Dulux, Jotun, Nippon, Kova và thương hiệu lớn. Cam kết hàng chính hãng, tư vấn kỹ thuật. ${CONTACT_INFO.address}.`}
      />
      {/* Hero Section */}
      <section className="relative px-6 md:px-8 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="text-secondary font-headline font-black uppercase tracking-[0.3em] text-sm block mb-6">Thành lập năm 2019</span>
            <h1 className="text-6xl md:text-8xl font-headline font-black text-primary leading-[0.9] tracking-tighter mb-10">
              {CONTACT_INFO.name} <br/>Hoàn thiện <span className="italic text-on-surface-variant">Kiến trúc.</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl font-medium">
              Trong nửa thập kỷ qua, chúng tôi là đối tác thầm lặng đằng sau những công trình kiến trúc danh giá nhất. Chúng tôi không chỉ bán sơn; chúng tôi tuyển chọn phương tiện cho tầm nhìn nghệ thuật của bạn.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container-highest rounded-[2.5rem] overflow-hidden relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" 
                alt={`Showroom ${CONTACT_INFO.name} trưng bày các dòng sơn chính hãng`} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-primary p-10 rounded-3xl shadow-2xl hidden md:block border-4 border-white">
              <div className="text-white font-headline font-black text-6xl leading-none">05</div>
              <div className="text-secondary font-headline font-black text-xs uppercase tracking-widest mt-4">Năm của sự chính xác</div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-primary py-32 px-6 md:px-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-8">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/20">
                <ShieldCheck size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-headline font-black leading-tight">Tính xác thực không thỏa hiệp</h2>
              <p className="text-white/70 leading-relaxed text-lg">
                Là đối tác ủy quyền của các thương hiệu sơn hàng đầu, mỗi giọt sơn trong kho của chúng tôi đều được chứng nhận chính hãng. Chúng tôi duy trì tiêu chuẩn lưu trữ nghiêm ngặt để đảm bảo chất lượng tuyệt đối.
              </p>
            </div>
            <div className="space-y-8">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/20">
                <Ruler size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-headline font-black leading-tight">Tư vấn kỹ thuật chuyên sâu</h2>
              <p className="text-white/70 leading-relaxed text-lg">
                Các chuyên gia của chúng tôi không chỉ chọn màu sắc; chúng tôi phân tích bề mặt, ánh sáng và khí hậu để đề xuất hệ thống sơn phủ hoàn hảo nhất cho dự án của bạn.
              </p>
            </div>
            <div className="space-y-8">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/20">
                <Package size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-headline font-black leading-tight">Công nghệ pha màu hiện đại</h2>
              <p className="text-white/70 leading-relaxed text-lg">
                Sử dụng công nghệ pha màu tự động hàng đầu, chúng tôi cung cấp khả năng phối màu chính xác đến từng miligam, đảm bảo sự đồng nhất tuyệt đối cho mọi lô hàng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <section className="py-32 max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <span className="text-secondary font-headline font-black uppercase tracking-[0.3em] text-sm block mb-6">Thương hiệu chúng tôi phân phối</span>
            <h2 className="text-5xl md:text-6xl font-headline font-black text-primary tracking-tighter leading-none">Phân phối ủy quyền toàn cầu.</h2>
          </div>
          <div className="max-w-md text-right hidden md:block">
            <p className="text-on-surface-variant text-lg font-medium">Chúng tôi hợp tác độc quyền với các nhà lãnh đạo thế giới để đảm bảo khách hàng nhận được kết quả bền bỉ và rực rỡ nhất.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BRANDS.map((brand) => (
            <div key={brand.id} className="bg-surface p-12 rounded-[3rem] flex items-center justify-between group cursor-pointer border-2 border-outline-variant/10 hover:border-primary transition-all duration-500 shadow-sm hover:shadow-xl">
              <div>
                <h3 className="text-4xl font-headline font-black text-primary group-hover:text-secondary transition-colors">{brand.name}</h3>
                <p className="mt-4 text-on-surface-variant font-bold text-base">{brand.description}</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <ArrowRight size={24} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bento Grid Gallery */}
      <section className="bg-surface-container-low py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[700px]">
            <div className="md:col-span-2 md:row-span-2 bg-white rounded-[3rem] overflow-hidden relative shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=1200" 
                alt={`Kho hàng ${CONTACT_INFO.name} với đầy đủ các dòng sơn chính hãng`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-12">
                <p className="text-white font-headline font-black text-2xl">Trung tâm phân phối chính</p>
              </div>
            </div>
            <div className="md:col-span-2 bg-white rounded-[2.5rem] overflow-hidden shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" 
                alt={`Quy trình pha màu sơn chuyên nghiệp tại ${CONTACT_INFO.name}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1595844730298-b960ff98fee0?auto=format&fit=crop&q=80&w=1200" 
                alt="Bề mặt sơn hoàn thiện chất lượng cao" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="bg-secondary flex items-center justify-center p-10 rounded-[2.5rem] shadow-xl">
              <div className="text-center">
                <span className="text-white font-headline font-black text-6xl block leading-none">500+</span>
                <span className="text-white/80 font-headline font-black text-xs uppercase tracking-widest mt-4 block">Màu sắc có sẵn</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
