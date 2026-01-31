import { Search, Star } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/zustand/authStore';
import { useMyReviews, useDeleteReview } from '@/query/hooks/useReview';
import Review from '@/pages/10_Review';

// ================= TYPES =================
type FlattenedItem = {
  id: number;
  quantity: number;
  menu: {
    id: number;
    foodName: string;
    price: number;
    image?: string;
  };
};

type FlattenedReview = {
  transactionId: string;
  restaurant?: {
    id: number;
    name: string;
    logo?: string;
  };
  items: FlattenedItem[];
  star: number;
  comment: string;
};

// ================= COMPONENT =================
export default function SummaryReviews() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const { data: reviewsData, isLoading } = useMyReviews();
  const deleteReview = useDeleteReview();

  const [editingReview, setEditingReview] = useState<FlattenedReview | null>(
    null
  );
  const [search, setSearch] = useState('');

  // ================= FILTER + SEARCH =================
  const reviews: FlattenedReview[] = useMemo(() => {
    const allReviews = reviewsData || [];
    return allReviews
      .map((rev) => ({
        transactionId: rev.transactionId,
        restaurant: rev.restaurant,
        items: rev.menus.map((m) => ({
          id: m.menuId,
          quantity: m.quantity,
          menu: {
            id: m.menuId,
            foodName: m.menuName,
            price: m.price,
            image: m.image,
          },
        })),
        star: rev.star,
        comment: rev.comment,
      }))
      .filter(
        (r) =>
          r.restaurant?.name.toLowerCase().includes(search.toLowerCase()) ||
          r.items.some((i) =>
            i.menu.foodName.toLowerCase().includes(search.toLowerCase())
          ) ||
          r.comment.toLowerCase().includes(search.toLowerCase())
      );
  }, [reviewsData, search]);

  const totalPrice = (items: FlattenedItem[]) =>
    items.reduce((sum, item) => sum + item.quantity * item.menu.price, 0);

  // ================= UI =================
  return (
    <section className='custom-container relative'>
      <div className='flex gap-x-32'>
        {/* LEFT SIDEBAR */}
        <div className='hidden h-274 w-240 rounded-xl bg-[#FFFFFF] p-20 shadow-xl lg:block'>
          {/* PROFILE */}
          <div className='mb-48 flex items-center gap-x-8'>
            <div className='h-48 w-48 overflow-hidden rounded-full bg-gray-200'>
              <img
                className='h-full w-full object-cover'
                src={user?.avatar || '/images/15_image6.png'}
                alt='profile'
              />
            </div>
            <span className='bold text-md md:text-lg'>
              {user?.name || 'Guest'}
            </span>
          </div>

          {/* NAVIGATION */}
          <div className='md:text-md space-y-28 text-sm'>
            <div
              className='flex gap-x-8 hover:cursor-pointer'
              onClick={() => navigate('/deliveryAddress')}
            >
              <img src='/icons/11_iconaddress.svg' alt='address' />
              <p className='hover:text-red-500'>Delivery Address</p>
            </div>

            <div
              className='flex gap-x-8 hover:cursor-pointer'
              onClick={() => navigate('/my-orders')}
            >
              <img src='/icons/12_iconorders.svg' alt='orders' />
              <p className='hover:text-red-500'>My Orders</p>
            </div>

            <div
              className='flex gap-x-8 hover:cursor-pointer'
              onClick={() => navigate('/my-reviews')}
            >
              <img src='/icons/12_iconorders.svg' alt='reviews' />
              <p className='hover:text-red-500'>My Reviews</p>
            </div>

            <div
              className='mt-10 flex gap-x-8 hover:cursor-pointer'
              onClick={logout}
            >
              <img src='/icons/13_iconlogout.svg' alt='logout' />
              <p className='hover:text-red-500'>Logout</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className='w-full'>
          <h2 className='md:text-lg-lh text-xs-lh mb-16 font-extrabold md:mb-24'>
            My Reviews
          </h2>

          <div className='w-full p-16 md:p-24'>
            {/* SEARCH */}
            <label className='relative w-full max-w-640'>
              <Search
                width={20}
                height={20}
                className='absolute top-1/2 left-16 -translate-y-1/2 text-neutral-500'
              />
              <input
                type='text'
                placeholder='Search reviews...'
                className='h-44 w-full rounded-full border border-neutral-300 pl-42'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>

            {/* LOADING */}
            {isLoading && (
              <div className='mt-48 space-y-8'>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className='h-60 w-full animate-pulse rounded-xl bg-gray-200'
                  />
                ))}
              </div>
            )}

            {/* EMPTY STATE */}
            {!isLoading && reviews.length === 0 && (
              <div className='mt-48 text-center text-sm text-neutral-500'>
                No reviews yet
              </div>
            )}

            {/* REVIEWS LIST */}
            {reviews.map((restaurant) => (
              <div
                key={`${restaurant.transactionId}-${restaurant.restaurant?.id}`}
                className='mt-20 rounded-xl border border-[#D5D7DA] p-18 md:p-20'
              >
                <div className='flex items-center justify-between'>
                  <div className='flex gap-x-8'>
                    <img
                      src={
                        restaurant.restaurant?.logo || '/images/16_image7.png'
                      }
                      alt={restaurant.restaurant?.name}
                      className='h-32 w-32 object-cover'
                    />
                    <p className='text-md font-bold md:text-lg'>
                      {restaurant.restaurant?.name}
                    </p>
                  </div>

                  {/* EDIT & DELETE */}
                  <div className='flex gap-x-8'>
                    <button
                      className='text-sm text-blue-500'
                      onClick={() => setEditingReview(restaurant)}
                    >
                      Edit
                    </button>
                    <button
                      className='text-sm text-red-500'
                      onClick={() =>
                        restaurant.transactionId &&
                        window.confirm('Delete this review?') &&
                        deleteReview.mutate(Number(restaurant.transactionId))
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {restaurant.items.map((item) => (
                  <div
                    key={item.id}
                    className='mt-14 flex items-center gap-x-17 md:mt-16'
                  >
                    <img
                      className='h-64 w-64 object-cover md:h-80 md:w-80'
                      src={item.menu.image || '/images/17_image8.png'}
                      alt={item.menu.foodName}
                    />
                    <div>
                      <p className='md:text-md text-sm'>{item.menu.foodName}</p>
                      <p className='text-md font-extrabold md:text-lg'>
                        {item.quantity} x Rp{item.menu.price}
                      </p>
                    </div>
                  </div>
                ))}

                <div className='my-12 w-full border border-[#D5D7DA] md:my-16'></div>

                {/* ⭐ RATING */}
                <div className='mb-8 flex items-center gap-x-4'>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`h-18 w-18 ${
                        s <= restaurant.star
                          ? 'fill-[#FDB022] text-[#FDB022]'
                          : 'fill-[#A4A7AE] text-[#A4A7AE]'
                      }`}
                    />
                  ))}
                </div>

                {/* 💬 COMMENT */}
                <p className='text-sm text-neutral-700'>
                  {restaurant.comment || 'No comment'}
                </p>

                <div className='mt-12 flex justify-between'>
                  <div className='text-sm'>
                    <p>Total</p>
                    <p className='text-md font-extrabold md:text-xl'>
                      Rp{totalPrice(restaurant.items)}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* POPUP EDIT REVIEW */}
            {editingReview && (
              <>
                {/* BACKDROP */}
                <div
                  onClick={() => setEditingReview(null)}
                  className='fixed inset-0 z-40 bg-[#0A0D1280]'
                />

                {/* POPUP */}
                <div className='fixed inset-0 z-50 flex items-start justify-center pt-32 md:pt-40'>
                  <Review
                    transactionId={editingReview.transactionId}
                    restaurantId={editingReview.restaurant?.id!}
                    menuIds={editingReview.items.map((i) => i.menu.id)}
                    onClose={() => setEditingReview(null)}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
