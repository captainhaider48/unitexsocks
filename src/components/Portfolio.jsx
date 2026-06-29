import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiZoomIn } from 'react-icons/fi';

const categories = [
  'All',
  'Sports Collection',
  'Formal Collection',
  'School Collection',
  'Fashion Collection',
  'Winter Collection',
  'Kids Collection',
  'Corporate Orders',
  'Export Projects'
];

const portfolioItems = [
  {
    id: 1,
    title: 'AeroDry Athletic Quarter Socks',
    category: 'Sports Collection',
    image: '/assets/images/sports_socks.jpg',
    spec: '200N Gauge | Combed Cotton | Lycra'
  },
  {
    id: 2,
    title: 'Classic Herringbone Dress Socks',
    category: 'Formal Collection',
    image: '/assets/images/formal_socks.jpg',
    spec: '200N Fine Gauge | Mercerized Cotton'
  },
  {
    id: 3,
    title: 'Retro Geometric Crew Socks',
    category: 'Fashion Collection',
    image: '/assets/images/fashion_socks.jpg',
    spec: '168N Everyday | Combed Cotton'
  },
  {
    id: 4,
    title: 'Comfort-Fit School Uniform Socks',
    category: 'School Collection',
    image: '/assets/images/school_socks.jpg',
    spec: '144N Rib | Anti-Shrink Cotton Blend'
  },
  {
    id: 5,
    title: 'Thermal Merino Wool Winter Socks',
    category: 'Winter Collection',
    image: '/assets/images/fashion_socks.jpg',
    spec: '120N Heavy Rib | Merino Wool'
  },
  {
    id: 6,
    title: 'Playtime Soft Cotton Kids Socks',
    category: 'Kids Collection',
    image: '/assets/images/school_socks.jpg',
    spec: '144N Combed Cotton | Fun Prints'
  },
  {
    id: 7,
    title: 'Premium Corporate Gift Set',
    category: 'Corporate Orders',
    image: '/assets/images/formal_socks.jpg',
    spec: 'Custom Embossed Gift Box Packaging'
  },
  {
    id: 8,
    title: 'EU Sports Brand Export Run',
    category: 'Export Projects',
    image: '/assets/images/sports_socks.jpg',
    spec: 'BSCI Compliant | European Distribution'
  }
];

export default function Portfolio({ limit }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section className="py-20 bg-white dark:bg-bgdark font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - only if not limited (i.e. page view) */}
        {!limit && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-white font-display mb-4">
              Export & Product Portfolio
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Browse our diverse range of product lines manufactured for dynamic international retail markets.
            </p>
          </div>
        )}

        {/* Filter Badges - hide if limited (home brief preview) */}
        {!limit && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-accent text-primary shadow-md shadow-accent/20'
                    : 'bg-slate-100 dark:bg-bgdark-card hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-bgdark-card aspect-[4/3] shadow-md hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="bg-accent/20 border border-accent/30 rounded-full px-3 py-1 self-start text-[10px] text-accent uppercase font-bold tracking-wider mb-2 font-display">
                    {item.category}
                  </div>
                  <h3 className="text-white font-bold font-display text-base leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs font-sans">
                    {item.spec}
                  </p>
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-accent/90 text-primary">
                    <FiZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
                className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-white dark:bg-bgdark-card border border-slate-100 dark:border-slate-800 w-full max-w-3xl rounded-3xl shadow-2xl z-10 overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-950 transition-colors z-20 cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <FiX className="w-5 h-5" />
                </button>

                {/* Lightbox Content */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="aspect-[4/3] md:aspect-auto md:h-[400px] bg-slate-900">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-accent font-display mb-2 block">
                        {selectedItem.category}
                      </span>
                      <h3 className="text-2xl font-bold font-display text-primary dark:text-white mb-4">
                        {selectedItem.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                        This product is part of our manufacturing logs and represents a standard of production available for volume OEM buyers and global private label orders.
                      </p>
                      
                      <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800/80">
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Standard Specifications</span>
                        <span className="text-sm font-semibold text-primary dark:text-slate-200">{selectedItem.spec}</span>
                      </div>
                    </div>

                    <div className="mt-8 flex space-x-3">
                      <button
                        onClick={() => setSelectedItem(null)}
                        className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs tracking-wider uppercase hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        Back
                      </button>
                      <a
                        href="/contact"
                        className="flex-1 text-center px-4 py-3 rounded-xl bg-primary text-white dark:bg-accent dark:text-primary font-bold text-xs tracking-wider uppercase hover:opacity-90 transition-opacity cursor-pointer"
                      >
                        Enquire Bulk
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
