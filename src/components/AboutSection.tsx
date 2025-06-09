
import React, { useEffect, useRef, useState } from 'react';
import { Globe, Users, Zap, TrendingUp, Shield, Heart } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const impacts = [
    { name: 'Healthcare', icon: Heart },
    { name: 'Education', icon: Users },
    { name: 'Environment', icon: Globe },
    { name: 'Economy', icon: TrendingUp },
    { name: 'Security', icon: Shield },
    { name: 'Innovation', icon: Zap }
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
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-20">
            A World <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Transformed</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="backdrop-blur-md bg-gray-900/80 border border-purple-400/20 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">The Great Question of Our Time</h3>
                <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                  <strong>What happens when machines become smarter than humans?</strong> When robots walk among us? When software controls our lives?
                </p>
                
                <p className="text-lg text-zinc-400 leading-relaxed">
                  We stand at the <span className="text-red-400 font-semibold">crossroads of destiny</span>. 
                  Technology isn't just changing what we do — it's <span className="text-violet-400 font-semibold">rewriting the very essence of human existence</span>.
                </p>
              </div>

              <div className="backdrop-blur-md bg-gray-900/60 border border-yellow-400/30 p-6 rounded-xl">
                <p className="text-xl font-bold text-center text-yellow-400">
                  "We are the last generation to witness the birth of artificial minds."
                </p>
              </div>

              <div className="backdrop-blur-md bg-gray-900/80 border border-purple-400/20 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-green-400 mb-3">The Promise:</h4>
                <p className="text-zinc-300">Curing cancer, ending poverty, exploring the stars</p>
                
                <h4 className="text-lg font-bold text-red-400 mb-3 mt-4">The Peril:</h4>
                <p className="text-zinc-300">Job displacement, privacy invasion, loss of human agency</p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-center mb-12">
                Battlegrounds of <span className="text-purple-400">Change</span>
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {impacts.map((impact, index) => {
                  const IconComponent = impact.icon;
                  return (
                    <div
                      key={impact.name}
                      className="backdrop-blur-md bg-gray-900/60 border border-purple-400/20 hover:border-purple-400/50 p-6 rounded-xl text-center font-bold transition-all duration-300 hover:scale-105"
                    >
                      <IconComponent className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                      <span className="text-zinc-200">{impact.name}</span>
                    </div>
                  );
                })}
              </div>

              <div className="backdrop-blur-md bg-gradient-to-r from-purple-500/20 via-violet-600/20 to-purple-500/20 border border-purple-400/40 p-8 rounded-2xl text-center">
                <h4 className="text-2xl font-bold text-white mb-4">The Ultimate Irony</h4>
                <p className="text-zinc-300 text-lg italic">
                  "We created technology to serve us... but will we end up serving it?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
