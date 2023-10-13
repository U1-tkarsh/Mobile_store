import { Route, Routes, useNavigate } from 'react-router-dom';

import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Navbar = lazy(() => import('../components/Navbar'));
const Signup = lazy(() => import('../pages/auth/Signup'));
const Login = lazy(() => import('../pages/auth/Login.jsx'));
const ForgotPassword = lazy(() => import('../pages/auth/ForgotPassword.jsx'));

const MainRoutes = () => {

    return (
      <>
        <Navbar />
        <Suspense fallback={
          <div className="flex items-center justify-center h-screen">
          <div className="flex items-center space-x-2 animate-bounce">
            <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
          </div>
        </div>
        }>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          </Routes>
      </Suspense>
      {/* <Footer /> */}
    </>
  );
};

export default MainRoutes;