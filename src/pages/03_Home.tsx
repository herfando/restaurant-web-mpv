import { Search, Star } from 'lucide-react';
import { useState } from 'react';
import Category from './05_Category';
import {
  useRestaurants,
  useNearbyRestaurants,
  useBestSellerRestaurants,
  useRecommendedRestaurants,
} from '@/query/hooks/useRestaurant';
import type { Restaurant } from '@/query/types/restaurantType';
import type { RecommendedRestaurant } from '@/query/types/restaurantType';
import { useNavigate } from 'react-router-dom';

type Category =
  | 'recommended'
  | 'nearby'
  | 'discount'
  | 'bestseller'
  | 'delivery'
  | 'lunch';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>('recommended');
  const [searchText, setSearchText] = useState<string>('');

  const recommendedQuery = useRecommendedRestaurants();
  const allQuery = useRestaurants();
  const nearbyQuery = useNearbyRestaurants();
  const bestSellerQuery = useBestSellerRestaurants();

  const navigate = useNavigate();

  let filteredRestaurants: (Restaurant | RecommendedRestaurant)[] = [];

  if (activeCategory === 'recommended') {
    filteredRestaurants = (
      recommendedQuery.data?.data.recommendations || []
    ).filter((r) => r.name.toLowerCase().includes(searchText.toLowerCase()));
  } else if (activeCategory === 'nearby') {
    filteredRestaurants = (nearbyQuery.data?.data.restaurants || []).filter(
      (r) => r.name.toLowerCase().includes(searchText.toLowerCase())
    );
  } else if (activeCategory === 'bestseller') {
    filteredRestaurants = (bestSellerQuery.data?.data.restaurants || []).filter(
      (r) => r.name.toLowerCase().includes(searchText.toLowerCase())
    );
  } else {
    filteredRestaurants = (allQuery.data?.data.restaurants || []).filter((r) =>
      r.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return (
    <section>
      {/* 1.Hero section */}
      <div>
        <div>
          <img
            className='h-[clamp(648px,57vw,827px)] w-full object-cover'
            src='/images/02_homeburger.png'
            alt='hamburger'
          />
          <div className='absolute inset-0 top-0 left-0 h-[clamp(648px,57vw,827px)] w-full bg-linear-to-b from-black/80'></div>
        </div>

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
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className='h-[clamp(48px,5vh,56px)] w-full rounded-full bg-white pl-60 text-neutral-700 lg:w-604'
            />
            <Search className='absolute top-0 left-24 h-20 w-20 text-neutral-700' />
          </label>
        </div>
      </div>

      {/* 2.Category section */}
      <div className='custom-container my-24 grid grid-cols-3 justify-between space-y-20 space-x-20 md:my-48 md:grid-cols-6 md:space-x-[46.8px]'>
        <div
          className='flex flex-col items-center justify-center space-y-30 hover:cursor-pointer md:space-y-23.5'
          onClick={() => setActiveCategory('delivery')}
        >
          <img
            className='h-48 w-48 md:h-65 md:w-65'
            src='/images/03_restaurant.png'
            alt='restaurant'
          />
          <p className='text-sm font-bold md:text-lg'>All Restaurant</p>
        </div>

        <div
          className='flex flex-col items-center justify-center space-y-30 hover:cursor-pointer md:space-y-23.5'
          // onClick={() => setActiveCategory('nearby')}
          onClick={() => navigate('/category')}
        >
          <img
            className='h-48 w-48 md:h-65 md:w-65'
            src='/images/05_nearby.png'
            alt='nearby'
          />
          <p className='text-sm font-bold md:text-lg'>Nearby</p>
        </div>

        <div
          className='flex flex-col items-center justify-center space-y-30 hover:cursor-pointer md:space-y-23.5'
          onClick={() => setActiveCategory('discount')}
        >
          <img
            className='h-48 w-48 md:h-65 md:w-65'
            src='/images/06_discount.png'
            alt='discount'
          />
          <p className='text-sm font-bold md:text-lg'>Discount</p>
        </div>

        <div
          className='flex flex-col items-center justify-center space-y-30 hover:cursor-pointer md:space-y-23.5'
          onClick={() => setActiveCategory('bestseller')}
        >
          <img
            className='h-48 w-48 md:h-65 md:w-65'
            src='/images/07_bestseller.png'
            alt='bestseller'
          />
          <p className='text-sm font-bold md:text-lg'>Best Seller</p>
        </div>

        <div
          className='flex flex-col items-center justify-center space-y-30 hover:cursor-pointer md:space-y-23.5'
          onClick={() => setActiveCategory('delivery')}
        >
          <img
            className='h-48 w-48 md:h-65 md:w-65'
            src='/images/08_delivery.png'
            alt='delivery'
          />
          <p className='text-sm font-bold md:text-lg'>Delivery</p>
        </div>

        <div
          className='flex flex-col items-center justify-center space-y-30 hover:cursor-pointer md:space-y-23.5'
          onClick={() => setActiveCategory('lunch')}
        >
          <img
            className='h-48 w-48 md:h-65 md:w-65'
            src='/images/09_lunch.png'
            alt='lunch'
          />
          <p className='text-sm font-bold md:text-lg'>Lunch</p>
        </div>
      </div>

      {/* 3. Recommended section */}
      <div className='custom-container'>
        <div className='mb-16 flex items-center justify-between md:mb-32'>
          <h2 className='md:text-lg-lh text-xs-lh font-extrabold'>
            Recommended
          </h2>
          <p
            onClick={() => setActiveCategory('delivery')}
            className='text-md font-extrabold text-[#C12116] hover:cursor-pointer md:text-lg'
          >
            See All
          </p>
        </div>
      </div>

      {/* 4.Detail recommended section */}
      <div className='custom-container mb-48 grid grid-cols-1 justify-center gap-y-16 md:mb-100 md:grid-cols-2 md:gap-y-20 lg:grid-cols-3'>
        {filteredRestaurants.map((item) => (
          <div
            onClick={() =>
              navigate(`/restaurant/${item.id}`, { state: { fromHome: true } })
            }
            key={item.id}
            className='flex items-center gap-12 hover:cursor-pointer'
          >
            <img
              src={item.logo}
              alt={item.name}
              className='h-90 w-90 object-cover md:h-120 md:w-120'
            />
            <div className='space-y-2'>
              <p className='text-md font-extrabold md:text-lg'>{item.name}</p>
              <p className='md:text-md flex items-center gap-2 text-sm md:gap-4'>
                <Star className='h-24 w-24 fill-[#FFAB0D] text-[#FFAB0D]' />
                <span>{item.star}</span>
              </p>
              <p className='md:text-md text-sm'>{item.place}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
