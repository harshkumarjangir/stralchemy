import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-white text-gray-900 py-20 px-8 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <p className="font-semibold text-lg text-brand-purple">
            Where Strategy Strikes <span className="text-yellow-500">Gold</span>
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-brand-purple to-brand-green bg-clip-text text-transparent">
              Transform your brand from invisible to inevitable
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl">
            Custom strategies crafted for startups, entrepreneurs, and established businesses ready to dominate their industry.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/branding" className="bg-brand-green hover:bg-[#068f29] text-white font-bold py-3 px-8 rounded uppercase tracking-wider text-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-green/40 active:scale-95 active:translate-y-0 inline-block text-center">
              Explore Branding
            </Link>
            <Link to="/marketing" className="bg-brand-purple hover:bg-[#33004d] text-white font-bold py-3 px-8 rounded uppercase tracking-wider text-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-purple/40 active:scale-95 active:translate-y-0 inline-block text-center">
              Discover Marketing
            </Link>
          </div>
        </div>

        {/* Image/Graphic Content */}
        <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-100">
          <div className="aspect-w-4 aspect-h-3 bg-gray-50">
             <img 
               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Business Analytics and Strategy" 
               className="w-full h-full object-cover rounded-lg"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
