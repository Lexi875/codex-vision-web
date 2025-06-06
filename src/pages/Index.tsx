
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import AISection from '../components/AISection';
import SoftwareSection from '../components/SoftwareSection';
import RoboticsSection from '../components/RoboticsSection';
import ProjectsSection from '../components/ProjectsSection';
import ConnectionSection from '../components/ConnectionSection';
import VisionSection from '../components/VisionSection';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden relative">
      <BackgroundAnimation />
      <Header />
      <HeroSection />
      <AboutSection />
      <AISection />
      <SoftwareSection />
      <RoboticsSection />
      <ProjectsSection />
      <ConnectionSection />
      <VisionSection />
      <Footer />
    </div>
  );
};

export default Index;
