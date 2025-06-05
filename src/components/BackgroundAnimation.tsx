
import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Animated grid pattern with floating effect */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      {/* Floating particles with enhanced movement */}
      <div className="bg-particles">
        <div className="particle animate-float" style={{ left: '10%', top: '20%', animationDelay: '0s' }}></div>
        <div className="particle animate-bounce-gentle" style={{ left: '20%', top: '60%', animationDelay: '-2s' }}></div>
        <div className="particle animate-float-alt" style={{ left: '30%', top: '40%', animationDelay: '-4s' }}></div>
        <div className="particle animate-float" style={{ left: '40%', top: '80%', animationDelay: '-6s' }}></div>
        <div className="particle animate-bounce-gentle" style={{ left: '50%', top: '30%', animationDelay: '-8s' }}></div>
        <div className="particle animate-float-alt" style={{ left: '60%', top: '70%', animationDelay: '-10s' }}></div>
        <div className="particle animate-float" style={{ left: '70%', top: '50%', animationDelay: '-12s' }}></div>
        <div className="particle animate-bounce-gentle" style={{ left: '80%', top: '25%', animationDelay: '-14s' }}></div>
        <div className="particle animate-float-alt" style={{ left: '90%', top: '65%', animationDelay: '-16s' }}></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-purple-400/30 rounded-lg animate-float-alt"></div>
      <div className="absolute bottom-32 right-32 w-24 h-24 border border-blue-400/30 rounded-full animate-bounce-gentle"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 border border-green-400/30 rounded-lg rotate-12 animate-float"></div>
      <div className="absolute top-1/3 right-20 w-20 h-20 border border-purple-400/30 rounded-xl animate-float-alt" style={{ animationDelay: '2s' }}></div>
      
      {/* Enhanced gradient orbs with floating movement */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-violet-500/15 to-pink-500/15 rounded-full blur-3xl animate-bounce-gentle" style={{ animationDelay: '4s' }}></div>
      
      {/* Additional floating elements for more dynamic feel */}
      <div className="absolute top-10 right-1/3 w-6 h-6 bg-purple-400/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/3 w-8 h-8 bg-green-400/40 rounded-full animate-bounce-gentle" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-2/3 right-10 w-4 h-4 bg-blue-400/40 rounded-full animate-float-alt" style={{ animationDelay: '5s' }}></div>
    </div>
  );
};

export default BackgroundAnimation;
