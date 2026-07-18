import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransformFormSection = () => {
  const [activeTab, setActiveTab] = useState('branding');
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
    vision: '',
    challenges: '',
    goals: '',
    audience: '',
    additionalInfo: '',
    packageValue: '' // We will set this based on select
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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormData({ ...formData, packageValue: '' }); // reset package when tab changes
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
            // Pass auth token if logged in
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            const headers = userInfo ? { Authorization: `Bearer ${userInfo.token}` } : {};

            const verifyRes = await axios.post(`${import.meta.env.VITE_API_URL}/api/strategy/verify-payment`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature || 'mock_signature',
              formData: { ...formData, packageTab: activeTab }
            }, { headers });

            setSuccessMsg('Payment successful! Your strategy request has been submitted. Check your Dashboard.');
            setFormData({
              name: '', email: '', phone: '', businessName: '', industry: '',
              stage: '', website: '', vision: '', challenges: '', goals: '',
              audience: '', additionalInfo: '', packageValue: ''
            });
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

  const renderPackageDropdown = () => {
    if (activeTab === 'branding') {
      return (
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-bold text-gray-800 flex items-center justify-between">
            <span>Branding Strategy <span className="text-red-500">*</span></span>
          </label>
          <select required name="packageValue" value={formData.packageValue} onChange={handleChange} className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors text-gray-700 appearance-none">
            <option value="">Select a package...</option>
            <option value="starter">Starter Strategy (Rs.8,999/-)</option>
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
          </label>
          <select required name="packageValue" value={formData.packageValue} onChange={handleChange} className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors text-gray-700 appearance-none">
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
          </label>
          <select required name="packageValue" value={formData.packageValue} onChange={handleChange} className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-colors text-gray-700 appearance-none">
            <option value="">Select a package...</option>
            <option value="starter_foundation">Starter + Foundation Strategy (Rs.19,999/-)</option>
            <option value="complete_growth">Complete + Growth Strategy (Rs.42,999/-)</option>
            <option value="enterprise_scale">Enterprise + Scale Strategy (Rs.89,999/-)</option>
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
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center mb-16 relative">
           <div className="flex space-x-2">
             {['branding', 'marketing', 'bundle'].map((tab) => (
               <button
                 key={tab}
                 type="button"
                 onClick={() => handleTabChange(tab)}
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
          <form className="space-y-16" onSubmit={handleSubmit}>
             
             {/* Step 1 */}
             <div>
               <h4 className="text-xl font-bold text-gray-900 mb-8 border-b pb-2 border-gray-100">1. Tell Us About Your Business</h4>
               <div className="space-y-6">
                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Name <span className="text-red-500">*</span></label>
                   <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0]" />
                 </div>
                 
                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Email Address <span className="text-red-500">*</span></label>
                   <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0]" />
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Phone Number <span className="text-red-500">*</span></label>
                   <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0]" />
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Business Name <span className="text-red-500">*</span></label>
                   <input required name="businessName" value={formData.businessName} onChange={handleChange} type="text" className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0]" />
                 </div>

                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Select Your Industry <span className="text-red-500">*</span></label>
                   <select required name="industry" value={formData.industry} onChange={handleChange} className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] appearance-none">
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
                   <select required name="stage" value={formData.stage} onChange={handleChange} className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] appearance-none">
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
                   <input name="website" value={formData.website} onChange={handleChange} type="url" className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0]" />
                 </div>
               </div>
             </div>

             {/* Step 2 */}
             <div>
               <h4 className="text-xl font-bold text-gray-900 mb-8 border-b pb-2 border-gray-100">2. Your Project Goals</h4>
               <div className="space-y-6">
                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Brief the vision for your business <span className="text-red-500">*</span></label>
                   <textarea required name="vision" value={formData.vision} onChange={handleChange} className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] resize-none"></textarea>
                 </div>
                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">What challenges are you facing? <span className="text-red-500">*</span></label>
                   <textarea required name="challenges" value={formData.challenges} onChange={handleChange} className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] resize-none"></textarea>
                 </div>
                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">What are your primary goals? <span className="text-red-500">*</span></label>
                   <textarea required name="goals" value={formData.goals} onChange={handleChange} className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] resize-none"></textarea>
                 </div>
                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Target Audience <span className="text-red-500">*</span></label>
                   <textarea required name="audience" value={formData.audience} onChange={handleChange} className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] resize-none"></textarea>
                 </div>
                 <div className="flex flex-col space-y-2">
                   <label className="text-xs font-bold text-gray-800">Additional Information</label>
                   <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] resize-none"></textarea>
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
               {errorMsg && <div className="bg-red-50 text-red-600 p-4 rounded mb-6 font-bold text-center">{errorMsg}</div>}
               {successMsg && <div className="bg-green-50 text-green-600 p-4 rounded mb-6 font-bold text-center">{successMsg}</div>}
               <button 
                 type="submit" 
                 disabled={loading}
                 className={`w-full bg-gradient-to-r text-white font-bold py-5 rounded shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-2xl text-lg uppercase tracking-wide ${loading ? 'from-gray-600 to-gray-700 cursor-not-allowed' : 'from-gray-900 to-black hover:from-black hover:to-gray-900'}`}
               >
                 {loading ? 'PROCESSING...' : 'PAY 50% & SEAL THE DEAL'}
               </button>
               <p className="text-center text-xs text-gray-500 mt-4">
                 Redirecting to secure checkout. 50% required to begin. Remaining 50% upon delivery.
               </p>
             </div>
             
          </form>
        </div>
      </div>
    </section>
  );
};

export default TransformFormSection;
