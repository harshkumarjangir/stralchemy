import React from 'react';
import MarketingHero from '../components/marketing/MarketingHero';
import WhyMarketingMatters from '../components/marketing/WhyMarketingMatters';
import MarketingSolutions from '../components/marketing/MarketingSolutions';
import MarketingChannels from '../components/marketing/MarketingChannels';
import MarketingWhoWeHelp from '../components/marketing/MarketingWhoWeHelp';
import MarketingPackages from '../components/marketing/MarketingPackages';
import MarketingFormSection from '../components/marketing/MarketingFormSection';

const Marketing = () => {
  return (
    <div className="bg-white">
      <MarketingHero />
      <WhyMarketingMatters />
      <MarketingSolutions />
      <MarketingChannels />
      <MarketingWhoWeHelp />
      <MarketingPackages />
      <MarketingFormSection />
    </div>
  );
};

export default Marketing;
