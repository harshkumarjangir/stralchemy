import React from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact Messages', path: '/contacts' },
    { name: 'Strategies', path: '/strategies' },
    { name: 'Case Studies', path: '/case-studies' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('adminInfo');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-start">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 shadow-sm flex-col hidden md:flex h-screen sticky top-0 overflow-y-auto">
        <div className="h-16 flex items-center px-8 border-b border-gray-200 flex-shrink-0">
          <img src="/logo.png" alt="Stralchemy Logo" className="h-12 object-contain" />
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b border-gray-200 h-16 flex items-center px-6 shadow-sm justify-between">
          <img src="/logo.png" alt="Stralchemy Logo" className="h-6 object-contain" />
          <button onClick={handleLogout} className="text-sm text-red-600 font-medium">Logout</button>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
