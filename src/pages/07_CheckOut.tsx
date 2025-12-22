import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

export default function CheckOut() {
  const [selected, setSelected] = useState(false);
  return (
    <section className='mx-auto max-w-1032 px-32'>
      <p className='md:text-lg-lh text-xs-lh mb-16 font-extrabold md:mb-24'>
        Checkout
      </p>
      <div className='flex gap-x-20'>
        {/* left */}
        <div>
          <div className='flex items-center gap-x-8'>
            <img
              className='h-24 w-24 md:h-32 md:w-32'
              src='/icons/09_spot.png'
              alt='spot delivery adress'
            />
            <span>Delivery Address</span>
          </div>
          <div className='mt-4 space-y-4'>
            <p>Jl. Sudirman No. 25, Jakarta Pusat, 10220</p>
            <p>0812-3456-7890</p>
          </div>
          <button className='mt-16 mb-20 h-40 w-120 rounded-full border border-neutral-300 md:mt-21'>
            Change
          </button>
          <div className='w-361 space-y-12 p-16 md:w-590 md:space-y-20'>
            {/* burger king */}
            <div className='flex items-center justify-between'>
              <div className='flex gap-x-8'>
                <img src='/images/16_image7.png' alt='shop' />
                <p className='text-md flex items-center gap-x-8 font-bold md:text-lg'>
                  Burger King
                </p>
              </div>
              <button className='h-40 w-120 rounded-full border border-neutral-300'>
                Add item
              </button>
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
          </div>
        </div>

        {/* right */}
        <div className='w-390'>
          <p className='tet-md font-extrabold md:text-lg'>Payment Method</p>
          {/* BNI */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-x-5'>
              <div className='flex h-40 w-40 items-center justify-center'>
                <img
                  className='h-[8.66px] w-[29.63px]'
                  src='/images/18_BNI.png'
                  alt='bank BNI'
                />
              </div>
              <p>Bank Negara Indonesia</p>
            </div>
            <label>
              <input
                type='radio'
                checked={selected}
                onClick={() => setSelected(!selected)}
                className='peer hidden'
              />
              <div className='flex h-24 w-24 items-center justify-center rounded-full border border-neutral-400 peer-checked:bg-[#C12116] hover:cursor-pointer'>
                <img
                  className='h-[9.6] w-[9.6]'
                  src='/icons/10_Check.png'
                  alt='check'
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
