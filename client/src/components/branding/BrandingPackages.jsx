import React from 'react';

const BrandingPackages = () => {
  const scrollToForm = (e) => {
    e.preventDefault();
    const formSection = document.getElementById('branding-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 px-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-brand-purple font-bold tracking-widest uppercase text-sm mb-4">
            Our Branding Strategy Packages
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 uppercase">
            Ready to craft a brand that truly connects?
          </h2>
          <p className="text-xl text-gray-600">
            Let’s create experiences your audience will love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          
          {/* Starter Plan */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter Strategy</h3>
            <p className="text-gray-500 mb-6 font-medium">Perfect for Startups & Small Businesses</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-gray-900">₹8,999/-</span>
              <span className="text-gray-500 ml-2">(1 week)</span>
            </div>
            
            <button 
              onClick={scrollToForm}
              className="w-full py-4 rounded-full border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors duration-300 mb-8 uppercase tracking-wide text-sm"
            >
              Shape Your Brand ➝
            </button>

            <ul className="space-y-4 text-gray-600 text-sm">
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Brand Positioning Analysis</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Competitive Landscape Review</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Target Audience Definition</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Core Messaging Framework</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Brand Identity Direction Document</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Strategic Recommendations Report</li>
            </ul>
          </div>

          {/* Complete Plan (Popular) */}
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-2xl relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-purple to-pink-500 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Complete Strategy</h3>
            <p className="text-gray-400 mb-6 font-medium">For Serious Brand Builders</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-white">₹19,999/-</span>
              <span className="text-gray-400 ml-2">(5 weeks)</span>
            </div>
            
            <button 
              onClick={scrollToForm}
              className="w-full py-4 rounded-full bg-gradient-to-r from-brand-purple to-pink-500 text-white font-bold hover:shadow-[0_0_20px_rgba(156,39,176,0.4)] transition-all duration-300 mb-8 uppercase tracking-wide text-sm transform hover:scale-105"
            >
              Shape Your Brand ➝
            </button>

            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start"><span className="text-brand-purple mr-2">✔️</span> Everything in Starter, Plus:</li>
              <li className="flex items-start"><span className="text-brand-purple mr-2">✔️</span> Deep Market and Competitor Analysis</li>
              <li className="flex items-start"><span className="text-brand-purple mr-2">✔️</span> Customer Persona Development</li>
              <li className="flex items-start"><span className="text-brand-purple mr-2">✔️</span> Comprehensive Messaging Architecture</li>
              <li className="flex items-start"><span className="text-brand-purple mr-2">✔️</span> Brand Architecture Strategy</li>
              <li className="flex items-start"><span className="text-brand-purple mr-2">✔️</span> Visual Identity Strategic Guidelines</li>
              <li className="flex items-start"><span className="text-brand-purple mr-2">✔️</span> 12-month Brand Activation Roadmap</li>
              <li className="flex items-start"><span className="text-brand-purple mr-2">✔️</span> Implementation Playbook</li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Strategy</h3>
            <p className="text-gray-500 mb-6 font-medium">Transform Established Brands</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-gray-900">₹48,999/-</span>
              <span className="text-gray-500 ml-2">(8 weeks)</span>
            </div>
            
            <button 
              onClick={scrollToForm}
              className="w-full py-4 rounded-full border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors duration-300 mb-8 uppercase tracking-wide text-sm"
            >
              Shape Your Brand ➝
            </button>

            <ul className="space-y-4 text-gray-600 text-sm">
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Everything in Complete, Plus:</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Stakeholder workshops & Interviews</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Brand Audit and Gap Analysis</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Multi-Brand Portfolio Strategy</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Internal Brand Activation Plan</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Customer Journey Mapping</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Change Management Framework</li>
              <li className="flex items-start"><span className="text-brand-green mr-2">✔️</span> Quarterly Strategic Consultations (1 year)</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandingPackages;
