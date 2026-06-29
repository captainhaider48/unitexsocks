import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPaperPlane } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary dark:bg-primary-dark text-slate-300 font-sans border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Bio */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-5">
              <span className="text-2xl font-bold tracking-wider font-display text-white">
                UNITEX<span className="text-accent">SOCKS</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Leading global manufacturer and exporter of premium custom, sports, casual, and compression socks. Standardized manufacturing satisfying worldwide top-tier brands.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-800 hover:bg-accent hover:text-primary transition-all duration-300" aria-label="Facebook">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-800 hover:bg-accent hover:text-primary transition-all duration-300" aria-label="Twitter">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-800 hover:bg-accent hover:text-primary transition-all duration-300" aria-label="LinkedIn">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-800 hover:bg-accent hover:text-primary transition-all duration-300" aria-label="Instagram">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold uppercase tracking-wider text-sm mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/what-we-do" className="hover:text-accent transition-colors">What We Do</Link>
              </li>
              <li>
                <Link to="/governance" className="hover:text-accent transition-colors">Governance & Ethics</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-accent transition-colors">Export Portfolio</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-accent transition-colors">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="text-white font-display font-semibold uppercase tracking-wider text-sm mb-5">Product Lines</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/what-we-do" className="hover:text-accent transition-colors">Sports & Performance Socks</Link>
              </li>
              <li>
                <Link to="/what-we-do" className="hover:text-accent transition-colors">Graduated Compression Socks</Link>
              </li>
              <li>
                <Link to="/what-we-do" className="hover:text-accent transition-colors">Formal & Casual Collections</Link>
              </li>
              <li>
                <Link to="/what-we-do" className="hover:text-accent transition-colors">OEM & Private Label Services</Link>
              </li>
              <li>
                <Link to="/what-we-do" className="hover:text-accent transition-colors">Custom Socks & Bulk Orders</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-white font-display font-semibold uppercase tracking-wider text-sm mb-5">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Subscribe to stay updated on our export updates, new catalog launches, and industry trends.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 p-2 rounded-lg bg-accent text-primary hover:bg-accent-light transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <FaPaperPlane className="w-3.5 h-3.5" />
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-emerald-400 mt-2">Thank you! You have subscribed successfully.</p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p className="mb-4 md:mb-0">&copy; {currentYear} Unitex Socks. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-accent transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
