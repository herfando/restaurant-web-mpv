export default function NavbarGuest2() {
  return (
    <section className={`mx-auto h-80 w-full`}>
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
        {/* right */}
        <div className='hidden gap-16 md:flex'>
          <button
            className={`text-md h-48 w-163 rounded-full border border-black font-bold text-black hover:cursor-pointer hover:bg-black hover:text-white`}
          >
            Sign In
          </button>
          <button
            className={`text-md h-48 w-163 rounded-full border border-black font-bold text-black hover:cursor-pointer hover:bg-black hover:text-white`}
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}
