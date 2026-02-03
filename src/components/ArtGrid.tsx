import React from 'react';
import { motion } from 'framer-motion';

const ART_CARDS = [
  { color: 'bg-pink-500', title: 'My Fursona v1', category: 'Super Cute' },
  { color: 'bg-purple-500', title: 'Sparkle Doggo', category: 'Neon' },
  { color: 'bg-yellow-500', title: 'Paw Beans Zoom', category: 'Macro' },
  { color: 'bg-green-500', title: 'Wolfie Rawr', category: 'Edgy' },
  { color: 'bg-blue-500', title: 'Tail Wag 9000', category: 'Animation' },
  { color: 'bg-orange-500', title: 'Nuzzle Time', category: 'Wholesome' },
];

export default function ArtGrid() {
  return (
    <section className="py-32 px-10 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-6xl font-black tracking-tighter text-white mb-4 uppercase italic">
          🐾 MY PAWSOME ARTZ 🐾
        </h2>
        <p className="text-pink-400 text-xl">Look at all these fluffies! *wags tail*</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ART_CARDS.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
            className="bg-white/5 p-4 rounded-3xl border-4 border-pink-500/20 hover:border-yellow-400 transition-all cursor-pointer"
          >
            <div className={`${card.color} aspect-square rounded-2xl relative overflow-hidden shadow-2xl`}>
              <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                {['🐺', '🦊', '🐱', '🦁', '🐯', '🐼'][i]}
              </div>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-black text-white">{card.title}</h3>
              <span className="text-sm font-bold uppercase tracking-widest text-yellow-400">{card.category}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}