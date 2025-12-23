import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

export default function CheckOut() {
  const [selected, setSelected] = useState('');

  const payments = [
    {
      id: 'BNI',
      name: 'Bank Negara Indonesia',
      img: '/images/18_BNI.png',
    },
    {
      id: 'BRI',
      name: 'Bank Rakyat Indonesia',
      img: '/images/19_BRI.png',
    },
    {
      id: 'BCA',
      name: 'Bank Central Asia',
      img: '/images/20_BCA.png',
    },
    {
      id: 'Mandiri',
      name: 'Mandiri',
      img: '/images/21_MANDIRI.png',
    },
  ];

  return (
    <section className='mx-auto mb-48 max-w-1032 px-32 md:mb-100'>
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
            <span className='text-md font-extrabold md:text-lg'>
              Delivery Address
            </span>
          </div>

          <div className='mt-4 space-y-4'>
            <p>Jl. Sudirman No. 25, Jakarta Pusat, 10220</p>
            <p>0812-3456-7890</p>
          </div>

          <button className='mt-16 mb-20 h-40 w-120 rounded-full border border-neutral-300 font-bold md:mt-21'>
            Change
          </button>

          <div className='w-361 space-y-12 p-16 md:w-590 md:space-y-20'>
            <div className='flex items-center justify-between'>
              <div className='flex gap-x-8'>
                <img src='/images/16_image7.png' alt='shop' />
                <p className='text-md flex items-center gap-x-8 font-bold md:text-lg'>
                  Burger King
                </p>
              </div>
              <button className='md:text-md h-40 w-120 rounded-full border border-neutral-300 text-sm font-bold hover:cursor-pointer'>
                Add item
              </button>
            </div>

            <div className='flex items-center justify-between'>
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
        {/* 1. Payment Method */}
        <div>
          <div className='w-390'>
            <p className='tet-md font-extrabold md:text-lg'>Payment Method</p>
            {payments.map((payment, index) => (
              <div key={payment.id}>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-x-5'>
                    <div className='flex h-40 w-40 items-center justify-center rounded-sm border border-neutral-300'>
                      <img
                        className='w-[29.63px]'
                        src={payment.img}
                        alt={payment.name}
                      />
                    </div>
                    <p className='md:text-md text-sm'>{payment.name}</p>
                  </div>

                  <label>
                    <input
                      type='radio'
                      name='payment'
                      value={payment.id}
                      checked={selected === payment.id}
                      onChange={(e) => setSelected(e.target.value)}
                      className='peer hidden'
                    />
                    <div className='flex h-24 w-24 items-center justify-center rounded-full border border-neutral-400 peer-checked:bg-[#C12116] hover:cursor-pointer'>
                      <img src='/icons/10_Check.png' alt='check' />
                    </div>
                  </label>
                </div>

                {index !== payments.length - 1 && (
                  <div className='my-16 w-full border border-[#D5D7DA]'></div>
                )}
              </div>
            ))}
          </div>
          {/* 2. Payment Summary */}
          <div className='my-16 h-[1px] w-full bg-[repeating-linear-gradient(to_right,#D5D7DA_0,#D5D7DA_6px,transparent_6px,transparent_10px)]' />
          <div className='space-y-12 md:space-y-16'>
            <p className='text-md mb-12 font-extrabold md:mb-16 md:text-lg'>
              Payment Summary
            </p>
            <p className='md:text-md flex justify-between text-sm'>
              <span>Price ( 2 items)</span>
              <span className='font-bold'>Rp100.000</span>
            </p>
            <p className='md:text-md flex justify-between text-sm'>
              <span>Delivery Fee</span>
              <span className='font-bold'>Rp10.000</span>
            </p>
            <p className='md:text-md flex justify-between text-sm'>
              <span>Service Fee</span>
              <span className='font-bold'>Rp1.000</span>
            </p>
            <p className='md:text-md flex justify-between text-sm'>
              <span>Total</span>
              <span className='font-extrabold'>Rp1.000</span>
            </p>
          </div>
          <button className='text-md md-w350 mt-12 h-44 w-full rounded-full bg-[#C12116] font-bold text-[#FDFDFD] hover:cursor-pointer md:mt-16 md:h-48'>
            Buy
          </button>
        </div>
      </div>
    </section>
  );
}
