import { Route, Routes } from 'react-router-dom';
import Login from '@/pages/01_Login';
import Register from '@/pages/02_Register';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}
