import React, { createContext, useState, useContext } from "react";
import Precision from "../assets/cart/Precision Eyeliner.png";
import Cleansing from "../assets/cart/Cleansing Balm.png";
import Velvet from "../assets/cart/Velvet Matte Lipstick.png";
import Radiant from "../assets/cart/Radiant Glow Serum.png";
import Soft from "../assets/cart/Soft Focus Liquid Foundation.png";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [recommendedItems] = useState([
    {
      id: 3,
      name: "Velvet Matte Lipstick",
      price: 18.0,
      description: "Long-lasting, Crimson Red",
      image: Velvet,
    },
    {
      id: 4,
      name: "Cleansing Balm",
      price: 15.0,
      description: "Gentle Makeup Remover",
      image: Cleansing,
    },
    {
      id: 5,
      name: "Precision Eyeliner",
      price: 12.0,
      description: "Waterproof, Black",
      image: Precision,
    },
  ]);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const addToCart = (item) => {
    // Ensure the item has an id
    if (!item.id) {
      // Generate a unique id if none exists
      item.id = Date.now().toString();
    }

    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      // Update existing item quantity
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      setCartItems(updatedItems);
    } else {
      // Add new item to cart
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Add removeFromCart function
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
  };

  const resetCart = () => {
    setCartItems([]);
    setPaymentSuccess(false);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        recommendedItems,
        paymentSuccess,
        addToCart,
        updateQuantity,
        removeFromCart, // Add the new function to the context
        handlePaymentSuccess,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
