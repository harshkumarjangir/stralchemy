import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1); // 1 = request email, 2 = verify otp & set new password
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRequestOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await axios.post('http://localhost:5000/api/users/forgot-password', { email });
      setSuccess('OTP sent to your email address!');
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send OTP.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await axios.post('http://localhost:5000/api/users/reset-password', {
        email,
        otp,
        newPassword
      });
      setSuccess('Password reset successfully! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to reset password. Invalid OTP?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Reset Password</h2>
        <p className="text-gray-500 text-center text-sm mb-6">
          {step === 1 ? "Enter your email address and we'll send you an OTP to reset your password." : "Enter the OTP sent to your email and your new password."}
        </p>

        {error && <div className="bg-red-50 text-red-700 p-3 rounded mb-4 text-sm">{error}</div>}
        {success && <div className="bg-green-50 text-green-700 p-3 rounded mb-4 text-sm">{success}</div>}

        {step === 1 ? (
          <form className="space-y-4" onSubmit={handleRequestOTP}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
                placeholder="Enter your email"
              />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className={`w-full text-white font-bold py-2 px-4 rounded-md transition-colors ${
                loading ? 'bg-brand-purple/70 cursor-not-allowed' : 'bg-brand-purple hover:bg-opacity-90'
              }`}
            >
              {loading ? 'Sending...' : 'Send OTP'}
            </button>
          </form>
        ) : (
          <form className="space-y-4" onSubmit={handleResetPassword}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">OTP</label>
              <input 
                type="text"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple tracking-widest text-center text-lg font-mono"
                placeholder="123456"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <input 
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
                placeholder="Create a new password"
              />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className={`w-full text-white font-bold py-2 px-4 rounded-md transition-colors ${
                loading ? 'bg-brand-green/70 cursor-not-allowed' : 'bg-brand-green hover:bg-opacity-90'
              }`}
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-sm text-gray-600">
          Remember your password?{' '}
          <Link to="/login" className="text-brand-purple hover:text-opacity-80 font-medium">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
