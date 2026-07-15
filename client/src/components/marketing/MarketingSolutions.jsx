import React from 'react';

const SolutionCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-300 group">
      <div className="w-14 h-14 bg-purple-50 text-brand-purple rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};

const MarketingSolutions = () => {
  return (
    <section className="py-32 px-8 relative bg-white">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase">
            Strategic Marketing Solutions
          </h2>
          <div className="w-24 h-1.5 bg-brand-purple mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SolutionCard 
            title="Market Analysis & Research"
            description="Deep competitive intelligence and audience insights. We analyze your market landscape, identify opportunities, and map the strategic path to domination."
            icon={
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
          />
          <SolutionCard 
            title="Customer Acquisition Strategy"
            description="Strategic roadmaps for attracting and converting your ideal customers across the most effective channels for your industry and goals."
            icon={
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
          />
          <SolutionCard 
            title="Growth Marketing Framework"
            description="Systematic strategies for scaling your business. From product-market fit to explosive growth, we build frameworks that compound results over time."
            icon={
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
          />
          <SolutionCard 
            title="Conversion Optimization Strategy"
            description="Strategic guidance on turning traffic into revenue. We identify friction points and create optimization roadmaps that maximize every visitor’s value."
            icon={
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            }
          />
          <SolutionCard 
            title="Customer Retention Blueprint"
            description="Strategic frameworks for keeping customers engaged and coming back. Retaining customers is exponentially more profitable than acquiring new ones."
            icon={
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
          />
          <SolutionCard 
            title="Omnichannel Strategy"
            description="Cohesive strategic plans that orchestrate your presence across all channels, creating seamless customer experiences that drive loyalty and growth."
            icon={
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default MarketingSolutions;
