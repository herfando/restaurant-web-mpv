export default function Footer() {
  return (
    <div className='bg-[#0A0D12]'>
      <section className='custom-container flex flex-wrap gap-x-210 py-40 text-[#FDFDFD] md:py-80'>
        {/* 1. left */}
        <div className='w-361 md:w-380'>
          {/* Foody */}
          <div className='text-lg-lh mb-22 flex items-center gap-15 font-extrabold'>
            <img
              className='h-42 w-42'
              src='/icons/01_brandfoody.svg'
              alt='brandfoody'
            />
            <h4 className='text-[#FFFFFF]'>Foody</h4>
          </div>
          {/* text */}
          <p className='md:text-md mb-16 text-sm md:mb-40'>
            Enjoy homemade flavors & chef’s signature dishes, freshly prepared
            every day. Order online or visit our nearest branch.
          </p>
          {/* follow socmed */}
          <p className='md:text-md mb-20 text-sm font-extrabold'>
            Follow on Social Media
          </p>
          {/* icons socmed */}
          <div className='mb-24 flex gap-x-12'>
            {/* facebook */}
            <div className='flex h-40 w-40 items-center justify-center rounded-full border border-neutral-800'>
              <img src='/icons/03_fb.svg' alt='facebook' />
            </div>
            {/* instagram */}
            <div className='flex h-40 w-40 items-center justify-center rounded-full border border-neutral-800'>
              <img src='/icons/04_ig.svg' alt='facebook' />
            </div>
            {/* linkedin */}
            <div className='flex h-40 w-40 items-center justify-center rounded-full border border-neutral-800'>
              <img src='/icons/05_in.svg' alt='facebook' />
            </div>
            {/* tiktok */}
            <div className='flex h-40 w-40 items-center justify-center rounded-full border border-neutral-800'>
              <img src='/icons/06_tiktok.svg' alt='facebook' />
            </div>
          </div>
        </div>
        <div className='flex gap-x-16 md:gap-x-210'>
          {/* 2. middle */}
          <div className='w-172.5 space-y-16 md:w-200 md:space-y-20'>
            <p className='md:text-md text-sm font-extrabold'>Explore</p>
            <p className='md:text-md text-sm'>All Food</p>
            <p className='md:text-md text-sm'>Nearby</p>
            <p className='md:text-md text-sm'>Discount</p>
            <p className='md:text-md text-sm'>Best Seller</p>
            <p className='md:text-md text-sm'>Delivery</p>
            <p className='md:text-md text-sm'>Lunch</p>
          </div>
          {/* 3. right */}
          <div className='w-172.5 space-y-16 md:w-200 md:space-y-20'>
            <p className='md:text-md text-sm font-extrabold'>Help</p>
            <p className='md:text-md text-sm'>How to Order</p>
            <p className='md:text-md text-sm'>Payment Methods</p>
            <p className='md:text-md text-sm'>Track My Order</p>
            <p className='md:text-md text-sm'>FAQ</p>
            <p className='md:text-md text-sm'>Contact Us</p>
          </div>
        </div>
      </section>
    </div>
  );
}
