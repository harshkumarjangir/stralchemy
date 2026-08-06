import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BrandingFormSection = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    industry: '',
    stage: '',
    website: '',
    brandingNeed: '',
    currentAssets: [],
    brandAttributes: [],
    admiredBrands: '',
    vision: '',
    challenges: '',
    audience: '',
    competitors: '',
    difference: '',
    goals: '',
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

      // Format custom fields into additionalInfo for the backend schema
      const formattedAdditionalInfo = `
Branding Need: ${formData.brandingNeed}
Current Assets: ${formData.currentAssets.join(', ')}
Important Attributes: ${formData.brandAttributes.join(', ')}
Admired Brands: ${formData.admiredBrands}
Competitors: ${formData.competitors}
What makes them different: ${formData.difference}
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
        vision: formData.vision,
        challenges: formData.challenges,
        goals: formData.goals,
        audience: formData.audience,
        additionalInfo: formattedAdditionalInfo,
        packageTab: 'branding',
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

            setSuccessMsg('Payment successful! Redirecting to Thank You page...');
            setFormData({
              name: '', businessName: '', email: '', phone: '', industry: '', stage: '', website: '',
              brandingNeed: '', currentAssets: [], brandAttributes: [], admiredBrands: '', vision: '',
              challenges: '', audience: '', competitors: '', difference: '', goals: '', additionalInfo: '', packageValue: ''
            });
            // Reset checkboxes
            document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
            navigate('/thank-you?type=branding');
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
    <section id="branding-form" className="py-24 px-8 bg-white relative">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-pink-500 tracking-tight mb-4 uppercase">
          OUTLINE THE DNA OF YOUR BRAND
        </h2>
        <p className="text-lg text-gray-600 font-medium">
          Tell us about your brand vision and we’ll create a custom branding strategy proposal
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-12">
        <form className="space-y-16" onSubmit={handleSubmit}>
          
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
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold text-gray-800">Business Name <span className="text-red-500">*</span></label>
                  <input required name="businessName" value={formData.businessName} onChange={handleChange} type="text" className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-800">Email Address <span className="text-red-500">*</span></label>
                <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="(One-Time Secure code will be sent to open the strategy)" className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors text-sm" />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-800">Phone Number <span className="text-red-500">*</span></label>
                <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="(Strategy delivery intimation will be sent two days before)" className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors text-sm" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold text-gray-800">Select Your Industry <span className="text-red-500">*</span></label>
                  <select required name="industry" value={formData.industry} onChange={handleChange} className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors text-gray-700 appearance-none text-sm">
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
                  <select required name="stage" value={formData.stage} onChange={handleChange} className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors text-gray-700 appearance-none text-sm">
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
                <input name="website" value={formData.website} onChange={handleChange} type="url" className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" />
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
                <select required name="brandingNeed" value={formData.brandingNeed} onChange={handleChange} className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors text-gray-700 appearance-none text-sm">
                  <option value="">Select...</option>
                  <option value="Building a brand from scratch">Building a brand from scratch</option>
                  <option value="Refreshing/updating existing brand">Refreshing/updating existing brand</option>
                  <option value="Complete rebranding/ repositioning">Complete rebranding/ repositioning</option>
                  <option value="Clarifying brand strategy & messaging">Clarifying brand strategy & messaging</option>
                  <option value="Expanding to new markets/products">Expanding to new markets/products</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-800 block mb-3">Do you currently have any of the following?</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Logo', 'Brand Colors', 'Brand Guidelines', 'Messaging Framework', 'Brand Strategy Doc', 'None of the Above'].map(item => (
                    <label key={item} className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer p-2 rounded hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-colors">
                      <input type="checkbox" value={item} onChange={(e) => handleCheckboxChange(e, 'currentAssets')} className="rounded text-brand-purple focus:ring-brand-purple" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-800 block mb-3">What brand attributes are most important to you?</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Trustworthy', 'Innovative', 'Premium/Luxury', 'Approachable', 'Bold/Discipline', 'Professional', 'Sustainable', 'Authentic'].map(item => (
                    <label key={item} className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer p-2 rounded hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-colors">
                      <input type="checkbox" value={item} onChange={(e) => handleCheckboxChange(e, 'brandAttributes')} className="rounded text-brand-purple focus:ring-brand-purple" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-800">List 2-3 brands you admire (any industry) <span className="text-red-500">*</span></label>
                <input required name="admiredBrands" value={formData.admiredBrands} onChange={handleChange} type="text" className="w-full bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" />
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
                <textarea required name="vision" value={formData.vision} onChange={handleChange} placeholder="(What should your brand accomplish in the next 1-2 years? Be specific...)" className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors resize-none text-sm"></textarea>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-800">What challenges is your current brand facing? <span className="text-red-500">*</span></label>
                <textarea required name="challenges" value={formData.challenges} onChange={handleChange} placeholder="(e.g., Not standing out from competitors, inconsistent messaging, unclear positioning...)" className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors resize-none text-sm"></textarea>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-800">Target Audience <span className="text-red-500">*</span></label>
                <textarea required name="audience" value={formData.audience} onChange={handleChange} placeholder="(Who are your ideal customers? Demographics, psychographics...)" className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors resize-none text-sm"></textarea>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-800">Who are your main competitors? <span className="text-red-500">*</span></label>
                <textarea required name="competitors" value={formData.competitors} onChange={handleChange} placeholder="(List 2-3 main competitors)" className="w-full h-16 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors resize-none text-sm"></textarea>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-800">What makes you different from your competitors? <span className="text-red-500">*</span></label>
                <textarea required name="difference" value={formData.difference} onChange={handleChange} placeholder="(What’s your unique value proposition or competitive advantage?)" className="w-full h-20 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors resize-none text-sm"></textarea>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-800">What are your primary goals? <span className="text-red-500">*</span></label>
                <textarea required name="goals" value={formData.goals} onChange={handleChange} placeholder="(what do you hope to achieve with this strategy. Be specific about outcomes...)" className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors resize-none text-sm"></textarea>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-gray-800">Additional Information</label>
                <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} placeholder="(Anything else you’d like us to know? Specific requirements, preferences, constraints...)" className="w-full h-24 bg-[#f4f5f7] border border-gray-200 rounded p-3 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors resize-none text-sm"></textarea>
              </div>
            </div>
          </div>

          {/* Submit Section */}
          <div className="bg-gray-50 -mx-8 md:-mx-12 -mb-8 md:-mb-12 p-8 md:p-12 rounded-b-3xl border-t border-gray-100 mt-12">
             <div className="flex flex-col space-y-2 mb-6">
                <label className="text-sm font-bold text-gray-900">OWN YOUR BRAND PLAYBOOK ➝</label>
                <select required name="packageValue" value={formData.packageValue} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded p-4 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all text-gray-700 appearance-none font-medium shadow-sm">
                  <option value="">Select a Strategy Package...</option>
                  <option value="starter">Starter Strategy (Rs.8999/-)</option>
                  <option value="complete">Complete Strategy (Rs.19,999/-)</option>
                  <option value="enterprise">Enterprise Strategy (Rs.48,999/-)</option>
                </select>
              </div>
              
              {errorMsg && <div className="bg-red-50 text-red-600 p-4 rounded mb-6 font-bold text-center">{errorMsg}</div>}
              {successMsg && <div className="bg-green-50 text-green-600 p-4 rounded mb-6 font-bold text-center">{successMsg}</div>}
              
              <button 
                type="submit" 
                disabled={loading}
                className={`w-full text-white font-bold py-5 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-all transform hover:-translate-y-1 hover:shadow-[0_15px_25px_rgba(0,0,0,0.2)] text-lg uppercase tracking-widest ${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900'}`}
              >
                {loading ? 'PROCESSING...' : 'PAY & MAKE YOUR MARK'}
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
