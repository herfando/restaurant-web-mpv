'use client';

import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/zustand/authStore';

type DropDownProps = {
  isOpen: boolean;
  onClose: () => void;
  user?: { name: string; avatar?: string } | null; // bisa dari backend
};

export default function DropDown({ isOpen, onClose, user }: DropDownProps) {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  if (!isOpen) return null;

  return (
    <div className='fixed top-64 right-16 z-1 h-200 w-197 rounded-2xl bg-white text-black shadow-sm md:top-80 md:right-50'>
      <div className='custom-container flex h-200 w-full flex-col justify-between gap-12 p-16'>
        {/* PROFILE */}
        <div className='flex items-center gap-x-8'>
          <div className='flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-gray-200'>
            {!user?.avatar && (
              <span className='text-3xl text-gray-400'>👤</span>
            )}
            {user?.avatar && (
              <img
                src={user.avatar}
                alt='profile'
                className='h-full w-full object-cover'
              />
            )}
          </div>

          <p
            onClick={() => {
              navigate('/profile');
              onClose();
            }}
            className='text-md font-bold hover:cursor-pointer hover:text-[#EE1D52]'
          >
            Profile
          </p>
        </div>

        {/* DELIVERY ADDRESS */}
        <div className='flex items-center gap-x-8'>
          <img src='/icons/11_iconaddress.svg' alt='address icon' />
          <p
            onClick={() => {
              navigate('/deliveryAddress');
              onClose();
            }}
            className='text-sm font-semibold hover:cursor-pointer hover:text-[#EE1D52]'
          >
            Delivery Address
          </p>
        </div>

        {/* MY ORDERS */}
        <div className='flex items-center gap-x-8'>
          <img src='/icons/12_iconorders.svg' alt='orders icon' />
          <p
            onClick={() => {
              navigate('/my-orders');
              onClose();
            }}
            className='text-sm font-semibold hover:cursor-pointer hover:text-[#EE1D52]'
          >
            My Orders
          </p>
        </div>

        {/* LOGOUT */}
        <div className='flex items-center gap-x-8'>
          <img src='/icons/13_iconlogout.svg' alt='logout icon' />
          <p
            onClick={() => {
              logout();
              navigate('/login');
              onClose();
            }}
            className='text-sm font-semibold hover:cursor-pointer hover:text-[#EE1D52]'
          >
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}
