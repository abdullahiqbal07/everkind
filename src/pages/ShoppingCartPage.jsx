import React from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import Navbar from "../components/NavBar";


const ShoppingCart = () => {
  
  const {
    cartItems,
    recommendedItems,
    updateQuantity,
    addToCart,
    removeFromCart,
  } = useCart();
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {

    const itemsToSend = cartItems.map((item) => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      price: Math.floor(item.price * 100), // Stripe expects price in cents
    }));

    const response = await fetch(
      "http://localhost:5000/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({ items: itemsToSend }),
      }
    );

    if (response.status === 200) {
      const result = await response.json();
      window.location = result.url;
    } else {
      console.error("Failed to create checkout session");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">
          My Bag ({cartItems.length} items)
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart Items */}
          <div className="md:w-2/3">
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Your shopping bag is empty</p>
                <Link
                  to="/"
                  className="text-blue-600 hover:underline mt-2 inline-block"
                >
                  Start shopping
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center py-4 border-b">
                  <div className="h-24 w-24 bg-gray-100 rounded overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="ml-4 flex-grow">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="flex items-center mb-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-2 rounded-full hover:bg-gray-200"
                      >
                        <FaMinus size={14} />
                      </button>
                      <span className="mx-3">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-2 rounded-full hover:bg-gray-200"
                      >
                        <FaPlus size={14} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center text-red-500 hover:text-red-700 text-sm"
                    >
                      <FaTrash size={14} className="mr-1" /> Remove
                    </button>
                  </div>
                </div>
              ))
            )}
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

              <button
                className={`block w-full text-center py-3 rounded-lg font-medium transition ${
                  cartItems.length === 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-pink-300 hover:bg-pink-400"
                }`}
                onClick={handleCheckout}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6">You might also like</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recommendedItems.map((item) => (
              <div key={item.id} className="flex items-center">
                <div className="h-16 w-16 bg-gray-100 rounded overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
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
          <Link to="/" className="text-blue-600 hover:underline">
            Continue shopping
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
