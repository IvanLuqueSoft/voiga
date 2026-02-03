import React from 'react';
import { motion } from 'framer-motion';

export default function Marquee({ text }: { text: string }) {
  return (
    <div className="bg-pink-500 py-8 overflow-hidden whitespace-nowrap border-y-8 border-yellow-400">
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="inline-block"
      >
        {[...Array(20)].map((_, i) => (
          <span key={i} className="text-2xl font-black text-white uppercase tracking-widest mx-10 italic">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}