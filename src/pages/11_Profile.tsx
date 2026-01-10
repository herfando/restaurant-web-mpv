import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

  return (
    <section className='mt-16 mb-48 flex gap-x-32 md:mt-48 md:mb-197 md:translate-x-160'>
      {/* left */}
      <div className='hidden h-274 w-240 rounded-xl bg-[#FFFFFF] p-20 shadow-xl lg:block'>
        <div className='mb-48 flex items-center gap-x-8'>
          <img
            className='h-48 w-48'
            src='/images/15_image6.png'
            alt='profile'
          />
          <span className='bold text-md md:text-lg'>John Doe</span>
        </div>
        {/* Delivery Address */}
        <div className='md:text-md space-y-28 text-sm'>
          <div
            className='flex gap-x-8 hover:cursor-pointer'
            onClick={() => navigate('/deliveryAddress')}
          >
            <img src='/icons/11_iconaddress.svg' alt='address' />
            <p className='hover:text-red-500'>Delivery Address</p>
          </div>
          {/* My Orders */}
          <div
            className='flex gap-x-8 hover:cursor-pointer'
            onClick={() => navigate('/my-orders')}
          >
            <img src='/icons/12_iconorders.svg' alt='orders' />
            <p className='hover:text-red-500'>My Orders</p>
          </div>
          {/* Logout */}
          <div
            className='flex gap-x-8 hover:cursor-pointer'
            onClick={() => navigate('/login')}
          >
            <img src='/icons/13_iconlogout.svg' alt='logout' />
            <p className='hover:text-red-500'>Logout</p>
          </div>
        </div>
      </div>
      {/* right */}
      <div className='w-full px-16 md:mx-auto md:p-0'>
        <h3 className='md:text-lg-lh text-xs-lh font-extrabold'>Profile</h3>
        <div className='space-y-12 bg-[#FFFFFF] p-16 shadow-xl md:h-298 md:w-524 md:p-20'>
          <img src='/images/15_image6.png' alt='profile image' />
          {/* Name */}
          <div className='md:text-md flex justify-between text-sm'>
            <p>Name</p>
            <p className='font-bold'>Johndoe</p>
          </div>
          {/* Email */}
          <div className='md:text-md flex justify-between text-sm'>
            <p>Email</p>
            <p className='font-bold'>johndoe@email.com</p>
          </div>
          {/* Nomor Handphone */}
          <div className='md:text-md flex justify-between text-sm'>
            <p>Nomor Handphone</p>
            <p className='font-bold'>081234567890</p>
          </div>
          {/* button Update Profile */}
          <div className='mb-16 w-full md:mb-24'>
            <button className='mt-14 h-44 w-full rounded-full bg-[#C12116] text-[#FDFDFD] hover:cursor-pointer md:mt-24 md:h-48'>
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
