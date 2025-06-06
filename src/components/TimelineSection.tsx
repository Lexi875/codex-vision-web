
import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Trophy, Rocket, Code, Brain, Wrench } from 'lucide-react';

const TimelineSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const milestones = [
    {
      year: '2020',
      title: 'Started Coding Journey',
      description: 'Discovered programming with Python and fell in love with technology',
      icon: Code,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      year: '2021',
      title: 'First Mobile App',
      description: 'Built my first Flutter app and learned mobile development',
      icon: Rocket,
      color: 'from-green-400 to-emerald-500'
    },
    {
      year: '2022',
      title: 'AI Exploration',
      description: 'Started working with AI APIs and machine learning concepts',
      icon: Brain,
      color: 'from-purple-400 to-violet-500'
    },
    {
      year: '2023',
      title: 'Robotics & Hardware',
      description: 'Began experimenting with robotics and hardware programming',
      icon: Wrench,
      color: 'from-orange-400 to-red-500'
    },
    {
      year: '2024',
      title: 'Max AI Project',
      description: 'Started building Max AI - my most ambitious project yet',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      year: '2025',
      title: 'CODEX Vision',
      description: 'Working towards the future OS that connects everything',
      icon: Calendar,
      color: 'from-pink-400 to-purple-500'
    }
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
      id="timeline" 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-20 animate-jump-in">
            My <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Journey</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 via-violet-500 to-purple-400 animate-pulse-glow"></div>

            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={milestone.year}
                  className={`relative mb-16 ${
                    isLeft ? 'text-right pr-8' : 'text-left pl-8'
                  }`}
                  style={{ 
                    marginLeft: isLeft ? '0' : '50%',
                    marginRight: isLeft ? '50%' : '0'
                  }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute top-1/2 transform -translate-y-1/2 w-12 h-12 glass-card rounded-full border-purple-400/50 flex items-center justify-center animate-float ${
                    isLeft ? '-right-6' : '-left-6'
                  }`}>
                    <IconComponent className="w-6 h-6 text-purple-400" />
                  </div>

                  <div 
                    className={`glass-card p-8 rounded-2xl border-purple-400/20 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105 animate-flip-in ${
                      index % 2 === 0 ? 'animate-float' : 'animate-bounce-gentle'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`h-2 w-full bg-gradient-to-r ${milestone.color} rounded-full mb-4 animate-pulse-glow`}></div>
                    
                    <h3 className="text-2xl font-bold text-purple-400 mb-2 animate-pulse-glow">
                      {milestone.year}
                    </h3>
                    
                    <h4 className="text-xl font-bold text-zinc-200 mb-3">
                      {milestone.title}
                    </h4>
                    
                    <p className="text-zinc-400 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
