import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
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
      <div className="max-w-3xl mx-auto">
        
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Your Profile</h1>
          <p className="text-gray-500 mt-1">Manage your account details and settings.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header Area */}
          <div className="h-32 bg-brand-purple relative">
             <div className="absolute -bottom-12 left-8 w-24 h-24 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center text-3xl font-bold text-brand-purple shadow-md uppercase">
               {userInfo.firstName ? userInfo.firstName.charAt(0) : userInfo.username.charAt(0)}
             </div>
          </div>
          
          <div className="pt-16 pb-8 px-8 border-b border-gray-100">
             <h2 className="text-2xl font-bold text-gray-900">
               {userInfo.firstName} {userInfo.lastName}
             </h2>
             <p className="text-gray-500">@{userInfo.username}</p>
          </div>

          {/* Details Form (Read Only for now) */}
          <div className="p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">First Name</label>
                <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 font-medium">
                  {userInfo.firstName || 'Not provided'}
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Last Name</label>
                <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 font-medium">
                  {userInfo.lastName || 'Not provided'}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Username</label>
                <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 font-medium">
                  {userInfo.username}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email Address</label>
                <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 font-medium">
                  {userInfo.email}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 flex justify-end">
              <button 
                type="button" 
                className="bg-brand-purple hover:bg-opacity-90 text-white px-6 py-2 rounded-lg font-semibold transition-all shadow-sm opacity-50 cursor-not-allowed"
                title="Profile editing coming soon"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
