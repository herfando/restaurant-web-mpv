import { Check } from 'lucide-react';

export default function Success() {
  return (
    <section className='absolute top-1/2 right-1/2 -translate-1/2 translate-x-1/2'>
      <div className='bg-accent-yellow h-588 w-361 text-center md:h-616 md:w-428'>
        {/* Foody */}
        <div className='flex items-center justify-center gap-x-15 font-extrabold'>
          <img
            className='h-42 w-42'
            src='/icons/01_brandfoody.svg'
            alt='brand'
          />
          <p className='text-lg-lh'>Foody</p>
        </div>
        {/* Check Mark */}
        <div className='h-64 w-64 rounded-full bg-[#44AB09]'>
          <Check className='text-white' />
        </div>
      </div>
    </section>
  );
}
