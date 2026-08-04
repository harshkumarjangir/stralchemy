import React from 'react';

const BrandingHero = () => {
  return (
    <section className="bg-gray-900 text-white py-32 md:py-48 px-8 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple rounded-full blur-[150px] opacity-20 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-600 rounded-full blur-[120px] opacity-20 pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <p className="text-brand-green font-bold tracking-[0.2em] uppercase mb-6 text-lg md:text-xl">
          Service / Branding
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 leading-tight tracking-tighter">
          Brand Strategy that <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient-x">
            Commands Attention
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
          Your brand is more than a logo. It’s the story people tell when you’re not in the room. We craft identities that turn heads, capture hearts and command markets.
        </p>
      </div>
    </section>
  );
};

export default BrandingHero;
