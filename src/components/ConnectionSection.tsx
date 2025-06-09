
import React, { useEffect, useRef, useState } from 'react';
import { Bot, Cpu, Smartphone, Home, Hospital, GraduationCap } from 'lucide-react';

const ConnectionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const connections = [
    { name: 'Smart Homes', icon: Home, position: 'top-20 left-20' },
    { name: 'Healthcare AI', icon: Hospital, position: 'top-20 right-20' },
    { name: 'Education Tech', icon: GraduationCap, position: 'bottom-20 left-20' },
    { name: 'Mobile Apps', icon: Smartphone, position: 'bottom-20 right-20' },
    { name: 'Automation', icon: Cpu, position: 'top-1/2 right-10' }
  ];

  return (
    <section 
      id="connections" 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-20 animate-jump-in">
            Everything <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Connected</span>
          </h2>

          <div className="relative h-96 glass-card rounded-3xl p-8 animate-flip-in" style={{ animationDelay: '0.3s' }}>
            {/* Central Society Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="glass-card p-8 rounded-full border-purple-400/50 animate-float bg-gradient-to-r from-purple-500/20 to-violet-500/20">
                <Bot className="w-16 h-16 text-purple-400" />
              </div>
              <p className="text-center mt-4 font-bold text-purple-400 text-xl animate-pulse-glow">Society 2030</p>
            </div>

            {/* Connection nodes */}
            {connections.map((connection, index) => {
              const IconComponent = connection.icon;
              return (
                <div
                  key={connection.name}
                  className={`absolute ${connection.position} animate-bounce-gentle`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="glass-card p-6 rounded-xl border-purple-400/30 hover:border-purple-400/60 transition-all hover:scale-110">
                    <IconComponent className="w-8 h-8 text-purple-400 mb-2 animate-float" />
                    <p className="text-zinc-300 text-sm font-medium">{connection.name}</p>
                  </div>
                  
                  {/* Animated connection lines */}
                  <svg className="absolute top-1/2 left-1/2 w-32 h-32 pointer-events-none animate-float-alt">
                    <line 
                      x1="16" y1="16" 
                      x2="64" y2="64" 
                      stroke="url(#gradient)" 
                      strokeWidth="2" 
                      strokeDasharray="5,5"
                      className="animate-pulse"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.6 }} />
                        <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.2 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              In the near future, <span className="text-purple-400 font-bold">intelligent systems</span> will seamlessly connect 
              every aspect of society, creating a world that's smarter, safer, and more sustainable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionSection;
