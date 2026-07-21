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
            <a href="#" className="bg-gray-100 text-brand-purple p-2 rounded-full hover:bg-brand-purple hover:text-white transition-colors w-10 h-10 flex items-center justify-center font-bold text-xs" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="bg-gray-100 text-brand-purple p-2 rounded-full hover:bg-brand-purple hover:text-white transition-colors w-10 h-10 flex items-center justify-center font-bold text-xs" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="bg-gray-100 text-brand-purple p-2 rounded-full hover:bg-brand-purple hover:text-white transition-colors w-10 h-10 flex items-center justify-center font-bold text-xs" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="bg-gray-100 text-brand-purple p-2 rounded-full hover:bg-brand-purple hover:text-white transition-colors w-10 h-10 flex items-center justify-center font-bold text-xs" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
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
      <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="fixed bottom-20 right-8 bg-[#25D366] p-4 rounded-full text-white shadow-lg hover:bg-[#128C7E] transition-colors z-50 flex items-center justify-center" aria-label="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </footer>
  );
};

export default Footer;
