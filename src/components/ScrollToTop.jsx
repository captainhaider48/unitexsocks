import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FiArrowUp } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-accent hover:bg-accent-light text-primary-dark dark:text-primary shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-400/50 flex items-center justify-center cursor-pointer"
          aria-label="Back to Top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowUp className="w-5 h-5 font-bold" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
