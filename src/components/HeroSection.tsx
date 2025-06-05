
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
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-teal-400 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-blue-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-green-400 rounded-lg rotate-12 animate-pulse delay-1000"></div>
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
          Hey, I'm{' '}
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Alex
          </span>
          .
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-300 min-h-[3rem]">
          {typedText}
          <span className="animate-pulse">|</span>
        </p>

        <button
          onClick={scrollToNext}
          className="group bg-gradient-to-r from-teal-500 to-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20"
        >
          Enter My World
          <ArrowDown className="inline ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
