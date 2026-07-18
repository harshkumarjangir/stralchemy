import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/login`, {
        identifier,
        password
      });
      localStorage.setItem('userInfo', JSON.stringify(data));
      setSuccess('Login successful! Redirecting...');
      setTimeout(() => {
        // Redirect to home or dashboard after login, hard reload to update nav bar
        window.location.href = '/'; 
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        
        {error && <div className="bg-red-50 text-red-700 p-3 rounded mb-4 text-sm">{error}</div>}
        {success && <div className="bg-green-50 text-green-700 p-3 rounded mb-4 text-sm">{success}</div>}

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username or Email</label>
            <input 
              type="text" 
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
              placeholder="Enter your username or email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <Link to="/forgot-password" className="text-sm text-brand-purple hover:text-opacity-80 font-medium">
              Forgot password?
            </Link>
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className={`w-full text-white font-bold py-2 px-4 rounded-md transition-colors ${
              loading ? 'bg-brand-purple/70 cursor-not-allowed' : 'bg-brand-purple hover:bg-opacity-90'
            }`}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-brand-purple hover:text-opacity-80 font-medium">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
