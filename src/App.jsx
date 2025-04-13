import React from "react";
import { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
// import { authenticate } from './context/AuthContext';

// import { useContext } from 'react';
import { useEffect } from "react";
import { CartProvider } from "./context/CartContext"; // New import
import AccountPage from "./pages/Account";

// Lazy loading components
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));
const Dummy = lazy(() => import("./pages/dummy"));

const ShoppingCart = lazy(() => import("./pages/ShoppingCartPage"));
const Checkout = lazy(() => import("./pages/CheckoutPage"));
const OrderConfirmation = lazy(() => import("./pages/ConfirmationPage"));
const Story = lazy(() => import("./pages/Our-Story"));  
const SelfCare = lazy(() => import("./pages/Self-Care"));  
const Blog = lazy(() => import("./pages/Blog"));  

function App() {
  // const [isDataLoading, setIsDataLoading] = useState(true);

  // const ProtectedRoute = ({ Children }) => {
  //   // handle it from backend
  //   const user = localStorage.getItem('token')
  //   const location = useLocation(); // Get the current URL
  //   // console.log(user)
  //   if(!user) {
  //     return <Navigate to="/signin" replace state={{ from: location }}/>
  //   }
  //   return (
  //     <>
  //       <Toolbar />
  //       <NavBar style={{ position: "fixed" }} />
  //       <Outlet />
  //     </>
  //   );
  // }

  return (
    // i want to home after sign in
<CartProvider>
    <Suspense fallback=".....loading">
      <BrowserRouter>
        {/* <NavBar style={{position: "fixed"}}/> */}
        <Routes>
          {/* <Route path='/' element={<ProtectedRoute />}> */}
          {/* </Route> */}
          {/* <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} /> */}

          <Route path="/" element={<Home />} />
          <Route path="/dummy" element={<Dummy />} />
          <Route path="/story" element={<Story />} />
          <Route path="/self-care" element={<SelfCare />} />
          {/* <Route path="/self-care" element={<SelfCare />} /> */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<AccountPage />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
    </CartProvider>
  );
}

export default App;
