import { Search } from 'lucide-react';
import { useCart } from '@/query/hooks/useCart';
import type { CartRestaurant, CartItem } from '@/query/types/cartType';
import { useState } from 'react';
import Review from './10_Review';
import { useNavigate } from 'react-router-dom';

export default function MyOrders() {
  const { cart } = useCart();
  const [showReview, setShowReview] = useState(false);
  const navigate = useNavigate();

  const totalPrice = (items: CartItem[]) =>
    items.reduce((sum, item) => sum + item.quantity * item.menu.price, 0);

  return (
    <section className='custom-container relative'>
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

          <div className='md:text-md space-y-28 text-sm'>
            <div
              className='flex gap-x-8 hover:cursor-pointer'
              onClick={() => navigate('/deliveryAddress')}
            >
              <img src='/icons/11_iconaddress.svg' alt='address' />
              <p className='hover:text-red-500'>Delivery Address</p>
            </div>

            <div
              className='flex gap-x-8 hover:cursor-pointer'
              onClick={() => navigate('/my-orders')}
            >
              <img src='/icons/12_iconorders.svg' alt='orders' />
              <p className='hover:text-red-500'>My Orders</p>
            </div>

            <div
              className='flex gap-x-8 hover:cursor-pointer'
              onClick={() => navigate('/login')}
            >
              <img src='/icons/13_iconlogout.svg' alt='logout' />
              <p className='hover:text-red-500'>Logout</p>
            </div>
          </div>
        </div>

        {/* right */}
        <div className='w-full'>
          <h2 className='md:text-lg-lh text-xs-lh mb-16 font-extrabold md:mb-24'>
            My Orders
          </h2>

          <div className='w-full p-16 md:p-24'>
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

            {/* STATUS BUTTONS */}
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

            {/* CART ITEMS */}
            {cart.map((restaurant: CartRestaurant) => (
              <div
                key={restaurant.restaurant.id}
                className='mt-20 p-18 md:p-20'
              >
                <div className='flex items-center justify-between'>
                  <div className='flex gap-x-8'>
                    {/* Logo restoran selalu tampil */}
                    <img
                      src={
                        restaurant.restaurant.logo || '/images/16_image7.png'
                      }
                      alt={restaurant.restaurant.name}
                      className='h-32 w-32 object-cover'
                    />
                    <p className='text-md flex items-center gap-x-8 font-bold md:text-lg'>
                      {restaurant.restaurant.name}
                    </p>
                  </div>
                </div>

                {restaurant.items.map((item: CartItem) => (
                  <div
                    key={item.id}
                    className='mt-14 flex items-center gap-x-17 md:mt-16'
                  >
                    <img
                      className='h-64 w-64 object-cover md:h-80 md:w-80'
                      src={item.menu.image || '/images/17_image8.png'}
                      alt={item.menu.foodName}
                    />
                    <div>
                      <p className='md:text-md text-sm'>{item.menu.foodName}</p>
                      <p className='text-md font-extrabold md:text-lg'>
                        {item.quantity} x Rp{item.menu.price}
                      </p>
                    </div>
                  </div>
                ))}

                <div className='my-12 w-full border border-[#D5D7DA] md:my-16'></div>

                <div className='flex flex-wrap justify-between gap-y-12'>
                  <div className='text-sm'>
                    <p>Total</p>
                    <p className='text-md font-extrabold md:text-xl'>
                      Rp{totalPrice(restaurant.items)}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowReview(true)}
                    className='h-44 w-full rounded-full bg-[#C12116] text-white hover:cursor-pointer md:h-48 md:w-240'
                  >
                    Give Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* POPUP REVIEW */}
      {showReview && (
        <>
          {/* overlay semi-transparent */}
          <div
            onClick={() => setShowReview(false)}
            className='fixed inset-0 z-40 bg-[#0A0D1280]'
          />
          <div className='fixed inset-0 z-50 flex items-center justify-center'>
            <Review />
          </div>
        </>
      )}
    </section>
  );
}
