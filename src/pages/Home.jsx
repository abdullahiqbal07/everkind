import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-semibold text-blue-400">
            EverKind
          </div>

          {/* Links */}
          <ul className="flex space-x-6">
            <li className="hover:text-blue-400 transition duration-200 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 transition duration-200 cursor-pointer">About</li>
            <li className="hover:text-blue-400 transition duration-200 cursor-pointer">Services</li>
            <li className="hover:text-blue-400 transition duration-200 cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
