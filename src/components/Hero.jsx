import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary dark:bg-primary-dark">
      {/* Background Image with Dark & Slate Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/assets/images/hero.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent dark:from-primary-dark dark:via-primary-dark/85 dark:to-transparent" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          {/* Accent Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent font-semibold text-xs tracking-wider uppercase mb-6 font-display"
          >
            <span>ISO 9001 & OEKO-TEX Certified</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-display mb-6"
          >
            Premium Socks Manufacturing <br/>
            <span className="text-accent">for Global Brands</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-slate-300 mb-10 leading-relaxed font-sans"
          >
            We manufacture high-quality sports, casual, formal, school, compression, and custom socks adhering to rigorous international quality standards. Your premier OEM and Private Label partner.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button
              onClick={() => navigate('/what-we-do')}
              className="px-8 py-4 rounded-full bg-accent hover:bg-accent-light text-primary font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Explore Products
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 rounded-full bg-transparent hover:bg-white/10 text-white font-bold text-sm tracking-wider uppercase border-2 border-white/30 hover:border-white transition-all duration-300 cursor-pointer"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Slide Indicator/Gradient line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-secondary to-primary" />
    </section>
  );
}
