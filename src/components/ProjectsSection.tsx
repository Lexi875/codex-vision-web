
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "Max AI",
      description: "Voice assistant that learns, responds, and helps",
      tech: "Python, Flutter, Gemini API",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Study Buddy",
      description: "AI-powered study tool with flashcards, exam mode, and voice help",
      tech: "AI APIs, React Native",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "CODEX Vision",
      description: "Smart homes, AI glasses, transforming robots, all connected",
      tech: "Future OS, IoT, Robotics",
      gradient: "from-orange-500 to-red-600"
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
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-slate-800 via-gray-900 to-slate-900 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group bg-gradient-to-br from-gray-800/80 to-slate-800/80 rounded-xl p-6 border border-gray-700/50 hover:border-teal-400 transition-all duration-500 transform hover:scale-105 hover:glow-teal cursor-pointer backdrop-blur-sm ${
                  isVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-6`}></div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="text-sm text-gray-400 mb-6">
                  <span className="font-medium">Tech:</span> {project.tech}
                </div>

                <div className="flex justify-end">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform animate-pulse-slow">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
