import React from 'react';

const WhyBrandMatters = () => {
  return (
    <section className="py-32 px-8 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight">
          Why Your Brand Matters <br />
          <span className="text-brand-purple">More Than Ever</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
          In a world drowning in noise, a powerful brand is your competitive advantage. It’s the difference between being chosen and being overlooked, between charging premium prices and competing on cost.
        </p>
      </div>
    </section>
  );
};

export default WhyBrandMatters;
