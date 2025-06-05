
import React from 'react';
import { Github, Mail, Code2, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 px-4 relative z-10 border-t border-purple-400/20">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card p-12 rounded-3xl text-center animate-jump-in">
          <div className="flex items-center justify-center space-x-2 mb-8 animate-float">
            <Code2 className="w-8 h-8 text-purple-400" />
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
              Alex
            </span>
          </div>

          <p className="text-xl text-zinc-300 mb-8 animate-bounce-gentle">
            Building the future, one line of code at a time
          </p>

          <div className="flex justify-center space-x-8 mb-8">
            <div className="glass-card p-4 rounded-xl hover:scale-110 transition-transform animate-float">
              <Github className="w-6 h-6 text-purple-400" />
            </div>
            <div className="glass-card p-4 rounded-xl hover:scale-110 transition-transform animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>
              <Mail className="w-6 h-6 text-purple-400" />
            </div>
            <div className="glass-card p-4 rounded-xl hover:scale-110 transition-transform animate-float" style={{ animationDelay: '0.4s' }}>
              <Code2 className="w-6 h-6 text-purple-400" />
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 text-zinc-400 animate-fade-in-up">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>for my GCSE presentation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
