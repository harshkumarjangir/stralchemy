import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import AdminLayout from './components/AdminLayout';
import BlogManager from './pages/BlogManager';
import BlogEditor from './pages/BlogEditor';
import ContactMessages from './pages/ContactMessages';
import StrategyManager from './pages/StrategyManager';
import CaseStudyLeads from './pages/CaseStudyLeads';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  useEffect(() => {
    // Setup global axios interceptor
    const reqInterceptor = axios.interceptors.request.use((config) => {
      const adminInfo = localStorage.getItem('adminInfo');
      if (adminInfo) {
        const { token } = JSON.parse(adminInfo);
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    const resInterceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('adminInfo');
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(reqInterceptor);
      axios.interceptors.response.eject(resInterceptor);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/" element={<BlogManager />} />
            <Route path="/blogs/new" element={<BlogEditor />} />
            <Route path="/blogs/edit/:id" element={<BlogEditor />} />
            <Route path="/contacts" element={<ContactMessages />} />
            <Route path="/strategies" element={<StrategyManager />} />
            <Route path="/case-studies" element={<CaseStudyLeads />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;