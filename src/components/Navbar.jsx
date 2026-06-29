import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'Governance', path: '/governance' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-wider font-display text-primary dark:text-white flex items-center">
              UNITEX<span className="text-accent">SOCKS</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-all hover:text-accent font-display ${
                    isActive
                      ? 'text-accent dark:text-accent border-b-2 border-accent pb-1'
                      : 'text-slate-700 dark:text-slate-200'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Side Tools */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>

            {/* Get Quote Button */}
            <button
              onClick={() => navigate('/contact', { state: { requestQuote: true } })}
              className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-light dark:bg-accent dark:hover:bg-accent-light text-white dark:text-primary font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg border border-transparent dark:border-amber-400/20 cursor-pointer"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex items-center lg:hidden space-x-2">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>

            {/* Hamburguer Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-slate-100 dark:border-slate-800 shadow-inner mt-2 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-xl text-base font-medium transition-colors font-display ${
                      isActive
                        ? 'bg-accent/10 text-accent font-semibold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate('/contact', { state: { requestQuote: true } });
                }}
                className="w-full text-center py-3 rounded-xl bg-primary hover:bg-primary-light dark:bg-accent dark:hover:bg-accent-light text-white dark:text-primary font-medium transition-all shadow-md mt-4 block cursor-pointer"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
