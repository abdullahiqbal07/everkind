import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
// import { authenticate } from './context/AuthContext';

// import { useContext } from 'react';
import { useEffect } from 'react';

// Lazy loading components
const NotFound = lazy(() => import('./pages/NotFound'));
const Home = lazy(()=> import('./pages/Home'))


function App() {
  const [isDataLoading, setIsDataLoading] = useState(true);


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

    <Suspense fallback=".....loading">
      <BrowserRouter>
        {/* <NavBar style={{position: "fixed"}}/> */}
        <Routes>
          {/* <Route path='/' element={<ProtectedRoute />}> */}
          {/* </Route> */}
          {/* <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} /> */}
          
          <Route path='/home' element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}



