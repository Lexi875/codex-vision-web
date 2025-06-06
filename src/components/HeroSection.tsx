
import React, { useState, useEffect } from 'react';
import { ArrowDown, Code2 } from 'lucide-react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "I build cool things with AI, software, and robotics.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        {/* Floating code icon */}
        <div className="absolute -top-20 -left-20 text-purple-400/20 animate-float">
          <Code2 size={120} />
        </div>
        <div className="absolute -top-10 -right-16 text-blue-400/20 animate-bounce-gentle">
          <Code2 size={80} />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-jump-in">
          Hey, I'm{' '}
          <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-purple-600 bg-clip-text text-transparent animate-pulse-glow">
            Alex
          </span>
          .
        </h1>
        
        <div className="glass-card p-8 mb-12 animate-flip-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-2xl md:text-3xl text-zinc-300 min-h-[4rem]">
            {typedText}
            <span className="animate-pulse text-purple-400 text-4xl">|</span>
          </p>
        </div>

        <button
          onClick={scrollToNext}
          className="group glass-card px-10 py-5 rounded-xl font-bold text-xl hover:scale-110 transition-all duration-300 transform animate-float text-purple-400 hover:text-white border-purple-400/30 hover:border-purple-400/60"
          style={{ animationDelay: '0.6s' }}
        >
          Enter My World
          <ArrowDown className="inline ml-3 w-6 h-6 group-hover:translate-y-2 transition-transform animate-bounce-gentle" />
        </button>
      </div>

      {/* Enhanced floating scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-12 border-2 border-purple-400/60 rounded-full flex justify-center glass-card">
          <div className="w-1 h-4 bg-gradient-to-b from-purple-400 to-violet-500 rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
