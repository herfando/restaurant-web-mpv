import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Login from '@/pages/01_Login';
import Register from '@/pages/02_Register';
import { Toaster } from 'react-hot-toast';
import Home from '@/pages/03_Home';
import Detail from '@/pages/04_Detail';

import NavbarGuest from '@/components/layout/01_NavbarGuest';
import NavbarGuest2 from '@/components/layout/01_NavbarGuest2';
import NavbarUser from '@/components/layout/02_NavbarUser';
import Footer from '@/components/layout/03_Footer';

// Layout biasa
const BeforeAuthLayout = ({ children }: { children?: React.ReactNode }) => (
  <div>
    <NavbarGuest />
    <main>
      <div>{children || <Outlet />}</div>
    </main>
    <Footer />
  </div>
);

// Layout detail khusus klik dari Home
const BeforeAuthLayout2 = ({ children }: { children?: React.ReactNode }) => (
  <div>
    <NavbarGuest2 />
    <main>
      <div>{children || <Outlet />}</div>
    </main>
    <Footer />
  </div>
);

// Auth layout
const AuthLayout = () => (
  <div>
    <Toaster position='top-right' />
    <main>
      <Outlet />
    </main>
  </div>
);

// After Auth
const AfterAuthLayout = () => (
  <div>
    <NavbarUser />
    <main className='pt-64 md:pt-80'>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default function AppRoutes() {
  const location = useLocation();
  const useNavbar2 = location.state?.fromHome; // cek dari Home

  return (
    <Routes>
      {/* Detail dinamis layout */}
      <Route
        path='/restaurant/:restaurantId'
        element={
          useNavbar2 ? (
            <BeforeAuthLayout2>
              <Detail />
            </BeforeAuthLayout2>
          ) : (
            <BeforeAuthLayout>
              <Detail />
            </BeforeAuthLayout>
          )
        }
      />

      {/* Home sebelum login */}
      <Route element={<BeforeAuthLayout />}>
        <Route path='/' element={<Home />} />
      </Route>

      {/* Auth */}
      <Route element={<AuthLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>

      {/* Home setelah login */}
      <Route element={<AfterAuthLayout />}>
        <Route path='/home' element={<Home />} />
      </Route>
    </Routes>
  );
}
