import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ToggleHamburger from '../ui/togglehamburger';

export default function NavbarGuest() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className={`fixed z-10 mx-auto h-80 w-full ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
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
            className={`text-lg-lh hidden font-extrabold md:flex ${scrolled ? 'text-black' : 'text-white'} `}
          >
            Foody
          </h3>
        </div>

        {/* bag & profil */}
        <div className='flex items-center md:hidden'>
          {/* Search */}
          <Search
            className={`z-2 mr-16 h-24 w-24 text-[Neutral/950] hover:cursor-pointer ${scrolled ? 'text-black' : 'text-white'}`}
            onClick={() => navigate('/login')}
          />
          {/* bag */}
          <div
            className='relative z-2 hover:cursor-pointer'
            onClick={() => navigate('/login')}
          >
            <img
              src={
                scrolled ? '/icons/14_cartblack.png' : '/icons/15_cartwhite.png'
              }
              alt='cart bag'
              className='mr-24 h-28 w-28'
            />
          </div>

          {/* Hamburger */}
          <div>
            <ToggleHamburger scrolled={scrolled} />
          </div>
        </div>

        {/* right */}
        <div className='hidden gap-16 md:flex'>
          <button
            onClick={() => navigate('/login')}
            className={`text-md h-48 w-163 rounded-full font-bold hover:cursor-pointer ${scrolled ? 'border border-black text-black hover:bg-black hover:text-white' : 'border border-white text-white hover:bg-white hover:text-black'} `}
          >
            Sign In
          </button>
          <button
            onClick={() => navigate('/register')}
            className={`text-md h-48 w-163 rounded-full font-bold hover:cursor-pointer ${scrolled ? 'border border-black text-black hover:bg-black hover:text-white' : 'border border-white text-white hover:bg-white hover:text-black'} `}
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}
