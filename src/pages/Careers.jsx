// import React, { useState, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   FiBriefcase, FiDollarSign, FiClock, FiPlusCircle, FiFileText, FiCheckCircle 
// } from 'react-icons/fi';
// import { FaGraduationCap, FaHeartbeat } from 'react-icons/fa';

// const jobOpenings = [
//   {
//     id: 'textile-eng',
//     title: 'Senior Textile Engineer',
//     department: 'Production & Knitting Wing',
//     location: 'Factory HQ (On-site)',
//     type: 'Full-Time',
//     experience: '5+ Years',
//     desc: 'Supervise daily Italian Lonati machine logs, resolve yarn tension discrepancies, and improve overall needle output efficiency.'
//   },
//   {
//     id: 'qa-inspector',
//     title: 'Senior Quality Assurance Inspector',
//     department: 'QC Audit Division',
//     location: 'Factory HQ (On-site)',
//     type: 'Full-Time',
//     experience: '3+ Years',
//     desc: 'Develop auditing routines for stitch measurements, stretch retention, boarding shrinkage, and final tag compliance.'
//   },
//   {
//     id: 'cad-designer',
//     title: 'CAD & Graphic Textile Designer',
//     department: 'Product Design Lab',
//     location: 'Head Office (Hybrid)',
//     type: 'Full-Time',
//     experience: '2+ Years',
//     desc: 'Collaborate with international client boards to draft custom sock patterns and convert artworks to digital knitting maps.'
//   }
// ];

// const benefits = [
//   {
//     title: 'Premium Healthcare',
//     icon: FaHeartbeat,
//     desc: 'Full medical coverage, hospital insurance policies, and annual health checkups for all floor and office staff.'
//   },
//   {
//     title: 'Skill Training & Courses',
//     icon: FaGraduationCap,
//     desc: 'Fully paid manufacturer courses on Lonati machine repairs, CAD programming, and sustainability audits.'
//   },
//   {
//     title: 'Competitive Compensation',
//     icon: FiDollarSign,
//     desc: 'Living wage standards, biannual performance bonuses, provident funds, and paid overtime rates.'
//   },
//   {
//     title: 'Balanced Work Schedules',
//     icon: FiClock,
//     desc: '8-hour shifts, standard calendar holidays, paid sick leaves, and annual vacation packages.'
//   }
// ];

// export default function Careers() {
//   const formRef = useRef(null);
//   const [selectedRole, setSelectedRole] = useState('');
//   const [fileName, setFileName] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setFileName(e.target.files[0].name);
//     }
//   };

//   const handleApplyClick = (roleTitle) => {
//     setSelectedRole(roleTitle);
//     formRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSuccess(true);
//       setFileName('');
//       e.target.reset();
//       setTimeout(() => setSuccess(false), 5000);
//     }, 1800);
//   };

//   return (
//     <div className="pt-20 font-sans bg-bglight dark:bg-bgdark transition-colors duration-300">
      
//       {/* Banner Header */}
//       <section className="relative py-24 bg-primary dark:bg-primary-dark overflow-hidden">
//         <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('/assets/images/hero.jpg')` }} />
//         <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary dark:from-primary-dark/80 dark:to-primary-dark" />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <span className="text-xs font-bold uppercase tracking-widest text-accent font-display mb-2 block">
//               Join the team
//             </span>
//             <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-tight">
//               Careers at Unitex
//             </h1>
//             <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
//               Build a career in advanced textile engineering, ethical production, and global brand sourcing coordination.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Why Work With Us Section */}
//       <section className="py-20 bg-white dark:bg-bgdark">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <span className="text-xs font-bold uppercase tracking-widest text-accent font-display mb-2 block">
//                 Company Culture
//               </span>
//               <h2 className="text-3xl font-extrabold font-display text-primary dark:text-white mb-6">
//                 Why Work With Us?
//               </h2>
//               <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
//                 At Unitex Socks, we believe that an empowered worker designs a better product. We foster a collaborative, safe, and progressive working environment where machine technicians, design specialists, and logisticians operate as a cohesive team.
//               </p>
//               <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
//                 By investing in computerized automation and green manufacturing, we equip our employees with future-proof skills. Joining Unitex means stepping into a business model that values human dignity, sustainable fabrication, and technical excellence.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="grid grid-cols-1 sm:grid-cols-2 gap-6"
//             >
//               {benefits.map((b, idx) => {
//                 const Icon = b.icon;
//                 return (
//                   <div key={idx} className="p-6 bg-slate-50 dark:bg-bgdark-card border border-slate-100 dark:border-slate-800 rounded-3xl">
//                     <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-4">
//                       <Icon className="w-5 h-5" />
//                     </div>
//                     <h4 className="font-bold text-sm text-primary dark:text-white font-display mb-1">{b.title}</h4>
//                     <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">{b.desc}</p>
//                   </div>
//                 );
//               })}
//             </motion.div>
//           </div>

