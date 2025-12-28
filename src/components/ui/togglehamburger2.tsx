'use client';

import { X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './button';
import { useNavigate } from 'react-router-dom';

export default function ToggleHamburger2({}) {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative block md:hidden'>
      {/* Navbar atas */}
      <nav className='flex items-center justify-between'>
        {/* Tombol hamburger */}
        <button
          onClick={handleToggleMenu}
          className='z-20 rounded-lg'
          aria-label='Toggle menu'
        >
          {isOpen ? (
            // Ikon X saat terbuka
            <X
              size={28}
              className='text-black hover:cursor-pointer dark:text-white'
            />
          ) : (
            // Garis 3 manual
            <div className='grid h-24 w-24 -translate-x-4 justify-items-end gap-6 p-3 hover:cursor-pointer'>
              <span className='h-2 w-24 bg-black'></span>
              <span className='h-2 w-24 bg-black'></span>
              <span className='h-2 w-24 bg-black'></span>
            </div>
          )}
        </button>
      </nav>

      {/* Menu mobile muncul setelah diklik */}
      <div
        className={`fixed top-0 left-0 z-1 h-0 w-full transform bg-white text-black transition-transform duration-1000 ease-in-out lg:hidden dark:bg-black dark:text-white ${
          isOpen
            ? 'translate-x-0' // /* TRANSLATE HERE: menu muncul */
            : '-translate-x-full' // /* TRANSLATE HERE: menu geser keluar */
        }`}
      >
        <div className='custom-container mt-64 flex h-72 w-full items-center justify-center gap-12 bg-white md:hidden'>
          {/* Button Login & Register */}
          <Button
            onClick={() => navigate('/login')}
            className='text-md h-40 w-full basis-1/2 rounded-full border border-[#D5D7DA] bg-white font-bold text-black hover:cursor-pointer hover:bg-gray-700 hover:text-white'
          >
            Login
          </Button>
          <Button
            onClick={() => navigate('/register')}
            className='text-md h-40 w-full basis-1/2 rounded-full font-bold hover:cursor-pointer hover:bg-blue-300 hover:text-black'
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
