import { Search } from 'lucide-react';
import { Star } from 'lucide-react';

export default function Home() {
  return (
    <section>
      {/* 1.Hero section */}
      <div>
        <div>
          {/* 1.Home image */}
          <img
            className='h-[clamp(648px,57vw,827px)] w-full object-cover'
            src='/images/02_homeburger.png'
            alt='hamburger'
          />
          <div className='absolute inset-0 top-0 left-0 h-[clamp(648px,57vw,827px)] w-full bg-linear-to-b from-black/80'></div>
        </div>
        {/* 2. card search */}
        <div className='absolute top-1/2 right-1/2 w-[clamp(349px,57vw,712px)] translate-x-1/2 -translate-y-1/2 text-center text-white'>
          <h2 className='text-[clamp(36px,3vw,48px)] font-extrabold lg:whitespace-nowrap'>
            Explore Culinary Experiences
          </h2>
          <p className='mb-24 text-[clamp(18px,3vw,24px)] md:mb-40'>
            Search and refine your choice to discover the perfect restaurant.
          </p>
          <label className='relative'>
            <input
              placeholder='Search restaurants, food and drink'
              className='h-[clamp(48px,5vh,56px)] w-full rounded-full bg-white pl-60 text-neutral-700 lg:w-604'
            />
            <Search className='absolute top-0 left-24 h-20 w-20 text-neutral-700' />
          </label>
        </div>
      </div>

      {/* 2.Category section */}
      <div className='custom-container my-24 flex flex-wrap justify-between space-y-20 space-x-20 md:my-48 md:space-x-[46.8px]'>
        <div className='flex flex-col items-center justify-center space-y-30 md:space-y-23.5'>
          <img
            className='h-48 w-48 md:h-65 md:w-65'
            src='/images/03_restaurant.png'
            alt='restaurant'
          />
          <p className='text-sm font-bold md:text-lg'>All Restaurant</p>
        </div>
      </div>

      {/* 3. Recommended section */}
      <div className='custom-container'>
        {/* recommended title */}
        <div className='mb-16 flex items-center justify-between md:mb-32'>
          <h2 className='md:text-lg-lh text-xs-lh font-extrabold'>
            Recommended
          </h2>
          <p className='text-md font-extrabold text-[#C12116] hover:cursor-pointer md:text-lg'>
            See All
          </p>
        </div>
      </div>

      {/* 4.Detail recommended section */}
      <div className='custom-container flex flex-wrap'>
        <div>
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
