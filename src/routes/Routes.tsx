import { Routes, Route } from 'react-router-dom';
import Login from '@/pages/01_Login';
import Register from '@/pages/02_Register';
import Home from '@/pages/03_Home';
import Detail from '@/pages/04_Detail';
import { Toaster } from 'react-hot-toast';

import AppLayout from '@/components/layout/00_AppLayout';

export default function AppRoutes() {
  return (
    <>
      <Toaster position='top-right' />

      <Routes>
        {/* ================= AUTH ================= */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* ================= HOME ================= */}
        {/* guest & user pakai layout yang sama */}
        <Route element={<AppLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Route>

        {/* ================= DETAIL ================= */}
        {/* SATU PATH SAJA, JANGAN DUPLIKAT */}
        <Route element={<AppLayout variant='detail' />}>
          <Route path='/restaurant/:restaurantId' element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
}
