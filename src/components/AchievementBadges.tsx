
import React, { useEffect, useRef, useState } from 'react';
import { Star, Zap, Trophy, Target, Brain, Code } from 'lucide-react';

const AchievementBadges = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [unlockedBadges, setUnlockedBadges] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const achievements = [
    {
      title: 'Code Wizard',
      description: 'Mastered multiple programming languages',
      icon: Code,
      rarity: 'Epic',
      color: 'from-purple-400 to-violet-600',
      unlocked: true
    },
    {
      title: 'AI Pioneer',
      description: 'Built advanced AI applications',
      icon: Brain,
      rarity: 'Legendary',
      color: 'from-green-400 to-emerald-600',
      unlocked: true
    },
    {
      title: 'Mobile Master',
      description: 'Created cross-platform mobile apps',
      icon: Zap,
      rarity: 'Rare',
      color: 'from-blue-400 to-cyan-600',
      unlocked: true
    },
    {
      title: 'Innovation Star',
      description: 'Designed revolutionary tech concepts',
      icon: Star,
      rarity: 'Mythic',
      color: 'from-yellow-400 to-orange-600',
      unlocked: true
    },
    {
      title: 'Vision Keeper',
      description: 'Created comprehensive future tech roadmap',
      icon: Target,
      rarity: 'Epic',
      color: 'from-pink-400 to-purple-600',
      unlocked: true
    },
    {
      title: 'Tech Leader',
      description: 'Leading the next generation of developers',
      icon: Trophy,
      rarity: 'Legendary',
      color: 'from-orange-400 to-red-600',
      unlocked: true
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unlock badges one by one with delay
          achievements.forEach((_, index) => {
            setTimeout(() => {
              setUnlockedBadges(prev => [...prev, index]);
            }, index * 300);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Mythic': return 'text-yellow-400';
      case 'Legendary': return 'text-orange-400';
      case 'Epic': return 'text-purple-400';
      case 'Rare': return 'text-blue-400';
      default: return 'text-zinc-400';
    }
  };

  return (
    <section 
      id="achievements" 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-20 animate-jump-in">
            Achievement <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Unlocked</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              const isUnlocked = unlockedBadges.includes(index);
              
              return (
                <div
                  key={achievement.title}
                  className={`glass-card p-8 rounded-2xl border-purple-400/20 transition-all duration-1000 transform ${
                    isUnlocked 
                      ? 'opacity-100 scale-100 hover:scale-105 border-purple-400/50 animate-pulse-glow' 
                      : 'opacity-40 scale-95 grayscale'
                  } ${index % 2 === 0 ? 'animate-float' : 'animate-bounce-gentle'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`relative mb-6 ${isUnlocked ? 'animate-backflip' : ''}`}>
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${achievement.color} p-1 ${
                      isUnlocked ? 'animate-pulse-glow' : ''
                    }`}>
                      <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    {isUnlocked && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce-gentle">
                        <span className="text-white text-sm">✓</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-center mb-2 text-zinc-200">
                    {achievement.title}
                  </h3>

                  <div className={`text-center mb-4 font-bold ${getRarityColor(achievement.rarity)}`}>
                    {achievement.rarity}
                  </div>

                  <p className="text-zinc-400 text-center leading-relaxed">
                    {achievement.description}
                  </p>

                  {isUnlocked && (
                    <div className="mt-4 text-center">
                      <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${achievement.color} text-white font-bold text-sm animate-float`}>
                        UNLOCKED!
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <div className="glass-card p-8 rounded-2xl border-purple-400/30 animate-fade-in-up">
              <h3 className="text-3xl font-bold mb-4 text-purple-400 animate-pulse-glow">
                Achievement Progress
              </h3>
              <div className="flex justify-center items-center space-x-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400">{unlockedBadges.length}</div>
                  <div className="text-zinc-400">Unlocked</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400">{achievements.length}</div>
                  <div className="text-zinc-400">Total</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400">
                    {Math.round((unlockedBadges.length / achievements.length) * 100)}%
                  </div>
                  <div className="text-zinc-400">Complete</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementBadges;
