import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [cartItems, setCartItems] = useState(2);

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <div className="text-pink-300 mr-2">■</div>
        <span className="text-pink-300 font-light text-xl">everkind</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-gray-800 hover:text-pink-400">Home</Link>
        <Link to="/our-story" className="text-gray-800 hover:text-pink-400">Our Story</Link>
        <Link to="/contacts" className="text-gray-800 hover:text-pink-400">Contacts</Link>
        <Link to="/self-care" className="text-gray-800 hover:text-pink-400">Self Care</Link>
        <Link to="/blog" className="text-gray-800 hover:text-pink-400">Blog</Link>
      </div>

      {/* Search Bar */}
      <div className="relative flex-grow max-w-md mx-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 pl-4 pr-10 rounded-full focus:outline-none"
          style={{ backgroundColor: '#d8aebe' }} // from uploaded image
        />
        <FaSearch className="absolute right-3 top-3 text-gray-600" />
      </div>

      {/* Cart and Profile */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <FaShoppingCart className="mr-2 text-gray-700" />
          <span className="font-medium">Cart ({cartItems})</span>
        </div>
        <FaUserCircle className="text-3xl text-gray-600" />
      </div>
    </nav>
  );
}
