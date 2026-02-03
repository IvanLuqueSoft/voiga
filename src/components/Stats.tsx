import React from 'react';
import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { label: 'Boops Received', value: '69,420' },
    { label: 'Tail Wags', value: '9000+' },
    { label: 'Cookies Eaten', value: '1,337' },
    { label: 'UwUs Spoken', value: '∞' },
  ];

  return (
    <section className="py-32 px-10 bg-yellow-400">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center text-black">
            <motion.span 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="text-6xl font-black mb-2"
            >
              {stat.value}
            </motion.span>
            <span className="text-sm font-black uppercase tracking-widest italic">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}