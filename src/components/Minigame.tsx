import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Smile, Zap } from 'lucide-react';

export default function Minigame() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [target, setTarget] = useState({ x: 50, y: 50 });
  const [highScore, setHighScore] = useState(0);

  const spawnTarget = useCallback(() => {
    setTarget({
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
    });
  }, []);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(15);
    spawnTarget();
  };

  const handleTargetClick = () => {
    if (!isPlaying) return;
    setScore(s => s + 1);
    spawnTarget();
  };

  useEffect(() => {
    let timer: any;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
      if (score > highScore) setHighScore(score);
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft, score, highScore]);

  return (
    <section className="py-32 px-10 bg-[#1a0033] border-t-8 border-pink-500">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-black tracking-tighter text-white mb-2 uppercase italic">SNOOT BOOPER 3000</h2>
          <p className="text-yellow-400 text-xl font-bold">BOOP THE SNOOT FOR MAXIMUM UWUS!</p>
        </div>

        <div className="relative aspect-video bg-pink-900/20 border-8 border-yellow-400 rounded-[50px] overflow-hidden cursor-crosshair shadow-[0_0_50px_rgba(255,255,0,0.3)]">
          {!isPlaying ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-purple-900/80 backdrop-blur-md z-20">
              {timeLeft === 0 && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center mb-8"
                >
                  <p className="text-yellow-400 font-black text-2xl mb-2">GAME OVER! *sad whimpering*</p>
                  <p className="text-8xl font-black text-white">{score}</p>
                  <p className="text-pink-400 text-xl font-bold mt-2">BOOPS COLLECTED!</p>
                </motion.div>
              )}
              
              <button 
                onClick={startGame}
                className="group flex items-center gap-4 px-12 py-6 bg-yellow-400 text-black text-2xl font-black uppercase rounded-full hover:scale-110 hover:bg-white transition-all shadow-2xl"
              >
                <Smile size={32} />
                {timeLeft === 0 ? 'BOOP AGAIN!' : 'START BOOPING!'}
              </button>

              {highScore > 0 && (
                <div className="mt-8 flex items-center gap-2 text-pink-300 font-black text-xl italic">
                  <Star className="text-yellow-400" size={24} />
                  BEST BOOPER: {highScore}
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="absolute top-8 left-8 flex flex-col">
                <span className="text-sm text-yellow-400 font-black uppercase">BOOP COUNT</span>
                <span className="text-5xl font-black text-white">{score}</span>
              </div>
              <div className="absolute top-8 right-8 flex flex-col items-end">
                <span className="text-sm text-yellow-400 font-black uppercase">TIME LEFT</span>
                <span className={`text-5xl font-black ${timeLeft < 5 ? 'text-red-500 animate-ping' : 'text-white'}`}>
                  {timeLeft}s
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.button
                  key={`${target.x}-${target.y}`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  onClick={handleTargetClick}
                  className="absolute w-24 h-24 -ml-12 -mt-12 flex items-center justify-center"
                  style={{ left: `${target.x}%`, top: `${target.y}%` }}
                >
                  <div className="absolute inset-0 bg-pink-500 rounded-full animate-ping opacity-50" />
                  <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_white]">
                    <span className="text-4xl">🐶</span>
                  </div>
                </motion.button>
              </AnimatePresence>
            </>
          )}

          <div className="absolute inset-0 pointer-events-none opacity-20">
             {[...Array(50)].map((_, i) => (
               <div key={i} className="absolute text-white" style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%` }}>✨</div>
             ))}
          </div>
        </div>
        
        <div className="mt-8 flex justify-between items-center text-xl font-black italic text-pink-500">
          <span>STATUS: SUPER HAPPY!</span>
          <span>TAIL WAG SPEED: MAX</span>
          <span>USER: BEST_FURRY_FRIEND</span>
        </div>
      </div>
    </section>
  );
}