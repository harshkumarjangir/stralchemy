import React from 'react';
import MarketingHero from '../components/marketing/MarketingHero';
import WhyMarketingMatters from '../components/marketing/WhyMarketingMatters';
import MarketingSolutions from '../components/marketing/MarketingSolutions';
import MarketingChannels from '../components/marketing/MarketingChannels';

const Marketing = () => {
  return (
    <div className="bg-white">
      <MarketingHero />
      <WhyMarketingMatters />
      <MarketingSolutions />
      <MarketingChannels />
    </div>
  );
};

export default Marketing;
