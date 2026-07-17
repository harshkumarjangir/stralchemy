import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contacts`, formData);
      setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
      setFormData({ name: '', email: '', mobile: '', message: '' });
    } catch (error) {
      console.error('Contact submission error:', error);
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-24 px-8 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple rounded-full blur-[120px] opacity-20 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-green rounded-full blur-[120px] opacity-20 pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Contact Info */}
        <div className="flex flex-col justify-center">
          <p className="text-brand-purple font-bold tracking-widest uppercase text-sm mb-4">
            Contact Us
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-8">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-green">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Ready to move from guesswork to strategic clarity? We'd love to hear from you. Drop us a message and our team will get back to you shortly.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-purple-50 text-brand-purple rounded-full flex items-center justify-center mr-6 flex-shrink-0 text-xl shadow-sm border border-purple-100">
                ✉️
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Email Us</h3>
                <p className="text-gray-600">strategy@stralchemy.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-purple/10 to-transparent rounded-tr-3xl pointer-events-none"></div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h2>

          {status.message && (
            <div className={`mb-6 p-4 rounded-lg font-medium text-sm ${
              status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {status.message}
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">Name <span className="text-brand-purple">*</span></label>
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
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">Email <span className="text-brand-purple">*</span></label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com" 
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">Mobile Number <span className="text-brand-purple">*</span></label>
              <input 
                type="tel" 
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+91 98765 43210" 
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">Message <span className="text-brand-purple">*</span></label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?" 
                rows="4"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full text-white font-bold py-4 rounded-full shadow-lg transition-all transform uppercase tracking-wide text-sm ${
                isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-900 hover:-translate-y-1 hover:shadow-2xl hover:bg-black'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
