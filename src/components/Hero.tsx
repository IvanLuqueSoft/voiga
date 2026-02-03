import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0033] via-[#4d004d] to-[#1a0033]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative z-10 text-center"
      >
        <span className="text-yellow-400 font-black text-xl tracking-[0.3em] uppercase mb-4 block animate-bounce">
          ✨ WELCOME TO THE DEN ✨
        </span>
        <h1 className="text-[15vw] leading-none font-black tracking-tighter text-white uppercase drop-shadow-[0_0_30px_rgba(255,0,255,0.8)]">
          VOIGA
        </h1>
        <p className="text-pink-300 text-xl md:text-2xl font-bold italic mt-6 max-w-2xl mx-auto leading-relaxed">
          *nuzzles* I make the fluffiest, most pawsome digital art in the whole wide world! RAWR XD
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-black text-lg hover:scale-125 transition-transform shadow-xl">
            GIVE COOKIE!
          </button>
          <button className="bg-pink-500 text-white px-8 py-4 rounded-full font-black text-lg hover:scale-125 transition-transform shadow-xl">
            VIEW FURSONA
          </button>
        </div>
      </motion.div>

      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -1000],
              x: Math.random() * 100 - 50,
              rotate: 360
            }}
            transition={{ duration: Math.random() * 10 + 5, repeat: Infinity, ease: "linear" }}
            className="absolute text-4xl"
            style={{ left: `${Math.random() * 100}%`, bottom: -50 }}
          >
            {['🐾', '🦴', '✨', '💖', '🌈'][i % 5]}
          </motion.div>
        ))}
      </div>
    </section>
  );
}