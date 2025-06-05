
import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Floating particles */}
      <div className="bg-particles">
        <div className="particle" style={{ left: '10%', animationDelay: '0s' }}></div>
        <div className="particle" style={{ left: '20%', animationDelay: '-2s' }}></div>
        <div className="particle" style={{ left: '30%', animationDelay: '-4s' }}></div>
        <div className="particle" style={{ left: '40%', animationDelay: '-6s' }}></div>
        <div className="particle" style={{ left: '50%', animationDelay: '-8s' }}></div>
        <div className="particle" style={{ left: '60%', animationDelay: '-10s' }}></div>
        <div className="particle" style={{ left: '70%', animationDelay: '-12s' }}></div>
        <div className="particle" style={{ left: '80%', animationDelay: '-14s' }}></div>
        <div className="particle" style={{ left: '90%', animationDelay: '-16s' }}></div>
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-teal-400/20 rounded-lg animate-rotate-slow"></div>
      <div className="absolute bottom-32 right-32 w-24 h-24 border border-blue-400/20 rounded-full animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 border border-green-400/20 rounded-lg rotate-12 animate-float"></div>
      <div className="absolute top-1/3 right-20 w-20 h-20 border border-purple-400/20 rounded-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

export default BackgroundAnimation;
