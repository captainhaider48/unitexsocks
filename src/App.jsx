import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const WhatWeDo = React.lazy(() => import('./pages/WhatWeDo'));
const Governance = React.lazy(() => import('./pages/Governance'));
const PortfolioPage = React.lazy(() => import('./pages/PortfolioPage'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Contact = React.lazy(() => import('./pages/Contact'));
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';

// Page Loader Component
function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 bg-primary dark:bg-bgdark flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="relative flex flex-col items-center">
        <div className="w-14 h-14 border-4 border-accent border-t-transparent rounded-full animate-spin" />
        <span className="mt-4 text-white text-xs font-bold tracking-widest font-display animate-pulse uppercase">
          Unitex Socks
        </span>
      </div>
    </motion.div>
  );
}

// AppContent handles route tracking, scroll bar logic, and animations
function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Loading animation triggers on every route transition
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Update top scroll indicator width
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden bg-bglight dark:bg-bgdark transition-colors duration-300">
      {/* Top Scroll Indicator */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Global Page Transition Loader */}
      <AnimatePresence mode="wait">
        {loading && <PageLoader />}
      </AnimatePresence>

      {/* Sticky Global Navigation */}
      <Navbar />

      {/* Main Pages routes mapping */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <React.Suspense fallback={<PageLoader />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/what-we-do" element={<WhatWeDo />} />
                <Route path="/governance" element={<Governance />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </React.Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Brand Footer */}
      <Footer />

      {/* Scroll and Support Utilities */}
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}
