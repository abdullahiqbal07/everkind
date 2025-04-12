import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          <a href="/sustainability" className="text-gray-600 hover:text-gray-900">
            Sustainability
          </a>
          <a href="/reviews" className="text-gray-600 hover:text-gray-900">
            Customer Reviews
          </a>
          <a href="/faqs" className="text-gray-600 hover:text-gray-900">
            FAQs
          </a>
          <a href="/subscriptions" className="text-gray-600 hover:text-gray-900">
            Subscriptions
          </a>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-6">
          <a href="https://instagram.com" className="text-gray-500 hover:text-gray-700" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" className="text-gray-500 hover:text-gray-700" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" className="text-gray-500 hover:text-gray-700" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © 2024 Everkind. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;