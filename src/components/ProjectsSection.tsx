
import React, { useEffect, useRef, useState } from 'react';
import { Bot, Brain, Cpu, Globe, Users, Zap, Heart, AlertCircle } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const solutions = [
    {
      title: "AI: The New God?",
      description: "Machines that diagnose cancer faster than doctors, predict your behavior before you do",
      impact: "Miracle or surveillance nightmare?",
      icon: Brain,
      gradient: "from-purple-500 to-violet-600",
      borderColor: "border-purple-400/30",
      delay: '0.1s'
    },
    {
      title: "Robots: Our Servants or Masters?",
      description: "Steel workers that never tire, electronic caregivers that never feel",
      impact: "Liberation or unemployment crisis?",
      icon: Bot,
      gradient: "from-orange-500 to-red-600",
      borderColor: "border-orange-400/30",
      delay: '0.3s'
    },
    {
      title: "Software: The Invisible Prison?",
      description: "Code that connects the world, algorithms that divide us",
      impact: "Global unity or digital dystopia?",
      icon: Globe,
      gradient: "from-blue-500 to-cyan-600",
      borderColor: "border-blue-400/30",
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
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-8">
            The <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Double-Edged</span> Sword
          </h2>
          
          <p className="text-2xl text-zinc-300 text-center mb-20 max-w-4xl mx-auto italic">
            "Every technological breakthrough brings us closer to salvation... and damnation."
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={solution.title}
                  className={`group backdrop-blur-md bg-gray-900/80 border ${solution.borderColor} hover:border-opacity-70 rounded-2xl p-8 transition-all duration-500 transform hover:scale-105`}
                >
                  <div className={`h-3 w-full bg-gradient-to-r ${solution.gradient} rounded-full mb-6`}></div>
                  
                  <div className="flex items-center justify-center mb-6">
                    <IconComponent className="w-12 h-12 text-purple-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors text-center">
                    {solution.title}
                  </h3>
                  
                  <p className="text-zinc-300 mb-6 leading-relaxed text-lg text-center">
                    {solution.description}
                  </p>
                  
                  <div className="backdrop-blur-md bg-gray-900/60 border border-yellow-400/30 p-4 rounded-lg text-center">
                    <AlertCircle className="w-5 h-5 text-yellow-400 inline mr-2" />
                    <span className="font-bold text-yellow-400">{solution.impact}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* The Paradox */}
          <div className="backdrop-blur-md bg-gray-900/80 border border-red-400/30 p-8 rounded-2xl mb-12">
            <h3 className="text-3xl font-bold text-center mb-8 text-red-400">The Great Paradox</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <Heart className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-green-400 mb-3">The Promise</h4>
                <ul className="text-zinc-300 space-y-2">
                  <li>• AI doctors saving millions of lives</li>
                  <li>• Robots ending dangerous labor</li>
                  <li>• Software connecting every human</li>
                </ul>
              </div>
              <div className="text-center">
                <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-red-400 mb-3">The Price</h4>
                <ul className="text-zinc-300 space-y-2">
                  <li>• AI making life-or-death decisions</li>
                  <li>• Robots replacing human workers</li>
                  <li>• Software controlling human behavior</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="backdrop-blur-md bg-gradient-to-r from-purple-500/20 via-violet-600/20 to-purple-500/20 border border-purple-400/40 p-8 rounded-2xl">
              <h4 className="text-3xl font-bold text-white mb-4">The Time to Choose is NOW</h4>
              <p className="text-zinc-300 text-xl">
                Will we be the <span className="text-green-400 font-bold">architects of utopia</span> or the 
                <span className="text-red-400 font-bold"> witnesses to our own obsolescence</span>?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
