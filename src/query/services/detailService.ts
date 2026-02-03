import { api } from '@/query/axiosInstance';
import type {
  RestaurantDetailResponse,
  ReviewsResponse,
} from '@/query/types/detailType';

// Ambil detail restaurant dari cart / order
export const getRestaurantDetailApi = async (
  id: number
): Promise<RestaurantDetailResponse> => {
  // cek cart
  const cartRes = await api.get('/api/cart');
  const cartItem = cartRes.data.data.cart.find(
    (c: any) => c.restaurant.id === id
  );
  if (cartItem) {
    return {
      restaurant: cartItem.restaurant,
      menus: cartItem.items.map((i: any) => i.menu),
    };
  }

  // cek orders
  const orderRes = await api.get('/api/order/my-order');
  const orderItem = orderRes.data.data.orders
    .flatMap((o: any) => o.restaurants)
    .find((r: any) => r.restaurant.id === id);

  if (orderItem) {
    return {
      restaurant: orderItem.restaurant,
      menus: orderItem.items.map((i: any) => ({
        menuId: i.menuId,
        menuName: i.menuName,
        price: i.price,
        type: i.type || 'food',
        image: i.image,
        quantity: i.quantity,
      })),
    };
  }

  // fallback
  return {
    restaurant: {
      id,
      name: 'Unknown',
      logo: '',
      star: 4.9,
      place: 'Unknown',
      distance: '0 km',
    },
    menus: [],
  };
};

// Ambil reviews
export const getReviewsByRestaurantApi = async (
  id: number
): Promise<ReviewsResponse> => {
  const res = await api.get(`/api/review/restaurant/${id}`);
  return { reviews: res.data.data.reviews || [] };
};
