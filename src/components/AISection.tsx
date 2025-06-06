
import React, { useEffect, useRef, useState } from 'react';
import { Brain, Cpu, Zap, ArrowRight, Bot, Network } from 'lucide-react';

const AISection = () => {
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

  const aiTopics = [
    {
      title: "Machine Learning",
      description: "AI that learns from data to make predictions and decisions without being explicitly programmed",
      icon: Brain,
      examples: "Netflix recommendations, spam detection, voice assistants",
      delay: '0.1s'
    },
    {
      title: "Neural Networks",
      description: "AI systems inspired by the human brain, with interconnected nodes that process information",
      icon: Network,
      examples: "Image recognition, language translation, self-driving cars",
      delay: '0.3s'
    },
    {
      title: "AI Applications",
      description: "Real-world uses of AI that are transforming industries and daily life",
      icon: Bot,
      examples: "Medical diagnosis, financial trading, smart homes, gaming",
      delay: '0.5s'
    }
  ];

  return (
    <section 
      id="ai" 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-8 animate-jump-in">
            Artificial <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Intelligence</span>
          </h2>
          
          <p className="text-xl text-zinc-300 text-center mb-20 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            AI is reshaping our world by giving machines the ability to think, learn, and make decisions like humans
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {aiTopics.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <div
                  key={topic.title}
                  className={`glass-card rounded-2xl p-8 border-purple-400/20 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-105 ${
                    index % 2 === 0 ? 'animate-float' : 'animate-bounce-gentle'
                  }`}
                  style={{ animationDelay: topic.delay }}
                >
                  <IconComponent className="w-12 h-12 text-purple-400 mb-6 animate-float" />
                  
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">
                    {topic.title}
                  </h3>
                  
                  <p className="text-zinc-300 mb-6 leading-relaxed">
                    {topic.description}
                  </p>
                  
                  <div className="glass-card p-4 rounded-lg border-purple-400/20">
                    <span className="font-bold text-green-400">Examples:</span>
                    <p className="text-zinc-300 mt-1">{topic.examples}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* AI Impact Stats */}
          <div className="glass-card p-8 rounded-2xl animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-3xl font-bold text-center mb-8 text-purple-400">AI Impact on Society</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="animate-float">
                <div className="text-4xl font-bold text-green-400 mb-2">75%</div>
                <p className="text-zinc-300">of businesses plan to use AI by 2025</p>
              </div>
              <div className="animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-bold text-blue-400 mb-2">$15.7T</div>
                <p className="text-zinc-300">AI's contribution to global GDP by 2030</p>
              </div>
              <div className="animate-float" style={{ animationDelay: '0.4s' }}>
                <div className="text-4xl font-bold text-violet-400 mb-2">97M</div>
                <p className="text-zinc-300">new AI jobs created by 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
