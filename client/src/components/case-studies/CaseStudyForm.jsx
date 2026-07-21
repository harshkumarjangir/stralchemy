import React, { useState } from 'react';
import axios from 'axios';

const CaseStudyForm = ({ caseStudyId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    stage: '',
    challenge: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownload = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // 1. Submit lead details to backend
      await axios.post(`${import.meta.env.VITE_API_URL}/api/casestudies/download`, {
        ...formData,
        caseStudyId: caseStudyId || 'unknown'
      });

      // 2. Trigger PDF download from client/public/case-studies folder
      const link = document.createElement('a');
      link.href = `/case-studies/${caseStudyId || 'sample'}.pdf`; // PDF URL based on caseStudyId
      link.download = `Stralchemy_${caseStudyId || 'Case_Study'}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSuccess(true);
      setFormData({ name: '', email: '', stage: '', challenge: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
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
      
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6 font-bold text-center">
          Thank you! Your Case Study is downloading.
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6 font-bold text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleDownload} className="space-y-6 relative z-10">
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">Full Name <span className="text-brand-purple">*</span></label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe" 
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">Email <span className="text-gray-500 font-normal normal-case tracking-normal">(Work email if available)</span> <span className="text-brand-purple">*</span></label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com" 
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">Your Current Business Stage <span className="text-brand-purple">*</span></label>
          <select 
            name="stage"
            value={formData.stage}
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all appearance-none cursor-pointer"
            required
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
            name="challenge"
            value={formData.challenge}
            onChange={handleChange}
            placeholder="Tell us about the main challenge you are facing..." 
            rows="3"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all resize-none"
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className={`w-full text-white font-bold py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-2xl mt-4 uppercase tracking-wide text-sm flex items-center justify-center gap-2 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700'}`}
        >
          <span>{loading ? 'Processing...' : 'Reveal the Gold Tier Strategy'}</span>
          {!loading && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </form>
    </div>
  );
};

export default CaseStudyForm;
