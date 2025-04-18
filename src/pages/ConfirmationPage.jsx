import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const OrderConfirmation = () => {
  const { paymentSuccess, resetCart } = useCart();
  
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl text-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-green-500 text-6xl" />
        </div>
        
        <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
        
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been confirmed and will be shipped soon.
        </p>
        
        <Link 
          to="/"
          onClick={resetCart}
          className="inline-block px-6 py-3 bg-pink-300 hover:bg-pink-400 rounded-lg font-medium transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;