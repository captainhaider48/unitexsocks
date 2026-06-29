import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaIndustry, FaTags, FaBoxes, FaGraduationCap, FaAward 
} from 'react-icons/fa';
import { GiRunningShoe, GiSocks, GiCottonFlower } from 'react-icons/gi';
import { MdOutlineHealing, MdQueryStats, MdVerified } from 'react-icons/md';
import { FiSliders, FiArrowRight, FiX } from 'react-icons/fi';

export const servicesData = [
  {
    id: 1,
    title: 'Sports & Athletic Socks',
    icon: GiRunningShoe,
    desc: 'High-performance athletic socks designed with ergonomic cushioning, arch support, and moisture-wicking technology.',
    details: {
      composition: '80% Combed Cotton, 15% Polyester, 5% Elastane',
      gauge: '168N / 200N high-density knitting',
      features: ['Targeted compression zones', 'Breathable mesh vents', 'Reinforced heel and toe', 'Anti-blister seamless toe closure'],
      moq: '3,000 pairs per style/color'
    }
  },
  {
    id: 2,
    title: 'Formal & Dress Socks',
    icon: GiSocks,
    desc: 'Elegant, lightweight dress socks crafted from premium mercerized cotton and bamboo yarns for professional comfort.',
    details: {
      composition: '75% Bamboo Viscose, 22% Polyamide, 3% Spandex',
      gauge: '200N ultra-fine luxury gauge',
      features: ['Sleek ribbed pattern', 'Stay-up comfort cuff', 'Silky soft texture', 'Naturally odor-resistant'],
      moq: '2,500 pairs per style/color'
    }
  },
  {
    id: 3,
    title: 'Casual & Lifestyle Socks',
    icon: GiSocks,
    desc: 'Comfortable everyday socks featuring trendy designs, vibrant colors, and soft yarn compositions.',
    details: {
      composition: '78% Organic Cotton, 19% Nylon, 3% Elastane',
      gauge: '144N / 168N everyday gauge',
      features: ['Comfort stretch band', 'Diverse pattern prints', 'Breathable knit structure', 'Durable wash-and-wear design'],
      moq: '3,000 pairs per style/color'
    }
  },
  {
    id: 4,
    title: 'School & Uniform Socks',
    icon: FaGraduationCap,
    desc: 'Durable, color-fast socks designed to withstand daily school activities and repeated high-temperature washing.',
    details: {
      composition: '70% Combed Cotton, 27% Polyester, 3% Spandex',
      gauge: '144N rib knit',
      features: ['Extra durability reinforcement', 'Shrink-resistant fiber structure', 'Name-tag spacing option', 'All-day comfort fit'],
      moq: '5,000 pairs per style/color'
    }
  },
  {
    id: 5,
    title: 'Compression Socks',
    icon: MdOutlineHealing,
    desc: 'Graduated compression socks (15-20 mmHg & 20-30 mmHg) to improve blood circulation and reduce fatigue.',
    details: {
      composition: '65% Nylon, 25% Polyester, 10% Lycra Spandex',
      gauge: '200N medical-grade circular knit',
      features: ['Graduated pressure profiles', 'Varicose vein relief support', 'Ideal for athletic recovery and travel', 'Arch support band'],
      moq: '2,000 pairs per style/color'
    }
  },
  {
    id: 6,
    title: 'Ankle Socks',
    icon: GiSocks,
    desc: 'Low-cut socks sitting right above the ankle, perfect for running, training, and casual wear.',
    details: {
      composition: '80% Combed Cotton, 17% Polyester, 3% Spandex',
      gauge: '144N / 168N comfort gauge',
      features: ['Y-heel construction', 'Elastane ankle ring prevention', 'Light cushion footbed', 'Minimalist cuff'],
      moq: '3,000 pairs per style/color'
    }
  },
  {
    id: 7,
    title: 'No Show Socks',
    icon: GiSocks,
    desc: 'Invisible liners that stay hidden inside your shoes, equipped with silicone heel grips to prevent slipping.',
    details: {
      composition: '72% Combed Cotton, 25% Polyester, 3% Polyurethane',
      gauge: '168N low-profile knit',
      features: ['Non-slip silicone heel wave grips', 'Ultra-low cut throat', 'Comfort flat elastic rim', 'Seamless feel'],
      moq: '4,000 pairs per style/color'
    }
  },
  {
    id: 8,
    title: 'Organic Cotton Socks',
    icon: GiCottonFlower,
    desc: 'Hypoallergenic socks knitted from certified organic cotton, utilizing eco-friendly dyes and zero chemicals.',
    details: {
      composition: '95% GOTS Certified Organic Cotton, 5% Lycra',
      gauge: '168N eco-knit',
      features: ['GOTS certified organic yarn', 'Natural plant-based dyeing', 'Completely chemical-free feel', 'Ultra-gentle skin contact'],
      moq: '3,000 pairs per style/color'
    }
  },
  {
    id: 9,
    title: 'Custom Sock Design',
    icon: FiSliders,
    desc: 'Collaborate with our design department to create custom patterns, logos, and packaging matching your brand identity.',
    details: {
      composition: 'Fully customizable yarn options',
      gauge: 'Available options: 120N, 144N, 168N, 200N',
      features: ['CAD artwork blueprints', 'Digital sample visualization', 'Eco-friendly label design', 'Pantone color matching'],
      moq: '3,000 pairs per customized design'
    }
  },
  {
    id: 10,
    title: 'OEM Manufacturing',
    icon: FaIndustry,
    desc: 'High-capacity industrial production utilizing state-of-the-art Italian Lonati knitting machinery for global brands.',
    details: {
      composition: 'Client specified material sheets',
      gauge: 'Configurable knitting layouts',
      features: ['State-of-the-art Italian Lonati machinery', 'Rigorous mid-line quality checks', 'Flexible packaging lines', 'Global freight partners'],
      moq: '10,000 pairs total order value'
    }
  },
  {
    id: 11,
    title: 'Private Label Production',
    icon: FaTags,
    desc: 'End-to-end private label solutions including custom headers, retail packaging, barcodes, and branding accessories.',
    details: {
      composition: 'Wide selection of premium stock yarns',
      gauge: 'Tailored to market category',
      features: ['Custom paper card headers', 'Hanging hook installations', 'UPC/EAN barcode rendering', 'Retail shelf display packaging'],
      moq: '5,000 pairs total production run'
    }
  },
  {
    id: 12,
    title: 'Bulk & Export Orders',
    icon: FaBoxes,
    desc: 'Efficient logistics and custom clearance handling for high-volume orders dispatched worldwide.',
    details: {
      composition: 'Export standard compliance materials',
      gauge: 'Consistent bulk manufacturing logs',
      features: ['FOB, CIF, and DDP export settings', 'Moisture-proof container wrapping', 'All compliance certificates provided', 'Fast lead times'],
      moq: '20,000 pairs per shipping batch'
    }
  }
];

