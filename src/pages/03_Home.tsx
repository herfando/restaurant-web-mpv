import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Star } from 'lucide-react';
import {
  useRestaurants,
  useNearbyRestaurants,
  useBestSellerRestaurants,
  useRecommendedRestaurants,
} from '@/query/hooks/useRestaurant';
import type { Restaurant } from '@/query/types/restaurantType';
import type { RecommendedRestaurant } from '@/query/types/restaurantType';

type CategoryType =
  | 'recommended'
  | 'nearby'
  | 'discount'
  | 'bestseller'
  | 'delivery'
  | 'lunch';

export default function Home() {
  // State
  const [activeCategory, setActiveCategory] =
    useState<CategoryType>('recommended');
  const [searchText, setSearchText] = useState<string>('');
  const navigate = useNavigate();

  // Queries
  const recommendedQuery = useRecommendedRestaurants();
  const allQuery = useRestaurants();
  const nearbyQuery = useNearbyRestaurants();
  const bestSellerQuery = useBestSellerRestaurants();

  // Handlers
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value);

  const handleNavigateRestaurant = (id: string | number) =>
    navigate(`/restaurant/${id}`, { state: { fromHome: true } });

  const handleNavigateCategory = (category?: string) => {
    if (category) setActiveCategory(category as CategoryType);
    navigate('/category');
  };

  // Filtered restaurants based on active category and search text
  const filteredRestaurants: (Restaurant | RecommendedRestaurant)[] =
    useMemo(() => {
      const lowerSearch = searchText.toLowerCase();
      let data: (Restaurant | RecommendedRestaurant)[] = [];

      switch (activeCategory) {
        case 'recommended':
          data = recommendedQuery.data?.data.recommendations || [];
          break;
        case 'nearby':
          data = nearbyQuery.data?.data.restaurants || [];
          break;
        case 'bestseller':
          data = bestSellerQuery.data?.data.restaurants || [];
          break;
        default:
          data = allQuery.data?.data.restaurants || [];
          break;
      }

      return data.filter((r) => r.name.toLowerCase().includes(lowerSearch));
    }, [
      activeCategory,
      searchText,
      recommendedQuery.data,
      nearbyQuery.data,
      bestSellerQuery.data,
      allQuery.data,
    ]);

  // Category list for mapping
  const categories = [
    {
      label: 'All Restaurant',
      img: '/images/03_restaurant.png',
      key: 'delivery',
    },
    { label: 'Nearby', img: '/images/05_nearby.png', key: 'nearby' },
    { label: 'Discount', img: '/images/06_discount.png', key: 'discount' },
    {
      label: 'Best Seller',
      img: '/images/07_bestseller.png',
      key: 'bestseller',
    },
    { label: 'Delivery', img: '/images/08_delivery.png', key: 'delivery' },
    { label: 'Lunch', img: '/images/09_lunch.png', key: 'lunch' },
  ];

  return (
    <section>
      {/* 1. Hero section */}
      <div>
        <div>
          <img
            className='h-[clamp(648px,57vw,827px)] w-full object-cover'
            src='/images/02_homeburger.png'
            alt='hamburger'
          />
          {/* Overlay gradient */}
          <div className='absolute inset-0 top-0 left-0 h-[clamp(648px,57vw,827px)] w-full bg-linear-to-b from-black/80'></div>
        </div>

        {/* Hero text and search input */}
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
              onChange={handleSearchChange}
              className='h-[clamp(48px,5vh,56px)] w-full rounded-full bg-white pl-60 text-neutral-700 lg:w-604'
            />
            <Search className='absolute top-0 left-24 h-20 w-20 text-neutral-700' />
          </label>
        </div>
      </div>

      {/* 2. Category section */}
      <div className='custom-container my-24 grid grid-cols-3 justify-between space-y-20 space-x-20 md:my-48 md:grid-cols-6 md:space-x-[46.8px]'>
        {categories.map((cat) => (
          <div
            key={cat.key}
            className='flex flex-col items-center justify-center space-y-30 hover:cursor-pointer md:space-y-23.5'
            onClick={() => handleNavigateCategory(cat.key)}
          >
            <img
              className='h-48 w-48 md:h-65 md:w-65'
              src={cat.img}
              alt={cat.label}
            />
            <p className='text-sm font-bold md:text-lg'>{cat.label}</p>
          </div>
        ))}
      </div>

      {/* 3. Recommended section header */}
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

      {/* 4. Recommended restaurant details */}
      <div className='custom-container mb-48 grid grid-cols-1 justify-center gap-y-16 md:mb-100 md:grid-cols-2 md:gap-y-20 lg:grid-cols-3'>
        {filteredRestaurants.map((item) => (
          <div
            key={item.id}
            onClick={() => handleNavigateRestaurant(item.id)}
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
