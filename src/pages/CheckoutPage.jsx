import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaCreditCard, FaPaypal } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, handlePaymentSuccess } = useCart();
  const [currentStep] = useState(2); // 1: Shipping, 2: Billing, 3: Confirmation
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
    agreeToTerms: false
  });
  const [formErrors, setFormErrors] = useState({});

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when field is changed
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null
      });
    }
  };
  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.cardName.trim()) errors.cardName = 'Name is required';
    if (!formData.cardNumber.trim()) errors.cardNumber = 'Card number is required';
    if (!formData.expiration.trim()) errors.expiration = 'Expiration date is required';
    if (!formData.cvv.trim()) errors.cvv = 'CVV is required';
    if (!formData.agreeToTerms) errors.agreeToTerms = 'You must agree to the terms';
    
    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Process payment
    handlePaymentSuccess();
    navigate('/order-confirmation');
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === cartItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? cartItems.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-xl font-medium">Everkind</h1>
        
        {/* Progress Bar */}
        <div className="flex items-center mt-6">
          <div className="flex-1 relative">
            <div className="h-px bg-gray-300 absolute inset-0"></div>
            <div className={`h-px absolute inset-y-0 left-0 right-1/2 ${currentStep >= 1 ? 'bg-pink-400' : 'bg-gray-300'}`}></div>
            <div className={`h-6 w-6 rounded-full border-2 absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 
              ${currentStep >= 1 ? 'border-pink-400 bg-pink-400' : 'border-gray-300 bg-white'}`}>
            </div>
            <div className="absolute -bottom-6 left-0 top-4">Shipping</div>
          </div>
          
          <div className="flex-1 relative">
            <div className="h-px bg-gray-300 absolute inset-0"></div>
            <div className={`h-px absolute inset-y-0 left-0 right-1/2 ${currentStep >= 2 ? 'bg-pink-400' : 'bg-gray-300'}`}></div>
            <div className={`h-6 w-6 rounded-full border-2 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 
              ${currentStep >= 2 ? 'border-pink-400 bg-pink-400' : 'border-gray-300 bg-white'}`}>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 top-4">Billing</div>
          </div>
          
          <div className="flex-1 relative">
            <div className="h-px bg-gray-300 absolute inset-0"></div>
            <div className={`h-px absolute inset-y-0 left-0 right-0 ${currentStep >= 3 ? 'bg-pink-400' : 'bg-gray-300'}`}></div>
            <div className={`h-6 w-6 rounded-full border-2 absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 
              ${currentStep >= 3 ? 'border-pink-400 bg-pink-400' : 'border-gray-300 bg-white'}`}>
            </div>
            <div className="absolute -bottom-6 right-0 top-4">Confirmation</div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8 mt-16">
        {/* Payment Form */}
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit}>
            <h2 className="font-semibold text-lg mb-4">Payment Method</h2>
            
            <div className="flex space-x-4 mb-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="mr-2"
                />
                <FaCreditCard className="text-gray-700" />
              </label>
              
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                  className="mr-2"
                />
                <FaPaypal className="text-blue-700" />
              </label>
            </div>
            
            <h2 className="font-semibold text-lg mb-4">Payment Details</h2>
            
            <div className="mb-4">
              <input
                type="text"
                name="cardName"
                placeholder="Enter Name on Card"
                value={formData.cardName}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded ${formErrors.cardName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {formErrors.cardName && <p className="text-red-500 text-sm mt-1">{formErrors.cardName}</p>}
            </div>
            
            <div className="mb-4 relative">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded ${formErrors.cardNumber ? 'border-red-500' : 'border-gray-300'}`}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <span className="text-blue-700">VISA</span>
              </div>
              {formErrors.cardNumber && <p className="text-red-500 text-sm mt-1">{formErrors.cardNumber}</p>}
            </div>
            
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <input
                  type="text"
                  name="expiration"
                  placeholder="Expiration"
                  value={formData.expiration}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded ${formErrors.expiration ? 'border-red-500' : 'border-gray-300'}`}
                />
                {formErrors.expiration && <p className="text-red-500 text-sm mt-1">{formErrors.expiration}</p>}
              </div>
              
              <div className="w-1/2">
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded ${formErrors.cvv ? 'border-red-500' : 'border-gray-300'}`}
                />
                {formErrors.cvv && <p className="text-red-500 text-sm mt-1">{formErrors.cvv}</p>}
              </div>
            </div>
            
            <div className="mb-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-1 mr-2"
                />
                <span className="text-sm text-gray-600">
                  By Clicking "Confirm Payment" I agree to the company's terms of services
                </span>
              </label>
              {formErrors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{formErrors.agreeToTerms}</p>}
            </div>
            
            <div className="flex space-x-4">
              <Link
                to="/cart"
                className="px-6 py-3 border border-gray-300 rounded font-medium"
              >
                Back
              </Link>
              
              <button
                type="submit"
                className="px-6 py-3 bg-pink-300 hover:bg-pink-400 rounded font-medium"
              >
                Confirm Payment
              </button>
            </div>
          </form>
        </div>
        
        {/* Product Display */}
        <div className="lg:w-1/3 bg-pink-100 rounded-lg p-6">
          {cartItems.length > 0 && (
            <div>
              <div className="relative h-64 flex items-center justify-center">
                {cartItems.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-0 p-2 rounded-full bg-white shadow-md z-10"
                    >
                      <FaChevronLeft />
                    </button>
                    
                    <button 
                      onClick={nextImage}
                      className="absolute right-0 p-2 rounded-full bg-white shadow-md z-10"
                    >
                      <FaChevronRight />
                    </button>
                  </>
                )}
                
                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-2">
                    {cartItems[currentImageIndex].name}
                  </h2>
                  
                  <div className="h-48 w-32 mx-auto relative">
                    <img 
                      src={cartItems[currentImageIndex].image} 
                      alt={cartItems[currentImageIndex].name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  
                  <p className="mt-4 text-2xl font-bold">
                    ${cartItems[currentImageIndex].price.toFixed(2)}
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="mb-1 flex justify-between">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="mb-4 flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;