
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Bot, Brain, Smartphone, Cpu, Zap, Rocket } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "Max AI",
      description: "Voice assistant that learns, responds, and helps with everything you need",
      tech: "Python, Flutter, Gemini API",
      icon: Bot,
      gradient: "from-purple-500 to-violet-600",
      delay: '0.1s'
    },
    {
      title: "Study Buddy",
      description: "AI-powered study tool with flashcards, exam mode, and voice help",
      tech: "AI APIs, React Native",
      icon: Brain,
      gradient: "from-green-500 to-emerald-600",
      delay: '0.3s'
    },
    {
      title: "CODEX Vision",
      description: "Smart homes, AI glasses, transforming robots, all connected in one OS",
      tech: "Future OS, IoT, Robotics",
      icon: Cpu,
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
            My <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.title}
                  className={`group glass-card rounded-2xl p-8 border-purple-400/20 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105 cursor-pointer animate-flip-in ${
                    index % 2 === 0 ? 'animate-float' : 'animate-bounce-gentle'
                  }`}
                  style={{ animationDelay: project.delay }}
                >
                  <div className={`h-3 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-6 animate-pulse-glow`}></div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <IconComponent className="w-12 h-12 text-purple-400 animate-float" />
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform animate-bounce-gentle">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-300 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  
                  <div className="glass-card p-4 rounded-lg border-purple-400/20">
                    <span className="font-bold text-purple-400">Tech:</span>
                    <span className="text-zinc-300 ml-2">{project.tech}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Code terminal that does a backflip */}
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
                  {">"} Building the future, one line of code at a time...
                </div>
                <div className="text-purple-400 mt-2 animate-pulse">
                  alex@codex:~$ make-magic
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
