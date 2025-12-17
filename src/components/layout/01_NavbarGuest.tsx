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
        <div className='flex gap-15'>
          <img
            className='h-42 w-42 text-white'
            src={
              scrolled ? '/icons/01_brandfoody.svg' : '/icons/02_whitelogo.svg'
            }
            alt='brandfoody'
          />
          <h3
            className={`self-center ${scrolled ? 'text-black' : 'text-white'} `}
          >
            Foody
          </h3>
        </div>
        {/* right */}
        <div className='flex'>
          <button
            className={`h-48 w-163 ${scrolled ? 'text-black' : 'text-white'} `}
          >
            Sign In
          </button>
          <button
            className={`h-48 w-163 ${scrolled ? 'text-black' : 'text-white'} `}
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}
