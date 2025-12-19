export default function Footer() {
  return (
    <div className='bg-[#0A0D12]'>
      <section className='custom-container py-40 text-[#FDFDFD] md:py-80'>
        {/* 1. left */}
        <div>
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
          <div className='flex gap-x-12'>
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
        {/* 2. middle */}
        <div></div>
        {/* 3. right */}
        <div></div>
      </section>
    </div>
  );
}
