export default function Login() {
  return (
    <section className='absolute top-1/2 mx-auto flex h-auto w-full -translate-y-1/2 items-center justify-center'>
      <div className='item mx-auto flex h-1024 w-full max-w-1472 pr-16 pl-16'>
        {/* 1. left side */}
        <div className='basis-1/2'>
          <img src='/images/01_burger.png' alt='burger' />
        </div>
        {/* 2. right side */}
        <div className='mx-auto flex basis-1/2 flex-col items-center justify-center'>
          {/* Foody */}
          <div className='bg-accent-green h-480 w-374'>
            <div className='flex space-y-16 space-x-[11.43px] md:space-y-20 md:space-x-15'>
              <img src='/icons/01_brandfoody.svg' alt='brand food' />
              <h3 className='md:-text-[32px] text-[24.38px] font-extrabold'>
                Foody
              </h3>
            </div>
            {/* welcome back */}
            <h3 className='md:text-sm-lh text-xs-lh font-extrabold'>
              Welcome Back
            </h3>
            {/* Good to see you again! Let’s eat */}
            <h4 className='md:text-md text-sm font-medium'>
              Good to see you again! Let’s eat
            </h4>
            <div className='mx-auto flex h-56 w-374 items-center justify-center gap-8 p-8'>
              <button className='h-full w-full basis-1/2 rounded-2xl bg-white text-[#0A0D12]'>
                Sign in
              </button>
              <button className='h-full w-full basis-1/2 rounded-2xl bg-white text-neutral-700'>
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
