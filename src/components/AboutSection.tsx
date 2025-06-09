
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
            Transforming <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Society</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-2xl">
                <p className="text-2xl text-zinc-300 leading-relaxed mb-6">
                  Technology is <span className="text-purple-400 font-bold">reshaping every aspect</span> of human life.
                </p>
                
                <p className="text-xl text-zinc-400 leading-relaxed">
                  From <span className="text-violet-400 font-semibold">artificial intelligence</span> diagnosing diseases to <span className="text-green-400 font-semibold">robots</span> exploring space, we're living in an era of unprecedented change.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl border-purple-400/30">
                <blockquote className="text-3xl font-bold text-center italic">
                  <span className="text-purple-400 text-5xl">"</span>
                  <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
                    Technology is not just changing what we do — it's changing who we are.
                  </span>
                  <span className="text-purple-400 text-5xl">"</span>
                </blockquote>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-center mb-12">
                Areas of <span className="text-purple-400">Impact</span>
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {impacts.map((impact, index) => {
                  const IconComponent = impact.icon;
                  return (
                    <div
                      key={impact.name}
                      className="glass-card p-6 rounded-xl text-center font-bold border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
                    >
                      <IconComponent className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                      <span className="text-zinc-200">{impact.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
