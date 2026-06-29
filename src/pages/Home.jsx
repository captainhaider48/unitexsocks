import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* About Section Brief */}
      <section className="py-20 bg-white dark:bg-bgdark font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image/Mockup Grid */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800"
            >
              <img
                src="/assets/images/formal_socks.jpg"
                alt="Socks Manufacturing Details"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-card text-white">
                <p className="text-xs uppercase tracking-wider font-bold text-accent mb-1">Our Philosophy</p>
                <p className="text-sm font-medium leading-relaxed">
                  "Every weave dictates endurance. We don't just manufacture; we engineer textile comfort."
                </p>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-accent font-display mb-2 block">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-primary dark:text-white mb-6 leading-tight">
                Crafting Excellence <br/>
                For Worldwide Distribution
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                Unitex Socks is an industry-leading textile manufacturer specializing in premium performance, casual, and medical-grade socks. Established with a commitment to sustainable fabrication and technical accuracy, we partner with top-tier international activewear and formal brands.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-bold text-primary dark:text-white text-base font-display">Mission</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed">
                    To deliver peerless, ethical manufacturing outputs that exceed premium global specifications.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-white text-base font-display">Vision</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed">
                    To lead the global hosiery industry with zero-waste workflows and robotic yarn engineering.
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate('/about')}
                className="px-6 py-3 rounded-full bg-primary hover:bg-primary-light dark:bg-accent dark:hover:bg-accent-light text-white dark:text-primary font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-md flex items-center space-x-2 cursor-pointer"
              >
                <span>Read Our Story</span>
                <FiArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CEO Message Brief Section */}
      <section className="py-20 bg-slate-50 dark:bg-bgdark/30 font-sans border-t border-slate-100 dark:border-slate-800/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center md:items-start gap-8"
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-white dark:border-slate-800 shadow-md">
              <img
                src="/assets/images/sports_socks.jpg"
                alt="CEO Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent font-display mb-2 block">
                Leader's Statement
              </span>
              <p className="text-slate-700 dark:text-slate-200 font-medium italic text-lg leading-relaxed mb-6 font-display">
                "Our global presence is anchored on trust. Unitex delivers consistent, top-grade fabric engineering that brands can confidently place on shelf."
              </p>
              <h4 className="text-base font-bold text-primary dark:text-white font-display">Muhammad Haider</h4>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Founder & CEO, Unitex Socks</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do / Services Section (Preview Top 6) */}
      <section className="py-0 relative">
        <div className="bg-white dark:bg-bgdark text-center pt-20">
          <span className="text-xs font-bold uppercase tracking-widest text-accent font-display mb-2 block">
            Product lines
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-white font-display">
            Our Core Competencies
          </h2>
        </div>
        <Services limit={6} />
        <div className="text-center pb-20 bg-slate-50 dark:bg-bgdark/30">
          <button
            onClick={() => navigate('/what-we-do')}
            className="px-8 py-3.5 rounded-full border-2 border-primary/20 dark:border-accent/30 text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-primary font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer"
          >
            View All 12 Specialties
          </button>
        </div>
      </section>

      {/* Portfolio Section Preview (Preview Top 4) */}
      <section className="py-20 bg-white dark:bg-bgdark border-t border-slate-100 dark:border-slate-800/40">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-accent font-display mb-2 block">
            Gallery Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-white font-display mb-4">
            Recent Export Runs
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Inspect a snapshot of high-grade styles dispatched to international retailers.
          </p>
        </div>
        <Portfolio limit={4} />
        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/portfolio')}
            className="px-8 py-3.5 rounded-full border-2 border-primary/20 dark:border-accent/30 text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-primary font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer"
          >
            Explore Full Portfolio
          </button>
        </div>
      </section>

      {/* Testimonials Slider */}
      <Testimonials />

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
