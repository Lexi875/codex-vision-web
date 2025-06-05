
import React, { useEffect, useRef, useState } from 'react';
import { Cpu, Zap, Rocket, Brain, Code, Wrench } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'Python', icon: Code },
    { name: 'Flutter', icon: Zap },
    { name: 'Firebase', icon: Rocket },
    { name: 'React Native', icon: Brain },
    { name: 'AI APIs', icon: Cpu },
    { name: 'Robotics', icon: Wrench }
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
      id="about" 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-20 animate-jump-in">
            About <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-2xl animate-flip-in" style={{ animationDelay: '0.2s' }}>
                <p className="text-2xl text-zinc-300 leading-relaxed mb-6">
                  I'm a <span className="text-purple-400 font-bold animate-pulse-glow">15-year-old tech creator</span> passionate about building the future.
                </p>
                
                <p className="text-xl text-zinc-400 leading-relaxed">
                  I'm working on <span className="text-violet-400 font-semibold">Max AI</span>, a future OS called <span className="text-green-400 font-semibold">CODEX</span>, and projects that combine software, robotics, and intelligence.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl animate-backflip border-purple-400/30" style={{ animationDelay: '0.4s' }}>
                <blockquote className="text-3xl font-bold text-center italic">
                  <span className="text-purple-400 text-5xl">"</span>
                  <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
                    I don't wait for the future — I build it.
                  </span>
                  <span className="text-purple-400 text-5xl">"</span>
                </blockquote>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">
                Skills & <span className="text-purple-400">Technologies</span>
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className={`glass-card p-6 rounded-xl text-center font-bold border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-110 animate-jump-in ${
                        index % 2 === 0 ? 'animate-float' : 'animate-bounce-gentle'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <IconComponent className="w-8 h-8 mx-auto mb-3 text-purple-400 animate-float" />
                      <span className="text-zinc-200">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
