import React from 'react';

const MarketingWhoWeHelp = () => {
  return (
    <section className="py-32 px-8 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-50 rounded-full blur-[120px] pointer-events-none opacity-50 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-50 rounded-full blur-[100px] pointer-events-none opacity-50 translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Startups Section */}
        <div className="mb-40">
          <div className="text-center mb-16 relative">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-6 uppercase tracking-tighter leading-tight">
              For <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-purple-500">Startups</span> & <br className="hidden md:block" /> Early Stage
            </h2>
            <div className="inline-block bg-purple-50 border border-purple-100 text-brand-purple px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
              Building momentum from zero requires strategic precision.
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              We help you find product-market fit and scale efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Launch Strategy", text: "Go-to-market plans that create buzz and drive early adoption." },
              { title: "Lean Marketing Frameworks", text: "Maximum input strategies optimized for startup budgets and resources." },
              { title: "Growth Experimentation", text: "Strategic testing frameworks to find what works before scaling investment." }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgb(68,0,101,0.06)] hover:-translate-y-2 transition-all duration-500">
                <div className="w-12 h-1.5 bg-gray-200 mb-8 rounded-full group-hover:w-20 group-hover:bg-brand-purple transition-all duration-500"></div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-purple transition-colors duration-300">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Established Section */}
        <div>
          <div className="text-center mb-16 relative">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-6 uppercase tracking-tighter leading-tight">
              For <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-green-500">Established</span> <br className="hidden md:block" /> Businesses
            </h2>
            <div className="inline-block bg-green-50 border border-green-100 text-brand-green px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
              Scale what’s working, fix what’s broken
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              ...and discover untapped opportunities. Strategic marketing that compounds your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Marketing Audit & Optimization", text: "Comprehensive analysis revealing opportunities to improve ROI across all channels." },
              { title: "Expansion Strategy", text: "Strategic roadmaps for entering new markets or launching new products." },
              { title: "Performance Marketing", text: "Data-driven strategies focused on measurable outcomes and continuous improvement." }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgb(7,161,47,0.06)] hover:-translate-y-2 transition-all duration-500">
                <div className="w-12 h-1.5 bg-gray-200 mb-8 rounded-full group-hover:w-20 group-hover:bg-brand-green transition-all duration-500"></div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-green transition-colors duration-300">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MarketingWhoWeHelp;
