import React from 'react';

const AboutHero = () => {
  return (
    <section className="bg-gray-900 text-white py-32 md:py-48 px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple rounded-full blur-[150px] opacity-20 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-green rounded-full blur-[120px] opacity-20 pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <p className="text-brand-green font-bold tracking-[0.2em] uppercase mb-6 text-lg md:text-xl">
          About Us
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 leading-tight tracking-tighter uppercase">
          Strategy is our <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-green animate-gradient-x">
            Craft
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
          We’re strategists, not magicians. When you combine deep expertise with relentless curiosity, the results can feel like alchemy.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
