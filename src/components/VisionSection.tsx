
import React, { useEffect, useRef, useState } from 'react';
import { Target, Lightbulb, Heart, Sparkles, Globe, Users, AlertTriangle } from 'lucide-react';

const VisionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const challenges = [
    { text: "Will AI replace human creativity and compassion?", icon: Heart, type: "danger" },
    { text: "Can we solve climate change before it's too late?", icon: Globe, type: "hope" },
    { text: "Who controls the algorithms that control us?", icon: Users, type: "warning" }
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
      className="min-h-screen py-20 px-4 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-20">
            The <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Reckoning</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="backdrop-blur-md bg-red-900/20 border border-red-400/30 p-10 rounded-3xl">
                <AlertTriangle className="w-16 h-16 text-red-400 mb-6" />
                
                <h3 className="text-2xl font-bold text-red-400 mb-6">The Point of No Return</h3>
                
                <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                  <strong>This is it.</strong> The decade that will determine whether technology becomes humanity's 
                  <span className="text-green-400 font-bold"> greatest triumph</span> or its 
                  <span className="text-red-400 font-bold"> final tragedy</span>.
                </p>
                
                <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                  Every algorithm written, every robot built, every line of code — they're all votes in an election 
                  that will decide the fate of human civilization.
                </p>

                <p className="text-lg text-zinc-300 font-bold italic">
                  "The question isn't whether we can build these technologies. The question is: should we?"
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold mb-12 text-center">
                The <span className="text-red-400">Critical</span> Questions
              </h3>
              <div className="space-y-6">
                {challenges.map((challenge, index) => {
                  const IconComponent = challenge.icon;
                  const borderColor = challenge.type === 'danger' ? 'border-red-400/30' : 
                                    challenge.type === 'warning' ? 'border-yellow-400/30' : 
                                    'border-green-400/30';
                  const iconColor = challenge.type === 'danger' ? 'text-red-400' : 
                                  challenge.type === 'warning' ? 'text-yellow-400' : 
                                  'text-green-400';
                  
                  return (
                    <div
                      key={challenge.text}
                      className={`flex items-center space-x-6 backdrop-blur-md bg-gray-900/60 border ${borderColor} hover:border-opacity-70 p-6 rounded-xl transition-all duration-300 transform hover:scale-105`}
                    >
                      <IconComponent className={`w-8 h-8 ${iconColor}`} />
                      <span className="text-xl text-zinc-300 font-medium">{challenge.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-16 text-center">
                <div className="backdrop-blur-md bg-gradient-to-r from-purple-500/20 via-violet-600/20 to-purple-500/20 border border-purple-400/40 p-8 rounded-2xl">
                  <Sparkles className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                  <h4 className="text-white font-bold text-2xl mb-4">The Choice is Ours</h4>
                  <p className="text-zinc-300 text-lg italic">
                    "We hold in our hands the power to create paradise... or unleash apocalypse."
                  </p>
                </div>
              </div>

              <div className="backdrop-blur-md bg-gray-900/80 border border-blue-400/30 p-6 rounded-xl text-center">
                <p className="text-blue-400 font-bold text-xl">
                  The future isn't something that happens TO us.
                </p>
                <p className="text-white font-bold text-xl mt-2">
                  It's something we CREATE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
