// import React, { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login attempt with:", { email, password, rememberMe });
//     // Implement actual authentication logic here
//   };

//   return (
//     <div className="flex flex-col min-h-screen items-center">
//       <div className="max-w-md w-full mt-20">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900">
//             Welcome Back to Everkind
//           </h2>
//         </div>

//         <form onSubmit={handleSubmit} className="px-4">
//           <div className="mb-4 text-left ml-[-300px]">
//             <label
//               htmlFor="email"
//               className="block mb-2 text-gray-700 font-bold"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               className="px-3 py-3 border border-gray-300 rounded-2xl w-[400px]"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="mb-6 text-left ml-[-300px]">
//             <label
//               htmlFor="password"
//               className="block mb-2 text-gray-700 font-bold"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               required
//               className="w-[400px] px-3 py-3 border border-gray-300 rounded-2xl"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="mb-6 text-left ml-[-300px]">
//             <div className="flex items-center">
//               <input
//                 id="remember-me"
//                 name="remember-me"
//                 type="checkbox"
//                 className="h-4 w-4 text-pink-600 border-gray-300 rounded"
//                 checked={rememberMe}
//                 onChange={(e) => setRememberMe(e.target.checked)}
//               />
//               <label htmlFor="remember-me" className="ml-2 text-gray-900">
//                 Remember me
//               </label>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-pink-300 text-black font-medium rounded-3xl ml-[-300px]"
//           >
//             Login
//           </button>
//         </form>

//         <div className="text-center mt-4">
//           <div className="text-sm mb-1 ml-[-600px]">
//             Returning user?
//             <a href="#" className="ml-1 text-blue-600 hover:text-blue-500">
//               Log in here
//             </a>
//           </div>

//           <div className="text-sm mb-1">
//             <a href="#" className="text-gray-600 hover:text-gray-500">
//               Forgot Password?
//             </a>
//           </div>

//           <div className="text-sm text-gray-500">
//             Don't have an account?
//             <a href="#" className="ml-1 text-gray-500 hover:text-blue-500">
//               Sign Up
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Data from './Data/User'; // Adjust path as needed
import { authenticate } from '../context/AuthContext'; // Update path as needed

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  
  const { setUser } = useContext(authenticate);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if user is already logged in
  useEffect(() => {
    const userAuth = localStorage.getItem("userAuth") || sessionStorage.getItem("userAuth");
    if (userAuth) {
      // If user is already logged in, redirect to home or previous intended route
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
  }, [navigate, location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Find user with matching email
    const user = Data.find(user => user.email === email);
    
    // Check if user exists and password matches
    if (user && user.password === password) {
      console.log("Login successful for:", user.name);
      
      // Create user object to store in context
      const userData = {
        name: user.name,
        email: user.email,
        isAuthenticated: true
      };
      
      // Update user in context
      setUser(userData);
      
      // Store auth data based on remember me choice
      if (rememberMe) {
        localStorage.setItem('userAuth', JSON.stringify(userData));
      } else {
        sessionStorage.setItem('userAuth', JSON.stringify(userData));
      }
      
      // Redirect to previous intended route or home
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
      
    } else {
      // Show error message for invalid credentials
      setError("Invalid email or password");
      console.log("Login attempt failed for:", email);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="max-w-md w-full mt-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome Back to Everkind
          </h2>
        </div>

        {error && (
          <div className="mb-4 p-2 text-center rounded bg-red-100 text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="px-4">
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
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <div className="text-sm mb-1">
            <a href="#" className="text-gray-600 hover:text-gray-500">
              Forgot Password?
            </a>
          </div>

          <div className="text-sm text-gray-500">
            Don't have an account?
            <a href="/signup" className="ml-1 text-blue-500 hover:text-blue-700">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;