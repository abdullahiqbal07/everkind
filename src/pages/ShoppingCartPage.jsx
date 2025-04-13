// // pages/ShoppingCartPage.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaPlus, FaMinus } from 'react-icons/fa';

// const ShoppingCartPage = ({ cartItems, recommendedItems, updateQuantity, addToCart }) => {
//   const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
//   return (
//     <div className="container mx-auto px-4 py-8 max-w-4xl">
//       <h1 className="text-3xl font-bold mb-6">My Bag ({cartItems.length} items)</h1>
      
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Cart Items */}
//         <div className="md:w-2/3">
//           {cartItems.map(item => (
//             <div key={item.id} className="flex items-center py-4 border-b">
//               <div className="h-24 w-24 bg-gray-100 rounded overflow-hidden">
//                 <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
//               </div>
              
//               <div className="ml-4 flex-grow">
//                 <h3 className="font-semibold text-lg">{item.name}</h3>
//                 <p className="text-gray-600">${item.price.toFixed(2)}</p>
//                 <p className="text-gray-500 text-sm">{item.description}</p>
//               </div>
              
//               <div className="flex items-center">
//                 <button 
//                   onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                   className="p-2 rounded-full hover:bg-gray-200"
//                 >
//                   <FaMinus size={14} />
//                 </button>
//                 <span className="mx-3">{item.quantity}</span>
//                 <button 
//                   onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                   className="p-2 rounded-full hover:bg-gray-200"
//                 >
//                   <FaPlus size={14} />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Order Summary */}
//         <div className="md:w-1/3">
//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
//             <div className="flex justify-between mb-2">
//               <span>Subtotal ({cartItems.length} items)</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>
            
//             <div className="flex justify-between mb-4">
//               <span>Shipping</span>
//               <span>Free</span>
//             </div>
            
//             <div className="border-t pt-4 mb-6">
//               <div className="flex justify-between font-semibold">
//                 <span>Estimated total</span>
//                 <span>${subtotal.toFixed(2)}</span>
//               </div>
//             </div>
            
//             <Link 
//               to="/checkout"
//               className="block w-full bg-pink-300 hover:bg-pink-400 text-center py-3 rounded-lg font-medium transition"
//             >
//               Proceed to checkout
//             </Link>
//           </div>
//         </div>
//       </div>
      
//       {/* Recommended Products */}
//       <div className="mt-12">
//         <h2 className="text-xl font-semibold mb-6">You might also like</h2>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {recommendedItems.map(item => (
//             <div key={item.id} className="flex items-center">
//               <div className="h-16 w-16 bg-gray-100 rounded overflow-hidden">
//                 <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
//               </div>
              
//               <div className="ml-4 flex-grow">
//                 <h3 className="font-semibold">{item.name}</h3>
//                 <p className="text-gray-600">${item.price.toFixed(2)}</p>
//                 <p className="text-gray-500 text-sm">{item.description}</p>
//               </div>
              
//               <button 
//                 onClick={() => addToCart(item)}
//                 className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition"
//               >
//                 Add to bag
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCartPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import Navbar from '../components/NavBar';

const ShoppingCart = () => {
  const { cartItems, recommendedItems, updateQuantity, addToCart } = useCart();
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  return (
    <>
    <Navbar />
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">My Bag ({cartItems.length} items)</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Cart Items */}
        <div className="md:w-2/3">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center py-4 border-b">
              <div className="h-24 w-24 bg-gray-100 rounded overflow-hidden">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              </div>
              
              <div className="ml-4 flex-grow">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
              
              <div className="flex items-center">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-2 rounded-full hover:bg-gray-200"
                >
                  <FaMinus size={14} />
                </button>
                <span className="mx-3">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-2 rounded-full hover:bg-gray-200"
                >
                  <FaPlus size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Order Summary */}
        <div className="md:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="flex justify-between mb-2">
              <span>Subtotal ({cartItems.length} items)</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between font-semibold">
                <span>Estimated total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
            
            <Link 
              to="/checkout"
              className="block w-full bg-pink-300 hover:bg-pink-400 text-center py-3 rounded-lg font-medium transition"
            >
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
      
      {/* Recommended Products */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-6">You might also like</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recommendedItems.map(item => (
            <div key={item.id} className="flex items-center">
              <div className="h-16 w-16 bg-gray-100 rounded overflow-hidden">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              </div>
              
              <div className="ml-4 flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
              
              <button 
                onClick={() => addToCart(item)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition"
              >
                Add to bag
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <Link 
          to="/"
          className="text-blue-600 hover:underline"
        >
          Continue shopping
        </Link>
      </div>
    </div>
    </>
  );
};

export default ShoppingCart;
