import { Search } from 'lucide-react';

export default function MyOrders() {
  return (
    <section className='custom-container'>
      <div className='flex gap-x-32'>
        {/* left */}
        <div className='h-274 w-240 rounded-xl bg-[#FFFFFF] p-20 shadow-xl'>
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
          <div className='h-724 p-16 md:h-734 md:w-full md:p-24'>
            <label className='relative'>
              <Search
                width={20}
                height={20}
                className='absolute top-1/2 left-16 -translate-y-1/2 text-neutral-500'
              />
              <input
                className='h-44 w-full rounded-full border border-neutral-300 pl-42'
                placeholder='Search'
                type='text'
              />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
