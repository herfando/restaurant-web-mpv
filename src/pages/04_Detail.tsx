export default function Detail() {
  return (
    <section className='custom-container'>
      {/* HeroImage */}
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
    </section>
  );
}
