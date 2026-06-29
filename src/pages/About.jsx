import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiAward, FiGlobe, FiClock, FiSettings } from 'react-icons/fi';
import { GiCottonFlower } from 'react-icons/gi';

const timelineEvents = [
  {
    year: '2016',
    title: 'Company Inception',
    desc: 'Unitex Socks was founded with 10 mechanical knitting machines, catering to regional distributors.'
  },
  {
    year: '2018',
    title: 'Machinery Modernization',
    desc: 'Upgraded to Italian Lonati computerized knitting units, expanding output capacity and introducing athletic cushion lines.'
  },
  {
    year: '2020',
    title: 'First Export Consignment',
    desc: 'Secured ISO 9001 and OEKO-TEX Standard 100 certifications, shipping our first bulk batch to the United Kingdom.'
  },
  {
    year: '2022',
    title: 'Zero-Waste Initiative & GOTS',
    desc: 'Introduced organic yarn sourcing and a solar-powered facility wing, capturing key eco-conscious European apparel buyers.'
  },
  {
    year: '2025',
    title: 'Global Export Milestone',
    desc: 'Reached a capacity of 1 Million pairs monthly, exporting to over 25 countries across North America, EU, and Asia.'
  }
];

const coreValues = [
  {
    title: 'Uncompromised Quality',
    desc: 'Maintaining absolute yarn specifications and gauge precision through multiple automated audit points.'
  },
  {
    title: 'Zero-Waste Sustainability',
    desc: 'Minimizing environmental footprints through solar power, water recycling, and GOTS-certified organic raw materials.'
  },
  {
    title: 'Robotic Innovation',
    desc: 'Investing in cutting-edge Italian Lonati circular knitting systems for seamless, custom structural features.'
  },
  {
    title: 'Absolute Integrity',
    desc: 'Ensuring honest lead times, transparent material compositions, and complete compliance protocols.'
  }
];

export default function About() {
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
              Learn More
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-tight">
              About Unitex Socks
            </h1>
            <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
              Serving global activewear and corporate labels with automated circular knitting, ethical compliance, and premium materials.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story & CEO Section */}
      <section className="py-20 bg-white dark:bg-bgdark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary dark:text-white mb-6">
                Our Corporate Journey
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                Founded over a decade ago, Unitex Socks has grown from a local workshop into a state-of-the-art export-oriented manufacturing house. We combine advanced machinery with skilled textile engineering to deliver products that meet strict international quality standards.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-8">
                Today, our products are worn by millions worldwide. We serve high-profile athletic brands, medical distributors, and custom designers, delivering socks that optimize comfort, longevity, and performance.
              </p>

              {/* Grid of highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <FiCheck className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-primary dark:text-slate-200">ISO 9001:2015</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <FiCheck className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-primary dark:text-slate-200">OEKO-TEX Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <FiCheck className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-primary dark:text-slate-200">GOTS Organic Yarns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <FiCheck className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-primary dark:text-slate-200">BSCI Compliant</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: CEO MESSAGE Box */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-50 dark:bg-bgdark-card border border-slate-100 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-lg relative"
            >
              <div className="absolute top-6 right-8 text-accent opacity-10">
                <FiAward className="w-24 h-24" />
              </div>
              <h3 className="text-xl font-bold font-display text-primary dark:text-white mb-4">CEO's Commitment</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm italic leading-relaxed mb-6">
                "Our philosophy is simple: we never cut corners. From selecting raw combed cotton to finishing cuffs and toe linkages, precision is maintained. Sourcing teams select Unitex because we deliver exactly what we promise, on time and to specifications."
              </p>
              <div className="border-t border-slate-200 dark:border-slate-800 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-primary dark:text-white font-display text-sm">Muhammad Haider</h4>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Founder & CEO</p>
                </div>
                <span className="text-xs font-semibold text-accent uppercase tracking-widest font-display">Unitex Socks</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-slate-50 dark:bg-bgdark/30 border-y border-slate-200/50 dark:border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-primary dark:text-white font-display">Our Core Values</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-3">
              These principles guide our business operations, material purchasing, and client communications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white dark:bg-bgdark-card p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-bold text-base mb-4 font-display">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold font-display text-primary dark:text-white mb-2">{val.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Growth Timeline */}
      <section className="py-20 bg-white dark:bg-bgdark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-primary dark:text-white font-display">Timeline of Growth</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-3">
              How we scaled from a local supplier to a global manufacturing partner.
            </p>
          </div>

          <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-32 space-y-12">
            {timelineEvents.map((evt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-white dark:border-bgdark z-10" />

                {/* Left Year Panel (Desktop Only) */}
                <div className="hidden md:block absolute -left-36 top-1 w-28 text-right font-display font-extrabold text-2xl text-accent">
                  {evt.year}
                </div>

                {/* Mobile Year Badge */}
                <div className="md:hidden inline-block px-2.5 py-0.5 rounded-md bg-accent/15 text-accent font-extrabold text-xs mb-2">
                  {evt.year}
                </div>

                <div className="bg-slate-50 dark:bg-bgdark-card p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm md:ml-8">
                  <h3 className="font-bold text-primary dark:text-white text-base font-display">{evt.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 leading-relaxed">{evt.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* why choose us technical specifications */}
      <section className="py-20 bg-slate-50 dark:bg-bgdark/30 border-t border-slate-200/50 dark:border-slate-800/40 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Image/Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800"
            >
              <img
                src="/assets/images/sports_socks.jpg"
                alt="Knitting Machinery Detail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-card text-white flex items-center space-x-4">
                <FiSettings className="w-10 h-10 text-accent animate-spin-slow flex-shrink-0" />
                <div>
                  <p className="font-bold text-sm">Robotic Italian Lonati Machinery</p>
                  <p className="text-xs text-slate-200">Equipped with 144N, 168N, and 200N automated gauge capabilities.</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Key Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-accent font-display mb-2 block">
                Technical Mastery
              </span>
              <h2 className="text-3xl font-extrabold font-display text-primary dark:text-white mb-6">
                Why Choose Unitex Socks?
              </h2>
              
              <div className="space-y-6">
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-primary/5 dark:bg-slate-800 text-primary dark:text-accent mt-1">
                    <GiCottonFlower className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary dark:text-white font-display text-base">Premium Material Selection</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed">
                      We source premium long-staple combed cotton, organic cotton, bamboo, merino wool, and branded synthetic fibers like Coolmax and Lycra to guarantee stretch retention and comfort.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-primary/5 dark:bg-slate-800 text-primary dark:text-accent mt-1">
                    <FiGlobe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary dark:text-white font-display text-base">Global Logistics & Compliance</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed">
                      With experience shipping to 25+ countries, our logistics desk manages custom clearing, documentation, packaging standards, and bulk palletization for seamless delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-primary/5 dark:bg-slate-800 text-primary dark:text-accent mt-1">
                    <FiClock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary dark:text-white font-display text-base">Reliable Lead Times</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed">
                      Operating multiple automated production lines allows us to maintain consistent lead times, dispatching samples within 7-10 days and completing bulk runs within 30-45 days.
                    </p>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>

        </div>
      </section>

    </div>
  );
}
