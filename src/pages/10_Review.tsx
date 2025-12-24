import { X, Star } from 'lucide-react';

export default function Review() {
  return (
    <div className=''>
      <section className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#FFFFFF]'>
        <div className='h-463 w-361 rounded-2xl p-16 md:h-518 md:w-439 md:px-26 md:py-24'>
          {/* Give Review */}
          <div className='flex justify-between'>
            <h3 className='md:text-xs-lh text-xl font-extrabold'>
              Give Review
            </h3>
            <X />
          </div>
          <div className='flex w-full flex-col items-center'>
            {/* Give rating */}
            <div className='mt-16 flex flex-col items-center md:mt-24'>
              <p className='text-md font-extrabold'>Give Rating</p>
              <div className='flex gap-x-4'>
                <Star className='h-[27.26px] w-[28.54px] fill-[#FDB022] text-[#FDB022] md:h-[33.39px] md:w-[34.96px]' />
                <Star className='h-[27.26px] w-[28.54px] fill-[#FDB022] text-[#FDB022] md:h-[33.39px] md:w-[34.96px]' />
                <Star className='h-[27.26px] w-[28.54px] fill-[#FDB022] text-[#FDB022] md:h-[33.39px] md:w-[34.96px]' />
                <Star className='h-[27.26px] w-[28.54px] fill-[#FDB022] text-[#FDB022] md:h-[33.39px] md:w-[34.96px]' />
                <Star className='h-[27.26px] w-[28.54px] fill-[#A4A7AE] text-[#A4A7AE] md:h-[33.39px] md:w-[34.96px]' />
              </div>
            </div>
            {/* form */}
            <label className='mt-16 block h-235 w-329 rounded-xl border border-neutral-300 p-12 md:mt-24 md:w-391'>
              <textarea
                className='md:text-md h-full w-full text-sm'
                placeholder='Please share your thoughts about our service!'
              />
            </label>
            {/* button send */}
            <div className='mb-16 w-full md:mb-24'>
              <button className='mt-14 h-44 w-full rounded-full bg-[#C12116] text-[#FDFDFD] hover:cursor-pointer md:mt-24 md:h-48 md:w-391'>
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
