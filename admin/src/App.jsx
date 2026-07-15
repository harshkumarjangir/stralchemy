import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogManager from './pages/BlogManager';
import BlogEditor from './pages/BlogEditor';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-sm py-4 px-8 border-b border-gray-200">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="font-bold text-xl text-blue-600">Stralchemy Admin</div>
          </div>
        </nav>
        <main className="py-8">
          <Routes>
            <Route path="/" element={<BlogManager />} />
            <Route path="/blogs/new" element={<BlogEditor />} />
            <Route path="/blogs/edit/:id" element={<BlogEditor />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;