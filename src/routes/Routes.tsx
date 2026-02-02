import { Routes, Route } from 'react-router-dom';
import Login from '@/pages/01_Login';
import Register from '@/pages/02_Register';
import Home from '@/pages/03_Home';
import Detail from '@/pages/04_Detail';
import MyCart from '@/pages/06_MyCart';
import CheckOut from '@/pages/07_CheckOut';
import Success from '@/pages/08_Success';
import MyOrders from '@/pages/09_MyOrders';
import AppLayout from '@/components/layout/00_AppLayout';
import { Toaster } from 'react-hot-toast';
import Profile from '@/pages/11_Profile';
import SummaryReviews from '@/pages/12_SummaryReviews';
import DeliveryAddress from '@/pages/13_DeliveryAddress';
import Category from '@/pages/05_Category';

export default function AppRoutes() {
  return (
    <>
      <Toaster position='top-right' />

      <Routes>
        {/* ================= AUTH ================= */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* ================= HOME ================= */}
        <Route element={<AppLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Route>

        {/* ================= DETAIL / CART / CHECKOUT / ORDERS ================= */}
        <Route element={<AppLayout variant='detail' />}>
          <Route path='/restaurant/:restaurantId' element={<Detail />} />
          <Route path='/cart' element={<MyCart />} />
          <Route path='/category' element={<Category />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/my-orders' element={<MyOrders />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/summary-reviews' element={<SummaryReviews />} />
          <Route path='/delivery-address' element={<DeliveryAddress />} />
        </Route>

        {/* ================= SUCCESS (NO LAYOUT) ================= */}
        <Route path='/success' element={<Success />} />
      </Routes>
    </>
  );
}
