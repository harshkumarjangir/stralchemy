import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import BlogManager from './pages/BlogManager';
import BlogEditor from './pages/BlogEditor';
import ContactMessages from './pages/ContactMessages';

const App = () => {
  return (
    <Router>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<BlogManager />} />
          <Route path="/blogs/new" element={<BlogEditor />} />
          <Route path="/blogs/edit/:id" element={<BlogEditor />} />
          <Route path="/contacts" element={<ContactMessages />} />
        </Routes>
      </AdminLayout>
    </Router>
  );
};

export default App;