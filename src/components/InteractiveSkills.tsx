
import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Brain, Smartphone, Wrench, Zap } from 'lucide-react';

const InteractiveSkills = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    {
      name: 'Python',
      icon: Code,
      level: 90,
      description: 'Building AI models, automation scripts, and backend systems',
      code: 'def create_ai():\n    model = "Max AI"\n    return f"Building {model}"',
      color: 'from-yellow-400 to-green-500'
    },
    {
      name: 'Flutter',
      icon: Smartphone,
      level: 85,
      description: 'Cross-platform mobile app development',
      code: 'Widget build(context) {\n  return MaxAI();\n}',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'AI/ML',
      icon: Brain,
      level: 88,
      description: 'Machine learning, neural networks, and AI integration',
      code: 'neural_network.train()\nresult = ai.predict(future)',
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Firebase',
      icon: Database,
      level: 82,
      description: 'Real-time databases, authentication, and cloud functions',
      code: 'firebase.collection("users")\n  .add(newUser)',
      color: 'from-orange-400 to-red-500'
    },
    {
      name: 'Robotics',
      icon: Wrench,
      level: 80,
      description: 'Hardware programming and automation systems',
      code: 'robot.move_forward()\nrobot.scan_environment()',
      color: 'from-green-400 to-blue-500'
    },
    {
      name: 'React Native',
      icon: Zap,
      level: 87,
      description: 'Native mobile app development with JavaScript',
      code: 'const App = () => {\n  return <MaxAI />;\n};',
      color: 'from-cyan-400 to-blue-500'
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-20 animate-jump-in">
            Interactive <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Skills</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                const isActive = index === activeSkill;
                return (
                  <div
                    key={skill.name}
                    onClick={() => setActiveSkill(index)}
                    className={`glass-card p-6 rounded-xl cursor-pointer transition-all duration-500 transform hover:scale-105 animate-flip-in ${
                      isActive ? 'border-purple-400/60 scale-105' : 'border-purple-400/20'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <IconComponent className={`w-8 h-8 mb-4 animate-float ${isActive ? 'text-purple-400' : 'text-zinc-400'}`} />
                    <h3 className={`font-bold text-lg mb-2 ${isActive ? 'text-purple-400' : 'text-zinc-300'}`}>
                      {skill.name}
                    </h3>
                    <div className="w-full bg-zinc-700 rounded-full h-2 mb-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ${
                          isActive ? 'animate-pulse-glow' : ''
                        }`}
                        style={{ width: isActive ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                    <span className="text-sm text-zinc-400">{skill.level}%</span>
                  </div>
                );
              })}
            </div>

            {/* Active Skill Details */}
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-2xl border-purple-400/30 animate-fade-in-up">
                <h3 className="text-3xl font-bold mb-4 text-purple-400 animate-pulse-glow">
                  {skills[activeSkill].name}
                </h3>
                <p className="text-xl text-zinc-300 mb-6 leading-relaxed">
                  {skills[activeSkill].description}
                </p>
                
                <div className="terminal-window animate-backflip">
                  <div className="terminal-header">
                    <div className="terminal-dots">
                      <div className="terminal-dot dot-red"></div>
                      <div className="terminal-dot dot-yellow"></div>
                      <div className="terminal-dot dot-green"></div>
                    </div>
                  </div>
                  <div className="p-6 font-mono">
                    <div className="text-green-400 mb-2">
                      alex@codex:~$ code {skills[activeSkill].name.toLowerCase()}
                    </div>
                    <div className="text-purple-400 typewriter">
                      {skills[activeSkill].code}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSkills;
