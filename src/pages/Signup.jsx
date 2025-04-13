import React, { useState } from "react";
import Header from "../components/NavBar";
import Footer from "../components/Footer";
import Data from './Data/User'; // Updated import path based on your file structure
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: username,
          email,
          password
        })
      });
  
      if (!response.ok) {
        const error = await response.text();
        setMessage(error);
      } else {
        setMessage("Signup successful! You can now login.");
        setUsername("");
        setEmail("");
        setPassword("");
        setRememberMe(false);
        navigate('/signin');
      }
  
    } catch (error) {
      console.error('Error during signup:', error);
      setMessage("Something went wrong.");
    }
  };
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   // Check if email already exists
  //   const emailExists = Data.some(user => user.email === email);
    
  //   if (emailExists) {
  //     setMessage("This email is already registered. Please use a different email.");
  //     return;
  //   }
    
  //   // Add new user to Data array
  //   Data.push({
  //     name: username,
  //     email: email,
  //     password: password
  //   });
    
  //   console.log("User registered successfully:", {
  //     username,
  //     email,
  //     password,
  //     rememberMe,
  //   });
    
  //   console.log("Updated user data:", Data);
    
  //   // Reset form fields after successful signup
  //   setUsername("");
  //   setEmail("");
  //   setPassword("");
  //   setRememberMe(false);
  //   setMessage("Signup successful! You can now login.");
  //   navigate('/signin')
  // };

  return (
    <>
      <div className="flex flex-col min-h-screen items-center">
        <div className="max-w-md w-full mt-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Welcome to Everkind
            </h2>
          </div>

          {message && (
            <div className={`mb-4 p-2 text-center rounded ${message.includes("successful") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="px-4">
            <div className="mb-4 text-left ml-[-300px]">
              <label
                htmlFor="username"
                className="block mb-2 text-gray-700 font-bold"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="px-3 py-3 border border-gray-300 rounded-2xl w-[400px]"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4 text-left ml-[-300px]">
              <label
                htmlFor="email"
                className="block mb-2 text-gray-700 font-bold"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="px-3 py-3 border border-gray-300 rounded-2xl w-[400px]"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6 text-left ml-[-300px]">
              <label
                htmlFor="password"
                className="block mb-2 text-gray-700 font-bold"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-[400px] px-3 py-3 border border-gray-300 rounded-2xl"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-6 text-left ml-[-300px]">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-pink-600 border-gray-300 rounded"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me" className="ml-2 text-gray-900">
                  Remember me
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-pink-300 text-black font-medium rounded-3xl ml-[-300px]"
            >
              Signup
            </button>
          </form>

          <div className="text-center mt-4">


            <div className="text-sm text-gray-500">
              Already have an account?
              <a href="#" className="ml-1 text-blue-500">
                Login here
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;