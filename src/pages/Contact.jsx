import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMail, FiPhone, FiMapPin, FiClock, FiPlus, FiMinus, FiShare2 
} from 'react-icons/fi';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const faqs = [
  {
    q: 'What is your Minimum Order Quantity (MOQ)?',
    a: 'Our standard MOQ is 1,000 pairs per style/color/size. For compression socks, we accommodate 2,000 pairs, and for large school uniform runs, orders typically begin at 5,000 pairs.'
  },
  {
    q: 'Can you manufacture custom logo designs?',
    a: 'Absolutely. We specialize in OEM and Private Label orders. You provide the logo or pattern files, and our CAD designers map the stitching coordinates for our Lonati machines to weave the branding directly into the fabric.'
  },
  {
    q: 'What yarns and materials are available?',
    a: 'We offer Combed Cotton, GOTS Certified Organic Cotton, Bamboo Viscose, Merino Wool, Coolmax (moisture-wicking), Nylon, and Lycra Elastane for maximum stretch and support.'
  },
  {
    q: 'What are the production lead times?',
    a: 'Design blueprint CAD drafts are prepared in 2-3 days. Prototype samples are knitted and shipped in 7-10 days. Bulk container production runs take 30-45 days depending on season load.'
  },
  {
    q: 'Do you handle customs clearance and global logistics?',
    a: 'Yes, our export division supports FOB, CIF, and DDP shipments. We prepare all packing lists, certificates of origin, bills of lading, and compliance logs to ensure smooth transit.'
  }
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

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
              Get in touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-tight">
              Contact Our Export Desk
            </h1>
            <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
              Reach out for product catalog pricing, custom OEM samples, or facility visit requests.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid Contact Area */}
      <section className="py-20 bg-white dark:bg-bgdark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Columns: Contact Details & Info */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent font-display mb-2 block">
                  Contact Information
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary dark:text-white mb-6">
                  Get in Touch Directly
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  Have immediate technical inquiries? Email or call our head office. You can also chat with us instantly on WhatsApp.
                </p>
              </div>

              {/* Contact Information List */}
              <div className="space-y-6">
                
                <div className="flex items-start space-x-4">
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-bgdark-card border border-slate-100 dark:border-slate-800 text-accent">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary dark:text-white font-display">Office & Factory Address</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed">
                      242 S, Lahore, 54000 Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-bgdark-card border border-slate-100 dark:border-slate-800 text-accent">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary dark:text-white font-display">Email Support</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                      <a href="mailto:export@unitexsocks.com" className="hover:text-accent transition-colors">export@unitexsocks.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-bgdark-card border border-slate-100 dark:border-slate-800 text-accent">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary dark:text-white font-display">Export Department Hotline</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                      <a href="tel:+923001234567" className="hover:text-accent transition-colors">+92 (335) 992-6971</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-bgdark-card border border-slate-100 dark:border-slate-800 text-accent">
                    <FiClock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary dark:text-white font-display">Business Hours</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                      Monday - Friday: 9:00 AM - 6:00 PM (GMT +5)
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Share grid */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all cursor-pointer">
                    <FaWhatsapp className="w-4 h-4" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all cursor-pointer">
                    <FaFacebook className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all cursor-pointer">
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-all cursor-pointer">
                    <FaTwitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Columns: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Google Map Placeholder */}
      <section className="w-full bg-slate-50 dark:bg-bgdark/30 border-y border-slate-200/50 dark:border-slate-800/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800/80 h-96 relative">
            <iframe
              title="Unitex Socks Head Office Map"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2859.1067224906!2d74.3279161451071!3d31.441350657606396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907a51cc93337%3A0xa5957a40550800c1!2sUNITEX%20(%20Socks%20Company%20)!5e0!3m2!1sen!2s!4v1782730821167!5m2!1sen!2s" 
              //  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115813.91638210352!2d67.06813134999999!3d24.89299445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339ef3d2c8883%3A0xa196b1d99cd19f!2sKorangi%20Industrial%20Area%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2spk!4v1690000000000!5m2!1sen!2spk"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-white dark:bg-bgdark font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-display mb-2 block">
              Questions
            </span>
            <h2 className="text-3xl font-extrabold text-primary dark:text-white font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-3">
              Review answers to common inquiries regarding export terms, production volumes, and sizing catalogs.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-slate-50 dark:bg-bgdark-card rounded-2xl border border-slate-100 dark:border-slate-800/80 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                  >
                    <h3 className="font-bold text-primary dark:text-white font-display text-sm sm:text-base pr-4">
                      {faq.q}
                    </h3>
                    <div className="text-accent flex-shrink-0">
                      {isOpen ? <FiMinus className="w-5 h-5" /> : <FiPlus className="w-5 h-5" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-0 border-t border-slate-200/50 dark:border-slate-800/30 text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
