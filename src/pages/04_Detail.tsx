import { useParams, useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useRestaurantDetail } from '@/query/hooks/useRestaurant';
import { useState } from 'react';

import { useAuthStore } from '@/zustand/authStore';
import { useCart } from '@/query/hooks/useCart'; // pakai hooks baru

export default function Detail() {
  //#region Zustand & Router
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  const { cart, add, update, remove } = useCart(); // hook cart

  //#endregion

  //#region Params & Query
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const id = Number(restaurantId);
  const restaurantQuery = useRestaurantDetail(id);

  const restaurant = restaurantQuery.data?.data;
  const menus = restaurant?.menus || [];
  const reviews = restaurant?.reviews || [];
  //#endregion

  //#region State Filter Menu
  const [activeFilter, setActiveFilter] = useState<'all' | 'food' | 'drink'>(
    'all'
  );

  const filteredMenus =
    activeFilter === 'all'
      ? menus
      : menus.filter((menu) => menu.type === activeFilter);
  //#endregion

  //#region Loading/Error Guard
  if (restaurantQuery.isLoading) return null;
  if (restaurantQuery.isError) return null;
  if (!restaurant) return null;
  //#endregion

  //#region Hero Images
  const heroImages = restaurant.images || [];
  const heroImage = restaurant.images[0] || '/images/10_image1.png';
  const sideImages = heroImages.slice(1, 4);
  //#endregion

  //#region Share Function
  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: restaurant.name,
          text: `Cek restoran ${restaurant.name} ini yuk!`,
          url,
        });
      } catch {}
    } else {
      try {
        await navigator.clipboard.writeText(url);
        alert('Link berhasil disalin!');
      } catch {
        alert('Gagal menyalin link');
      }
    }
  };
  //#endregion

  //#region Helper functions tombol Add / Counter
  const getCount = (menuId: number) => {
    for (const rest of cart) {
      const item = rest.items.find(
        (i: { id: number; quantity: number; menu: { id: number } }) =>
          i.menu.id === menuId
      );
      if (item) return item.quantity;
    }
    return 0;
  };

  const handleAdd = (menuId: number) => {
    if (!user) return navigate('/login');
    add({ restaurantId: restaurant.id, menuId, quantity: 1 });
  };

  const handleIncrement = (menuId: number) => {
    for (const rest of cart) {
      const item = rest.items.find(
        (i: { id: number; quantity: number; menu: { id: number } }) =>
          i.menu.id === menuId
      );

      if (item) return update({ id: item.id, quantity: item.quantity + 1 });
    }
    handleAdd(menuId);
  };

  const handleDecrement = (menuId: number) => {
    for (const rest of cart) {
      const item = rest.items.find(
        (i: { id: number; quantity: number; menu: { id: number } }) =>
          i.menu.id === menuId
      );

      if (!item) return;

      // 👉 kalau tinggal 1 → hapus item
      if (item.quantity === 1) {
        remove(item.id);
        return;
      }

      // 👉 kalau masih > 1 → update quantity
      update({
        id: item.id,
        quantity: item.quantity - 1,
      });
      return;
    }
  };

  //#endregion

  //#region region bottom cart bar
  const totalItem = cart.reduce(
    (
      acc: number,
      rest: {
        items: {
          quantity: number;
        }[];
      }
    ) => acc + rest.items.reduce((sum: number, item) => sum + item.quantity, 0),
    0
  );

  const totalPrice = cart.reduce(
    (
      acc: number,
      rest: {
        items: {
          quantity: number;
          menu: {
            price: number;
          };
        }[];
      }
    ) =>
      acc +
      rest.items.reduce(
        (sum: number, item) => sum + item.quantity * item.menu.price,
        0
      ),
    0
  );
  //#endregion

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
              className='h-[clamp(80px,29vw,302px)] w-[clamp(234px,90vw,529px)] rounded-2xl object-cover'
              src={sideImages[0]}
              alt={`${restaurant.name} banner`}
            />
          )}
          <div className='flex gap-x-20'>
            {sideImages.slice(1).map((img, idx) => (
              <img
                key={idx}
                className='h-[clamp(20px,14vw,148px)] w-[clamp(74px,45vw,254px)] rounded-2xl'
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

        {/* SHARE BUTTON */}
        <div
          onClick={handleShare}
          className='flex h-44 w-44 items-center justify-center gap-x-12 rounded-full border border-[#D5D7DA] font-semibold hover:cursor-pointer hover:border-[#C12116] hover:bg-[#FFECEC] hover:text-[#C12116] md:w-140'
        >
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
          <div
            onClick={() => setActiveFilter('all')}
            className={`h-40 w-90 content-center rounded-full border text-center hover:cursor-pointer md:h-46 md:w-98 ${
              activeFilter === 'all'
                ? 'border-[#C12116] bg-[#FFECEC] font-bold text-[#C12116]'
                : 'border-[#D5D7DA] font-semibold'
            }`}
          >
            All Menu
          </div>
          <div
            onClick={() => setActiveFilter('food')}
            className={`h-40 w-90 content-center rounded-full border text-center hover:cursor-pointer md:h-46 md:w-98 ${
              activeFilter === 'food'
                ? 'border-[#C12116] bg-[#FFECEC] font-bold text-[#C12116]'
                : 'border-[#D5D7DA] font-semibold'
            }`}
          >
            Food
          </div>
          <div
            onClick={() => setActiveFilter('drink')}
            className={`h-40 w-90 content-center rounded-full border text-center hover:cursor-pointer md:h-46 md:w-98 ${
              activeFilter === 'drink'
                ? 'border-[#C12116] bg-[#FFECEC] font-bold text-[#C12116]'
                : 'border-[#D5D7DA] font-semibold'
            }`}
          >
            Drink
          </div>
        </div>
      </div>

      {/* picture menu */}
      <div className='flex flex-wrap justify-center gap-x-16 gap-y-16 md:justify-start md:gap-x-20 md:gap-y-24 lg:justify-start'>
        {filteredMenus.map((menu) => {
          const count = getCount(menu.id);
          return (
            <div
              key={menu.id}
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

                {/* Add Button / Counter */}
                {count === 0 ? (
                  <div
                    onClick={() => handleAdd(menu.id)}
                    className='md:text-md flex h-36 w-full items-center justify-center rounded-full bg-[#C12116] p-12 text-sm font-bold text-white hover:cursor-pointer md:h-40 md:w-79'
                  >
                    Add
                  </div>
                ) : (
                  <div className='flex h-36 w-114 items-center justify-between md:h-40 md:w-123'>
                    <button
                      onClick={() => handleDecrement(menu.id)}
                      className='h-36 w-36 rounded-full border border-neutral-300 text-2xl hover:cursor-pointer md:h-40 md:w-40'
                    >
                      -
                    </button>
                    <span className='w-1/3 text-center'>{count}</span>
                    <button
                      onClick={() => handleIncrement(menu.id)}
                      className='h-36 w-36 rounded-full bg-[#C12116] text-2xl text-white hover:cursor-pointer md:h-40 md:w-40'
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
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

      {/* 5. Render Bottom Cart Bar */}
      {totalItem > 0 && (
        <div className='fixed right-0 bottom-0 left-0 z-50 border-t border-[#D5D7DA] bg-white'>
          <div className='custom-container flex items-center justify-between py-16'>
            <div>
              <div className='flex items-center gap-x-3'>
                <img
                  className='h-20 w-20 md:h-24 md:w-24'
                  src='/icons/14_cartblack.png'
                  alt='cart'
                />
                <p className='md:text-md text-sm'>{totalItem} item</p>
              </div>
              <p className='text-md mt-2 font-extrabold md:text-xl'>
                Rp{totalPrice}
              </p>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className='md:text-md h-40 w-160 rounded-full bg-[#C12116] px-24 text-sm font-bold text-white hover:cursor-pointer md:h-44 md:w-230'
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
