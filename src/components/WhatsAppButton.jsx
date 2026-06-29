import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppButton() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start font-sans">
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, x: -25, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -25, scale: 0.85 }}
            className="mb-3 p-4 rounded-2xl bg-white dark:bg-bgdark-card shadow-2xl border border-gray-100 dark:border-slate-800 max-w-xs text-sm relative"
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xs cursor-pointer"
            >
              ✕
            </button>
            <p className="font-semibold text-primary dark:text-accent mb-1">Unitex Export Desk</p>
            <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
              Hello! Let us know if you need assistance with custom OEM orders or export pricing.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href="https://wa.me/1234567890?text=Hi%20Unitex%20Socks,%20I'm%20interested%20in%20a%20manufacturing%20quote."
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl hover:shadow-2xl flex items-center justify-center cursor-pointer border border-emerald-400/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
