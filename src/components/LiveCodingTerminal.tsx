
import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Play, Code } from 'lucide-react';

const LiveCodingTerminal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const codeDemo = [
    { type: 'comment', text: '# Building Max AI - Voice Assistant' },
    { type: 'import', text: 'import speech_recognition as sr' },
    { type: 'import', text: 'import pyttsx3' },
    { type: 'import', text: 'from transformers import pipeline' },
    { type: 'blank', text: '' },
    { type: 'class', text: 'class MaxAI:' },
    { type: 'method', text: '    def __init__(self):' },
    { type: 'code', text: '        self.voice_engine = pyttsx3.init()' },
    { type: 'code', text: '        self.ai_model = pipeline("text-generation")' },
    { type: 'blank', text: '' },
    { type: 'method', text: '    def listen(self):' },
    { type: 'code', text: '        recognizer = sr.Recognizer()' },
    { type: 'code', text: '        with sr.Microphone() as source:' },
    { type: 'code', text: '            audio = recognizer.listen(source)' },
    { type: 'code', text: '        return recognizer.recognize_google(audio)' },
    { type: 'blank', text: '' },
    { type: 'method', text: '    def respond(self, user_input):' },
    { type: 'code', text: '        response = self.ai_model(user_input)' },
    { type: 'code', text: '        self.voice_engine.say(response)' },
    { type: 'code', text: '        self.voice_engine.runAndWait()' },
    { type: 'blank', text: '' },
    { type: 'comment', text: '# Initialize and run Max AI' },
    { type: 'code', text: 'max_ai = MaxAI()' },
    { type: 'output', text: '>>> Max AI initialized successfully!' },
    { type: 'output', text: '>>> Ready to help you build the future!' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setIsTyping(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isTyping) return;

    const timer = setTimeout(() => {
      if (currentLine < codeDemo.length) {
        const currentLineText = codeDemo[currentLine].text;
        if (currentChar < currentLineText.length) {
          setCurrentChar(prev => prev + 1);
        } else {
          setCurrentLine(prev => prev + 1);
          setCurrentChar(0);
        }
      } else {
        setIsTyping(false);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [currentLine, currentChar, isTyping]);

  const getLineColor = (type: string) => {
    switch (type) {
      case 'comment': return 'text-green-400';
      case 'import': return 'text-blue-400';
      case 'class': return 'text-yellow-400';
      case 'method': return 'text-purple-400';
      case 'code': return 'text-white';
      case 'output': return 'text-cyan-400';
      default: return 'text-white';
    }
  };

  const restartTyping = () => {
    setCurrentLine(0);
    setCurrentChar(0);
    setIsTyping(true);
  };

  return (
    <section 
      id="terminal" 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-20 animate-jump-in">
            Live <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Coding</span>
          </h2>

          <div className="flex justify-center mb-8">
            <button
              onClick={restartTyping}
              className="glass-card px-8 py-4 rounded-xl font-bold text-purple-400 hover:text-white border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105 animate-float"
            >
              <Play className="inline mr-2 w-5 h-5" />
              Restart Demo
            </button>
          </div>

          <div className="terminal-window w-full max-w-4xl mx-auto animate-backflip">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot dot-red"></div>
                <div className="terminal-dot dot-yellow"></div>
                <div className="terminal-dot dot-green"></div>
              </div>
              <div className="flex items-center justify-center flex-1">
                <Terminal className="w-4 h-4 text-zinc-400 mr-2" />
                <span className="text-zinc-400 text-sm">max_ai_demo.py</span>
              </div>
            </div>
            
            <div className="p-8 font-mono text-sm leading-relaxed">
              <div className="text-purple-400 mb-4 animate-pulse">
                alex@codex:~/projects$ python max_ai_demo.py
              </div>
              
              <div className="space-y-2">
                {codeDemo.slice(0, currentLine + 1).map((line, index) => (
                  <div key={index} className={`${getLineColor(line.type)} flex`}>
                    <span className="text-zinc-500 w-8 text-right mr-4 select-none">
                      {line.text !== '' ? index + 1 : ''}
                    </span>
                    <span>
                      {index === currentLine 
                        ? line.text.slice(0, currentChar)
                        : line.text
                      }
                      {index === currentLine && isTyping && (
                        <span className="animate-pulse bg-purple-400 text-purple-400">|</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              {!isTyping && currentLine >= codeDemo.length && (
                <div className="mt-6 p-4 glass-card rounded-lg border-green-400/30 animate-fade-in-up">
                  <div className="flex items-center text-green-400 mb-2">
                    <Code className="w-4 h-4 mr-2" />
                    <span className="font-bold">Execution Complete!</span>
                  </div>
                  <div className="text-zinc-300 text-xs">
                    This is just a demo of how Max AI is being built. The actual codebase is much more complex!
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Watch as I code <span className="text-purple-400 font-bold">Max AI</span> in real-time! 
              This is just one small part of the massive project I'm building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveCodingTerminal;
