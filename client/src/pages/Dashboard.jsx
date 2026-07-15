import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('userInfo');
    if (!user) {
      navigate('/login');
    } else {
      setUserInfo(JSON.parse(user));
    }
  }, [navigate]);

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
            
            {/* Recent Activity Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Recent Activity
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-brand-green flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Account Created</h4>
                    <p className="text-gray-500 text-xs mt-1">You successfully joined the Stralchemy platform.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-brand-purple flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Explored Services</h4>
                    <p className="text-gray-500 text-xs mt-1">You viewed our Branding and Marketing capabilities.</p>
                  </div>
                </div>
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
