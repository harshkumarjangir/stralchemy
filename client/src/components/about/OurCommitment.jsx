import React from 'react';
import { Link } from 'react-router-dom';

const OurCommitment = () => {
  return (
    <section className="py-32 px-8 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-brand-purple/10 to-brand-green/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase mb-8">
          Our Commitment to You
        </h2>
        <div className="text-xl text-gray-700 leading-relaxed font-medium mb-20 bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm">
          <p className="mb-6">
            When you work with Stralchemy, you get strategies grounded in reality, not theory.
          </p>
          <p>
            You get honest assessments, not what you want to hear. You get frameworks built for implementation, not just presentation. And you get a partner invested in your success, not just a vendor completing a project.
          </p>
        </div>

        <div className="bg-gray-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden border border-gray-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple rounded-full blur-[80px] opacity-30 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green rounded-full blur-[80px] opacity-30 pointer-events-none"></div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-10 relative z-10 uppercase tracking-tight">
            Ready to move from guesswork to <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-green">strategic clarity?</span>
          </h3>
          
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-8 relative z-10">
            Craft Your Golden Strategy
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Link to="/branding" className="bg-brand-purple hover:bg-[#33004d] text-white font-bold py-4 px-8 rounded-full uppercase tracking-wider text-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-purple/40">
              Branding Strategy
            </Link>
            <Link to="/marketing" className="bg-brand-green hover:bg-[#068f29] text-white font-bold py-4 px-8 rounded-full uppercase tracking-wider text-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-green/40">
              Marketing Strategy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
