import React from 'react';
import Portfolio from '../components/Portfolio';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  return (
    <div className="pt-20 font-sans bg-bglight dark:bg-bgdark transition-colors duration-300">
      
      {/* Banner Header */}
      <section className="relative py-24 bg-primary dark:bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('/assets/images/hero.jpg')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary dark:from-primary-dark/80 dark:to-primary-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-display mb-2 block">
              Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-tight">
              Export Gallery
            </h1>
            <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
              Explore our diverse collections designed for international apparel chains, sports brands, and school uniform distributors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full Grid Portfolio */}
      <div className="-mt-10 relative z-20">
        <Portfolio />
      </div>

      <CTA />

    </div>
  );
}
