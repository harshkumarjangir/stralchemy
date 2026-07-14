import React from 'react';

const channels = [
  "SEO Strategy",
  "Social Media",
  "Paid Advertising",
  "Video Marketing",
  "Content Marketing",
  "Email Marketing",
  "Partnership Strategy",
  "PR & Outreach"
];

// Combine arrays to make the infinite scroll seamless
const marqueeItems = [...channels, ...channels, ...channels];

const MarketingChannels = () => {
  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden relative border-t border-gray-800">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center px-8 mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 uppercase">
          Marketing Channels <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-pink-400">We Strategize</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 font-medium">
          Not every channel fits every business.<br className="hidden md:block" /> 
          We identify and prioritize the channels that deliver the highest ROI for your specific situation.
        </p>
      </div>

      <div className="relative flex flex-col space-y-8 z-10 w-[200%] md:w-[150%] lg:w-[120%] -ml-[50%] md:-ml-[25%] lg:-ml-[10%]">
        
        {/* Marquee Left */}
        <div className="flex animate-marquee-left space-x-6 px-3 whitespace-nowrap">
          {marqueeItems.map((channel, i) => (
            <div key={`left-${i}`} className="inline-block flex-shrink-0 bg-white/5 backdrop-blur-md border border-white/10 px-8 md:px-12 py-4 md:py-5 rounded-full text-lg md:text-2xl font-bold text-gray-200 hover:bg-brand-purple hover:border-brand-purple hover:text-white hover:scale-105 transition-all duration-300 cursor-default shadow-lg">
              {channel}
            </div>
          ))}
        </div>

        {/* Marquee Right */}
        <div className="flex animate-marquee-right space-x-6 px-3 whitespace-nowrap" style={{ animationDirection: 'reverse' }}>
          {marqueeItems.reverse().map((channel, i) => (
            <div key={`right-${i}`} className="inline-block flex-shrink-0 bg-white/5 backdrop-blur-md border border-white/10 px-8 md:px-12 py-4 md:py-5 rounded-full text-lg md:text-2xl font-bold text-gray-200 hover:bg-pink-600 hover:border-pink-600 hover:text-white hover:scale-105 transition-all duration-300 cursor-default shadow-lg">
              {channel}
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default MarketingChannels;
