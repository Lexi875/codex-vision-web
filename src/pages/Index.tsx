
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import VisionSection from '../components/VisionSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <VisionSection />
    </div>
  );
};

export default Index;
