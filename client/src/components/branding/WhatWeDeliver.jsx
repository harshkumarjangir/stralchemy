import React from 'react';

const DeliverableCard = ({ title, description, icon }) => {
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

const WhatWeDeliver = () => {
  return (
    <section className="py-32 px-8 relative bg-white">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight uppercase">
            What We Deliver
          </h2>
          <div className="w-24 h-1.5 bg-brand-purple mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DeliverableCard 
            title="Brand Positioning Strategy"
            description="We analyze your market, competitors, and target audience to define your unique position. You’ll get a clear strategic roadmap showing exactly where you fit and how to dominate that space."
            icon={
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
          <DeliverableCard 
            title="Brand Identity Strategy"
            description="Strategic direction for your visual and verbal identity. We provide the blueprint - telling you what your brand should look, sound, and feel like to achieve your goals."
            icon={
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            }
          />
          <DeliverableCard 
            title="Brand Messaging Framework"
            description="Develop your core narrative, value propositions, and key messages. Strategic guidance on what to say, how to say it, and when to say it across the channels."
            icon={
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            }
          />
          <DeliverableCard 
            title="Brand Architecture Strategy"
            description="For businesses with multiple offerings or planning expansion - we create the strategic structure for how your brands, sub-brands, and products relate to each other."
            icon={
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM16 13a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3zM10 14.5h6" />
              </svg>
            }
          />
          <DeliverableCard 
            title="Brand Activation Roadmap"
            description="Strategic plans for launching or relaunching your brand. Phase-by-phase guidance on rollout timing, priority touchpoints, and internal adoption strategies."
            icon={
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            }
          />
          <DeliverableCard 
            title="Brand Evolution Strategy"
            description="Long-term strategic planning to keep your brand relevant. We map out how your brand should evolve over time as markets shift and your business scales."
            icon={
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDeliver;
