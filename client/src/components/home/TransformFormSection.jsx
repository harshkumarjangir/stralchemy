import React, { useState } from 'react';

const TransformFormSection = () => {
  const [activeTab, setActiveTab] = useState('branding');

  const renderPackageDropdown = () => {
    if (activeTab === 'branding') {
      return (
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-bold text-gray-800 flex items-center justify-between">
            <span>Branding Strategy <span className="text-red-500">*</span></span>
            <button type="button" className="text-brand-purple text-xs underline hover:text-purple-700">View Plan Details</button>
          </label>
          <p className="text-xs text-gray-500 mb-2">Build or evolve your brand identity</p>
          <select className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors text-gray-700 appearance-none">
            <option value="">Select a package...</option>
            <option value="starter">Starter Strategy (Rs.8999/-)</option>
            <option value="complete">Complete Strategy (Rs.19,999/-)</option>
            <option value="enterprise">Enterprise Strategy (Rs.48,999/-)</option>
          </select>
        </div>
      );
    }
    if (activeTab === 'marketing') {
      return (
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-bold text-gray-800 flex items-center justify-between">
            <span>Marketing Strategy <span className="text-red-500">*</span></span>
            <button type="button" className="text-brand-purple text-xs underline hover:text-purple-700">View Plan Details</button>
          </label>
          <p className="text-xs text-gray-500 mb-2">Drive Growth and Engagement</p>
          <select className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors text-gray-700 appearance-none">
            <option value="">Select a package...</option>
            <option value="foundation">Foundation Strategy (Rs.11,999/-)</option>
            <option value="growth">Growth Strategy (Rs.24,999/-)</option>
            <option value="scale">Scale Strategy (Rs.53,999/-)</option>
          </select>
        </div>
      );
    }
    if (activeTab === 'bundle') {
      return (
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-bold text-gray-800 flex items-center justify-between">
            <span>Our Bundle Package <span className="text-red-500">*</span></span>
            <button type="button" className="text-brand-purple text-xs underline hover:text-purple-700">View Plan Details</button>
          </label>
          <p className="text-xs text-gray-500 mb-2">Branding & Marketing (Bundle & Save)</p>
          <select className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors text-gray-700 appearance-none">
            <option value="">Select a package...</option>
            <option value="starter_foundation">Starter Strategy + Foundation Strategy (Rs.19,999/-)</option>
            <option value="complete_growth">Complete strategy + Growth Strategy (Rs.42,999/-)</option>
            <option value="enterprise_scale">Enterprise Strategy + Scale Strategy (Rs.89,999/-)</option>
          </select>
        </div>
      );
    }
  };

  return (
    <section className="py-24 px-8 bg-white relative">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#b968c7] to-[#7f26d9] tracking-tight mb-2 uppercase">
          READY TO TRANSFORM YOUR BRAND?
        </h2>
        <p className="text-gray-900 font-bold mb-8">
          Join 170+ brands that chose strategy over guesswork!
        </p>
        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b968c7] to-[#7f26d9] mb-4">
          Let's Transform Your Journey
        </h3>
        <p className="text-gray-600">
          Share your vision and we'll create a custom strategy tailored to your goals.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center mb-16 relative">
           <div className="flex space-x-2">
             {['branding', 'marketing', 'bundle'].map((tab) => (
               <button
                 key={tab}
                 type="button"
                 onClick={() => setActiveTab(tab)}
                 className={`px-10 py-3 font-semibold capitalize transition-all duration-300 ${
                   activeTab === tab
                     ? 'bg-[#00c853] text-white shadow-[0_10px_25px_rgba(0,0,0,0.15)] border-[3px] border-black z-10 relative scale-105'
                     : 'bg-gradient-to-r from-[#9c27b0] to-[#e91e63] text-white shadow-[0_10px_25px_rgba(156,39,176,0.4)] hover:scale-105 opacity-90'
                 }`}
               >
                 {tab}
               </button>
             ))}
           </div>
        </div>

        {/* Form Container */}
        <div className="bg-white">
          <form className="space-y-16">
             
             {/* Step 1 */}
             <div>
               <h4 className="text-xl font-bold text-gray-900 mb-8 border-b pb-2 border-gray-100">1. Tell Us About Your Business</h4>
               <div className="space-y-6">
                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Name <span className="text-red-500">*</span></label>
                   <input 
                     type="text" 
                     placeholder="Enter your name" 
                     className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors" 
                   />
                 </div>
                 
                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Email Address <span className="text-red-500">*</span></label>
                   <input 
                     type="email" 
                     placeholder="Enter your email (One-Time Secure code will be sent to open the strategy)" 
                     className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors" 
                   />
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Phone Number <span className="text-red-500">*</span></label>
                   <input 
                     type="tel" 
                     placeholder="Enter your mobile number (Strategy delivery intimation will be sent two days before)" 
                     className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors" 
                   />
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Business Name <span className="text-red-500">*</span></label>
                   <input 
                     type="text" 
                     placeholder="Enter business name" 
                     className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors" 
                   />
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Select Your Industry <span className="text-red-500">*</span></label>
                   <select className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors text-gray-700 appearance-none">
                     <option value="">Select</option>
                     <option value="Technology & SaaS">Technology & SaaS</option>
                     <option value="Ecommerce & Retail">Ecommerce & Retail</option>
                     <option value="Healthcare & Wellness">Healthcare & Wellness</option>
                     <option value="Finance & FinTech">Finance & FinTech</option>
                     <option value="Hospitality & Travel">Hospitality & Travel</option>
                     <option value="Real Estate">Real Estate</option>
                     <option value="Food & Beverage">Food & Beverage</option>
                     <option value="Education & EdTech">Education & EdTech</option>
                     <option value="Professional Services">Professional Services</option>
                     <option value="Fashion & Beauty">Fashion & Beauty</option>
                     <option value="Sustainability & Green tech">Sustainability & Green tech</option>
                     <option value="Manufacturing">Manufacturing</option>
                     <option value="Others">Others</option>
                   </select>
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Business Stage <span className="text-red-500">*</span></label>
                   <select className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors text-gray-700 appearance-none">
                     <option value="">Select</option>
                     <option value="Idea/Pre-Launch">Idea/Pre-Launch</option>
                     <option value="Startup (0-2 years)">Startup (0-2 years)</option>
                     <option value="Growing (2-5 years)">Growing (2-5 years)</option>
                     <option value="Established (5+ years)">Established (5+ years)</option>
                     <option value="Enterprise">Enterprise</option>
                   </select>
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Website (If available)</label>
                   <input 
                     type="url" 
                     placeholder="Website URL" 
                     className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors" 
                   />
                 </div>
               </div>
             </div>

             {/* Step 2 */}
             <div>
               <h4 className="text-xl font-bold text-gray-900 mb-8 border-b pb-2 border-gray-100">2. Your Project Goals</h4>
               <div className="space-y-6">
                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Brief the vision for your business <span className="text-red-500">*</span></label>
                   <textarea 
                     placeholder="(Tell us your long term goals, impact, and values...)" 
                     className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors resize-none"
                   ></textarea>
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">What challenges are you facing? <span className="text-red-500">*</span></label>
                   <textarea 
                     placeholder="(Tell us about the specific challenges or painpoints you are experiencing...)" 
                     className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors resize-none"
                   ></textarea>
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">What are your primary goals? <span className="text-red-500">*</span></label>
                   <textarea 
                     placeholder="(What do you hope to achieve with this strategy? Be specific about outcomes...)" 
                     className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors resize-none"
                   ></textarea>
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Target Audience <span className="text-red-500">*</span></label>
                   <textarea 
                     placeholder="(Who are your ideal customers...)" 
                     className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors resize-none"
                   ></textarea>
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Additional Information</label>
                   <textarea 
                     placeholder="(Anything else you'd like us to know? Competitors, inspiration, specific requirements...)" 
                     className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors resize-none"
                   ></textarea>
                 </div>
               </div>
             </div>

             {/* Step 3 */}
             <div>
               <h4 className="text-xl font-bold text-gray-900 mb-8 border-b pb-2 border-gray-100">3. Select Your Strategy Package</h4>
               <div className="space-y-6">
                 {renderPackageDropdown()}
               </div>
             </div>

             {/* Submit */}
             <div className="pt-8">
               <button 
                 type="button" 
                 className="w-full bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900 text-white font-bold py-5 rounded shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-2xl text-lg uppercase tracking-wide"
               >
                 PAY & SEAL THE DEAL
               </button>
               <p className="text-center text-xs text-gray-500 mt-4">
                 Redirecting to Razorpay secure checkout. Submitted form will be sent to strategy@stralchemy.com
               </p>
             </div>
             
          </form>
        </div>
      </div>
    </section>
  );
};

export default TransformFormSection;
