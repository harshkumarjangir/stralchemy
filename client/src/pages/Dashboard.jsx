import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [strategies, setStrategies] = useState([]);
  const [loadingPayment, setLoadingPayment] = useState(false);
  const navigate = useNavigate();

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const user = localStorage.getItem('userInfo');
    if (!user) {
      navigate('/login');
    } else {
      const parsedUser = JSON.parse(user);
      setUserInfo(parsedUser);
      fetchStrategies(parsedUser);
    }
  }, [navigate]);

  const fetchStrategies = async (user) => {
    try {
      const config = { headers: { Authorization: `Bearer ${user.token}` } };
      const { data } = await axios.get(`http://localhost:5000/api/strategy/user?email=${user.email}`, config);
      setStrategies(data);
    } catch (error) {
      console.error('Failed to fetch strategies');
    }
  };

  const handleFinalPayment = async (strategy) => {
    setLoadingPayment(true);
    try {
      // 1. Create final order
      const { data: { order, keyId } } = await axios.post(`http://localhost:5000/api/strategy/${strategy._id}/create-final-order`);

      // 2. Open Razorpay Checkout
      const options = {
        key: keyId,
        amount: order.amount,
        currency: order.currency,
        name: 'Stralchemy',
        description: 'Remaining 50% Strategy Payment',
        order_id: order.id,
        handler: async function (response) {
          try {
            // 3. Verify Payment
            await axios.post(`http://localhost:5000/api/strategy/${strategy._id}/verify-final-payment`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature || 'mock_signature',
            });
            alert('Payment successful! You can now download your strategy.');
            fetchStrategies(userInfo);
          } catch (err) {
            alert('Payment verification failed.');
          }
        },
        prefill: {
          name: strategy.name,
          email: strategy.email,
          contact: strategy.phone
        },
        theme: {
          color: '#9c27b0'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response) {
        alert('Payment failed. Please try again.');
      });
      rzp.open();
    } catch (err) {
      alert('Failed to initiate checkout.');
    } finally {
      setLoadingPayment(false);
    }
  };

  const handleDownload = async (strategyId) => {
    try {
      // Simple redirect to download endpoint
      window.open(`http://localhost:5000/api/strategy/${strategyId}/download`, '_blank');
    } catch (err) {
      alert('Failed to download.');
    }
  };

  if (!userInfo) return null;

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Welcome Banner */}
        <div className="bg-brand-purple rounded-xl shadow-lg p-8 mb-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl font-extrabold mb-2 tracking-tight">
              Welcome back, {userInfo.firstName || userInfo.username}! 👋
            </h1>
            <p className="text-purple-100 text-lg max-w-2xl">
              This is your personal Stralchemy dashboard. Track your strategy progress, access exclusive resources, and manage your account.
            </p>
          </div>
          {/* Abstract Shapes */}
          <div className="absolute -top-24 -right-10 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-24 right-40 w-48 h-48 bg-[#cba328] opacity-20 rounded-full blur-xl"></div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Content Area (Spans 2 columns on tablet/desktop) */}
          <div className="md:col-span-2 space-y-8">
            
            {/* My Strategies Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                My Strategies
              </h2>
              
              <div className="space-y-6">
                {strategies.length === 0 ? (
                  <p className="text-gray-500 text-sm">You haven't requested any strategies yet.</p>
                ) : (
                  strategies.map(strat => (
                    <div key={strat._id} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-bold text-gray-900 capitalize">{strat.packageValue.replace('_', ' ')} Strategy</h4>
                          <p className="text-sm text-gray-500">{strat.businessName}</p>
                        </div>
                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                          strat.paymentStatus === 'fully_paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {strat.paymentStatus === 'fully_paid' ? 'Fully Paid' : '50% Paid'}
                        </span>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {new Date(strat.createdAt).toLocaleDateString()}
                        </span>
                        
                        <div>
                          {strat.pdfUrl ? (
                            strat.paymentStatus === 'fully_paid' ? (
                              <button 
                                onClick={() => handleDownload(strat._id)}
                                className="bg-brand-purple text-white px-4 py-2 rounded text-sm font-bold shadow hover:bg-opacity-90 transition-all"
                              >
                                Download PDF
                              </button>
                            ) : (
                              <button 
                                onClick={() => handleFinalPayment(strat)}
                                disabled={loadingPayment}
                                className="bg-brand-green text-white px-4 py-2 rounded text-sm font-bold shadow hover:bg-opacity-90 transition-all"
                              >
                                {loadingPayment ? 'Processing...' : 'Pay Remaining 50% to Download'}
                              </button>
                            )
                          ) : (
                            <span className="text-sm text-gray-400 italic">Processing strategy...</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            
            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h2>
              <div className="space-y-3">
                <a href="/profile" className="flex items-center p-3 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-brand-purple hover:text-white transition-colors group">
                  <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  Manage Profile
                </a>
                <a href="/blogs" className="flex items-center p-3 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-brand-purple hover:text-white transition-colors group">
                  <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                  Read Latest Insights
                </a>
                <a href="/case-studies" className="flex items-center p-3 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-brand-purple hover:text-white transition-colors group">
                  <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  View Case Studies
                </a>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="bg-gradient-to-br from-gray-900 to-brand-purple rounded-xl shadow-md p-6 text-white text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Need Strategic Help?</h3>
              <p className="text-gray-200 text-sm mb-6">Our experts are ready to help you unlock the Stralchemy standard.</p>
              <a href="/contact" className="inline-block w-full bg-white text-brand-purple font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                Contact Us
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
