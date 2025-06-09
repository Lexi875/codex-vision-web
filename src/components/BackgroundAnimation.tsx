
import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Minimal floating particles */}
      <div className="bg-particles">
        <div className="particle" style={{ left: '10%', top: '20%' }}></div>
        <div className="particle" style={{ left: '30%', top: '60%' }}></div>
        <div className="particle" style={{ left: '60%', top: '30%' }}></div>
        <div className="particle" style={{ left: '80%', top: '70%' }}></div>
        
        {/* Fewer smaller particles */}
        <div className="particle-small" style={{ left: '25%', top: '40%' }}></div>
        <div className="particle-small" style={{ left: '70%', top: '50%' }}></div>
      </div>

      {/* Simple geometric shapes without excessive animation */}
      <div className="absolute top-20 left-20 w-24 h-24 border border-purple-400/20 rounded-lg"></div>
      <div className="absolute bottom-32 right-32 w-20 h-20 border border-blue-400/20 rounded-full"></div>
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-violet-500/8 to-pink-500/8 rounded-full blur-3xl"></div>
    </div>
  );
};

export default BackgroundAnimation;
