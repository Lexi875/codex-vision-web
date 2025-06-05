
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

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
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden">
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
          Hey, I'm{' '}
          <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-gradient">
            Alex
          </span>
          .
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-300 min-h-[3rem]">
          {typedText}
          <span className="animate-pulse text-teal-400">|</span>
        </p>

        <button
          onClick={scrollToNext}
          className="group bg-gradient-to-r from-teal-500 via-blue-600 to-green-500 px-8 py-4 rounded-lg font-semibold text-lg hover:from-teal-600 hover:via-blue-700 hover:to-green-600 transition-all duration-300 transform hover:scale-105 glow-teal animate-gradient"
        >
          Enter My World
          <ArrowDown className="inline ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-teal-400/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full mt-2 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
