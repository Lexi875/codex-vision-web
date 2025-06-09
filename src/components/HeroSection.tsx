
import React, { useState, useEffect } from 'react';
import { ArrowDown, Code2 } from 'lucide-react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Will AI, Robotics, and Software save humanity... or destroy it?";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 px-4 max-w-5xl mx-auto">
        <div className="absolute -top-20 -left-20 text-purple-400/10">
          <Code2 size={120} />
        </div>
        <div className="absolute -top-10 -right-16 text-blue-400/10">
          <Code2 size={80} />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-8">
          The Digital{' '}
          <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-purple-600 bg-clip-text text-transparent">
            Revolution
          </span>
        </h1>
        
        <div className="backdrop-blur-md bg-gray-900/80 border border-purple-400/20 p-8 mb-12 rounded-xl">
          <p className="text-2xl md:text-3xl text-zinc-300 min-h-[4rem]">
            {typedText}
            <span className="animate-pulse text-purple-400 text-4xl">|</span>
          </p>
        </div>

        <div className="backdrop-blur-md bg-gray-900/60 border border-purple-400/30 p-6 mb-8 rounded-xl">
          <p className="text-xl text-zinc-300 italic">
            "In every great revolution, there comes a moment when humanity must choose its destiny."
          </p>
        </div>

        <button
          onClick={scrollToNext}
          className="group backdrop-blur-md bg-gray-900/80 border border-purple-400/30 hover:border-purple-400/60 px-10 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-all duration-300 text-purple-400 hover:text-white"
        >
          Discover the Truth
          <ArrowDown className="inline ml-3 w-6 h-6 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-12 border-2 border-purple-400/60 rounded-full flex justify-center backdrop-blur-md bg-gray-900/50">
          <div className="w-1 h-4 bg-gradient-to-b from-purple-400 to-violet-500 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
