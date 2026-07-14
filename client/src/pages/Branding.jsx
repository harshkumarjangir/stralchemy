import React from 'react';
import BrandingHero from '../components/branding/BrandingHero';
import WhyBrandMatters from '../components/branding/WhyBrandMatters';
import WhoWeHelp from '../components/branding/WhoWeHelp';
import WhatWeDeliver from '../components/branding/WhatWeDeliver';
import BrandingPackages from '../components/branding/BrandingPackages';
import BrandingFormSection from '../components/branding/BrandingFormSection';

const Branding = () => {
  return (
    <div className="bg-white">
      <BrandingHero />
      <WhyBrandMatters />
      <WhatWeDeliver />
      <WhoWeHelp />
      <BrandingPackages />
      <BrandingFormSection />
    </div>
  );
};

export default Branding;
