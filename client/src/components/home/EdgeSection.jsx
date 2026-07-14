import React from 'react';
import { Link } from 'react-router-dom';

const EdgeSection = () => {
  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand-purple font-bold tracking-widest uppercase text-sm mb-4">
            Defining Our Edge
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Strategic Alchemy for Every Step of Your Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Branding Strategy */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:bg-brand-purple hover:shadow-xl transition-all duration-300 group flex flex-col h-full cursor-pointer">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6 text-brand-purple group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-4">BRANDING STRATEGY</h3>
            <p className="text-gray-600 group-hover:text-purple-100 transition-colors duration-300 mb-8 leading-relaxed">
              Forge an identity that resonates. From startups finding their voice to established brands evolving for tomorrow, we craft the essence that makes you unforgettable.
            </p>
            <Link to="/branding" className="inline-flex items-center text-brand-purple group-hover:text-white font-semibold hover:text-opacity-80 transition-colors group/link mt-auto uppercase tracking-wide text-sm">
              BUILD YOUR BRAND 
              <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>

          {/* Card 2: Marketing Strategy */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:bg-brand-purple hover:shadow-xl transition-all duration-300 group flex flex-col h-full cursor-pointer">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6 text-brand-green group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-4">MARKETING STRATEGY</h3>
            <p className="text-gray-600 group-hover:text-purple-100 transition-colors duration-300 mb-8 leading-relaxed">
              Growth isn’t luck - it’s engineered. Industry-specific strategies that turn your audience into advocates and your efforts into exponential results.
            </p>
            <Link to="/marketing" className="inline-flex items-center text-brand-green group-hover:text-white font-semibold hover:text-opacity-80 transition-colors group/link mt-auto uppercase tracking-wide text-sm">
              ACCELERATE GROWTH 
              <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>

          {/* Card 3: Tailored To You */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:bg-brand-purple hover:shadow-xl transition-all duration-300 group flex flex-col h-full cursor-pointer">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6 text-brand-purple group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
               </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-4">TAILORED TO YOU</h3>
            <p className="text-gray-600 group-hover:text-purple-100 transition-colors duration-300 mb-8 leading-relaxed">
              No cookie-cutter solutions. Every strategy is custom-built for industry, stage, and ambition- whether you’re day one or decade ten.
            </p>
            <a href="#contact" className="inline-flex items-center text-brand-purple group-hover:text-white font-semibold hover:text-opacity-80 transition-colors group/link mt-auto uppercase tracking-wide text-sm">
              Kickstart Your Journey 
              <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdgeSection;
