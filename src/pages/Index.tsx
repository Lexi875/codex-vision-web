
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import VisionSection from '../components/VisionSection';
import BackgroundAnimation from '../components/BackgroundAnimation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden relative">
      <BackgroundAnimation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <VisionSection />
    </div>
  );
};

export default Index;
