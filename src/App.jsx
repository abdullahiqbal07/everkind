// import React, { useState } from "react";
// import { Suspense, lazy } from "react";
// import {
//   BrowserRouter,
//   Navigate,
//   Outlet,
//   Route,
//   Routes,
//   useLocation,
// } from "react-router-dom";
// // import { authenticate } from './context/AuthContext';

// // import { useContext } from 'react';
// import { useEffect } from "react";
// import { CartProvider } from "./context/CartContext"; // New import
// import AccountPage from "./pages/Account";
// import AuthContext from "./context/AuthContext"; // New import

// // Lazy loading components
// const NotFound = lazy(() => import("./pages/NotFound"));
// const Home = lazy(() => import("./pages/Home"));
// const Dummy = lazy(() => import("./pages/dummy"));

// const ShoppingCart = lazy(() => import("./pages/ShoppingCartPage"));
// const Checkout = lazy(() => import("./pages/CheckoutPage"));
// const OrderConfirmation = lazy(() => import("./pages/ConfirmationPage"));
// const Story = lazy(() => import("./pages/Our-Story"));
// const SelfCare = lazy(() => import("./pages/Self-Care"));
// const Blog = lazy(() => import("./pages/Blog"));
// const SignIn = lazy(() => import("./pages/SignIn"));
// const SignUp = lazy(() => import("./pages/Signup"));

// function App() {
//   const [isDataLoading, setIsDataLoading] = useState(true);

//   const ProtectedRoute = ({ Children }) => {
//     // handle it from backend
//     const user = localStorage.getItem("token");
//     const location = useLocation(); // Get the current URL
//     // console.log(user)
//     if (!user) {
//       return <Navigate to="/signin" replace state={{ from: location }} />;
//     }
//     return (
//       <>
//         <NavBar style={{ position: "fixed" }} />
//         <Outlet />
//       </>
//     );
//   };

//   return (
//     // i want to home after sign in
//     <AuthContext>
//       <CartProvider>
//         <Suspense fallback=".....loading">
//           <BrowserRouter>
//             {/* <NavBar style={{position: "fixed"}}/> */}
//             <Routes>
//               <Route path="/" element={<ProtectedRoute />}>
//                 <Route path="/home" element={<Home />} />
//                 <Route path="/dummy" element={<Dummy />} />
//                 <Route path="/story" element={<Story />} />
//                 <Route path="/self-care" element={<SelfCare />} />
//                 <Route path="/blog" element={<Blog />} />
//                 <Route path="/profile" element={<AccountPage />} />

//                 <Route path="/cart" element={<ShoppingCart />} />
//                 <Route path="/checkout" element={<Checkout />} />
//                 <Route
//                   path="/order-confirmation"
//                   element={<OrderConfirmation />}
//                 />
//               </Route>

//               <Route path="sign-in" element={<SignIn />} />
//               <Route path="sign-up" element={<SignUp />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </BrowserRouter>
//         </Suspense>
//       </CartProvider>
//     </AuthContext>
//   );
// }

// export default App;
import React, { useState } from "react";
import { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate
} from "react-router-dom";
import { useEffect } from "react";
import { CartProvider } from "./context/CartContext";
import AuthContext from "./context/AuthContext"; 
import NavBar from "./components/NavBar"; // Make sure this import is correct

// Lazy loading components
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));
const Dummy = lazy(() => import("./pages/dummy"));
const FAQ = lazy(() => import("./pages/Faq"));
const ShoppingCart = lazy(() => import("./pages/ShoppingCartPage"));
const Checkout = lazy(() => import("./pages/CheckoutPage"));
const OrderConfirmation = lazy(() => import("./pages/ConfirmationPage"));
const Story = lazy(() => import("./pages/Our-Story"));
const SelfCare = lazy(() => import("./pages/Self-Care"));
const Blog = lazy(() => import("./pages/Blog"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/Signup"));
const AccountPage = lazy(() => import("./pages/Account"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  const [isDataLoading, setIsDataLoading] = useState(true);

  // Moved ProtectedRoute outside of App component to avoid React warning
  const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Home />} /> {/* Make Home the default for root URL */}
          {/* <Route path="home" element={<Home />} /> */}
          <Route path="dummy" element={<Dummy />} />
          <Route path="story" element={<Story />} />
          <Route path="self-care" element={<SelfCare />} />
          <Route path="blog" element={<Blog />} />
          <Route path="profile" element={<AccountPage />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-confirmation" element={<OrderConfirmation />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="faqs" element={<FAQ />} />
        </Route>

        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };

  return (
    <BrowserRouter>
      <AuthContext>
        <CartProvider>
          <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
            <AppRoutes />
          </Suspense>
        </CartProvider>
      </AuthContext>
    </BrowserRouter>
  );
}

// Extracted ProtectedRoute to fix React Hook errors
const ProtectedRoute = () => {
  // Check for auth in both localStorage and sessionStorage
  const userAuth = localStorage.getItem("userAuth") || sessionStorage.getItem("userAuth");
  const location = useLocation();
  
  if (!userAuth) {
    // Redirect to signin and save the attempted location
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }
  
  return (
    <>
      {/* <NavBar style={{ position: "fixed" }} /> */}
      <Outlet />
    </>
  );
};

export default App;