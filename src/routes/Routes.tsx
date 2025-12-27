import { Outlet, Route, Routes } from 'react-router-dom';
import Login from '@/pages/01_Login';
import Register from '@/pages/02_Register';
import { Toaster } from 'react-hot-toast';
import NavbarGuest from '@/components/layout/01_NavbarGuest';
import Footer from '@/components/layout/03_Footer';
// import NavbarUser from '@/components/layout/02_NavbarUser';
import Home from '@/pages/03_Home';
import NavbarUser from '@/components/layout/02_NavbarUser';

// Before Auth
const BeforeAuthLayout = () => (
  <div>
    <NavbarGuest />
    <main>
      <div>
        <Outlet />
      </div>
    </main>
    <Footer />
  </div>
);

// Auth
const AuthLayout = () => (
  <div>
    <Toaster position='top-right' />
    <main>
      <Outlet />
    </main>
  </div>
);

// After Auth
const AfterAuthLayout = () => {
  return (
    <div>
      <NavbarUser />
      <main className='pt-64 md:pt-80'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default function AppRoutes() {
  return (
    <Routes>
      {/* Before Auth */}
      <Route element={<BeforeAuthLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
      {/* Auth */}
      <Route element={<AuthLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
      {/* After Auth */}
      <Route element={<AfterAuthLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  );
}
