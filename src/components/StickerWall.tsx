import React from 'react';
import { motion } from 'framer-motion';

const FEATURES = [
  { icon: '💖', title: 'Super Fluffy', desc: 'Maximum fluff levels achieved! *nuzzles*' },
  { icon: '🌈', title: 'Rainbow Power', desc: 'Every color of the rainbow in one doggo!' },
  { icon: '🦴', title: 'Treato Lover', desc: 'Will work for cookies and head pats!' },
  { icon: '🐾', title: 'Toe Beans', desc: 'The squishiest beans in the universe!' },
  { icon: '✨', title: 'Sparkle Fur', desc: 'I literally glow in the dark! XD' },
  { icon: '🐺', title: 'Alpha Wolf', desc: 'Rawr! I am the leader of the pack!' },
];

export default function StickerWall() {
  return (
    <section className="py-32 px-10 bg-[#2d004d]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-10 bg-pink-900/30 border-4 border-dashed border-pink-500 rounded-[40px] text-center"
            >
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h3 className="text-yellow-400 text-2xl font-black mb-4">{feature.title}</h3>
              <p className="text-pink-200 font-bold italic">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}