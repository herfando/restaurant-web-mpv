import { Check } from 'lucide-react';

export default function Success() {
  return (
    <section className='absolute top-1/2 right-1/2 -translate-1/2 translate-x-1/2'>
      <div className='flex h-588 w-361 flex-col items-center text-center md:h-616 md:w-428'>
        {/* Foody */}
        <div className='mb-28 flex items-center justify-center gap-x-15 font-extrabold'>
          <img
            className='h-42 w-42'
            src='/icons/01_brandfoody.svg'
            alt='brand'
          />
          <p className='text-lg-lh'>Foody</p>
        </div>
        <div className='flex h-128 w-329 flex-col items-center gap-y-2 md:h-132 md:w-388'>
          {/* Check Mark */}
          <div className='flex h-64 w-64 items-center justify-center rounded-full bg-[#44AB09]'>
            <Check className='text-white' width={44} height={44} />
          </div>
          {/* Payment success */}
          <p className='text-md font-extrabold md:text-xl'>Payment Success</p>
          <p className='md:text-md text-sm'>
            Your payment has been successfully processed.
          </p>
        </div>
        {/* detail checkout */}
        <div className='mt-32 w-full space-y-16'>
          <div className='md:text-md flex w-full justify-between px-16 text-sm md:px-20'>
            <p>Date</p>
            <p className='font-bold'>25 August 2025, 15:51</p>
          </div>
          <div className='md:text-md flex w-full justify-between px-16 text-sm md:px-20'>
            <p>Payment Method</p>
            <p className='font-bold'>Bank Rakyat Indonesia</p>
          </div>
          <div className='md:text-md flex w-full justify-between px-16 text-sm md:px-20'>
            <p>Price ( 2 items)</p>
            <p className='font-bold'>Rp100.000</p>
          </div>
          <div className='md:text-md flex w-full justify-between px-16 text-sm md:px-20'>
            <p>Delivery Fee</p>
            <p className='font-bold'>Rp10.000</p>
          </div>
          <div className='md:text-md flex w-full justify-between px-16 text-sm md:px-20'>
            <p>Service Fee</p>
            <p className='font-bold'>Rp1.000</p>
          </div>
          <div className='md:text-md flex w-full justify-between px-16 text-sm md:px-20'>
            <p>Total</p>
            <p className='font-extrabold'>Rp1.000</p>
          </div>
          <button className='h-44 w-329 rounded-full bg-[#C12116] text-[#FDFDFD] md:h-48 md:w-388'>
            See My Orders
          </button>
        </div>
      </div>
    </section>
  );
}
