
import React, { useEffect, useRef, useState } from 'react';
import { Target, Lightbulb, Heart, Sparkles } from 'lucide-react';

const VisionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const goals = [
    { text: "Build a tech company", icon: Target },
    { text: "Help others with AI", icon: Heart },
    { text: "Invent useful tools for the real world", icon: Lightbulb }
  ];

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

  return (
    <section 
      id="vision" 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-20 animate-jump-in">
            My <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Vision</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="glass-card p-10 rounded-3xl border-purple-400/30 animate-flip-in" style={{ animationDelay: '0.2s' }}>
                <Sparkles className="w-16 h-16 text-purple-400 mb-6 animate-float" />
                
                <p className="text-2xl text-zinc-300 leading-relaxed mb-6">
                  My goal is to build <span className="text-violet-400 font-bold animate-pulse-glow">CODEX OS</span> – a unified operating system for smart homes, phones, glasses, and robotics.
                </p>
                
                <p className="text-xl text-zinc-400 leading-relaxed mb-6">
                  <span className="text-purple-400 font-bold">Max AI</span> will be the intelligent brain that connects it all.
                </p>

                <p className="text-xl text-zinc-400 leading-relaxed">
                  I want to help people through tech – from smart cities to everyday tools.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold mb-12 text-center animate-fade-in-up">
                My <span className="text-purple-400">Goals</span>
              </h3>
              <div className="space-y-6">
                {goals.map((goal, index) => {
                  const IconComponent = goal.icon;
                  return (
                    <div
                      key={goal.text}
                      className={`flex items-center space-x-6 glass-card p-6 rounded-xl border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 animate-jump-in ${
                        index % 2 === 0 ? 'animate-float' : 'animate-bounce-gentle'
                      }`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <IconComponent className="w-8 h-8 text-purple-400 animate-float" />
                      <span className="text-xl text-zinc-300 font-medium">{goal.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-16 text-center">
                <div className="glass-card bg-gradient-to-r from-purple-500/20 via-violet-600/20 to-purple-500/20 p-8 rounded-2xl border-purple-400/40 animate-backflip animate-pulse-glow" style={{ animationDelay: '0.8s' }}>
                  <Sparkles className="w-12 h-12 mx-auto mb-4 text-purple-400 animate-bounce-gentle" />
                  <p className="text-white font-bold text-2xl">
                    Ready to change the world, one line of code at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
