import React from 'react';

const CaseStudyForm = () => {
  const handleDownload = (e) => {
    e.preventDefault();
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = '#'; // Placeholder for actual PDF URL
    link.download = 'Stralchemy_Gold_Tier_Strategy.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('Thank you! Your Gold Tier Strategy PDF is downloading.');
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative max-w-2xl mx-auto">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-purple/10 to-transparent rounded-tr-3xl pointer-events-none"></div>
      
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Unlock the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-green">Stralchemy Standard</span>.
        </h2>
        <p className="text-gray-600 font-medium">
          Complete the form to see our strategy-to-gold framework in action.
        </p>
      </div>
      
      <form onSubmit={handleDownload} className="space-y-6 relative z-10">
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">Full Name <span className="text-brand-purple">*</span></label>
          <input 
            type="text" 
            placeholder="John Doe" 
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">Email <span className="text-gray-500 font-normal normal-case tracking-normal">(Work email if available)</span> <span className="text-brand-purple">*</span></label>
          <input 
            type="email" 
            placeholder="john@company.com" 
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">Your Current Business Stage <span className="text-brand-purple">*</span></label>
          <select 
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all appearance-none cursor-pointer"
            required
            defaultValue=""
          >
            <option value="" disabled>Select your stage</option>
            <option value="ideation">Ideation: (I have a vision and I am planning to launch)</option>
            <option value="startup">Startup: (I am currently in market and establishing product-fit)</option>
            <option value="growth">Growth: (I have a proven model and I am ready to scale/systematize)</option>
            <option value="enterprise">Enterprise: (I am managing complex, multi-department operations)</option>
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">What is Your Biggest Strategy Gap? <span className="text-brand-purple">*</span></label>
          <textarea 
            placeholder="Tell us about the main challenge you are facing..." 
            rows="3"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all resize-none"
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:from-yellow-600 hover:to-yellow-700 mt-4 uppercase tracking-wide text-sm flex items-center justify-center gap-2"
        >
          <span>Reveal the Gold Tier Strategy</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default CaseStudyForm;
