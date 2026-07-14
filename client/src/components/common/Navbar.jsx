import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT US', path: '/about' },
  { name: 'MARKETING', path: '/marketing' },
  { name: 'BRANDING', path: '/branding' },
  {
    name: 'CASE STUDIES',
    dropdown: [
      { name: 'Study 1', path: '/case-studies/1' },
      { name: 'Study 2', path: '/case-studies/2' },
      { name: 'Study 3', path: '/case-studies/3' },
    ],
  },
  { name: 'BLOGS', path: '/blogs' },
  { name: 'CONTACT', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-2 px-8 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="flex items-center">
        <Link to="/">
          <img src="/logo.png" alt="Stralchemy Logo" className="h-14 lg:h-16 w-auto py-1 drop-shadow-sm transition-transform hover:scale-105 duration-300" />
        </Link>
      </div>
      <div className="hidden md:flex space-x-6 lg:space-x-8 text-gray-700 font-semibold text-sm tracking-wide items-center">
        {navLinks.map((link) => (
          link.dropdown ? (
            <div key={link.name} className="relative group py-2">
              <button className="flex items-center hover:text-brand-purple transition-colors outline-none uppercase font-semibold">
                {link.name}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-0 w-48 bg-white border border-gray-100 shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
                {link.dropdown.map((subLink) => (
                  <Link key={subLink.name} to={subLink.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-purple">
                    {subLink.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={link.name} to={link.path} className="hover:text-brand-purple transition-colors uppercase">
              {link.name}
            </Link>
          )
        ))}
      </div>
      <div className="hidden md:block">
        <Link to="/login" className="bg-brand-purple hover:bg-opacity-90 text-white px-6 py-2 rounded-full font-semibold transition-all">
          Login
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-brand-purple focus:outline-none p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-8 flex flex-col space-y-4 md:hidden z-40 max-h-[90vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <div className="flex flex-col space-y-3">
                  <span className="text-gray-900 font-bold uppercase tracking-wide">{link.name}</span>
                  <div className="pl-4 flex flex-col space-y-3 border-l-2 border-brand-purple/20">
                    {link.dropdown.map((subLink) => (
                      <Link key={subLink.name} to={subLink.path} className="text-gray-600 hover:text-brand-purple font-medium" onClick={() => setIsOpen(false)}>
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link to={link.path} className="text-gray-900 hover:text-brand-purple font-bold uppercase tracking-wide block" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-gray-100 mt-2">
            <Link to="/login" className="bg-brand-purple text-white px-6 py-3 rounded-full font-bold block text-center w-full shadow-md hover:bg-opacity-90 transition-all" onClick={() => setIsOpen(false)}>
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
