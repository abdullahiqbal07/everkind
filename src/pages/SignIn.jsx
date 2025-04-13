import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { authenticate } from "../context/AuthContext"; // Update path if needed

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const { setUser } = useContext(authenticate);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userAuth = localStorage.getItem("userAuth") || sessionStorage.getItem("userAuth");
    if (userAuth) {
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
  }, [navigate, location]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/users"); // make sure this matches your backend URL
      const users = await res.json();

      const matchedUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        const userData = {
          name: matchedUser.name,
          email: matchedUser.email,
          isAuthenticated: true,
        };

        setUser(userData);

        if (rememberMe) {
          localStorage.setItem("userAuth", JSON.stringify(userData));
        } else {
          sessionStorage.setItem("userAuth", JSON.stringify(userData));
        }

        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Server error. Please try again later.");
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
            <label htmlFor="email" className="block mb-2 text-gray-700 font-bold">
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
            <label htmlFor="password" className="block mb-2 text-gray-700 font-bold">
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
