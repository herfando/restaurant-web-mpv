import { Search } from 'lucide-react';

export default function Home() {
  return (
    <section>
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
    </section>
  );
}
