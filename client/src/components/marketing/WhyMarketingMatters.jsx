import React from 'react';

const WhyMarketingMatters = () => {
  return (
    <section className="py-32 px-8 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight">
          Why Strategic Marketing <br />
          <span className="text-brand-green">Matters</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
          Random acts of marketing burn budgets without building momentum. A cohesive strategy aligns every channel, message, and campaign toward measurable growth. The result? Maximum impact with minimum waste.
        </p>
      </div>
    </section>
  );
};

export default WhyMarketingMatters;
