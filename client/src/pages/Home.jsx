import React from 'react';
import HeroSection from '../components/home/HeroSection';
import EdgeSection from '../components/home/EdgeSection';
import StatsSection from '../components/home/StatsSection';
import IndustriesSection from '../components/home/IndustriesSection';
import ProcessSection from '../components/home/ProcessSection';
import TransformFormSection from '../components/home/TransformFormSection';
import PaymentProcessSection from '../components/home/PaymentProcessSection';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <EdgeSection />
      <StatsSection />
      <IndustriesSection />
      <ProcessSection />
      <TransformFormSection />
      <PaymentProcessSection />
      {/* Other homepage sections will go here */}
    </div>
  );
};

export default Home;