//         </div>
//       </section>

//       {/* Current Job Openings */}
//       <section className="py-20 bg-slate-50 dark:bg-bgdark/30 border-y border-slate-200/50 dark:border-slate-800/40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <span className="text-xs font-bold uppercase tracking-widest text-accent font-display mb-2 block">
//               Opportunities
//             </span>
//             <h2 className="text-3xl font-extrabold text-primary dark:text-white font-display">
//               Current Openings
//             </h2>
//             <p className="text-slate-500 dark:text-slate-400 text-sm mt-3">
//               Explore open positions across our design labs, quality wings, and production facilities.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {jobOpenings.map((job) => (
//               <motion.div
//                 key={job.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="bg-white dark:bg-bgdark-card border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-sm flex flex-col justify-between"
//               >
//                 <div>
//                   <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full inline-block mb-4">
//                     {job.department}
//                   </span>
//                   <h3 className="text-lg font-bold font-display text-primary dark:text-white mb-2">{job.title}</h3>
//                   <div className="flex items-center space-x-4 text-xs text-slate-400 font-semibold mb-4">
//                     <span>{job.location}</span>
//                     <span>•</span>
//                     <span>{job.type}</span>
//                   </div>
//                   <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-6">
//                     {job.desc}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => handleApplyClick(job.title)}
//                   className="w-full text-center py-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-accent text-slate-700 dark:text-slate-300 hover:text-accent font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
//                 >
//                   Apply Now
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Interactive Application Form */}
//       <section ref={formRef} className="py-20 bg-white dark:bg-bgdark">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-slate-50 dark:bg-bgdark-card border border-slate-100 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl">
//             <h3 className="text-xl font-bold font-display text-primary dark:text-white mb-2">
//               Submit Your Application
//             </h3>
//             <p className="text-slate-500 dark:text-slate-400 text-xs mb-8">
//               Fill in your details, select your target role, and upload your PDF CV/Resume for review.
//             </p>

//             <AnimatePresence>
//               {success && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/30 text-emerald-800 dark:text-emerald-300 flex items-start space-x-3 text-sm"
//                 >
//                   <FiCheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
//                   <div>
//                     <p className="font-bold">Application Received!</p>
//                     <p className="mt-0.5 text-xs">Our HR department will review your credentials and contact you within 5-7 business days if your profile matches our requirements.</p>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Full Name *</label>
//                   <input
//                     type="text"
//                     required
//                     className="w-full px-4 py-3 rounded-xl bg-white dark:bg-bgdark border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-accent"
//                     placeholder="Jane Doe"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Email Address *</label>
//                   <input
//                     type="email"
//                     required
//                     className="w-full px-4 py-3 rounded-xl bg-white dark:bg-bgdark border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-accent"
//                     placeholder="jane@example.com"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Position of Interest *</label>
//                   <select
//                     required
//                     value={selectedRole}
//                     onChange={(e) => setSelectedRole(e.target.value)}
//                     className="w-full px-4 py-3 rounded-xl bg-white dark:bg-bgdark border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-accent"
//                   >
//                     <option value="" disabled>Select Position</option>
//                     <option value="Senior Textile Engineer">Senior Textile Engineer</option>
//                     <option value="Senior Quality Assurance Inspector">Senior Quality Assurance Inspector</option>
//                     <option value="CAD & Graphic Textile Designer">CAD & Graphic Textile Designer</option>
//                     <option value="Internship / Training Program">Internship / Training Program</option>
//                     <option value="Other / General Application">Other / General Application</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Upload Resume (PDF only) *</label>
//                   <div className="relative">
//                     <input
//                       type="file"
//                       accept=".pdf"
//                       required
//                       onChange={handleFileChange}
//                       className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
//                     />
//                     <div className="w-full px-4 py-3 rounded-xl bg-white dark:bg-bgdark border border-slate-200 dark:border-slate-700 text-slate-400 text-sm flex items-center justify-between">
//                       <span className="truncate max-w-[180px]">{fileName || 'Choose PDF File'}</span>
//                       <FiFileText className="w-4 h-4 text-slate-400 flex-shrink-0" />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Professional Summary & Cover Note *</label>
//                 <textarea
//                   required
//                   rows="4"
//                   className="w-full px-4 py-3 rounded-xl bg-white dark:bg-bgdark border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-accent"
//                   placeholder="Introduce yourself, list key achievements, and explain why you want to join the Unitex team..."
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full py-4 rounded-xl bg-accent hover:bg-accent-light text-primary font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
//               >
//                 {isSubmitting ? 'Submitting Application...' : 'Send Application'}
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }
