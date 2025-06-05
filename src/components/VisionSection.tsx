
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
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="text-teal-400">Vision</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
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
                    className={`flex items-center space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-teal-400 transition-all duration-300 transform hover:scale-105 ${
                      isVisible ? 'animate-fade-in' : ''
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-lg text-gray-300">{goal}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <div className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 p-6 rounded-xl">
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
