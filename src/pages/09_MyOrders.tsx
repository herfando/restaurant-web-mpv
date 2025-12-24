import { Search } from 'lucide-react';

export default function MyOrders() {
  return (
    <section className='custom-container'>
      <div className='flex gap-x-32'>
        {/* left */}
        <div className='hidden h-274 w-240 rounded-xl bg-[#FFFFFF] p-20 shadow-xl lg:block'>
          <div className='mb-48 flex items-center gap-x-8'>
            <img
              className='h-48 w-48'
              src='/images/15_image6.png'
              alt='profile'
            />
            <span className='bold text-md md:text-lg'>John Doe</span>
          </div>
          {/* Delivery Address */}
          <div className='md:text-md space-y-28 text-sm'>
            <div className='flex gap-x-8'>
              <img src='/icons/11_iconaddress.svg' alt='address' />
              <p>Delivery Address</p>
            </div>
            {/* My Orders */}
            <div className='flex gap-x-8'>
              <img src='/icons/12_iconorders.svg' alt='orders' />
              <p>My Orders</p>
            </div>
            {/* Logout */}
            <div className='flex gap-x-8'>
              <img src='/icons/13_iconlogout.svg' alt='logout' />
              <p>Logout</p>
            </div>
          </div>
        </div>
        {/* right */}
        <div className='w-full'>
          <h2 className='md:text-lg-lh text-xs-lh mb-16 font-extrabold md:mb-24'>
            My Orders
          </h2>
          <div className='h-724 w-full p-16 md:h-734 md:p-24'>
            {/* Search */}
            <label className='relative'>
              <Search
                width={20}
                height={20}
                className='absolute top-1/2 left-16 -translate-y-1/2 text-neutral-500'
              />
              <input
                className='h-44 w-full max-w-640 rounded-full border border-neutral-300 pl-42'
                placeholder='Search'
                type='text'
              />
            </label>
            {/* button */}
            <div className='md:text-md mt-20 flex max-w-680 gap-x-8 text-sm font-semibold md:gap-x-12'>
              <button className='h-40 rounded-full border border-neutral-300 px-16 md:h-46'>
                Status
              </button>
              <button className='h-40 rounded-full border border-neutral-300 px-16 md:h-46'>
                Preparing
              </button>
              <button className='h-40 rounded-full border border-neutral-300 px-16 whitespace-nowrap md:h-46'>
                On the Way
              </button>
              <button className='h-40 rounded-full border border-neutral-300 px-16 md:h-46'>
                Delivered
              </button>
              <button className='h-40 rounded-full border border-neutral-300 px-16 md:h-46'>
                Done
              </button>
              <button className='h-40 rounded-full border border-neutral-300 px-16 md:h-46'>
                Canceled
              </button>
            </div>
            {/* Burger king */}
            <div className='mt-20 p-18 md:p-20'>
              <div className='flex items-center justify-between'>
                <div className='flex gap-x-8'>
                  <img src='/images/16_image7.png' alt='shop' />
                  <p className='text-md flex items-center gap-x-8 font-bold md:text-lg'>
                    Burger King
                  </p>
                </div>
              </div>
              <div className='mt-14 flex items-center gap-x-17 md:mt-16'>
                <img
                  className='h-80 w-80'
                  src='/images/17_image8.png'
                  alt='burger'
                />
                <div>
                  <p className='md:text-md text-sm'>Food Name</p>
                  <p className='text-md font-extrabold md:text-lg'>
                    2 x Rp50.000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
