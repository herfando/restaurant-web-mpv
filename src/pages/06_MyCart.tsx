import { ChevronRight, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/query/hooks/useCart';
import type { CartRestaurant, CartItem } from '@/query/types/cartType';

export default function MyCart() {
  const navigate = useNavigate();
  const { cart, update, remove } = useCart();

  if (!cart.length) {
    return (
      <section className='mx-auto mt-16 max-w-832 px-16'>
        <p className='md:text-lg-lh text-xs-lh font-extrabold'>My Cart</p>
        <p className='mt-24 text-center text-neutral-500'>
          Cart kamu masih kosong
        </p>
      </section>
    );
  }

  return (
    <section className='mx-auto mt-16 mb-40 max-w-832 pr-16 pl-16 md:mt-48 md:mb-100'>
      <p className='md:text-lg-lh text-xs-lh font-extrabold'>My Cart</p>

      {/* WRAPPER HANYA BUAT GAP */}
      <div className='space-y-24'>
        {cart.map((restaurant: CartRestaurant) => {
          const restaurantTotal = restaurant.items.reduce(
            (sum: number, item: CartItem) =>
              sum + item.quantity * item.menu.price,
            0
          );

          return (
            <div
              key={restaurant.restaurant.id}
              className='space-y-12 rounded-2xl bg-white p-16 shadow-2xl md:space-y-20'
            >
              {/* Restaurant */}
              <div className='flex items-center gap-x-8'>
                <img
                  src={restaurant.restaurant.logo || '/images/16_image7.png'}
                  alt='shop'
                  className='h-32 w-32 object-cover'
                />
                <p className='text-md flex items-center gap-x-8 font-bold md:text-lg'>
                  {restaurant.restaurant.name}
                </p>
                <ChevronRight />
              </div>

              {/* Items */}
              {restaurant.items.map((item: CartItem) => (
                <div
                  key={item.id}
                  className='flex items-center justify-between'
                >
                  <div className='flex items-center gap-x-17'>
                    <img
                      className='h-80 w-80 object-cover'
                      src={item.menu.image || '/images/17_image8.png'}
                      alt={item.menu.foodName}
                    />
                    <div>
                      <p className='md:text-md text-sm'>{item.menu.foodName}</p>
                      <p className='text-md font-extrabold md:text-lg'>
                        Rp{item.menu.price}
                      </p>
                    </div>
                  </div>

                  {/* Counter */}
                  <div className='flex items-center gap-x-16'>
                    <Minus
                      onClick={() =>
                        item.quantity === 1
                          ? remove(item.id)
                          : update({
                              id: item.id,
                              quantity: item.quantity - 1,
                            })
                      }
                      className='hover:cursor-pointer'
                    />

                    <div className='text-md font-semibold md:text-xl'>
                      {item.quantity}
                    </div>

                    <div
                      onClick={() =>
                        update({
                          id: item.id,
                          quantity: item.quantity + 1,
                        })
                      }
                      className='flex h-40 w-40 items-center justify-center rounded-full bg-[#C12116]'
                    >
                      <Plus className='text-white hover:cursor-pointer' />
                    </div>
                  </div>
                </div>
              ))}

              {/* Per Restaurant Total */}
              <div className='flex flex-wrap items-center justify-between gap-y-12'>
                <div>
                  <p className='md:text-md text-sm'>Total</p>
                  <p className='text-lg font-extrabold md:text-xl'>
                    Rp{restaurantTotal}
                  </p>
                </div>

                <button
                  onClick={() =>
                    navigate('/checkout', {
                      state: { restaurant },
                    })
                  }
                  className='h-48 w-full rounded-full bg-[#C12116] font-bold text-[#FDFDFD] hover:cursor-pointer md:w-240'
                >
                  Checkout
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
