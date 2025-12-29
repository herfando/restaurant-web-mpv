'use client';

import { useNavigate } from 'react-router-dom';

type DropDownProps = {
  isOpen: boolean;
  onClose: () => void;
  user: { name: string; image?: string } | null;
};

export default function DropDown({ isOpen, onClose, user }: DropDownProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className='fixed top-64 right-16 z-1 h-197 w-197 rounded-b-4xl bg-white text-black shadow-sm md:top-80 md:right-50'>
      <div className='custom-container flex h-197 w-full flex-col justify-between gap-12 p-16'>
        <div className='flex items-center gap-x-8'>
          {/* Profile picture */}
          <div className='flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-gray-200'>
            {!user?.image && <span className='text-3xl text-gray-400'>👤</span>}
            {user?.image && <img src={user.image} alt='profile' />}
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

        <div className='flex items-center gap-x-8'>
          <img src='/icons/11_iconaddress.svg' alt='address icon' />
          <p
            onClick={() => {
              navigate('/borrowed');
              onClose();
            }}
            className='text-sm font-semibold hover:cursor-pointer hover:text-[#EE1D52]'
          >
            Delivery Address
          </p>
        </div>

        <div className='flex items-center gap-x-8'>
          <img src='/icons/12_iconorders.svg' alt='address icon' />
          <p
            onClick={() => {
              navigate('/reviews');
              onClose();
            }}
            className='text-sm font-semibold hover:cursor-pointer hover:text-[#EE1D52]'
          >
            My Orders
          </p>
        </div>

        <div className='flex items-center gap-x-8'>
          <img src='/icons/13_iconlogout.svg' alt='address icon' />

          <p
            onClick={() => {
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
