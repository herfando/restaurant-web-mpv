import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DropDown from '../ui/dropDown';
import { useCart } from '@/query/hooks/useCart'; // hook cart baru

export default function NavbarUser2() {
  //#region cart state (FULL DARI BACKEND)
  const { summary, isLoading } = useCart();

  // COUNTER RESMI DARI BACKEND
  const totalItems = summary?.totalItems ?? 0;
  //#endregion

  //#region trigger dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  //#endregion

  //#region user state
  const [user, setUser] = useState<{ name: string; image?: string } | null>(
    null
  );
  const navigate = useNavigate();

  useEffect(() => {
    const storedRegisterUser = localStorage.getItem('registerUser');
    if (storedRegisterUser)
      setUser(JSON.parse(storedRegisterUser)?.user || null);
  }, []);

  useEffect(() => {
    const handleUserUpdate = () => {
      const storedRegisterUser = localStorage.getItem('registerUser');
      if (storedRegisterUser)
        setUser(JSON.parse(storedRegisterUser)?.user || null);
    };
    window.addEventListener('userUpdated', handleUserUpdate);
    return () => window.removeEventListener('userUpdated', handleUserUpdate);
  }, []);
  //#endregion

  return (
    <section className='custom-container fixed left-1/2 z-2 flex h-80 w-full -translate-x-1/2 items-center justify-between bg-white'>
      {/* ===== LOGO / HOME ===== */}
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

      {/* ===== BAG & PROFILE ===== */}
      <div className='flex items-center'>
        {/* Cart */}
        <div
          className='relative hover:cursor-pointer'
          onClick={() => navigate('/cart')}
        >
          <img
            src='/icons/14_cartblack.png'
            alt='cart bag'
            className='mr-24 h-28 w-28 hover:cursor-pointer md:h-32 md:w-32'
          />

          {!isLoading && totalItems > 0 && (
            <span className='absolute -top-2 right-18 flex h-20 w-20 items-center justify-center rounded-full bg-[#C12116] text-xs font-bold text-white'>
              {totalItems}
            </span>
          )}
        </div>

        {/* PROFILE + NAME = TRIGGER DROPDOWN */}
        <div
          onClick={toggleDropdown}
          className='mr-16 flex items-center gap-12 hover:cursor-pointer'
        >
          <div className='flex h-48 w-48 items-center justify-center overflow-hidden rounded-full bg-gray-200'>
            {!user?.image && <span className='text-3xl text-gray-400'>👤</span>}
            {user?.image && <img src={user.image} alt='profile' />}
          </div>
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
          user={user}
        />
      </div>
    </section>
  );
}
