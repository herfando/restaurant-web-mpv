import { useState, useEffect } from 'react';

export default function NavbarGuest() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className={`fixed mx-auto h-80 w-full ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
      <div className='custom-container flex h-80 items-center justify-between'>
        {/* left */}
        <div className='flex items-center gap-15 hover:cursor-pointer'>
          <img
            className='h-42 w-42 text-white'
            src={
              scrolled ? '/icons/01_brandfoody.svg' : '/icons/02_whitelogo.svg'
            }
            alt='brandfoody'
          />
          <h3
            className={`text-lg-lh font-extrabold ${scrolled ? 'text-black' : 'text-white'} `}
          >
            Foody
          </h3>
        </div>
        {/* right */}
        <div className='flex gap-16'>
          <button
            className={`text-md h-48 w-163 rounded-full font-bold hover:cursor-pointer ${scrolled ? 'border border-black text-black hover:bg-black hover:text-white' : 'border border-white text-white hover:bg-white hover:text-black'} `}
          >
            Sign In
          </button>
          <button
            className={`text-md h-48 w-163 rounded-full font-bold hover:cursor-pointer ${scrolled ? 'border border-black text-black hover:bg-black hover:text-white' : 'border border-white text-white hover:bg-white hover:text-black'} `}
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}
