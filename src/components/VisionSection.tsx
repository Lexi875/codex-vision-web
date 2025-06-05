
import React, { useEffect, useRef, useState } from 'react';

const VisionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const goals = [
    "Build a tech company",
    "Help others with AI",
    "Invent useful tools for the real world"
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
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-800 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Vision</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-800/80 to-slate-800/80 p-8 rounded-xl border border-gray-700/50 backdrop-blur-sm glow-blue">
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  My goal is to build <span className="text-blue-400 font-semibold">CODEX OS</span> – a unified operating system for smart homes, phones, glasses, and robotics.
                </p>
                
                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                  <span className="text-teal-400 font-semibold">Max AI</span> will be the intelligent brain that connects it all.
                </p>

                <p className="text-lg text-gray-400 leading-relaxed">
                  I want to help people through tech – from smart cities to everyday tools.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-8 text-center">Goals</h3>
              <div className="space-y-4">
                {goals.map((goal, index) => (
                  <div
                    key={goal}
                    className={`flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-800/80 to-slate-700/80 rounded-lg border border-gray-700/50 hover:border-teal-400 hover:glow-teal transition-all duration-300 transform hover:scale-105 backdrop-blur-sm ${
                      isVisible ? 'animate-fade-in' : ''
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse-slow"></div>
                    <span className="text-lg text-gray-300">{goal}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <div className="inline-block bg-gradient-to-r from-teal-500 via-blue-600 to-green-500 p-6 rounded-xl glow-teal animate-gradient">
                  <p className="text-white font-semibold text-lg">
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
