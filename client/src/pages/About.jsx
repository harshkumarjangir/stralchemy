import React from 'react';
import AboutHero from '../components/about/AboutHero';
import WhoWeAre from '../components/about/WhoWeAre';
import OurPhilosophy from '../components/about/OurPhilosophy';
import WhyChooseUs from '../components/about/WhyChooseUs';
import OurExpertise from '../components/about/OurExpertise';
import OurCommitment from '../components/about/OurCommitment';

const About = () => {
  return (
    <div className="bg-white">
      <AboutHero />
      <WhoWeAre />
      <OurPhilosophy />
      <WhyChooseUs />
      <OurExpertise />
      <OurCommitment />
    </div>
  );
};

export default About;
