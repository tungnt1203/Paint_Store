import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact = () => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-8">
      <Helmet>
        <title>Liên Hệ {CONTACT_INFO.name} - Tư Vấn Báo Giá Sơn Chính Hãng</title>
        <meta name="description" content={`Liên hệ với ${CONTACT_INFO.name} để nhận tư vấn phối màu và báo giá sơn chính hãng. Địa chỉ showroom tại ${CONTACT_INFO.address}.`} />
        <link rel="canonical" href="https://ais-pre-ighnbujlpckyiteo6aejeg-622160810419.asia-east1.run.app/contact" />
      </Helmet>
      <header className="mb-24 text-center max-w-4xl mx-auto">
        <span className="text-secondary font-headline font-black uppercase tracking-[0.3em] text-sm block mb-6">Liên hệ với chúng tôi</span>
        <h1 className="text-6xl md:text-8xl font-headline font-black text-primary tracking-tighter leading-[0.9]">
          Hãy bắt đầu <br/>Kiệt tác <span className="italic text-on-surface-variant">của bạn.</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-16">
          <div className="space-y-12">
            <div className="flex items-start gap-8 group">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white group-hover:bg-secondary transition-all shadow-lg shadow-primary/10">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="font-headline font-black text-primary text-xl mb-2">Điện thoại & Zalo</h4>
                <p className="text-on-surface-variant font-bold text-lg">{CONTACT_INFO.phone}</p>
                <p className="text-on-surface-variant/70 font-medium">Hỗ trợ 24/7 cho mọi dự án</p>
              </div>
            </div>
            <div className="flex items-start gap-8 group">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white group-hover:bg-secondary transition-all shadow-lg shadow-primary/10">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="font-headline font-black text-primary text-xl mb-2">Yêu cầu qua Email</h4>
                <p className="text-on-surface-variant font-bold text-lg">{CONTACT_INFO.email}</p>
                <p className="text-on-surface-variant/70 font-medium">Phản hồi trong vòng 2 giờ</p>
              </div>
            </div>
            <div className="flex items-start gap-8 group">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white group-hover:bg-secondary transition-all shadow-lg shadow-primary/10">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="font-headline font-black text-primary text-xl mb-2">Địa chỉ Showroom</h4>
                <p className="text-on-surface-variant font-bold text-lg leading-relaxed">{CONTACT_INFO.address}</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-12 border-t border-outline-variant/20">
            <h4 className="font-headline font-black text-primary text-sm uppercase tracking-widest mb-8">Kết nối mạng xã hội</h4>
            <div className="flex space-x-6">
              <a 
                href={`https://zalo.me/${CONTACT_INFO.phone.replace(/\./g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white border border-outline-variant/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-xl p-3"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" 
                  alt={`Liên hệ ${CONTACT_INFO.name} qua Zalo`} 
                  className="w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </a>
              <a 
                href="https://facebook.com/sonnganpaint" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white border border-outline-variant/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-xl p-3"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" 
                  alt={`Theo dõi ${CONTACT_INFO.name} trên Facebook`} 
                  className="w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-10 md:p-16 rounded-[3rem] border-2 border-outline-variant/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-3xl font-headline font-black text-primary mb-10">Gửi yêu cầu tư vấn</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-primary uppercase tracking-widest">Họ và tên</label>
                  <input 
                    type="text" 
                    placeholder="Nguyễn Văn A"
                    className="w-full bg-surface-container-low border-2 border-transparent rounded-2xl px-6 py-4 focus:border-primary focus:bg-white focus:outline-none transition-all font-bold"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-primary uppercase tracking-widest">Số điện thoại</label>
                  <input 
                    type="tel" 
                    placeholder={CONTACT_INFO.phone}
                    className="w-full bg-surface-container-low border-2 border-transparent rounded-2xl px-6 py-4 focus:border-primary focus:bg-white focus:outline-none transition-all font-bold"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-primary uppercase tracking-widest">Chủ đề quan tâm</label>
                <select className="w-full bg-surface-container-low border-2 border-transparent rounded-2xl px-6 py-4 focus:border-primary focus:bg-white focus:outline-none transition-all font-bold appearance-none">
                  <option>Yêu cầu báo giá chi tiết</option>
                  <option>Tư vấn phối màu kiến trúc</option>
                  <option>Hỗ trợ kỹ thuật thi công</option>
                  <option>Hợp tác đại lý/dự án</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-primary uppercase tracking-widest">Nội dung tin nhắn</label>
                <textarea 
                  rows={5}
                  placeholder="Hãy mô tả dự án hoặc câu hỏi của bạn..."
                  className="w-full bg-surface-container-low border-2 border-transparent rounded-2xl px-6 py-4 focus:border-primary focus:bg-white focus:outline-none transition-all font-bold resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-primary text-white font-headline font-black text-lg py-5 rounded-2xl hover:bg-secondary transition-all flex items-center justify-center gap-4 shadow-xl shadow-primary/20">
                Gửi yêu cầu ngay
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <section className="mt-32 space-y-6" aria-labelledby="showroom-map-heading">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 id="showroom-map-heading" className="font-headline font-black text-primary text-2xl md:text-3xl mb-2">
              Bản đồ showroom
            </h2>
            <p className="text-on-surface-variant font-medium flex items-start gap-2 max-w-xl">
              <MapPin size={20} className="text-secondary flex-shrink-0 mt-0.5" aria-hidden />
              <span>{CONTACT_INFO.address}</span>
            </p>
          </div>
          <a
            href={CONTACT_INFO.map.openUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-headline font-bold text-sm uppercase tracking-wider text-primary border-2 border-primary rounded-2xl px-6 py-3 hover:bg-primary hover:text-white transition-colors shrink-0"
          >
            Mở trong Google Maps
            <MapPin size={18} aria-hidden />
          </a>
        </div>
        <div className="h-[min(28rem,70vh)] min-h-[280px] rounded-2xl overflow-hidden border-2 border-outline-variant/15 shadow-xl bg-surface-container-highest relative">
          <iframe
            title={`Bản đồ Google Maps — ${CONTACT_INFO.name}, ${CONTACT_INFO.address}`}
            src={CONTACT_INFO.map.embedUrl}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
