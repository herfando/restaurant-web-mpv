import { useParams } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useRestaurantDetail } from '@/query/hooks/useRestaurant';

export default function Detail() {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const id = Number(restaurantId);

  const restaurantQuery = useRestaurantDetail(id);

  const restaurant = restaurantQuery.data?.data;
  const menus = restaurant?.menus || [];
  const reviews = restaurant?.reviews || [];

  if (restaurantQuery.isLoading) return null;
  if (restaurantQuery.isError) return null;
  if (!restaurant) return null;

  // HeroImage sebagai banner restoran (gambar pertama di array images)
  const heroImages = restaurant.images || [];
  const heroImage = restaurant.images[0] || '/images/10_image1.png';
  const sideImages = heroImages.slice(1, 4);

  return (
    <section className='custom-container'>
      {/* 1. HeroImage */}
      <div className='mb-16 flex gap-x-20 md:mb-32'>
        <img
          className='h-[clamp(260.63px,45vw,470px)] w-[clamp(361px,90vw,651px)] rounded-2xl object-cover'
          src={heroImage}
          alt={restaurant.name}
        />
        <div className='hidden space-y-20 md:block'>
          {sideImages[0] && (
            <img
              className='h-302 max-w-529 rounded-2xl object-cover'
              src={sideImages[0]}
              alt={`${restaurant.name} banner`}
            />
          )}
          <div className='flex gap-x-20'>
            {sideImages.slice(1).map((img, idx) => (
              <img
                key={idx}
                className='h-148 max-w-254.5 rounded-2xl object-cover'
                src={img}
                alt={`${restaurant.name} banner ${idx + 2}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 2. Shop */}
      <div className='mb-32 flex items-center justify-between'>
        <div className='flex items-center gap-12'>
          <img
            src={restaurant.logo || '/images/04_burgerking.png'}
            alt={restaurant.name}
            className='h-90 w-90 object-cover md:h-120 md:w-120'
          />
          <div className='space-y-2'>
            <p className='text-md font-extrabold md:text-lg'>
              {restaurant.name}
            </p>
            <p className='md:text-md flex items-center gap-2 text-sm md:gap-4'>
              <Star className='h-24 w-24 fill-[#FFAB0D] text-[#FFAB0D]' />
              <span>{restaurant.star || 4.9}</span>
            </p>
            <p className='md:text-md text-sm'>
              {restaurant.place || 'Jakarta Selatan'} <span>·</span>
              <span> {restaurant.distance || '0 km'}</span>
            </p>
          </div>
        </div>
        <div className='flex h-44 w-44 items-center justify-center gap-x-12 rounded-full border border-[#D5D7DA] hover:cursor-pointer md:w-140'>
          <img src='/icons/07_iconshare.png' alt='share icon' />
          <span className='hidden md:block'>Share</span>
        </div>
      </div>

      {/* line */}
      <div className='mb-16 w-full border border-[#D5D7DA] md:mb-36'></div>

      {/* 3. Menu */}
      <div>
        <div className='md:text-lg-lh text-xs-lh mb-16 font-extrabold md:mb-24'>
          Menu
        </div>
        <div className='mb-16 flex gap-x-8 md:mb-24 md:gap-x-12'>
          <div className='h-40 w-90 content-center rounded-full border border-[#C12116] bg-[#FFECEC] text-center font-bold text-[#C12116] hover:cursor-pointer md:h-46 md:w-98'>
            All Menu
          </div>
          <div className='h-40 w-90 content-center rounded-full border border-[#D5D7DA] text-center font-semibold hover:cursor-pointer md:h-46 md:w-98'>
            Food
          </div>
          <div className='h-40 w-90 content-center rounded-full border border-[#D5D7DA] text-center font-semibold hover:cursor-pointer md:h-46 md:w-98'>
            Drink
          </div>
        </div>
      </div>

      {/* picture menu */}
      <div className='flex flex-wrap justify-center gap-x-16 gap-y-16 md:justify-start md:gap-x-20 md:gap-y-24 lg:justify-start'>
        {menus.map((menu, idx) => (
          <div
            key={idx}
            className='w-285 space-y-16 space-x-16 md:space-y-24 md:space-x-20'
          >
            <div className='flex w-full justify-center'>
              <img
                src={menu.image || '/images/14_image5.png'}
                alt={menu.foodName}
                className='h-172.5 w-172.5 object-cover md:h-285 md:w-285'
              />
            </div>
            <div className='flex flex-col justify-between space-y-16 p-16 md:flex-row'>
              <p className='flex flex-col'>
                <span className='md:text-md text-sm'>{menu.foodName}</span>
                <span className='text-md font-bold md:text-lg'>
                  Rp{menu.price}
                </span>
              </p>
              <div className='md:text-md flex h-36 w-full items-center justify-center rounded-full bg-[#C12116] p-12 text-sm font-bold text-white md:h-40 md:w-79'>
                Add
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Review */}
      <div>
        <h3 className='text-xs-lh font-extrabold md:text-[36px]'>Review</h3>
        <p className='mb-16 flex gap-x-4 md:mb-24'>
          <span>
            <Star className='h-24 w-24 fill-[#FFAB0D] text-[#FFAB0D]' />
          </span>
          <span>
            {reviews.length ? reviews[0].star : 4.9} ({reviews.length} Ulasan)
          </span>
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          {reviews.map((rev, idx) => (
            <div key={idx} className='h-222 w-361 md:h-204 md:w-590'>
              <div className='mb-16 flex items-center gap-x-12'>
                <div className='h-58 w-58 rounded-full md:h-64 md:w-64'>
                  <img
                    src={rev.user?.avatar || '/images/15_image6.png'}
                    alt='img profile'
                  />
                </div>
                <div>
                  <p>{rev.user?.name || 'Anonymous'}</p>
                  <p>{new Date(rev.createdAt).toLocaleString()}</p>
                </div>
              </div>
              <div className='mb-8 flex gap-x-2'>
                {Array.from({ length: rev.star }, (_, i) => (
                  <Star
                    key={i}
                    className='h-24 w-24 fill-[#FFAB0D] text-[#FFAB0D]'
                  />
                ))}
              </div>
              <p>{rev.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
