import { Check, Star } from 'lucide-react';

export default function Category() {
  return (
    <section className='custom-container mb-40 md:mt-48 md:mb-100'>
      {/* title */}
      <h2 className='md:text-lg-lh font-extrabold md:mb-32'>All Restaurant</h2>
      {/* 1. Left */}
      <div className='flex gap-x-40'>
        {/* left */}
        <div className='w-266'>
          {/* Filter */}
          <div className='space-y-10'>
            <h4 className='font-extrabold'>FILTER</h4>
            <h4 className='font-extrabold'>Distance</h4>
            {/* Nearby */}
            <label className='flex gap-x-8'>
              <input type='checkbox' className='peer hidden' />
              <span className='flex h-20 w-20 cursor-pointer items-center justify-center rounded-sm border border-[#D5D7DA] text-white peer-checked:bg-[#C12116]'>
                <Check />
              </span>
              <span>Nearby</span>
            </label>
            {/* Within 1 km */}
            <label className='flex gap-x-8'>
              <input type='checkbox' className='peer hidden' />
              <span className='flex h-20 w-20 cursor-pointer items-center justify-center rounded-sm border border-[#D5D7DA] text-white peer-checked:bg-[#C12116]'>
                <Check />
              </span>
              <span>Within 1 km</span>
            </label>
            {/* Within 3 km */}
            <label className='flex gap-x-8'>
              <input type='checkbox' className='peer hidden' />
              <span className='flex h-20 w-20 cursor-pointer items-center justify-center rounded-sm border border-[#D5D7DA] text-white peer-checked:bg-[#C12116]'>
                <Check />
              </span>
              <span>Within 3 km</span>
            </label>
            {/* Within 5 km */}
            <label className='flex gap-x-8'>
              <input type='checkbox' className='peer hidden' />
              <span className='flex h-20 w-20 cursor-pointer items-center justify-center rounded-sm border border-[#D5D7DA] text-white peer-checked:bg-[#C12116]'>
                <Check />
              </span>
              <span>Within 5 km</span>
            </label>
          </div>
          {/* line */}
          <div className='my-24 w-full border border-[#D5D7DA]'></div>
          {/* Price */}
          <div>
            <p className='font-extrabold'>Price</p>
            <div className='space-y-10 px-16 py-8'>
              {/* form 1 */}
              <form className='flex h-54 w-full items-center rounded-xl border border-[#D5D7DA]'>
                <button className='ml-8 h-38 w-38 bg-[#F5F5F5] font-bold'>
                  Rp
                </button>
                <input
                  className='ml-8 w-full'
                  type='text'
                  placeholder='Minimum Price'
                />
              </form>
              {/* form 2 */}
              <form className='flex h-54 w-full items-center rounded-xl border border-[#D5D7DA]'>
                <button className='ml-8 h-38 w-38 bg-[#F5F5F5] font-bold'>
                  Rp
                </button>
                <input
                  className='ml-8 w-full'
                  type='text'
                  placeholder='Maximum Price'
                />
              </form>
            </div>
          </div>
          {/* line */}
          <div className='my-24 w-full border border-[#D5D7DA]'></div>
          {/* Rating */}
          <div>
            <p className='font-extrabold'>Rating</p>
            {/* Star 5 */}
            <label className='flex items-center gap-x-8 p-8'>
              <input type='checkbox' className='peer hidden' />
              <span className='flex h-20 w-20 cursor-pointer items-center justify-center rounded-sm border border-[#D5D7DA] text-white peer-checked:bg-[#C12116]'>
                <Check />
              </span>
              <span>
                <Star className='h-16 w-17 fill-[#FFAB0D] text-[#FFAB0D]' />
              </span>
              <span>5</span>
            </label>
            {/* Star 4 */}
            <label className='flex items-center gap-x-8 p-8'>
              <input type='checkbox' className='peer hidden' />
              <span className='flex h-20 w-20 cursor-pointer items-center justify-center rounded-sm border border-[#D5D7DA] text-white peer-checked:bg-[#C12116]'>
                <Check />
              </span>
              <span>
                <Star className='h-16 w-17 fill-[#FFAB0D] text-[#FFAB0D]' />
              </span>
              <span>4</span>
            </label>
            {/* Star 3 */}
            <label className='flex items-center gap-x-8 p-8'>
              <input type='checkbox' className='peer hidden' />
              <span className='flex h-20 w-20 cursor-pointer items-center justify-center rounded-sm border border-[#D5D7DA] text-white peer-checked:bg-[#C12116]'>
                <Check />
              </span>
              <span>
                <Star className='h-16 w-17 fill-[#FFAB0D] text-[#FFAB0D]' />
              </span>
              <span>3</span>
            </label>
            {/* Star 2 */}
            <label className='flex items-center gap-x-8 p-8'>
              <input type='checkbox' className='peer hidden' />
              <span className='flex h-20 w-20 cursor-pointer items-center justify-center rounded-sm border border-[#D5D7DA] text-white peer-checked:bg-[#C12116]'>
                <Check />
              </span>
              <span>
                <Star className='h-16 w-17 fill-[#FFAB0D] text-[#FFAB0D]' />
              </span>
              <span>2</span>
            </label>
            {/* Star 1 */}
            <label className='flex items-center gap-x-8 p-8'>
              <input type='checkbox' className='peer hidden' />
              <span className='flex h-20 w-20 cursor-pointer items-center justify-center rounded-sm border border-[#D5D7DA] text-white peer-checked:bg-[#C12116]'>
                <Check />
              </span>
              <span>
                <Star className='h-16 w-17 fill-[#FFAB0D] text-[#FFAB0D]' />
              </span>
              <span>1</span>
            </label>
          </div>
        </div>
        {/*2. Right */}
        <div>
          {/* shop */}
          <div className='flex items-center gap-12'>
            <img
              src='/images/04_burgerking.png'
              alt='burgerking'
              className='h-90 w-90 md:h-120 md:w-120'
            />
            <div className='space-y-2'>
              <p className='text-md font-extrabold md:text-lg'>Burger King</p>
              <p className='md:text-md flex items-center gap-2 text-sm md:gap-4'>
                <Star className='h-24 w-24 fill-[#FFAB0D] text-[#FFAB0D]' />
                <span>4.9</span>
              </p>
              <p className='md:text-md text-sm'>
                Jakarta Selatan <span>·</span>
                <span> 2.4 km</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
