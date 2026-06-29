import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ value, suffix = '', duration = 1500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value, 10);
    if (isNaN(end)) {
      setCount(value);
      return;
    }
    if (start === end) return;

    let totalMiliseconds = duration;
    let incrementTime = Math.abs(Math.floor(totalMiliseconds / end));
    if (incrementTime < 8) incrementTime = 8;

    const step = Math.max(1, Math.floor(end / (totalMiliseconds / incrementTime)));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const statsList = [
    { label: 'Years Experience', value: '10', suffix: '+' },
    { label: 'Global Customers', value: '500', suffix: '+' },
    { label: 'Export Countries', value: '25', suffix: '+' },
    { label: 'Pairs Produced Monthly', value: '1', suffix: 'M+' },
  ];

  return (
    <section className="py-16 bg-bglight dark:bg-bgdark border-y border-slate-200/50 dark:border-slate-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsList.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 rounded-3xl glass shadow-lg hover:shadow-xl dark:shadow-slate-900/50 text-center transition-all duration-300 group hover:-translate-y-1"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary dark:text-accent font-display mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <div className="w-10 h-1 bg-accent/80 mx-auto my-3 rounded-full group-hover:w-16 transition-all duration-300" />
              <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest font-sans">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
