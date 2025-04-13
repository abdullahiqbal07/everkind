import React, { createContext, useState, useContext } from 'react';
import Precision from "../assets/cart/Precision Eyeliner.png"
import Cleansing  from "../assets/cart/Cleansing Balm.png"
import Velvet  from "../assets/cart/Velvet Matte Lipstick.png"
import Radiant  from "../assets/cart/Radiant Glow Serum.png"
import Soft  from "../assets/cart/Soft Focus Liquid Foundation.png"


const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Soft Focus Liquid Foundation',
      price: 38.00,
      quantity: 1,
      description: 'Medium Coverage',
      image: Soft 
    },
    {
      id: 2,
      name: 'Radiant Glow Serum',
      price: 25.00,
      quantity: 1,
      description: 'Hydrating Formula',
      image: Radiant 
    }
  ]);

  const [recommendedItems] = useState([
    {
      id: 3,
      name: 'Velvet Matte Lipstick',
      price: 18.00,
      description: 'Long-lasting, Crimson Red',
      image: Velvet 
    },
    {
      id: 4,
      name: 'Cleansing Balm',
      price: 15.00,
      description: 'Gentle Makeup Remover',
      image: Cleansing 
    },
    {
      id: 5,
      name: 'Precision Eyeliner',
      price: 12.00,
      description: 'Waterproof, Black',
      image: Precision 
    }
  ]);

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCartItems(
        cartItems.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(
      cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
  };

  const resetCart = () => {
    setCartItems([]);
    setPaymentSuccess(false);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      recommendedItems,
      paymentSuccess,
      addToCart,
      updateQuantity,
      handlePaymentSuccess,
      resetCart
    }}>
      {children}
    </CartContext.Provider>
  );
};
