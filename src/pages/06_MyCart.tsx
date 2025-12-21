import { ChevronRight, Plus, Minus } from 'lucide-react';

export default function MyCart() {
  return (
    <section className='mx-auto mt-16 mb-40 max-w-832 pr-16 pl-16 md:mt-48 md:mb-100'>
      {/* My Cart */}
      <p className='md:text-lg-lh text-xs-lh font-extrabold'>My Cart</p>
      <div className='space-y-12 p-16 md:space-y-20'>
        {/* burger king */}
        <div className='flex items-center gap-x-8'>
          <img src='/images/16_image7.png' alt='shop' />
          <p className='text-md flex items-center gap-x-8 font-bold md:text-lg'>
            Burger King
          </p>
          <ChevronRight />
        </div>
        <div className='flex items-center justify-between'>
          {/* price and hamburger picture */}
          <div className='flex items-center gap-x-17'>
            <img
              className='h-80 w-80'
              src='/images/17_image8.png'
              alt='burger'
            />
            <div>
              <p className='md:text-md text-sm'>Food Name</p>
              <p className='text-md font-extrabold md:text-lg'>Rp50.000</p>
            </div>
          </div>
          {/* count plus & minus */}
          <div className='flex items-center gap-x-16'>
            <Minus className='hover:cursor-pointer' />
            <div>1</div>
            <div className='flex h-40 w-40 items-center justify-center rounded-full bg-[#C12116]'>
              <Plus className='text-white hover:cursor-pointer' />
            </div>
          </div>
        </div>
        {/* Total price */}
        <div className='flex flex-wrap items-center justify-between gap-y-12'>
          <div>
            <p className='md:text-md text-sm'>Total</p>
            <p className='text-lg font-extrabold md:text-xl'>Rp100.000</p>
          </div>
          <button className='h-48 w-full rounded-full bg-[#C12116] font-bold text-[#FDFDFD] hover:cursor-pointer md:w-240'>
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
}
