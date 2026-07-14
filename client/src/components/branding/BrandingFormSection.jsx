import React from 'react';

const BrandingFormSection = () => {
  return (
    <section id="branding-form" className="py-24 px-8 bg-white relative">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-pink-500 tracking-tight mb-4 uppercase">
          OUTLINE THE DNA OF YOUR BRAND
        </h2>
        <p className="text-lg text-gray-600 font-medium">
          Tell us about your brand vision and we’ll create a custom branding strategy proposal
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-12">
        <form className="space-y-16">
          
          {/* Section 1 */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-8 border-b pb-4 border-gray-100 flex items-center">
              <span className="w-8 h-8 rounded-full bg-purple-100 text-brand-purple flex items-center justify-center mr-3 text-sm">1</span>
              Tell Us About Your Business
            </h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold text-gray-800">Your Name <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold text-gray-800">Business Name <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-800">Email Address <span className="text-red-500">*</span></label>
                <input type="email" placeholder="(One-Time Secure code will be sent to open the strategy)" className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors text-sm" />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-800">Phone Number <span className="text-red-500">*</span></label>
                <input type="tel" placeholder="(Strategy delivery intimation will be sent two days before)" className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors text-sm" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold text-gray-800">Select Your Industry <span className="text-red-500">*</span></label>
                  <select className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors text-gray-700 appearance-none text-sm">
                    <option value="">Select...</option>
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
                  <select className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors text-gray-700 appearance-none text-sm">
                    <option value="">Select...</option>
                    <option value="Idea/Pre-Launch">Idea/Pre-Launch</option>
                    <option value="Startup (0-2 years)">Startup (0-2 years)</option>
                    <option value="Growing (2-5 years)">Growing (2-5 years)</option>
                    <option value="Established (5+ years)">Established (5+ years)</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-800">Website (If available)</label>
                <input type="url" className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-8 border-b pb-4 border-gray-100 flex items-center">
              <span className="w-8 h-8 rounded-full bg-purple-100 text-brand-purple flex items-center justify-center mr-3 text-sm">2</span>
              Your Current Brand Situation
            </h3>
            
            <div className="space-y-8">
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-800">What best describes your branding need? <span className="text-red-500">*</span></label>
                <select className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors text-gray-700 appearance-none text-sm">
                  <option value="">Select...</option>
                  <option value="Building a brand from scratch">Building a brand from scratch</option>
                  <option value="Refreshing/updating existing brand">Refreshing/updating existing brand</option>
                  <option value="Complete rebranding/ repositioning">Complete rebranding/ repositioning</option>
                  <option value="Clarifying brand strategy & messaging">Clarifying brand strategy & messaging</option>
                  <option value="Expanding to new markets/products">Expanding to new markets/products</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-800 block mb-3">Do you currently have any of the following? <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Logo', 'Brand Colors', 'Brand Guidelines', 'Messaging Framework', 'Brand Strategy Doc', 'None of the Above'].map(item => (
                    <label key={item} className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer p-2 rounded hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-colors">
                      <input type="checkbox" className="rounded text-brand-purple focus:ring-brand-purple" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-800 block mb-3">What brand attributes are most important to you? <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Trustworthy', 'Innovative', 'Premium/Luxury', 'Approachable', 'Bold/Discipline', 'Professional', 'Sustainable', 'Authentic'].map(item => (
                    <label key={item} className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer p-2 rounded hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-colors">
                      <input type="checkbox" className="rounded text-brand-purple focus:ring-brand-purple" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-800">List 2-3 brands you admire (any industry) <span className="text-red-500">*</span></label>
                <input type="text" className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" />
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-8 border-b pb-4 border-gray-100 flex items-center">
              <span className="w-8 h-8 rounded-full bg-purple-100 text-brand-purple flex items-center justify-center mr-3 text-sm">3</span>
              Your Brand Vision & Goals
            </h3>
            
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-800">What do you want your brand to achieve? <span className="text-red-500">*</span></label>
                <textarea placeholder="(What should your brand accomplish in the next 1-2 years? Be specific...)" className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors resize-none text-sm"></textarea>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-800">What challenges is your current brand facing? <span className="text-red-500">*</span></label>
                <textarea placeholder="(e.g., Not standing out from competitors, inconsistent messaging, unclear positioning...)" className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors resize-none text-sm"></textarea>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-800">Target Audience <span className="text-red-500">*</span></label>
                <textarea placeholder="(Who are your ideal customers? Demographics, psychographics...)" className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors resize-none text-sm"></textarea>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-800">Who are your main competitors? <span className="text-red-500">*</span></label>
                <textarea placeholder="(List 2-3 main competitors)" className="w-full h-16 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors resize-none text-sm"></textarea>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-800">What makes you different from your competitors? <span className="text-red-500">*</span></label>
                <textarea placeholder="(What’s your unique value proposition or competitive advantage?)" className="w-full h-20 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors resize-none text-sm"></textarea>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-800">What are your primary goals? <span className="text-red-500">*</span></label>
                <textarea placeholder="(what do you hope to achieve with this strategy. Be specific about outcomes...)" className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors resize-none text-sm"></textarea>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-800">Additional Information</label>
                <textarea placeholder="(Anything else you’d like us to know? Specific requirements, preferences, constraints...)" className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors resize-none text-sm"></textarea>
              </div>
            </div>
          </div>

          {/* Submit Section */}
          <div className="bg-gray-50 -mx-8 md:-mx-12 -mb-8 md:-mb-12 p-8 md:p-12 rounded-b-3xl border-t border-gray-100 mt-12">
             <div className="flex flex-col space-y-2 mb-6">
                <label className="text-sm font-bold text-gray-900">OWN YOUR BRAND PLAYBOOK ➝</label>
                <select className="w-full bg-white border border-gray-200 rounded p-4 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all text-gray-700 appearance-none font-medium shadow-sm">
                  <option value="">Select a Strategy Package...</option>
                  <option value="starter">Starter Strategy (Rs.8999/-)</option>
                  <option value="complete">Complete Strategy (Rs.19,999/-)</option>
                  <option value="enterprise">Enterprise Strategy (Rs.48,999/-)</option>
                </select>
              </div>
              
              <button 
                type="button" 
                className="w-full bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900 text-white font-bold py-5 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-all transform hover:-translate-y-1 hover:shadow-[0_15px_25px_rgba(0,0,0,0.2)] text-lg uppercase tracking-widest"
              >
                PAY & MAKE YOUR MARK
              </button>
              
              <p className="text-center text-xs text-gray-500 mt-4 font-medium">
                Redirecting to Razorpay secure checkout.<br/>
                Submitted form will be sent to strategy@stralchemy.com
              </p>
          </div>

        </form>
      </div>
    </section>
  );
};

export default BrandingFormSection;
