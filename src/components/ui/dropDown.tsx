'use client';

import { useNavigate } from 'react-router-dom';

type DropDownProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DropDown({ isOpen, onClose }: DropDownProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className='fixed top-64 right-0 z-1 h-200 w-full rounded-b-4xl bg-white text-black shadow-sm md:top-80 md:right-50 md:w-184'>
      <div className='custom-container flex h-200 w-full flex-col justify-between gap-12 p-16'>
        <p
          onClick={() => {
            navigate('/profile');
            onClose();
          }}
          className='text-sm font-semibold hover:cursor-pointer hover:text-[#EE1D52]'
        >
          Profile
        </p>

        <p
          onClick={() => {
            navigate('/borrowed');
            onClose();
          }}
          className='text-sm font-semibold hover:cursor-pointer hover:text-[#EE1D52]'
        >
          Borrowed List
        </p>

        <p
          onClick={() => {
            navigate('/reviews');
            onClose();
          }}
          className='text-sm font-semibold hover:cursor-pointer hover:text-[#EE1D52]'
        >
          Reviews
        </p>

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
  );
}
