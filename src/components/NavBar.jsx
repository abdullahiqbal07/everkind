import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaShoppingCart, FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png"
export default function Navbar() {
    const [cartItems, setCartItems] = useState(2);

    return (
        <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <img
                    src={logo}
                    alt="Logo"
                    className="w-6 h-6 object-contain mr-1"
                />

                <span className="text-pink-300 font-light text-xl tracking-wide">everkind</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8 ml-16">
                <Link to="/" className="text-black font-semibold hover:text-pink-400">Home</Link>
                <Link to="/our-story" className="text-black font-semibold hover:text-pink-400">Our Story</Link>
                <Link to="/contacts" className="text-black font-semibold hover:text-pink-400">Contacts</Link>
                <Link to="/self-care" className="text-black font-semibold hover:text-pink-400">Self Care</Link>
                <Link to="/blog" className="text-black font-semibold hover:text-pink-400">Blog</Link>
            </div>

            {/* Search Bar */}
            <div className="relative flex-grow max-w-xs mx-6">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-2 pl-4 pr-10 rounded-full focus:outline-none text-white placeholder-white"
                    style={{ backgroundColor: '#d8aebe' }}
                />
                <FaSearch className="absolute right-3 top-3 text-white" />
            </div>

            {/* Cart and Profile */}
            <div className="flex items-center space-x-4">
                <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                    <FaShoppingCart className="text-gray-700 mr-2" />
                    <span className="font-semibold">Cart ({cartItems})</span>
                </div>
                <div className="h-8 w-8 rounded-full overflow-hidden">
                    <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="Profile"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </nav>
    );
}
