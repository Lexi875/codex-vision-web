
import React, { useEffect, useRef, useState } from 'react';
import { Code2, Smartphone, Monitor, Database, Cloud, Layers } from 'lucide-react';

const SoftwareSection = () => {
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

  const softwareTypes = [
    {
      title: "Web Development",
      description: "Creating websites and web applications that run in browsers worldwide",
      icon: Monitor,
      languages: "HTML, CSS, JavaScript, React, Node.js",
      delay: '0.1s'
    },
    {
      title: "Mobile Apps",
      description: "Building applications for smartphones and tablets on iOS and Android",
      icon: Smartphone,
      languages: "Swift, Kotlin, React Native, Flutter",
      delay: '0.3s'
    },
    {
      title: "Backend Systems",
      description: "Server-side software that powers applications and manages data",
      icon: Database,
      languages: "Python, Java, Go, SQL, APIs",
      delay: '0.5s'
    }
  ];

  return (
    <section 
      id="software" 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-8 animate-jump-in">
            Software <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Development</span>
          </h2>
          
          <p className="text-xl text-zinc-300 text-center mb-20 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Software is the backbone of modern technology, powering everything from your phone to space rockets
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {softwareTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div
                  key={type.title}
                  className={`glass-card rounded-2xl p-8 border-green-400/20 hover:border-green-400/50 transition-all duration-500 transform hover:scale-105 ${
                    index % 2 === 0 ? 'animate-float' : 'animate-bounce-gentle'
                  }`}
                  style={{ animationDelay: type.delay }}
                >
                  <IconComponent className="w-12 h-12 text-green-400 mb-6 animate-float" />
                  
                  <h3 className="text-2xl font-bold mb-4 text-green-400">
                    {type.title}
                  </h3>
                  
                  <p className="text-zinc-300 mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  
                  <div className="glass-card p-4 rounded-lg border-green-400/20">
                    <span className="font-bold text-blue-400">Languages:</span>
                    <p className="text-zinc-300 mt-1">{type.languages}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Software Development Process */}
          <div className="glass-card p-8 rounded-2xl animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-3xl font-bold text-center mb-8 text-green-400">Development Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center animate-float">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Plan</h4>
                <p className="text-zinc-400">Define requirements and design the solution</p>
              </div>
              <div className="text-center animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Code</h4>
                <p className="text-zinc-400">Write clean, efficient, and maintainable code</p>
              </div>
              <div className="text-center animate-float" style={{ animationDelay: '0.4s' }}>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Test</h4>
                <p className="text-zinc-400">Ensure everything works correctly and fix bugs</p>
              </div>
              <div className="text-center animate-bounce-gentle" style={{ animationDelay: '0.6s' }}>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Deploy</h4>
                <p className="text-zinc-400">Release the software for users worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
