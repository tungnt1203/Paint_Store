import React from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-8">
      <header className="mb-20">
        <span className="text-secondary font-label font-bold uppercase tracking-widest text-sm block mb-4">Get in Touch</span>
        <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary tracking-tighter">
          Let's Start Your <br/>Next <span className="italic text-primary-container">Masterpiece.</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-12">
          <div className="grid grid-cols-1 gap-8">
            <div className="flex items-start gap-6 group">
              <div className="bg-primary-container p-4 rounded-xl text-on-primary-container group-hover:bg-secondary group-hover:text-white transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-headline font-bold text-primary text-lg mb-1">Phone & Zalo</h4>
                <p className="text-on-surface-variant font-body">090 123 4567 (Mr. Artisan)</p>
                <p className="text-on-surface-variant font-body">1800-PAINT-01 (Hotline)</p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="bg-primary-container p-4 rounded-xl text-on-primary-container group-hover:bg-secondary group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-headline font-bold text-primary text-lg mb-1">Email Inquiry</h4>
                <p className="text-on-surface-variant font-body">consult@masterartisan.com</p>
                <p className="text-on-surface-variant font-body">sales@masterartisan.com</p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="bg-primary-container p-4 rounded-xl text-on-primary-container group-hover:bg-secondary group-hover:text-white transition-colors">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-headline font-bold text-primary text-lg mb-1">Showroom Address</h4>
                <p className="text-on-surface-variant font-body">123 Đường Kiến Trúc, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-8 border-t border-outline-variant">
            <h4 className="font-headline font-bold text-primary mb-6">Connect with us</h4>
            <div className="flex space-x-4">
              <button className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <MessageCircle size={20} />
              </button>
              {/* Add more social buttons */}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-surface-container-low p-8 md:p-12 rounded-2xl industrial-shadow">
            <h3 className="text-2xl font-headline font-bold text-primary mb-8">Send an Inquiry</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant font-label">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant font-label">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="090 123 4567"
                    className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant font-label">Subject</label>
                <select className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all">
                  <option>Product Inquiry</option>
                  <option>Quotation Request</option>
                  <option>Technical Consultation</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant font-label">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                ></textarea>
              </div>
              <button className="w-full bg-primary text-on-primary font-headline font-bold py-4 rounded-lg hover:bg-primary-container transition-all flex items-center justify-center gap-3">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <section className="mt-32 h-[450px] bg-surface-container-highest rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center max-w-xs relative z-10">
            <MapPin size={32} className="text-secondary mx-auto mb-4" />
            <h4 className="font-headline font-bold text-primary mb-2">Visit Our Showroom</h4>
            <p className="text-sm text-on-surface-variant">Experience our full color palette in person.</p>
          </div>
        </div>
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAqQeVjc0ApNrOCx2I6PTV13LeCwix--WAtA-CN6ZI_Jzk2AEpoqnK-FaiXHjgrt21OQxYa7wtUtaQVd53d7OhslwWoL1QzZGLFHF0kxnkkYcIDu1jTb5oPwHN5xgu0CC8S5XcL4wvw_RGLz0yu5GwC43EZrOjIWYzULBB6-By2IVdQXiCFTExYble5WCUJlV-zQKP6gKmq89FgB10nIQenElp4djV9yg_8s0OlSTyU4pcK3LQHmkqBZN14uOoEh2pyjiEUedsCoE" 
          alt="Map" 
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
      </section>
    </div>
  );
};

export default Contact;
