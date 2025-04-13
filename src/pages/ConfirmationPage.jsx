// import React, { useEffect } from 'react';
// import { Link, Navigate } from 'react-router-dom';
// import { FaCheckCircle } from 'react-icons/fa';

// const ConfirmationPage = ({ success, resetCart }) => {
//   // If not coming from a successful payment, redirect to home
//   if (!success) {
//     return <Navigate to="/" />;
//   }
  
//   // Reset cart after showing confirmation
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       // Optional: Auto redirect after 5 seconds
//       // history.push('/');
//     }, 5000);
    
//     return () => clearTimeout(timer);
//   }, []);
  
//   return (
//     <div className="container mx-auto px-4 py-16 max-w-2xl text-center">
//       <div className="bg-white p-8 rounded-lg shadow-md">
//         <div className="flex justify-center mb-4">
//           <FaCheckCircle className="text-green-500 text-6xl" />
//         </div>
        
//         <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
        
//         <p className="text-gray-600 mb-6">
//           Thank you for your purchase. Your order has been confirmed and will be shipped soon.
//         </p>
        
//         <div className="bg-gray-50 p-4 rounded-lg mb-6">
//           <p className="font-medium">Order confirmation has been sent to your email.</p>
//         </div>
        
//         <Link 
//           to="/"
//           onClick={resetCart}
//           className="inline-block px-6 py-3 bg-pink-300 hover:bg-pink-400 rounded-lg font-medium transition"
//         >
//           Continue Shopping
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ConfirmationPage;

import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const OrderConfirmation = () => {
  const { paymentSuccess, resetCart } = useCart();
  
  // If not coming from a successful payment, redirect to home
  if (!paymentSuccess) {
    return <Navigate to="/home" />;
  }
  
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
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="font-medium">Order confirmation has been sent to your email.</p>
        </div>
        
        <Link 
          to="/home"
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