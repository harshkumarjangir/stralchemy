import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({
    blogs: '--',
    messages: '--',
    strategies: '--',
    caseStudies: '--'
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/stats`);
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="px-8 pb-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight sticky top-0 bg-gray-50 z-10 pt-8 pb-4 border-b border-gray-200">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
          <h3 className="text-gray-500 font-medium mb-2 uppercase text-sm tracking-wider">Total Blogs</h3>
          <p className="text-4xl font-bold text-blue-600">{stats.blogs}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
          <h3 className="text-gray-500 font-medium mb-2 uppercase text-sm tracking-wider">Messages</h3>
          <p className="text-4xl font-bold text-green-600">{stats.messages}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
          <h3 className="text-gray-500 font-medium mb-2 uppercase text-sm tracking-wider">Strategies</h3>
          <p className="text-4xl font-bold text-purple-600">{stats.strategies}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
          <h3 className="text-gray-500 font-medium mb-2 uppercase text-sm tracking-wider">Case Studies</h3>
          <p className="text-4xl font-bold text-orange-600">{stats.caseStudies}</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/blogs/new" className="px-4 py-3 bg-blue-50 text-blue-700 font-medium rounded-lg text-center hover:bg-blue-100 transition-colors">
            + New Blog
          </Link>
          <Link to="/contacts" className="px-4 py-3 bg-gray-50 text-gray-700 font-medium rounded-lg text-center hover:bg-gray-100 transition-colors">
            View Messages
          </Link>
          <Link to="/strategies" className="px-4 py-3 bg-gray-50 text-gray-700 font-medium rounded-lg text-center hover:bg-gray-100 transition-colors">
            Manage Strategies
          </Link>
          <Link to="/case-studies" className="px-4 py-3 bg-gray-50 text-gray-700 font-medium rounded-lg text-center hover:bg-gray-100 transition-colors">
            View Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
