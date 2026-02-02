import { useState, useEffect } from 'react';
import { Check, Star } from 'lucide-react';
import { useRestaurantsByFilter } from '@/query/hooks/useRestaurant';
import type { Restaurant } from '@/query/types/restaurantType';
import { useNavigate } from 'react-router-dom';

export default function Category() {
  const navigate = useNavigate();

  // ================= STATE FILTER =================
  const [distance, setDistance] = useState<number | undefined>(undefined);
  const [priceMin, setPriceMin] = useState<number | undefined>(undefined);
  const [priceMax, setPriceMax] = useState<number | undefined>(undefined);
  const [rating, setRating] = useState<number | undefined>(undefined);

  // ================= FETCH RESTAURANTS =================
  const { data, isLoading, refetch } = useRestaurantsByFilter({
    distance,
    priceMin,
    priceMax,
    rating,
  });

  // ================= HANDLER FILTER =================
  const handleDistance = (value?: number) => setDistance(value);
  const handlePriceMin = (value?: number) => setPriceMin(value);
  const handlePriceMax = (value?: number) => setPriceMax(value);
  const handleRating = (value?: number) => setRating(value);

  // otomatis refetch saat filter berubah
  useEffect(() => {
    refetch();
  }, [distance, priceMin, priceMax, rating, refetch]);

  const restaurants: Restaurant[] = data?.data.restaurants || [];

  return (
    <section className='custom-container mb-40 md:mt-48 md:mb-100'>
      {/* title */}
      <h2 className='md:text-lg-lh font-extrabold md:mb-32'>All Restaurant</h2>
      <div className='flex gap-x-40'>
        {/* LEFT FILTER */}
        <div className='hidden w-266 md:block'>
          <div className='space-y-10'>
            <h4 className='font-extrabold'>FILTER</h4>
            <h4 className='font-extrabold'>Distance</h4>

            <label className='flex gap-x-8'>
              <input
                type='checkbox'
                className='peer hidden'
                onChange={() => handleDistance(undefined)}
              />
              <span className='flex h-20 w-20 cursor-pointer items-center justify-center rounded-sm border border-[#D5D7DA] text-white peer-checked:bg-[#C12116]'>
                <Check />
              </span>
              <span>Nearby</span>
            </label>

            <label className='flex gap-x-8'>
              <input
                type='checkbox'
                className='peer hidden'
                onChange={() => handleDistance(1)}
              />
              <span className='flex h-20 w-20 cursor-pointer items-center justify-center rounded-sm border border-[#D5D7DA] text-white peer-checked:bg-[#C12116]'>
                <Check />
              </span>
              <span>Within 1 km</span>
            </label>

            <label className='flex gap-x-8'>
              <input
                type='checkbox'
                className='peer hidden'
                onChange={() => handleDistance(3)}
              />
              <span className='flex h-20 w-20 cursor-pointer items-center justify-center rounded-sm border border-[#D5D7DA] text-white peer-checked:bg-[#C12116]'>
                <Check />
              </span>
              <span>Within 3 km</span>
            </label>

            <label className='flex gap-x-8'>
              <input
                type='checkbox'
                className='peer hidden'
                onChange={() => handleDistance(5)}
              />
              <span className='flex h-20 w-20 cursor-pointer items-center justify-center rounded-sm border border-[#D5D7DA] text-white peer-checked:bg-[#C12116]'>
                <Check />
              </span>
              <span>Within 5 km</span>
            </label>
          </div>

          <div className='my-24 w-full border border-[#D5D7DA]'></div>

          {/* Price */}
          <div>
            <p className='font-extrabold'>Price</p>
            <div className='space-y-10 px-16 py-8'>
              <form className='flex h-54 w-full items-center rounded-xl border border-[#D5D7DA]'>
                <button className='ml-8 h-38 w-38 bg-[#F5F5F5] font-bold'>
                  Rp
                </button>
                <input
                  className='ml-8 w-full'
                  type='number'
                  placeholder='Minimum Price'
                  onChange={(e) =>
                    handlePriceMin(
                      e.target.value ? Number(e.target.value) : undefined
                    )
                  }
                />
              </form>
              <form className='flex h-54 w-full items-center rounded-xl border border-[#D5D7DA]'>
                <button className='ml-8 h-38 w-38 bg-[#F5F5F5] font-bold'>
                  Rp
                </button>
                <input
                  className='ml-8 w-full'
                  type='number'
                  placeholder='Maximum Price'
                  onChange={(e) =>
                    handlePriceMax(
                      e.target.value ? Number(e.target.value) : undefined
                    )
                  }
                />
              </form>
            </div>
          </div>

          <div className='my-24 w-full border border-[#D5D7DA]'></div>

          {/* Rating */}
          <div>
            <p className='font-extrabold'>Rating</p>
            {[5, 4, 3, 2, 1].map((star) => (
              <label key={star} className='flex items-center gap-x-8 p-8'>
                <input
                  type='checkbox'
                  className='peer hidden'
                  onChange={() => handleRating(star)}
                />
                <span className='flex h-20 w-20 cursor-pointer items-center justify-center rounded-sm border border-[#D5D7DA] text-white peer-checked:bg-[#C12116]'>
                  <Check />
                </span>
                <span>
                  <Star className='h-16 w-17 fill-[#FFAB0D] text-[#FFAB0D]' />
                </span>
                <span>{star}</span>
              </label>
            ))}
          </div>
        </div>

        {/* RIGHT RESTAURANT LIST */}
        <div className='grid w-361 grid-cols-1 items-start justify-center gap-y-16 md:w-894 md:grid-cols-2'>
          {isLoading ? (
            <p>Loading...</p>
          ) : restaurants.length === 0 ? (
            <p className='text-sm text-neutral-500'>No restaurant found</p>
          ) : (
            restaurants.map((rest) => (
              <div
                key={rest.id}
                className='mb-8 flex items-center gap-12 hover:cursor-pointer'
                onClick={() =>
                  navigate(`/restaurant/${rest.id}`, {
                    state: { fromHome: true },
                  })
                }
              >
                <img
                  src={rest.logo}
                  alt={rest.name}
                  className='h-90 w-90 object-cover md:h-120 md:w-120'
                />
                <div className='space-y-2'>
                  <p className='text-md font-extrabold md:text-lg'>
                    {rest.name}
                  </p>
                  <p className='md:text-md flex items-center gap-2 text-sm md:gap-4'>
                    <Star className='h-24 w-24 fill-[#FFAB0D] text-[#FFAB0D]' />
                    <span>{rest.star}</span>
                  </p>
                  <p className='md:text-md text-sm'>
                    {rest.place} <span>·</span> <span> {rest.distance} km</span>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
