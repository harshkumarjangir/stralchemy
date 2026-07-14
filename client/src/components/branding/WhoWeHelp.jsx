import React from 'react';

const WhoWeHelp = () => {
  return (
    <section className="py-24 px-8 bg-gray-50 border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight uppercase">
            Who We Help
          </h2>
          <div className="w-24 h-1.5 bg-brand-purple mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Startups Card */}
          <div className="bg-gradient-to-br from-brand-purple to-purple-700 rounded-3xl p-10 md:p-14 text-white shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-purple-200">
                For Startups & New Ventures
              </h3>
              <p className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                Starting from scratch? Perfect.
              </p>
              <p className="text-lg md:text-xl text-purple-100/90 mb-12 font-medium">
                We’ll help you build a foundation that sets you apart from day one.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/10 p-2 rounded-xl mr-4 shadow-sm backdrop-blur-sm">
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Strategic Positioning</h4>
                    <p className="text-purple-100/80 leading-relaxed">
                      Discover your unique market position and how to communicate it powerfully.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/10 p-2 rounded-xl mr-4 shadow-sm backdrop-blur-sm">
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Identity Blueprint</h4>
                    <p className="text-purple-100/80 leading-relaxed">
                      Get clear strategic direction for building a brand that resonates with your audience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/10 p-2 rounded-xl mr-4 shadow-sm backdrop-blur-sm">
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Launch Strategy</h4>
                    <p className="text-purple-100/80 leading-relaxed">
                      Enter the market with a strategic roadmap that guides every brand decision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Established Card */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-10 md:p-14 text-white shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-purple opacity-20 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative z-10">
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-gray-400">
                For Established Businesses
              </h3>
              <p className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                Ready to evolve?
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 font-medium">
                We’ll help you refresh, reposition, or completely reinvent your brand.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/5 border border-white/10 p-2 rounded-xl mr-4 shadow-sm backdrop-blur-sm">
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Repositioning Strategy</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Modernize your market position to connect with today’s audience while preserving brand equity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/5 border border-white/10 p-2 rounded-xl mr-4 shadow-sm backdrop-blur-sm">
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Premium Brand Strategy</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Strategic elevation to command higher prices and attract ideal clients.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/5 border border-white/10 p-2 rounded-xl mr-4 shadow-sm backdrop-blur-sm">
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Expansion Strategy</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Strategic frameworks for maintaining brand integrity across new markets and products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
