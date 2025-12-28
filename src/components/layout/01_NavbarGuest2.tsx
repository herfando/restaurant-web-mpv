import { useNavigate } from 'react-router-dom';
import ToggleHamburger2 from '../ui/togglehamburger2';
import { Search } from 'lucide-react';

export default function NavbarGuest2() {
  const navigate = useNavigate();

  return (
    <section className={`sticky top-0 z-10 mx-auto h-80 w-full bg-white`}>
      <div className='custom-container flex h-80 items-center justify-between'>
        {/* left */}
        <div className='flex items-center gap-15 hover:cursor-pointer'>
          <img
            className='h-40 w-40 text-white md:h-42 md:w-42'
            src='/icons/01_brandfoody.svg'
            alt='brandfoody'
          />
          <h3 className={`text-lg-lh hidden font-extrabold md:flex`}>Foody</h3>
        </div>

        {/* bag & profil */}
        <div className='flex items-center md:hidden'>
          {/* Search */}
          <Search
            className='z-2 mr-16 h-24 w-24 text-[Neutral/950] hover:cursor-pointer'
            onClick={() => navigate('/login')}
          />
          {/* bag */}
          <div
            className='relative z-2 hover:cursor-pointer'
            onClick={() => navigate('/login')}
          >
            <img
              src='/icons/14_cartblack.png'
              alt='cart bag'
              className='mr-24 h-32 w-32'
            />
          </div>

          {/* Hamburger */}
          <div>
            <ToggleHamburger2 />
          </div>
        </div>

        {/* right */}
        <div className='hidden gap-16 md:flex'>
          <button
            onClick={() => navigate('/login')}
            className={`text-md h-48 w-163 rounded-full border border-black font-bold text-black hover:cursor-pointer hover:bg-black hover:text-white`}
          >
            Sign In
          </button>
          <button
            onClick={() => navigate('/register')}
            className={`text-md h-48 w-163 rounded-full border border-black font-bold text-black hover:cursor-pointer hover:bg-black hover:text-white`}
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}