export default function Services({ limit }) {
  const [selectedService, setSelectedService] = useState(null);
  const items = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section className="py-20 bg-slate-50 dark:bg-bgdark/30 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Only show if not limited, i.e., page view) */}
        {!limit && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-white font-display mb-4">
              What We Do
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Discover our comprehensive array of product categories, technical specifications, and industrial capabilities tailored for international brands.
            </p>
          </div>
        )}

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="bg-white dark:bg-bgdark-card rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-md hover:shadow-xl dark:shadow-slate-900/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 dark:bg-accent/10 text-primary dark:text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-primary dark:text-white mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center text-sm font-semibold text-primary dark:text-accent hover:text-accent-light dark:hover:text-amber-300 group/btn transition-colors cursor-pointer"
                  >
                    <span>Read More</span>
                    <FiArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Backdrop and Box */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white dark:bg-bgdark-card border border-slate-100 dark:border-slate-800 w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-y-auto max-h-[90vh]"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <FiX className="w-5 h-5" />
                </button>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 rounded-2xl bg-accent/15 text-accent">
                    {React.createElement(selectedService.icon, { className: 'w-7 h-7' })}
                  </div>
                  <h3 className="text-2xl font-bold font-display text-primary dark:text-white">
                    {selectedService.title}
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {selectedService.desc}
                </p>

                {/* Tech Specifications */}
                <div className="space-y-4 border-t border-slate-100 dark:border-slate-800 pt-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-accent font-display">Technical Specifications</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl">
                      <span className="block text-xs font-semibold text-slate-400 uppercase">Material Composition</span>
                      <span className="text-sm font-semibold text-primary dark:text-slate-200">{selectedService.details.composition}</span>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl">
                      <span className="block text-xs font-semibold text-slate-400 uppercase">Knitting Gauge</span>
                      <span className="text-sm font-semibold text-primary dark:text-slate-200">{selectedService.details.gauge}</span>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl">
                      <span className="block text-xs font-semibold text-slate-400 uppercase">Minimum Order Qty (MOQ)</span>
                      <span className="text-sm font-semibold text-primary dark:text-slate-200">{selectedService.details.moq}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="block text-xs font-semibold text-slate-400 uppercase mb-2">Key Product/Service Features</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-300">
                      {selectedService.details.features.map((feat, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex justify-end space-x-3">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href="/contact"
                    className="px-6 py-2.5 rounded-xl bg-primary text-white dark:bg-accent dark:text-primary font-bold text-sm hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    Get Quote
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
