import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Sourcing Director',
    company: 'ActiveSports Group (UK)',
    content: "Unitex Socks has been our manufacturing partner for over 5 years. Their athletic socks meet all our technical specifications and our customers love the durability. Absolutely top-tier service.",
    rating: 5
  },
  {
    name: 'Dieter Weber',
    role: 'Lead Product Manager',
    company: 'UrbanRun Apparel (Germany)',
    content: "The quality of Unitex compression socks is outstanding. Their compliance with ISO standards and GOTS certification makes them the ideal sustainable manufacturing partner for the European market.",
    rating: 5
  },
  {
    name: 'Marcus Chen',
    role: 'Procurement Specialist',
    company: 'FitLifestyle (USA)',
    content: "OEM orders with Unitex are incredibly streamlined. The lead times are reliable, packaging custom branding is flawless, and customer service is responsive. Highly recommended.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-bgdark/30 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-white font-display mb-4">
            Trusted by Global Brands
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Read testimonials from procurement teams and sourcing managers who partner with us for worldwide distribution.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-16"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx} className="h-auto">
              <div className="bg-white dark:bg-bgdark-card border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-md hover:shadow-xl h-full flex flex-col justify-between transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <FaQuoteLeft className="w-8 h-8 text-accent/30" />
                    <div className="flex space-x-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 text-accent" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-8 italic">
                    "{t.content}"
                  </p>
                </div>
                <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
                  <h4 className="text-base font-bold font-display text-primary dark:text-white">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">
                    {t.role}, <span className="text-accent">{t.company}</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
