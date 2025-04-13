// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaSadTear } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="text-6xl text-red-400 mb-4 flex justify-center">
          <FaSadTear />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
