import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="py-20 relative overflow-hidden bg-primary dark:bg-primary-dark">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display mb-6">
            Ready to Partner with a Global Leader?
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            Whether you want to build a private label athletic brand or procure school uniform socks in high volume, Unitex is ready to engineer your custom solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 rounded-full bg-accent hover:bg-accent-light text-primary font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer flex items-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <FiArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/what-we-do')}
              className="px-8 py-4 rounded-full bg-transparent hover:bg-white/10 text-white font-bold text-sm tracking-wider uppercase border-2 border-white/20 hover:border-white transition-all duration-300 cursor-pointer"
            >
              View Catalog Specs
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
