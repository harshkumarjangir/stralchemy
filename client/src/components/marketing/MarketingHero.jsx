import React from 'react';

const MarketingHero = () => {
  return (
    <section className="bg-gray-900 text-white py-32 md:py-48 px-8 relative overflow-hidden">
      {/* Background glow effects - green/teal theme for marketing */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple rounded-full blur-[150px] opacity-20 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-600 rounded-full blur-[120px] opacity-20 pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <p className="text-brand-purple font-bold tracking-[0.2em] uppercase mb-6 text-sm">
          Service / Marketing
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight tracking-tighter">
          Marketing Strategy That <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-pink-400 to-brand-purple animate-gradient-x">
            Drives Results
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
          Stop guessing. Start growing. Data-driven marketing strategies engineered to turn your audience into customers and your customers into advocates.
        </p>
      </div>
    </section>
  );
};

export default MarketingHero;
