import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CaseStudyForm from '../components/case-studies/CaseStudyForm';

const CaseStudyDetail = () => {
  const { id } = useParams();
  
  // Format the slug back to a readable title
  const formattedIndustry = id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-purple rounded-full blur-[100px] opacity-10 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-8 mb-12 relative z-10">
        <Link to="/case-studies" className="text-brand-purple hover:text-purple-800 transition-colors font-medium flex items-center gap-2 inline-flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Case Studies
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-8 mb-16 text-center relative z-10">
        <div className="inline-block bg-purple-50 border border-purple-100 text-brand-purple px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
          Industry Case Study
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
          {formattedIndustry}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Discover our strategic approach and the measurable impact we've delivered for businesses in the {formattedIndustry} sector.
        </p>
      </div>

      <div className="px-8 relative z-10">
        <CaseStudyForm caseStudyId={id} />
      </div>
    </div>
  );
};

export default CaseStudyDetail;
