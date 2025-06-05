
import React, { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    'Python', 'Flutter', 'Firebase', 'React Native', 'AI APIs', 'Robotics'
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
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="text-teal-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a <span className="text-teal-400 font-semibold">15-year-old tech creator</span> passionate about building the future.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                I'm working on <span className="text-blue-400">Max AI</span>, a future OS called <span className="text-green-400">CODEX</span>, and projects that combine software, robotics, and intelligence.
              </p>

              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <blockquote className="text-2xl font-medium text-center italic">
                  <span className="text-teal-400">"</span>
                  I don't wait for the future — I build it.
                  <span className="text-teal-400">"</span>
                </blockquote>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-center mb-8">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className={`bg-gradient-to-r from-gray-700 to-gray-600 p-4 rounded-lg text-center font-medium border border-gray-600 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-400/20 transition-all duration-300 transform hover:scale-105 ${
                      isVisible ? 'animate-fade-in' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
