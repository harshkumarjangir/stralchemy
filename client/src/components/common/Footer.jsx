import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-0 relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
        {/* Brand Section */}
        <div className="col-span-1">
          <img src="/logo.png" alt="Stralchemy Logo" className="h-10 mb-6" />
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Strategic branding and marketing solutions that turn ambitious businesses into market leaders. Custom strategies designed for your industry, stage, and goals—from day one to decade ten.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-100 text-brand-purple p-2 rounded-full hover:bg-brand-purple hover:text-white transition-colors w-10 h-10 flex items-center justify-center font-bold text-xs">
              IG
            </a>
            <a href="#" className="bg-gray-100 text-brand-purple p-2 rounded-full hover:bg-brand-purple hover:text-white transition-colors w-10 h-10 flex items-center justify-center font-bold text-xs">
              IN
            </a>
            <a href="#" className="bg-gray-100 text-brand-purple p-2 rounded-full hover:bg-brand-purple hover:text-white transition-colors w-10 h-10 flex items-center justify-center font-bold text-xs">
              FB
            </a>
            <a href="#" className="bg-gray-100 text-brand-purple p-2 rounded-full hover:bg-brand-purple hover:text-white transition-colors w-10 h-10 flex items-center justify-center font-bold text-xs">
              YT
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-brand-purple font-semibold text-lg mb-6">Services</h3>
          <ul className="space-y-4 text-gray-600 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-brand-purple transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions" className="hover:text-brand-purple transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-brand-purple font-semibold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-4 text-gray-600 text-sm">
            <li><Link to="/" className="hover:text-brand-purple transition-colors">HOME</Link></li>
            <li><Link to="/about" className="hover:text-brand-purple transition-colors">ABOUT US</Link></li>
            <li><Link to="/marketing" className="hover:text-brand-purple transition-colors">MARKETING</Link></li>
            <li><Link to="/branding" className="hover:text-brand-purple transition-colors">BRANDING</Link></li>
            <li><Link to="/case-studies" className="hover:text-brand-purple transition-colors">CASE STUDIES</Link></li>
            <li><Link to="/blogs" className="hover:text-brand-purple transition-colors">BLOGS</Link></li>
            <li><Link to="/contact" className="hover:text-brand-purple transition-colors">CONTACT</Link></li>
            <li><Link to="/login" className="hover:text-brand-purple transition-colors">Login</Link></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-brand-purple font-semibold text-lg mb-6">Get In Touch</h3>
          <p className="text-gray-600 text-sm mb-4">Email: strategy@stralchemy.com</p>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-2 text-gray-900 rounded bg-gray-100 border border-gray-200 outline-none focus:ring-2 focus:ring-brand-purple"
            />
            <button className="bg-brand-purple hover:bg-opacity-90 text-white font-medium py-2 rounded transition-colors self-start px-6">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 border-t border-gray-100 py-4 text-center text-sm text-gray-500">
        © 2026 All Rights Reserved. Powered By GrowLocale
      </div>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="fixed bottom-20 right-8 bg-brand-green p-4 rounded-full text-white shadow-lg hover:bg-opacity-90 transition-colors z-50 font-bold">
        WA
      </a>
    </footer>
  );
};

export default Footer;
