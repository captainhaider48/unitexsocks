import React from 'react';
import Services from '../components/Services';
import { motion } from 'framer-motion';
import { FiCpu, FiPlay, FiSettings, FiCheckCircle } from 'react-icons/fi';

const processSteps = [
  { 
    step: '01', 
    title: 'Yarn Quality Tests', 
    desc: 'Sourcing long-staple combed cotton, organic cotton, and synthetics, tested for tensile strength, elasticity, and dye-fastness.' 
  },
  { 
    step: '02', 
    title: 'CAD & Knitting', 
    desc: 'Translating design blueprints into computerized instructions for Italian Lonati circular knitting machines, configuring cushion and rib maps.' 
  },
  { 
    step: '03', 
    title: 'Toe Linking', 
    desc: 'Utilizing automated toe-linking machines for low-profile, friction-free linking, preventing blisters and pressure points.' 
  },
  { 
    step: '04', 
    title: 'Steam Boarding', 
    desc: 'Applying precise thermal steam boarding to pre-shrink and shape each sock on steel forms, securing accurate retail sizes.' 
  },
  { 
    step: '05', 
    title: 'Tagging & Shipping', 
    desc: 'Performing individual visual audits, adding brand tags, hooks, and barcoded headers before export container consolidation.' 
  }
];

export default function WhatWeDo() {
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
              What We Do
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-tight">
              Manufacturing & Custom OEM
            </h1>
            <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
              Explore our core product groups and industrial supply solutions designed for commercial retail shelves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid (renders all 12 cards) */}
      <div className="-mt-10 relative z-20">
        <Services />
      </div>

      {/* Industrial Process / Workflow Section */}
      <section className="py-20 bg-white dark:bg-bgdark border-t border-slate-200/50 dark:border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-display mb-2 block">
              Production Workflow
            </span>
            <h2 className="text-3xl font-extrabold text-primary dark:text-white font-display">
              Our Manufacturing Process
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-3">
              How we transform raw yarn cones into premium packaged socks ready for international retail markets.
            </p>
          </div>

          {/* Process Timeline/Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 dark:bg-bgdark-card border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl font-extrabold font-display text-accent/20 dark:text-accent/15 block mb-4">
                    {step.step}
                  </span>
                  <h4 className="font-bold text-primary dark:text-white font-display text-sm mb-2">
                    {step.title}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                
                {/* Arrow indicator (hide on last item and on small screens) */}
                {idx < 4 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 text-accent font-bold text-lg">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
