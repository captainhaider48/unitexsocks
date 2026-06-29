import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

export default function ContactForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace with actual EmailJS keys if configured
    const serviceId = 'YOUR_EMAILJS_SERVICE_ID';
    const templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
    const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY';

    if (serviceId === 'YOUR_EMAILJS_SERVICE_ID' || !publicKey) {
      // Simulation for mock/local execution
      setTimeout(() => {
        setLoading(false);
        setStatus('success');
        formRef.current.reset();
      }, 1500);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setLoading(false);
        setStatus('success');
        formRef.current.reset();
      }, (error) => {
        setLoading(false);
        setStatus('error');
        console.error(error.text);
      });
  };

  return (
    <div className="bg-white dark:bg-bgdark-card border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-xl font-sans">
      <h3 className="text-xl font-bold font-display text-primary dark:text-white mb-6">
        Request a Manufacturing Quote
      </h3>

      {status === 'success' && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/30 text-emerald-800 dark:text-emerald-300 flex items-start space-x-3 text-sm">
          <FiCheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-bold">Inquiry Sent Successfully!</p>
            <p className="mt-0.5">Our export desk will review your specifications and contact you within 24 hours.</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/30 text-rose-800 dark:text-rose-300 flex items-start space-x-3 text-sm">
          <FiAlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-bold">Submission Failed</p>
            <p className="mt-0.5">Something went wrong. Please check your network or email us directly at export@unitexsocks.com.</p>
          </div>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Full Name *</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-accent"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Company Name</label>
            <input
              type="text"
              name="company_name"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-accent"
              placeholder="Brand Name Ltd"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Business Email *</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-accent"
              placeholder="john@company.com"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Phone / WhatsApp *</label>
            <input
              type="tel"
              name="user_phone"
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-accent"
              placeholder="+1 (123) 456-7890"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Product Category *</label>
            <select
              name="product_category"
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-accent"
            >
              <option value="Sports Socks">Sports & Athletic Socks</option>
              <option value="Compression Socks">Compression Socks</option>
              <option value="Formal Socks">Formal & Dress Socks</option>
              <option value="Casual Socks">Casual & Lifestyle Socks</option>
              <option value="School Socks">School & Uniform Socks</option>
              <option value="OEM / Private Label">OEM & Private Label Services</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Estimated Quantity (Pairs) *</label>
            <select
              name="target_quantity"
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-accent"
            >
              <option value="3000-5000">3,000 - 5,000 pairs</option>
              <option value="5000-10000">5,000 - 10,000 pairs</option>
              <option value="10000-50000">10,000 - 50,000 pairs</option>
              <option value="50000+">50,000+ pairs (High Volume)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Specifications & Requirements *</label>
          <textarea
            name="message"
            required
            rows="4"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-accent"
            placeholder="Please detail your custom logo designs, yarn materials (e.g. Organic Cotton, Coolmax), packaging preferences, and shipping target port..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-xl bg-accent hover:bg-accent-light text-primary font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 cursor-pointer"
        >
          {loading ? (
            <span>Processing...</span>
          ) : (
            <>
              <span>Submit Request</span>
              <FiSend className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
