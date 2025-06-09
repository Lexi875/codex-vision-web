
import React, { useEffect, useRef, useState } from 'react';
import { Bot, Brain, Cpu, Globe, Users, Zap } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const solutions = [
    {
      title: "Smart Healthcare",
      description: "AI diagnosing diseases faster than doctors, robot surgeons performing precise operations",
      impact: "Saving millions of lives globally",
      icon: Brain,
      gradient: "from-purple-500 to-violet-600",
      delay: '0.1s'
    },
    {
      title: "Autonomous Future",
      description: "Self-driving cars reducing accidents, delivery drones reaching remote areas",
      impact: "95% reduction in traffic accidents",
      icon: Bot,
      gradient: "from-green-500 to-emerald-600",
      delay: '0.3s'
    },
    {
      title: "Connected World",
      description: "Smart cities optimizing energy, IoT devices creating seamless experiences",
      impact: "50% reduction in energy waste",
      icon: Globe,
      gradient: "from-blue-500 to-cyan-600",
      delay: '0.5s'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-20 animate-jump-in">
            Real-World <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Solutions</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={solution.title}
                  className={`group glass-card rounded-2xl p-8 border-purple-400/20 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105 animate-flip-in ${
                    index % 2 === 0 ? 'animate-float' : 'animate-bounce-gentle'
                  }`}
                  style={{ animationDelay: solution.delay }}
                >
                  <div className={`h-3 w-full bg-gradient-to-r ${solution.gradient} rounded-full mb-6 animate-pulse-glow`}></div>
                  
                  <div className="flex items-center justify-center mb-6">
                    <IconComponent className="w-12 h-12 text-purple-400 animate-float" />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-purple-400 transition-colors text-center">
                    {solution.title}
                  </h3>
                  
                  <p className="text-zinc-300 mb-6 leading-relaxed text-lg text-center">
                    {solution.description}
                  </p>
                  
                  <div className="glass-card p-4 rounded-lg border-green-400/20">
                    <span className="font-bold text-green-400">Impact:</span>
                    <span className="text-zinc-300 ml-2">{solution.impact}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Future stats */}
          <div className="mt-20 flex justify-center">
            <div className="terminal-window w-full max-w-2xl animate-backflip" style={{ animationDelay: '0.8s' }}>
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className="terminal-dot dot-red"></div>
                  <div className="terminal-dot dot-yellow"></div>
                  <div className="terminal-dot dot-green"></div>
                </div>
              </div>
              <div className="p-6 font-mono">
                <div className="text-green-400 text-lg typewriter">
                  {">"} By 2030: 97 million new AI jobs created worldwide
                </div>
                <div className="text-blue-400 mt-2">
                  {">"} By 2025: 75% of businesses using AI technology
                </div>
                <div className="text-purple-400 mt-2 animate-pulse">
                  future@society:~$ building tomorrow today
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
