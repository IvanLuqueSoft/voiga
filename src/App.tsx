import React from 'react';
import Hero from './components/Hero';
import ArtGrid from './components/ArtGrid';
import Stats from './components/Stats';
import Marquee from './components/Marquee';
import StickerWall from './components/StickerWall';
import Minigame from './components/Minigame';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a0033] text-pink-200 overflow-x-hidden selection:bg-yellow-400 selection:text-black">
      <div className="fixed inset-0 pointer-events-none z-50 border-[4px] border-dashed border-pink-500/30 animate-pulse" />
      
      <nav className="fixed top-0 left-0 w-full p-6 z-40 flex justify-between items-center bg-black/40 backdrop-blur-md">
        <div className="text-2xl font-black tracking-tighter text-yellow-400 italic">VOIGA'S DEN XD</div>
        <div className="flex gap-6 font-bold uppercase text-[12px] tracking-widest text-pink-400">
          <a href="#" className="hover:text-white hover:scale-110 transition-all">My Fursona</a>
          <a href="#" className="hover:text-white hover:scale-110 transition-all">Comms Open!</a>
          <a href="#" className="hover:text-white hover:scale-110 transition-all">Boop Me</a>
        </div>
      </nav>

      <main>
        <Hero />
        <Marquee text="UWU OWO RAWR XD *nuzzles your wuzzles* PAWSOME ART AHEAD • BEANS! • " />
        <ArtGrid />
        <Stats />
        <StickerWall />
        <Minigame />
      </main>

      <footer className="py-20 px-10 bg-pink-600 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-8xl font-black mb-4 animate-bounce">VOIGA!!!1!</h2>
          <p className="text-xl font-bold mb-8 italic">*tail wags aggressively*</p>
          <div className="flex justify-center gap-4 text-xs font-mono">
            <span>MADE WITH LUV AND PAWS</span>
            <span>•</span>
            <span>© 2024 FURRY 4 LYFE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}