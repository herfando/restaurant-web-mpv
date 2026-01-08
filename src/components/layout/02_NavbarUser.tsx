import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DropDown from '../ui/dropDown';
import { useCart } from '@/query/hooks/useCart';

export default function NavbarUser() {
  //#region scroll state
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  //#endregion

  //#region trigger dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  //#endregion

  //#region user state
  const [user, setUser] = useState<{ name: string; image?: string } | null>(
    null
  );

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

  //#region cart state pakai hook baru
  const { cart } = useCart(); // ambil data cart
  const totalItems = cart.reduce(
    (
      acc: number,
      rest: {
        items: { quantity: number }[];
      }
    ) =>
      acc +
      rest.items.reduce(
        (sum: number, i: { quantity: number }) => sum + i.quantity,
        0
      ),
    0
  );
  //#endregion

  return (
    <section
      className={`fixed z-10 mx-auto h-80 w-full ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className='custom-container flex h-80 items-center justify-between'>
        {/* left */}
        <div className='flex items-center gap-15 hover:cursor-pointer'>
          <img
            className='h-40 w-40 text-white md:h-42 md:w-42'
            src={
              scrolled ? '/icons/01_brandfoody.svg' : '/icons/02_whitelogo.svg'
            }
            alt='brandfoody'
          />
          <h3
            className={`text-lg-lh hidden font-extrabold md:flex ${
              scrolled ? 'text-black' : 'text-white'
            } `}
          >
            Foody
          </h3>
        </div>

        {/* Bag & profile */}
        <div className='flex items-center'>
          <div
            className='relative hover:cursor-pointer'
            onClick={() => navigate('/cart')}
          >
            <img
              src={
                scrolled ? '/icons/14_cartblack.png' : '/icons/15_cartwhite.png'
              }
              alt='cart bag'
              className='mr-24 h-28 w-28 md:mr-16 md:h-32 md:w-32'
            />
            {/* ===== TOTAL ITEMS BADGE ===== */}
            {totalItems > 0 && (
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
            {/* Profile picture */}
            <div className='flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-gray-200 md:h-48 md:w-48'>
              {!user?.image && (
                <span className='text-3xl text-gray-400'>👤</span>
              )}
              {user?.image && <img src={user.image} alt='profile' />}
            </div>

            {/* Name */}
            {user && (
              <p
                className={`hidden text-[18px] font-semibold md:flex ${
                  scrolled ? 'text-black' : 'text-white'
                } `}
              >
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
      </div>
    </section>
  );
}
