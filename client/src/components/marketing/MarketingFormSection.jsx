import React, { useState } from 'react';

const MarketingFormSection = () => {
  return (
    <section id="marketing-form" className="py-24 px-8 bg-white relative">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#b968c7] to-[#7f26d9] tracking-tight mb-4 uppercase">
          UNVEIL YOUR GAME PLAN FOR GROWTH
        </h2>
        <p className="text-xl text-gray-600 font-medium">
          Tell us about your growth goals and we’ll create a custom marketing strategy proposal.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Form Container */}
        <div className="bg-white">
          <form className="space-y-16">
             
             {/* Step 1 */}
             <div>
               <h4 className="text-xl font-bold text-gray-900 mb-8 border-b pb-2 border-gray-100">1. Tell Us About Your Business</h4>
               <div className="space-y-6">
                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Your Name <span className="text-red-500">*</span></label>
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
               <h4 className="text-xl font-bold text-gray-900 mb-8 border-b pb-2 border-gray-100">2. Your Current Marketing</h4>
               <div className="space-y-6">
                 
                 <div className="flex flex-col space-y-3">
                   <label className="text-xs font-bold text-gray-800">Which Marketing Channels Are You Currently Using? <span className="text-red-500">*</span></label>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                     <label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[#9c27b0] focus:ring-[#9c27b0]" /> <span>SEO</span></label>
                     <label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[#9c27b0] focus:ring-[#9c27b0]" /> <span>Content Marketing</span></label>
                     <label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[#9c27b0] focus:ring-[#9c27b0]" /> <span>Social Media</span></label>
                     <label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[#9c27b0] focus:ring-[#9c27b0]" /> <span>Email Marketing</span></label>
                     <label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[#9c27b0] focus:ring-[#9c27b0]" /> <span>Paid Advertising</span></label>
                     <label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[#9c27b0] focus:ring-[#9c27b0]" /> <span>Video Marketing</span></label>
                     <label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[#9c27b0] focus:ring-[#9c27b0]" /> <span>PR & Outreach</span></label>
                     <label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[#9c27b0] focus:ring-[#9c27b0]" /> <span>Partnerships</span></label>
                     <label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[#9c27b0] focus:ring-[#9c27b0]" /> <span>None Yet</span></label>
                   </div>
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Current Monthly Marketing Budget? <span className="text-red-500">*</span></label>
                   <select className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors text-gray-700 appearance-none">
                     <option value="">Select budget range</option>
                     <option value="Under ₹5,000/-">Under ₹5,000/-</option>
                     <option value="₹5,000 -₹10,000/-">₹5,000 -₹10,000/-</option>
                     <option value="₹10,000 - ₹25,000/-">₹10,000 - ₹25,000/-</option>
                     <option value="₹25,000 - ₹50,000/-">₹25,000 - ₹50,000/-</option>
                     <option value="₹50,000 - ₹100,000/-">₹50,000 - ₹100,000/-</option>
                     <option value="₹100,000/-+">₹100,000/-+</option>
                     <option value="No Current Budget">No Current Budget</option>
                   </select>
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Current Monthly Revenue</label>
                   <select className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors text-gray-700 appearance-none">
                     <option value="">Select range</option>
                     <option value="Under ₹10,000/-">Under ₹10,000/-</option>
                     <option value="₹10,000 -₹50,000/-">₹10,000 -₹50,000/-</option>
                     <option value="₹50,000 - ₹100,000/-">₹50,000 - ₹100,000/-</option>
                     <option value="₹100,000 - ₹500,000/-">₹100,000 - ₹500,000/-</option>
                     <option value="₹500,000 - ₹1M">₹500,000 - ₹1M</option>
                     <option value="₹1M+">₹1M+</option>
                   </select>
                 </div>

                 <div className="flex flex-col space-y-3">
                   <label className="text-xs font-bold text-gray-800">What are your key performance metrics? (What Matters Most?)</label>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                     <label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[#9c27b0] focus:ring-[#9c27b0]" /> <span>Website Traffic</span></label>
                     <label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[#9c27b0] focus:ring-[#9c27b0]" /> <span>Lead Generation</span></label>
                     <label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[#9c27b0] focus:ring-[#9c27b0]" /> <span>Sales/Revenue</span></label>
                     <label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[#9c27b0] focus:ring-[#9c27b0]" /> <span>Brand Awareness</span></label>
                     <label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[#9c27b0] focus:ring-[#9c27b0]" /> <span>Engagement</span></label>
                     <label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[#9c27b0] focus:ring-[#9c27b0]" /> <span>Customer Retention</span></label>
                     <label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-[#9c27b0] focus:ring-[#9c27b0]" /> <span>ROI/ROAS</span></label>
                   </div>
                 </div>

               </div>
             </div>

             {/* Step 3 */}
             <div>
               <h4 className="text-xl font-bold text-gray-900 mb-8 border-b pb-2 border-gray-100">3. Your Marketing Goals</h4>
               <div className="space-y-6">
                 
                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">What Are Your Biggest Marketing Challenges? <span className="text-red-500">*</span></label>
                   <textarea 
                     placeholder="(What’s holding you back from achieving your growth goals? Be specific..)" 
                     className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors resize-none"
                   ></textarea>
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">What Are Your Primary Marketing Goals? <span className="text-red-500">*</span></label>
                   <textarea 
                     placeholder="(What do you want to achieve in the next 6-12 months? Include specific numbers if possible...)" 
                     className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors resize-none"
                   ></textarea>
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Target Audience <span className="text-red-500">*</span></label>
                   <textarea 
                     placeholder="(Who are your ideal customer? Demographics,behavior,pain...)" 
                     className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors resize-none"
                   ></textarea>
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Who Are Your Main Competitors?</label>
                   <textarea 
                     placeholder="(List 2-3 main competitors or similar businesses)" 
                     className="w-full h-20 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors resize-none"
                   ></textarea>
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Additional Information</label>
                   <textarea 
                     placeholder="(Anything else you’d like us to know? Past marketing successes/failures, specific requirements, inspirations…)" 
                     className="w-full h-20 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors resize-none"
                   ></textarea>
                 </div>

                 <div className="flex flex-col space-y-2 pt-6">
                   <label className="text-sm font-bold text-gray-800 flex items-center justify-between">
                     <span>OWN YOUR WINNING MOVE <span className="text-red-500">*</span></span>
                     <button type="button" className="text-brand-purple text-xs underline hover:text-purple-700">View Plan Details</button>
                   </label>
                   <select className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors text-gray-700 appearance-none">
                     <option value="">Select a package...</option>
                     <option value="foundation">Foundation Strategy (Rs.11,999/-)</option>
                     <option value="growth">Growth Strategy (Rs.24,999/-)</option>
                     <option value="scale">Scale Strategy (Rs.53,999/-)</option>
                   </select>
                 </div>

               </div>
             </div>

             {/* Submit */}
             <div className="pt-8">
               <button 
                 type="button" 
                 className="w-full bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900 text-white font-bold py-5 rounded shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-2xl text-lg uppercase tracking-wide"
               >
                 PAY & POWER UP
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

export default MarketingFormSection;
