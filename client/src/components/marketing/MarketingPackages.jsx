import React from 'react';

const MarketingPackages = () => {
  const scrollToForm = (e) => {
    e.preventDefault();
    const formSection = document.getElementById('marketing-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 px-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-brand-purple font-bold tracking-widest uppercase text-sm mb-4">
            Our Marketing Strategy Packages
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4 uppercase">
            READY TO ACCELERATE YOUR GROWTH?
          </h2>
          <p className="text-xl text-gray-600">
            Choose the Level of Strategic Depth Your Business Needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          
          {/* Foundation Strategy */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Foundation Strategy</h3>
            <p className="text-gray-500 mb-6 font-medium">Perfect for startups & small businesses</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-gray-900">₹11,999/-</span>
              <span className="text-gray-500 ml-2">(3 weeks)</span>
            </div>
            
            <button 
              onClick={scrollToForm}
              className="w-full py-4 rounded-full border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors duration-300 mb-8 uppercase tracking-wide text-sm"
            >
              Scale Up Now ➝
            </button>

            <ul className="space-y-4 text-gray-600 text-sm">
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Marketing Audit and Opportunity Analysis</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Target Audience & Persona Development</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Channel Prioritization Strategy</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Core Messaging Framework</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> 6-month Marketing Roadmap</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> KPI Framework & Measurement Plan</li>
            </ul>
          </div>

          {/* Growth Strategy (Popular) */}
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-2xl relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-purple to-pink-500 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Growth Strategy</h3>
            <p className="text-gray-400 mb-6 font-medium">For Aggressive Scaling</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-white">₹24,999/-</span>
              <span className="text-gray-400 ml-2">(5 weeks)</span>
            </div>
            
            <button 
              onClick={scrollToForm}
              className="w-full py-4 rounded-full bg-gradient-to-r from-brand-purple to-pink-500 text-white font-bold hover:shadow-[0_0_20px_rgba(156,39,176,0.4)] transition-all duration-300 mb-8 uppercase tracking-wide text-sm transform hover:scale-105"
            >
              Scale Up Now ➝
            </button>

            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start"><span className="text-brand-purple mr-2">✔️</span> Everything in Foundation, Plus:</li>
              <li className="flex items-start"><span className="text-brand-purple mr-2">✔️</span> Deep Competitive Analysis</li>
              <li className="flex items-start"><span className="text-brand-purple mr-2">✔️</span> Multi-Channel Acquisition Strategy</li>
              <li className="flex items-start"><span className="text-brand-purple mr-2">✔️</span> Conversion Optimization Strategy</li>
              <li className="flex items-start"><span className="text-brand-purple mr-2">✔️</span> Customer Journey Mapping</li>
              <li className="flex items-start"><span className="text-brand-purple mr-2">✔️</span> Retention & Loyalty Strategy</li>
              <li className="flex items-start"><span className="text-brand-purple mr-2">✔️</span> 12-month Growth Playbook</li>
              <li className="flex items-start"><span className="text-brand-purple mr-2">✔️</span> Budget Allocation Framework</li>
            </ul>
          </div>

          {/* Scale Strategy */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Scale Strategy</h3>
            <p className="text-gray-500 mb-6 font-medium">Enterprise-Level Transformation</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-gray-900">₹53,999/-</span>
              <span className="text-gray-500 ml-2">(8 weeks)</span>
            </div>
            
            <button 
              onClick={scrollToForm}
              className="w-full py-4 rounded-full border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors duration-300 mb-8 uppercase tracking-wide text-sm"
            >
              Scale Up Now ➝
            </button>

            <ul className="space-y-4 text-gray-600 text-sm">
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Everything in Growth, Plus:</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Market Expansion Strategy</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Advanced Segmentation & Personalization</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Marketing Automation Blueprint</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Attribution Modeling Framework</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Team Structure & Hiring Roadmap</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Technology Stack Optimization</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Quarterly Strategic Consultations (1 year)</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketingPackages;
