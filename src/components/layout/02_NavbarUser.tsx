import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DropDown from '../ui/dropDown';

export default function NavbarUser() {
  //#region trigger dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  //#endregion

  const [user, setUser] = useState<{ name: string; image?: string } | null>(
    null
  );
  const navigate = useNavigate();

  // Load user data from localStorage register on mount
  useEffect(() => {
    const storedRegisterUser = localStorage.getItem('registerUser');
    if (storedRegisterUser) {
      setUser(JSON.parse(storedRegisterUser)?.user || null);
    }
  }, []);

  // Listen for custom event from Profile.tsx to update immediately
  useEffect(() => {
    const handleUserUpdate = () => {
      const storedRegisterUser = localStorage.getItem('registerUser');
      if (storedRegisterUser) {
        setUser(JSON.parse(storedRegisterUser)?.user || null);
      }
    };

    window.addEventListener('userUpdated', handleUserUpdate);
    return () => window.removeEventListener('userUpdated', handleUserUpdate);
  }, []);

  return (
    <section className='custom-container fixed left-1/2 z-2 flex h-80 w-full -translate-x-1/2 items-center justify-between bg-white'>
      {/* Booky */}
      <div
        onClick={() => navigate('/home')}
        className='my-19 flex items-center gap-x-15 hover:cursor-pointer'
      >
        <img
          className='h-40 w-40 text-white md:h-42 md:w-42'
          src='/icons/01_brandfoody.svg'
          alt='brandfoody'
        />
        <h3 className='text-lg-lh hidden font-extrabold md:flex'>Foody</h3>
      </div>

      {/* Bag & profile */}
      <div className='flex items-center'>
        <div
          className='relative hover:cursor-pointer'
          onClick={() => navigate('/cart')}
        >
          <img
            src='/icons/14_cartblack.png'
            alt='cart bag'
            className='mr-24 h-32 w-32 hover:cursor-pointer'
          />
        </div>

        {/* PROFILE + NAME = TRIGGER DROPDOWN */}
        <div
          onClick={toggleDropdown}
          className='mr-16 flex items-center gap-12 hover:cursor-pointer'
        >
          {/* Profile picture */}
          <div className='flex h-48 w-48 items-center justify-center overflow-hidden rounded-full bg-gray-200'>
            {!user?.image && <span className='text-3xl text-gray-400'>👤</span>}
            {user?.image && <img src={user.image} alt='profile' />}
          </div>

          {/* Name */}
          {user && (
            <p className='hidden text-[18px] font-semibold md:flex'>
              {user.name}
            </p>
          )}
        </div>

        {/* DROPDOWN */}
        <DropDown
          isOpen={isDropdownOpen}
          onClose={() => setIsDropdownOpen(false)}
        />
      </div>
    </section>
  );
}
