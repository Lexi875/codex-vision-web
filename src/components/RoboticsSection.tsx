
import React, { useEffect, useRef, useState } from 'react';
import { Bot, Cog, Zap, Car, Home, Factory } from 'lucide-react';

const RoboticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const roboticsAreas = [
    {
      title: "Industrial Robots",
      description: "Automated machines that perform manufacturing tasks with precision and speed",
      icon: Factory,
      applications: "Car assembly, electronics manufacturing, quality control",
      delay: '0.1s'
    },
    {
      title: "Autonomous Vehicles",
      description: "Self-driving cars and drones that navigate without human control",
      icon: Car,
      applications: "Transportation, delivery services, exploration missions",
      delay: '0.3s'
    },
    {
      title: "Service Robots",
      description: "Robots designed to help humans in daily life and specialized tasks",
      icon: Home,
      applications: "Cleaning robots, medical assistants, security systems",
      delay: '0.5s'
    }
  ];

  return (
    <section 
      id="robotics" 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-8 animate-jump-in">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Robotics</span> Revolution
          </h2>
          
          <p className="text-xl text-zinc-300 text-center mb-20 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Robots are transforming industries by combining AI, engineering, and automation to solve real-world problems
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {roboticsAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={area.title}
                  className={`glass-card rounded-2xl p-8 border-orange-400/20 hover:border-orange-400/50 transition-all duration-500 transform hover:scale-105 ${
                    index % 2 === 0 ? 'animate-float' : 'animate-bounce-gentle'
                  }`}
                  style={{ animationDelay: area.delay }}
                >
                  <IconComponent className="w-12 h-12 text-orange-400 mb-6 animate-float" />
                  
                  <h3 className="text-2xl font-bold mb-4 text-orange-400">
                    {area.title}
                  </h3>
                  
                  <p className="text-zinc-300 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="glass-card p-4 rounded-lg border-orange-400/20">
                    <span className="font-bold text-red-400">Applications:</span>
                    <p className="text-zinc-300 mt-1">{area.applications}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Robotics Components */}
          <div className="glass-card p-8 rounded-2xl animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-3xl font-bold text-center mb-8 text-orange-400">Key Components of Robotics</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-float">
                <Bot className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h4 className="font-bold text-xl mb-3 text-purple-400">Sensors</h4>
                <p className="text-zinc-300">Cameras, lidar, and touch sensors that help robots understand their environment</p>
              </div>
              <div className="text-center animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>
                <Cog className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h4 className="font-bold text-xl mb-3 text-blue-400">Actuators</h4>
                <p className="text-zinc-300">Motors and servos that allow robots to move and manipulate objects</p>
              </div>
              <div className="text-center animate-float" style={{ animationDelay: '0.4s' }}>
                <Zap className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="font-bold text-xl mb-3 text-green-400">Control Systems</h4>
                <p className="text-zinc-300">AI algorithms and processors that make decisions and coordinate actions</p>
              </div>
            </div>
          </div>

          {/* Future of Robotics */}
          <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <h3 className="text-2xl font-bold mb-4 text-red-400">The Future is Robotic</h3>
            <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
              By 2030, robots will be common in homes, hospitals, and workplaces, working alongside humans to create a more efficient and safer world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticsSection;
