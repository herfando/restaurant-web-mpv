export default function Footer() {
  return (
    <div className='bg-[#0A0D12]'>
      <section className='custom-container py-40 text-[#FDFDFD] md:py-80'>
        {/* 1. left */}
        <div>
          <div className='text-lg-lh flex items-center gap-15 font-extrabold'>
            <img
              className='h-42 w-42'
              src='/icons/01_brandfoody.svg'
              alt='brandfoody'
            />
            <h4 className='text-[#FFFFFF]'>Foody</h4>
          </div>
          <p>
            Enjoy homemade flavors & chef’s signature dishes, freshly prepared
            every day. Order online or visit our nearest branch.
          </p>
          <p>Follow on Social Media</p>
          <div></div>
        </div>
        {/* 2. middle */}
        <div></div>
        {/* 3. right */}
        <div></div>
      </section>
    </div>
  );
}
