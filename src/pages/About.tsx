import React from 'react';
import { ShieldCheck, Ruler, Package, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative px-6 md:px-8 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-secondary font-label font-bold uppercase tracking-[0.1em] text-sm block mb-4">Established 2019</span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary leading-tight tracking-tighter mb-8">
              The Master Artisan <br/>of Architectural <span className="italic text-primary-container">Finishes.</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl">
              For half a decade, we have been the silent partner behind the region's most prestigious interiors. We don't just sell paint; we curate the medium for your architectural vision.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container-highest rounded-xl overflow-hidden relative industrial-shadow">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAqQeVjc0ApNrOCx2I6PTV13LeCwix--WAtA-CN6ZI_Jzk2AEpoqnK-FaiXHjgrt21OQxYa7wtUtaQVd53d7OhslwWoL1QzZGLFHF0kxnkkYcIDu1jTb5oPwHN5xgu0CC8S5XcL4wvw_RGLz0yu5GwC43EZrOjIWYzULBB6-By2IVdQXiCFTExYble5WCUJlV-zQKP6gKmq89FgB10nIQenElp4djV9yg_8s0OlSTyU4pcK3LQHmkqBZN14uOoEh2pyjiEUedsCoE" 
                alt="Showroom" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-primary p-8 rounded-lg industrial-shadow hidden md:block">
              <div className="text-on-primary font-headline font-black text-5xl">05</div>
              <div className="text-on-primary font-label text-sm uppercase tracking-widest mt-2">Years of Precision</div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-surface-container-low py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <ShieldCheck size={40} className="text-secondary" />
              <h3 className="text-2xl font-headline font-bold text-primary">Uncompromising Authenticity</h3>
              <p className="text-on-surface-variant leading-relaxed">
                As authorized Dulux and Jotun partners, every drop of paint in our warehouse is certified original. We maintain strict temperature controls to ensure chemical integrity.
              </p>
            </div>
            <div className="space-y-6">
              <Ruler size={40} className="text-secondary" />
              <h3 className="text-2xl font-headline font-bold text-primary">Free Technical Consultation</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Our experts don't just pick colors; we analyze substrate conditions, light orientation, and climate factors to recommend the perfect coating system for your project.
              </p>
            </div>
            <div className="space-y-6">
              <Package size={40} className="text-secondary" />
              <h3 className="text-2xl font-headline font-bold text-primary">Artisan Mixing Hub</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Utilizing industry-leading tinting technology, we provide exact color matching and batch consistency that industrial-scale retailers often overlook.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-secondary font-label font-bold uppercase tracking-[0.1em] text-sm block mb-4">Our Partners</span>
            <h2 className="text-4xl font-headline font-extrabold text-primary">Authorized Distribution.</h2>
          </div>
          <div className="max-w-md text-right">
            <p className="text-on-surface-variant">We partner exclusively with global leaders in coating technology to ensure our clients receive the most durable and vibrant results possible.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-container-lowest p-12 rounded-xl flex items-center justify-between group cursor-pointer border-b-4 border-transparent hover:border-primary transition-all duration-300">
            <div>
              <h4 className="text-3xl font-headline font-black text-primary group-hover:text-secondary transition-colors">Dulux</h4>
              <p className="mt-2 text-on-surface-variant">Premium Decorative Solutions</p>
            </div>
            <ArrowRight size={48} className="text-surface-container-highest group-hover:text-primary transition-colors" />
          </div>
          <div className="bg-surface-container-lowest p-12 rounded-xl flex items-center justify-between group cursor-pointer border-b-4 border-transparent hover:border-primary transition-all duration-300">
            <div>
              <h4 className="text-3xl font-headline font-black text-primary group-hover:text-secondary transition-colors">Jotun</h4>
              <p className="mt-2 text-on-surface-variant">Industrial & Marine Excellence</p>
            </div>
            <ArrowRight size={48} className="text-surface-container-highest group-hover:text-primary transition-colors" />
          </div>
        </div>
      </section>

      {/* Bento Grid Gallery */}
      <section className="bg-surface-container-high py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
            <div className="md:col-span-2 md:row-span-2 bg-surface-container-lowest rounded-xl overflow-hidden relative">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV_oeA61qJyBKIqDSgz7X7i_lClBCFxU59UxQ_DtamBFNUKoCxOnWRLuZ2PnMtKiV_bYsh6N8V-kVeDbtsXknGYJdxuYG0cAJw5aEDuRLQB6RX7Zl0Wdx2YRzBszzGDMbkPrabiQirJtbOeQ2I92dCmlktY6OYw47BWeQINpeL-4kEaby5sl9fE79JoFmOfa1Uogc9NR7fsj1C26Fzfjk5tJGNAbIkDcBqF0gbZF2-zD0bwRBIAIHMBlt9TwgA6J3HEnNQwFHZXfY" 
                alt="Warehouse" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
                <p className="text-on-primary font-headline font-bold text-lg">Main Distribution Hub</p>
              </div>
            </div>
            <div className="md:col-span-2 bg-surface-container-lowest rounded-xl overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeSltTSAPA4ZL0Hjqsb5uDGcE8fY-8e4Js-kMs5pLNyk5s03tVyfy047PefEM1NizghRzgQZU6lQ20Eyzvmrsd5Dg0diobJ-eOMO5er78OUvSoY3kefx4jdEIXVsQTc-nWJl-nhfSY_nvHcCwPcNskVRyfARedi1X62ZVIWRxo_nA4Btd55MaVig-0EhuqeneBH90CtptpaK4mO_-VlvxxQcMWDWEzlRAxN9azSOkC9Dd1FU14KcrXN0ufI8hrmMgZUyQGvBLoP-Y" 
                alt="Mixing" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYWO5fYJAl8dySrGCgzJ31BlI12dY9RYo2mawNYVUjyqCoLYDWwM_FK-tP7YnV95qk010Nmk9jRYp7EeTS_rQG3EM6oTZtD-khG1usjx1JCkom-I_X5KA3JfWbb-aSyWoNaQeIPkSVIUwyNfYdxuMloE2wHXo7viV41mWYrDp-9m_EJomtk2yXNmrWIUqUvYG9myy2_TMV7o6j4FzSRKXY50wp6yo9313aDDHVBBNwcsted-KrhbQogkPkjul2J5P5-XFJB9-3B6Q" 
                alt="Texture" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-primary flex items-center justify-center p-8 rounded-xl">
              <div className="text-center">
                <span className="text-on-primary font-headline font-black text-4xl block">500+</span>
                <span className="text-on-primary/80 font-label text-xs uppercase tracking-widest">Shades Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
