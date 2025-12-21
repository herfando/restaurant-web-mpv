import { Star } from 'lucide-react';

export default function Detail() {
  return (
    <section className='custom-container'>
      {/* 1. HeroImage */}
      <div className='mb-16 flex gap-x-20 md:mb-32'>
        <img
          className='h-260.63 w-full md:h-470'
          src='/images/10_image1.png'
          alt='burger1'
        />
        <div className='hidden space-y-20 md:block'>
          <img
            className='h-302 max-w-539'
            src='/images/11_image2.png'
            alt='burger2'
          />
          <div className='flex gap-x-20'>
            <img
              className='h-148 max-w-254.5'
              src='/images/12_image3.png'
              alt='burger3'
            />
            <img
              className='h-148 max-w-254.5'
              src='/images/13_image4.png'
              alt='burger4'
            />
          </div>
        </div>
      </div>
      {/* 2. Shop */}
      <div className='mb-32 flex items-center justify-between'>
        {/* left */}
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
        {/* rigth */}
        <div className='flex h-44 w-140 items-center justify-center gap-x-12 rounded-full border border-[#D5D7DA] hover:cursor-pointer'>
          <img src='/icons/07_iconshare.png' alt='share icon' />
          <span>Share</span>
        </div>
      </div>
      {/* line */}
      <div className='mb-16 w-full border border-[#D5D7DA] md:mb-36'></div>
      {/* Menu */}
      <div>
        <div className='md:text-lg-lh text-xs-lh mb-16 font-extrabold md:mb-24'>
          Menu
        </div>
        <div className='mb-16 flex gap-x-8 md:mb-24 md:gap-x-12'>
          {/* All Menu */}
          <div className='h-40 w-90 content-center rounded-full border border-[#C12116] bg-[#FFECEC] text-center font-bold text-[#C12116] hover:cursor-pointer md:h-46 md:w-98'>
            All Menu
          </div>
          {/* Food */}
          <div className='h-40 w-90 content-center rounded-full border border-[#D5D7DA] text-center font-semibold hover:cursor-pointer md:h-46 md:w-98'>
            Food
          </div>
          {/* Drink */}
          <div className='h-40 w-90 content-center rounded-full border border-[#D5D7DA] text-center font-semibold hover:cursor-pointer md:h-46 md:w-98'>
            Drink
          </div>
        </div>
      </div>
      {/* picture menu */}
      <div className='flex gap-x-16 gap-y-16 md:gap-x-20 md:gap-y-24'>
        <div className='w-285'>
          <img src='/images/14_image5.png' alt='burger5' />
          {/* detail price and add */}
          <div className='flex flex-col justify-between space-y-16 p-16 md:flex-row'>
            <p className='flex flex-col'>
              <span className='md:text-md text-sm'>Food Name</span>
              <span className='text-md font-bold md:text-lg'>Rp50.000</span>
            </p>
            <div className='md:text-md flex h-36 w-full items-center justify-center rounded-full bg-[#C12116] p-12 text-sm font-bold text-white md:h-40 md:w-79'>
              Add
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
