import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiShield, FiHeart, FiSettings, FiBriefcase, FiLock, FiCheckCircle 
} from 'react-icons/fi';
import { MdOutlineEco, MdSecurity } from 'react-icons/md';

const complianceStandards = [
  {
    code: 'ISO 9001:2015',
    name: 'Quality Management Systems',
    authority: 'International Standards Organization',
    desc: 'Ensuring consistent product quality and client communication through standardized operational processes.'
  },
  {
    code: 'ISO 14001:2015',
    name: 'Environmental Management',
    authority: 'International Standards Organization',
    desc: 'Mitigating manufacturing impacts, monitoring emissions, and minimizing resource consumption.'
  },
  {
    code: 'OEKO-TEX Standard 100',
    name: 'Harmful Substance Testing',
    authority: 'Hohenstein Institute',
    desc: 'Verifying all yarns, elastics, and dyes are completely free from heavy metals or toxic compounds.'
  },
  {
    code: 'BSCI / Amfori Compliance',
    name: 'Social Audit Standard',
    authority: 'Amfori Organization',
    desc: 'Ensuring fair wages, standard working hours, safety guards, and zero child labor across facilities.'
  },
  {
    code: 'GOTS Certification',
    name: 'Global Organic Textile Standard',
    authority: 'Textile Exchange',
    desc: 'Tracking organic cotton from certified farm sourcing directly through our knitting lines.'
  }
];

const governancePolicies = [
  {
    title: 'Business Ethics & Conduct',
    icon: FiShield,
    desc: 'We maintain strict compliance, anti-bribery policies, and transparent accounting logs. We engage in fair competition and protect intellectual properties of client brand designs.'
  },
  {
    title: 'Sustainability & Environment',
    icon: MdOutlineEco,
    desc: 'By harnessing solar grids and recycling water from our boarding lines, we aim to decrease carbon outputs. We actively source biodegradable yarns and recycle card waste.'
  },
  {
    title: 'Occupational Health & Safety',
    icon: MdSecurity,
    desc: 'Our factories are equipped with active fire-suppression networks, clean air filtration, ergonomic seating configurations, and mandatory personal protective gear for machine handlers.'
  },
  {
    title: 'Employee Welfare & Equality',
    icon: FiHeart,
    desc: 'We provide competitive living wages, standard workweek logs, healthcare support, and continuous mechanical training. Unitex supports equal opportunity hiring across all sectors.'
  },
  {
    title: 'Supplier Responsibility',
    icon: FiSettings,
    desc: 'We require all auxiliary suppliers (dyes, labels, tags, cardboard packaging boxes) to sign and adhere to our ethical, environmental, and non-toxic materials agreement.'
  }
];

export default function Governance() {
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
              Governance & compliance
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-tight">
              Corporate Responsibility
            </h1>
            <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
              We align our manufacturing facilities with international standard benchmarks, guaranteeing sustainable and ethical hosiery supply lines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ISO Compliance Standards Badges */}
      <section className="py-20 bg-white dark:bg-bgdark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-primary dark:text-white font-display">
              International Certifications
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-3">
              Unitex Socks regularly hosts certified auditing bodies to verify quality systems, carbon footprints, and workplace welfare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceStandards.map((std, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 dark:bg-bgdark-card border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-md bg-accent/20 border border-accent/30 text-accent font-bold text-xs uppercase tracking-wide mb-4 font-display">
                    {std.code}
                  </span>
                  <h3 className="text-base font-bold font-display text-primary dark:text-white mb-2">
                    {std.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-6">
                    {std.desc}
                  </p>
                </div>
                <div className="border-t border-slate-200 dark:border-slate-800 pt-4 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                  Issued By: {std.authority}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Details Cards */}
      <section className="py-20 bg-slate-50 dark:bg-bgdark/30 border-y border-slate-200/50 dark:border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-display mb-2 block">
              Ethical Pillars
            </span>
            <h2 className="text-3xl font-extrabold text-primary dark:text-white font-display">
              Corporate Governance Policies
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-3">
              We maintain transparency, accountability, and environmental respect at every node of our business model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-5xl lg:mx-auto">
            {governancePolicies.map((pol, idx) => {
              const Icon = pol.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white dark:bg-bgdark-card border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-md flex items-start space-x-6"
                >
                  <div className="p-4 rounded-2xl bg-primary/5 dark:bg-accent/10 text-primary dark:text-accent flex-shrink-0 mt-1">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-display text-primary dark:text-white mb-3">
                      {pol.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                      {pol.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainable Footprint Section */}
      <section className="py-20 bg-white dark:bg-bgdark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-accent font-display mb-2 block">
                Resource Efficiency
              </span>
              <h2 className="text-3xl font-extrabold font-display text-primary dark:text-white mb-6">
                Our Sustainable Journey
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                We believe that premium textile engineering must not come at the expense of our planet. Our factory has adopted active sustainability metrics, checking and reducing waste, chemical use, and carbon output in each product cycle.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FiCheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold text-primary dark:text-slate-200">Solar wing produces 45% of machinery electricity needs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiCheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold text-primary dark:text-slate-200">Water recycling systems reclaim 60% of boarding wash</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiCheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold text-primary dark:text-slate-200">Zero-plastic retail header cards option for brands</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800"
            >
              <img
                src="/assets/images/fashion_socks.jpg"
                alt="Solar Powered Factory Wing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-card text-white">
                <p className="text-xs uppercase tracking-wider font-bold text-accent mb-1">Eco Objective</p>
                <p className="text-sm font-semibold">
                  "Targeting 100% GOTS yarn usage option and net carbon neutrality by 2030."
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
