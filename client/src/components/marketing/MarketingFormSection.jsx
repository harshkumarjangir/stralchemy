import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MarketingFormSection = () => {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    industry: '',
    stage: '',
    website: '',
    channels: [],
    budget: '',
    revenue: '',
    metrics: [],
    challenges: '',
    goals: '',
    audience: '',
    competitors: '',
    additionalInfo: '',
    packageValue: ''
  });

  // Load Razorpay script on mount
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e, field) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    setFormData(prev => {
      const currentList = prev[field] || [];
      if (isChecked) {
        return { ...prev, [field]: [...currentList, value] };
      } else {
        return { ...prev, [field]: currentList.filter(item => item !== value) };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.packageValue) {
      setErrorMsg('Please select a strategy package.');
      return;
    }
    setErrorMsg('');
    setSuccessMsg('');
    setLoading(true);

    try {
      // 1. Create order
      const { data: { order, keyId } } = await axios.post(`${import.meta.env.VITE_API_URL}/api/strategy/create-order`, {
        packageValue: formData.packageValue
      });

      // Format custom fields into additionalInfo
      const formattedAdditionalInfo = `
Current Channels: ${formData.channels.join(', ')}
Monthly Budget: ${formData.budget}
Monthly Revenue: ${formData.revenue}
Key Metrics: ${formData.metrics.join(', ')}
Competitors: ${formData.competitors}
---
Additional Client Info: ${formData.additionalInfo}
      `.trim();

      const backendPayload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        businessName: formData.businessName,
        industry: formData.industry,
        stage: formData.stage,
        website: formData.website,
        vision: 'Marketing focused strategy request', // Vision is required by schema
        challenges: formData.challenges,
        goals: formData.goals,
        audience: formData.audience,
        additionalInfo: formattedAdditionalInfo,
        packageTab: 'marketing',
        packageValue: formData.packageValue
      };

      // 2. Open Razorpay Checkout
      const options = {
        key: keyId,
        amount: order.amount,
        currency: order.currency,
        name: 'Stralchemy',
        description: '50% Initial Strategy Payment',
        order_id: order.id,
        handler: async function (response) {
          try {
            // 3. Verify Payment
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            const headers = userInfo ? { Authorization: `Bearer ${userInfo.token}` } : {};

            await axios.post(`${import.meta.env.VITE_API_URL}/api/strategy/verify-payment`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature || 'mock_signature',
              formData: backendPayload
            }, { headers });

            setSuccessMsg('Payment successful! Your strategy request has been submitted. Check your Dashboard.');
            setFormData({
              name: '', email: '', phone: '', businessName: '', industry: '', stage: '', website: '',
              channels: [], budget: '', revenue: '', metrics: [], challenges: '', goals: '',
              audience: '', competitors: '', additionalInfo: '', packageValue: ''
            });
            // Reset checkboxes
            document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
          } catch (err) {
            setErrorMsg('Payment verification failed.');
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: '#9c27b0'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response) {
        setErrorMsg('Payment failed. Please try again.');
      });
      rzp.open();

    } catch (err) {
      setErrorMsg(err.response?.data?.message || 'Failed to initiate checkout.');
    } finally {
      setLoading(false);
    }
  };

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
          <form className="space-y-16" onSubmit={handleSubmit}>
             
             {/* Step 1 */}
             <div>
               <h4 className="text-xl font-bold text-gray-900 mb-8 border-b pb-2 border-gray-100">1. Tell Us About Your Business</h4>
               <div className="space-y-6">
                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Your Name <span className="text-red-500">*</span></label>
                   <input 
                     required name="name" value={formData.name} onChange={handleChange}
                     type="text" 
                     placeholder="Enter your name" 
                     className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors" 
                   />
                 </div>
                 
                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Email Address <span className="text-red-500">*</span></label>
                   <input 
                     required name="email" value={formData.email} onChange={handleChange}
                     type="email" 
                     placeholder="Enter your email (One-Time Secure code will be sent to open the strategy)" 
                     className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors" 
                   />
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Phone Number <span className="text-red-500">*</span></label>
                   <input 
                     required name="phone" value={formData.phone} onChange={handleChange}
                     type="tel" 
                     placeholder="Enter your mobile number (Strategy delivery intimation will be sent two days before)" 
                     className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors" 
                   />
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Business Name <span className="text-red-500">*</span></label>
                   <input 
                     required name="businessName" value={formData.businessName} onChange={handleChange}
                     type="text" 
                     placeholder="Enter business name" 
                     className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors" 
                   />
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Select Your Industry <span className="text-red-500">*</span></label>
                   <select required name="industry" value={formData.industry} onChange={handleChange} className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors text-gray-700 appearance-none">
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
                   <select required name="stage" value={formData.stage} onChange={handleChange} className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors text-gray-700 appearance-none">
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
                     name="website" value={formData.website} onChange={handleChange}
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
                     {['SEO', 'Content Marketing', 'Social Media', 'Email Marketing', 'Paid Advertising', 'Video Marketing', 'PR & Outreach', 'Partnerships', 'None Yet'].map(item => (
                       <label key={item} className="flex items-center space-x-2">
                         <input type="checkbox" value={item} onChange={(e) => handleCheckboxChange(e, 'channels')} className="rounded text-[#9c27b0] focus:ring-[#9c27b0]" /> 
                         <span>{item}</span>
                       </label>
                     ))}
                   </div>
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Current Monthly Marketing Budget? <span className="text-red-500">*</span></label>
                   <select required name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors text-gray-700 appearance-none">
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
                   <select name="revenue" value={formData.revenue} onChange={handleChange} className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors text-gray-700 appearance-none">
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
                     {['Website Traffic', 'Lead Generation', 'Sales/Revenue', 'Brand Awareness', 'Engagement', 'Customer Retention', 'ROI/ROAS'].map(item => (
                       <label key={item} className="flex items-center space-x-2">
                         <input type="checkbox" value={item} onChange={(e) => handleCheckboxChange(e, 'metrics')} className="rounded text-[#9c27b0] focus:ring-[#9c27b0]" /> 
                         <span>{item}</span>
                       </label>
                     ))}
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
                     required name="challenges" value={formData.challenges} onChange={handleChange}
                     placeholder="(What’s holding you back from achieving your growth goals? Be specific..)" 
                     className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors resize-none"
                   ></textarea>
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">What Are Your Primary Marketing Goals? <span className="text-red-500">*</span></label>
                   <textarea 
                     required name="goals" value={formData.goals} onChange={handleChange}
                     placeholder="(What do you want to achieve in the next 6-12 months? Include specific numbers if possible...)" 
                     className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors resize-none"
                   ></textarea>
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Target Audience <span className="text-red-500">*</span></label>
                   <textarea 
                     required name="audience" value={formData.audience} onChange={handleChange}
                     placeholder="(Who are your ideal customer? Demographics,behavior,pain...)" 
                     className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors resize-none"
                   ></textarea>
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Who Are Your Main Competitors?</label>
                   <textarea 
                     required name="competitors" value={formData.competitors} onChange={handleChange}
                     placeholder="(List 2-3 main competitors or similar businesses)" 
                     className="w-full h-20 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors resize-none"
                   ></textarea>
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Additional Information</label>
                   <textarea 
                     name="additionalInfo" value={formData.additionalInfo} onChange={handleChange}
                     placeholder="(Anything else you’d like us to know? Past marketing successes/failures, specific requirements, inspirations…)" 
                     className="w-full h-20 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors resize-none"
                   ></textarea>
                 </div>

                 <div className="flex flex-col space-y-2 pt-6">
                   <label className="text-sm font-bold text-gray-800 flex items-center justify-between">
                     <span>OWN YOUR WINNING MOVE <span className="text-red-500">*</span></span>
                     <button type="button" className="text-brand-purple text-xs underline hover:text-purple-700">View Plan Details</button>
                   </label>
                   <select required name="packageValue" value={formData.packageValue} onChange={handleChange} className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors text-gray-700 appearance-none">
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
               {errorMsg && <div className="bg-red-50 text-red-600 p-4 rounded mb-6 font-bold text-center">{errorMsg}</div>}
               {successMsg && <div className="bg-green-50 text-green-600 p-4 rounded mb-6 font-bold text-center">{successMsg}</div>}
               <button 
                 type="submit" 
                 disabled={loading}
                 className={`w-full text-white font-bold py-5 rounded shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-2xl text-lg uppercase tracking-wide ${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900'}`}
               >
                 {loading ? 'PROCESSING...' : 'PAY & POWER UP'}
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
