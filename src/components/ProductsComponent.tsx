import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Shield, Zap, Truck, CheckCircle2, MapPin, Factory } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { Button } from "@/components/ui/button";


import tmtRebars from "@/assets/tmt-rebars.jpg";
import wireCoils from "@/assets/wire-coils.jpg";

import { catalogue } from "@/lib/products-data";
const heroImages = [
  "/hero/products-bg-1.jpg",
  "/hero/products-bg-2.jpg",
  "/hero/products-bg-3.jpg",
];

export const ProductsComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    // The outermost wrapper uses the same deep navy color as the hero overlay. 
    // This absolutely guarantees that any sub-pixel margin caused by the browser 
    // or fixed header will show dark navy instead of a jarring white/grey block.
    <div className="w-full bg-ssc-navy min-h-screen flex flex-col">
      
      {/* ════════════════════════════════════════════════════════════════
          PRODUCTS PAGE HERO — Premium Industrial
          Background: /hero/products-bg-1.jpg (TMT rebars close-up)
          Layout: Left dark panel + right photographic steel
          ════════════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden bg-[#07111F]"
        style={{ minHeight: 'max(100svh, 700px)' }}
      >
        {/* ── Layer 1: Full-bleed background image ── */}
        <img
          src="/hero/products-bg-1.jpg"
          alt="Premium TMT reinforcement steel bars"
          className="absolute inset-0 w-full h-full object-cover object-[70%_center] sm:object-[65%_center] lg:object-[60%_center]"
          loading="eager"
          fetchPriority="high"
        />

        {/* ── Layer 2: Cinematic dark overlay — keeps steel visible ── */}
        <div className="absolute inset-0 bg-[#07111F]/35" />

        {/* ── Layer 3: Left-side gradient for panel blending ── */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/95 via-[#07111F]/60 to-transparent" />

        {/* ── Layer 4: Subtle vignette ── */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/50 via-transparent to-[#07111F]/30" />

        {/* ── Content Panel (left-aligned, architecturally integrated) ── */}
        <div
          className="relative z-10 w-full lg:w-[58%] xl:w-[55%] flex flex-col justify-center
                     bg-[#07111F]/80 backdrop-blur-[6px]
                     lg:rounded-tr-[60px] lg:rounded-br-[60px]
                     border-r border-white/[0.06] lg:border-r
                     shadow-[8px_0_30px_rgba(0,0,0,0.4)]
                     px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20
                     pt-[120px] sm:pt-[140px] lg:pt-[130px]
                     pb-12 sm:pb-16 lg:pb-20"
          style={{ minHeight: 'max(100svh, 700px)' }}
        >
          {/* Decorative dot matrix — upper left */}
          <div className="absolute top-[100px] sm:top-[130px] lg:top-[110px] left-6 sm:left-10 lg:left-16 grid grid-cols-7 gap-[6px] opacity-40 pointer-events-none">
            {[...Array(21)].map((_, i) => (
              <div key={`dt-${i}`} className="w-[3px] h-[3px] rounded-full bg-ssc-gold" />
            ))}
          </div>

          {/* Decorative dot matrix — lower right */}
          <div className="absolute bottom-12 sm:bottom-16 right-10 sm:right-14 lg:right-20 grid grid-cols-7 gap-[6px] opacity-40 pointer-events-none">
            {[...Array(21)].map((_, i) => (
              <div key={`db-${i}`} className="w-[3px] h-[3px] rounded-full bg-ssc-gold" />
            ))}
          </div>

          {/* Animated content wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative z-10 max-w-[620px]"
          >
            {/* Eyebrow */}
            <p className="text-[11px] sm:text-xs font-bold text-ssc-gold uppercase tracking-[0.22em] mb-5 sm:mb-6">
              SRINIVASA STEEL CORPORATION
            </p>

            {/* Main headline */}
            <h1 className="text-[clamp(2.6rem,7vw,5.25rem)] font-[900] leading-[0.96] tracking-tight mb-7 sm:mb-8">
              <span className="block text-white">STEEL PRODUCTS</span>
              <span className="block text-ssc-gold">ENGINEERED FOR</span>
              <span className="block text-ssc-gold">PERFORMANCE.</span>
            </h1>

            {/* Gold accent divider */}
            <div className="w-14 sm:w-16 h-[3px] bg-ssc-gold mb-6 sm:mb-7" />

            {/* Description */}
            <p className="text-[15px] sm:text-[17px] lg:text-[19px] text-white/75 max-w-[480px] leading-[1.7] font-medium mb-10 sm:mb-12">
              High-performance steel products for construction, infrastructure
              and industrial requirements.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <Button
                onClick={() => document.getElementById('product-catalogue')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-ssc-gold text-[#07111F] hover:bg-white
                           px-7 sm:px-9 py-[22px] sm:py-6
                           text-[13px] sm:text-[13px] font-[800] uppercase tracking-[0.12em]
                           rounded-[4px] shadow-lg
                           transition-all duration-200 active:scale-[0.97]
                           border-none group
                           inline-flex items-center justify-center gap-2.5"
              >
                VIEW PRODUCTS
                <ArrowRight size={15} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
              </Button>

              <Link to="/contact" search={{ product: "" }} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full h-full
                             border border-white/25 bg-[#07111F]/40 hover:bg-white/[0.06]
                             text-white
                             px-7 sm:px-9 py-[22px] sm:py-6
                             text-[13px] sm:text-[13px] font-[800] uppercase tracking-[0.12em]
                             rounded-[4px]
                             transition-all duration-200 active:scale-[0.97]
                             inline-flex items-center justify-center gap-2.5"
                >
                  REQUEST A QUOTE
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cinematic Product Catalogue Section */}
      {/* Background darkened to #EDF2F7 to create contrast with the white product cards */}
      <section id="product-catalogue" className="py-20 lg:py-32 bg-[#EDF2F7]">
        <div className="container-wide px-4 sm:px-6">
          <div className="text-center mb-16 lg:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[10px] sm:text-micro text-ssc-gold-dark uppercase mb-4 block tracking-widest font-bold">
                INDUSTRIAL SOLUTIONS
              </span>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-ssc-navy mb-4 uppercase tracking-tighter font-bold">
                OUR STEEL PRODUCTS
              </h2>
              <p className="text-sm sm:text-base text-ssc-gray-body max-w-[600px] mx-auto leading-relaxed">
                Quality steel products supplied for construction, infrastructure and industrial requirements.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {catalogue.map((product, index) => (
              <Link
                key={product.id}
                to="/products/$productId"
                params={{ productId: product.id }}
                className="group flex flex-col bg-white border border-black/5 rounded-[16px] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full flex flex-col"
                >
                {/* Flat Image Banner */}
                <div className="relative h-[240px] sm:h-[320px] w-full overflow-hidden bg-white">
                  <motion.img 
                    src={product.image} 
                    alt={product.alt}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.2,1,0.3,1)]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-ssc-navy/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                {/* Clean Content Area */}
                <div className="p-8 sm:p-10 flex flex-col flex-1 bg-white relative">
                  
                  {/* Location Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] sm:text-xs font-bold text-ssc-gold-dark uppercase tracking-widest">
                      {product.location}
                    </span>
                    <span className="text-black/20 mx-2">•</span>
                    <span className="text-[9px] sm:text-[10px] text-ssc-gray-body font-bold uppercase tracking-widest">
                      {product.locationType}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-ssc-navy uppercase tracking-tighter mb-4 leading-none group-hover:text-ssc-gold-dark transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm sm:text-[15px] text-ssc-gray-body leading-relaxed mb-8 font-medium">
                    {product.description}
                  </p>
                  
                  {/* Size Chips */}
                  <div className="mt-auto pt-6 border-t border-black/5">
                    <div className="flex flex-wrap gap-2">
                      {product.specs.map((spec) => (
                        <div key={spec} className="px-3 py-1.5 bg-ssc-steel-light text-ssc-navy text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded">
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Clean CTA Button */}
                  <div className="mt-8">
                    <div className="inline-flex items-center gap-2 text-ssc-navy font-bold text-[11px] sm:text-xs uppercase tracking-[0.15em] border-b-2 border-transparent group-hover:border-ssc-gold transition-all pb-1">
                      VIEW FULL DETAILS <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEW Closing Section - Footer Adjacent */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-ssc-steel-light border-y border-black/5">
        
        {/* Structural Background Configuration */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-40 pointer-events-none" />
        </div>
        
        <div className="container-wide relative z-10 px-4 sm:px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
             
             {/* Left: Typography & Capabilities Story */}
             <div>
               <div className="inline-flex items-center gap-3 mb-6">
                 <Shield className="w-5 h-5 text-ssc-gold-dark" />
                 <span className="text-[10px] sm:text-micro text-ssc-navy uppercase tracking-[0.2em] font-bold">
                   INDUSTRIAL CAPABILITY
                 </span>
               </div>
               
               <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[56px] text-ssc-navy uppercase tracking-tighter font-bold mb-6 leading-[1.05]">
                 QUALITY. <br />
                 AVAILABILITY. <br />
                 <span className="text-ssc-gold-dark">SUPPLY.</span>
               </h2>
               
               <p className="text-[15px] sm:text-base lg:text-lg text-ssc-gray-body leading-relaxed font-medium mb-10 max-w-[480px]">
                 Reliable steel supply for construction, infrastructure and industrial requirements — with dependable availability, practical quantity options and timely delivery.
               </p>

               {/* Capability Grid */}
               <div className="space-y-6 sm:space-y-8">
                 {[
                   { title: "RELIABLE AVAILABILITY", desc: "Consistent access to essential steel products.", icon: Shield },
                   { title: "FLEXIBLE QUANTITIES", desc: "Supply available for both smaller requirements and bulk orders.", icon: Zap },
                   { title: "TIMELY DELIVERY", desc: "Planned dispatch and dependable supply support.", icon: Truck },
                   { title: "INDUSTRIAL CAPABILITY", desc: "Products and handling capability for demanding requirements.", icon: Factory }
                 ].map((item, idx) => (
                   <motion.div 
                     key={item.title} 
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: idx * 0.1 }}
                     className="flex gap-4 sm:gap-5 group"
                   >
                     <div className="w-12 h-12 shrink-0 bg-white border border-black/5 flex items-center justify-center group-hover:border-ssc-gold/40 transition-colors shadow-sm">
                       <item.icon className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-ssc-gold-dark" />
                     </div>
                     <div>
                       <h4 className="text-[13px] sm:text-[14px] lg:text-[15px] font-bold text-ssc-navy uppercase tracking-widest mb-1 sm:mb-1.5 group-hover:text-ssc-gold-dark transition-colors">
                         {item.title}
                       </h4>
                       <p className="text-[13px] sm:text-sm text-ssc-gray-body max-w-[320px] leading-relaxed">
                         {item.desc}
                       </p>
                     </div>
                   </motion.div>
                 ))}
               </div>
             </div>

             {/* Right: Feature Image Panel with Embedded CTA */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7 }}
               className="hidden md:flex flex-col justify-end w-full h-[500px] lg:h-[600px] border border-black/5 relative overflow-hidden group shadow-xl"
             >
               <div className="absolute inset-0 z-0">
                 <img 
                   src="/images/stock/products/REQUEST A QUOTE_.png" 
                   alt="Premium Engineered Steel"
                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.2,1,0.3,1)]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-ssc-navy via-ssc-navy/50 to-transparent opacity-90" />
               </div>
               
               <div className="relative z-10 p-8 lg:p-10 w-full">
                 <Link to="/contact" search={{ product: "" }}>
                   <Button className="bg-ssc-gold text-ssc-navy hover:bg-white w-full h-14 lg:h-16 font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[13px] sm:text-sm rounded-none border-none shadow-xl transition-all">
                     REQUEST SUPPLY QUOTE <ArrowRight className="ml-3 w-4 h-4 sm:w-5 sm:h-5" />
                   </Button>
                 </Link>
               </div>
             </motion.div>
             
             {/* Mobile CTA (Shows only on small screens) */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="block md:hidden mt-4 pt-4 border-t border-white/10"
             >
               <Link to="/contact" search={{ product: "" }}>
                 <Button className="bg-ssc-gold text-ssc-navy hover:bg-white w-full h-14 font-bold uppercase tracking-[0.15em] text-[13px] rounded-none border-none shadow-xl transition-all">
                   REQUEST SUPPLY QUOTE <ArrowRight className="ml-2 w-4 h-4" />
                 </Button>
               </Link>
             </motion.div>

           </div>
        </div>
      </section>

    </div>
  );
};
