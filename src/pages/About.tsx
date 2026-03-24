import React from 'react';
import { ShieldCheck, Ruler, Package, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div className="pt-24">
      <Helmet>
        <title>Về Duyên Paint - Đối Tác Ủy Quyền Sơn Dulux & Jotun</title>
        <meta name="description" content="Tìm hiểu về Duyên Paint, đại lý ủy quyền sơn Dulux và Jotun từ năm 2019. Chúng tôi cam kết cung cấp sơn chính hãng và dịch vụ tư vấn kỹ thuật chuyên nghiệp." />
        <link rel="canonical" href="https://ais-pre-ighnbujlpckyiteo6aejeg-622160810419.asia-east1.run.app/about" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative px-6 md:px-8 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="text-secondary font-headline font-black uppercase tracking-[0.3em] text-sm block mb-6">Thành lập năm 2019</span>
            <h1 className="text-6xl md:text-8xl font-headline font-black text-primary leading-[0.9] tracking-tighter mb-10">
              Duyên Paint <br/>Hoàn thiện <span className="italic text-on-surface-variant">Kiến trúc.</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl font-medium">
              Trong nửa thập kỷ qua, chúng tôi là đối tác thầm lặng đằng sau những công trình kiến trúc danh giá nhất. Chúng tôi không chỉ bán sơn; chúng tôi tuyển chọn phương tiện cho tầm nhìn nghệ thuật của bạn.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container-highest rounded-[2.5rem] overflow-hidden relative shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAqQeVjc0ApNrOCx2I6PTV13LeCwix--WAtA-CN6ZI_Jzk2AEpoqnK-FaiXHjgrt21OQxYa7wtUtaQVd53d7OhslwWoL1QzZGLFHF0kxnkkYcIDu1jTb5oPwHN5xgu0CC8S5XcL4wvw_RGLz0yu5GwC43EZrOjIWYzULBB6-By2IVdQXiCFTExYble5WCUJlV-zQKP6gKmq89FgB10nIQenElp4djV9yg_8s0OlSTyU4pcK3LQHmkqBZN14uOoEh2pyjiEUedsCoE" 
                alt="Showroom Duyên Paint trưng bày các dòng sơn Dulux và Jotun chính hãng" 
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
                Là đối tác ủy quyền của Dulux và Jotun, mỗi giọt sơn trong kho của chúng tôi đều được chứng nhận chính hãng. Chúng tôi duy trì tiêu chuẩn lưu trữ nghiêm ngặt để đảm bảo chất lượng tuyệt đối.
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-surface p-16 rounded-[3rem] flex items-center justify-between group cursor-pointer border-2 border-outline-variant/10 hover:border-primary transition-all duration-500 shadow-sm hover:shadow-xl">
            <div>
              <h3 className="text-5xl font-headline font-black text-primary group-hover:text-secondary transition-colors">Dulux</h3>
              <p className="mt-4 text-on-surface-variant font-bold text-lg">Giải pháp trang trí cao cấp</p>
            </div>
            <div className="w-20 h-20 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <ArrowRight size={32} />
            </div>
          </div>
          <div className="bg-surface p-16 rounded-[3rem] flex items-center justify-between group cursor-pointer border-2 border-outline-variant/10 hover:border-primary transition-all duration-500 shadow-sm hover:shadow-xl">
            <div>
              <h3 className="text-5xl font-headline font-black text-primary group-hover:text-secondary transition-colors">Jotun</h3>
              <p className="mt-4 text-on-surface-variant font-bold text-lg">Sự xuất sắc trong công nghiệp</p>
            </div>
            <div className="w-20 h-20 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <ArrowRight size={32} />
            </div>
          </div>
          <div className="bg-surface p-16 rounded-[3rem] flex items-center justify-between group cursor-pointer border-2 border-outline-variant/10 hover:border-primary transition-all duration-500 shadow-sm hover:shadow-xl">
            <div>
              <h3 className="text-5xl font-headline font-black text-primary group-hover:text-secondary transition-colors">Nippon</h3>
              <p className="mt-4 text-on-surface-variant font-bold text-lg">Công nghệ Nhật Bản</p>
            </div>
            <div className="w-20 h-20 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <ArrowRight size={32} />
            </div>
          </div>
          <div className="bg-surface p-16 rounded-[3rem] flex items-center justify-between group cursor-pointer border-2 border-outline-variant/10 hover:border-primary transition-all duration-500 shadow-sm hover:shadow-xl">
            <div>
              <h3 className="text-5xl font-headline font-black text-primary group-hover:text-secondary transition-colors">Kova</h3>
              <p className="mt-4 text-on-surface-variant font-bold text-lg">Sơn Việt vươn tầm thế giới</p>
            </div>
            <div className="w-20 h-20 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <ArrowRight size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Gallery */}
      <section className="bg-surface-container-low py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[700px]">
            <div className="md:col-span-2 md:row-span-2 bg-white rounded-[3rem] overflow-hidden relative shadow-lg group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV_oeA61qJyBKIqDSgz7X7i_lClBCFxU59UxQ_DtamBFNUKoCxOnWRLuZ2PnMtKiV_bYsh6N8V-kVeDbtsXknGYJdxuYG0cAJw5aEDuRLQB6RX7Zl0Wdx2YRzBszzGDMbkPrabiQirJtbOeQ2I92dCmlktY6OYw47BWeQINpeL-4kEaby5sl9fE79JoFmOfa1Uogc9NR7fsj1C26Fzfjk5tJGNAbIkDcBqF0gbZF2-zD0bwRBIAIHMBlt9TwgA6J3HEnNQwFHZXfY" 
                alt="Kho hàng Duyên Paint với đầy đủ các dòng sơn Dulux và Jotun" 
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeSltTSAPA4ZL0Hjqsb5uDGcE8fY-8e4Js-kMs5pLNyk5s03tVyfy047PefEM1NizghRzgQZU6lQ20Eyzvmrsd5Dg0diobJ-eOMO5er78OUvSoY3kefx4jdEIXVsQTc-nWJl-nhfSY_nvHcCwPcNskVRyfARedi1X62ZVIWRxo_nA4Btd55MaVig-0EhuqeneBH90CtptpaK4mO_-VlvxxQcMWDWEzlRAxN9azSOkC9Dd1FU14KcrXN0ufI8hrmMgZUyQGvBLoP-Y" 
                alt="Quy trình pha màu sơn chuyên nghiệp tại Duyên Paint" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYWO5fYJAl8dySrGCgzJ31BlI12dY9RYo2mawNYVUjyqCoLYDWwM_FK-tP7YnV95qk010Nmk9jRYp7EeTS_rQG3EM6oTZtD-khG1usjx1JCkom-I_X5KA3JfWbb-aSyWoNaQeIPkSVIUwyNfYdxuMloE2wHXo7viV41mWYrDp-9m_EJomtk2yXNmrWIUqUvYG9myy2_TMV7o6j4FzSRKXY50wp6yo9313aDDHVBBNwcsted-KrhbQogkPkjul2J5P5-XFJB9-3B6Q" 
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
