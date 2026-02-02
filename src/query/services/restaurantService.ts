import { api } from '@/query/api';
import type {
  GetRestaurantsResponse,
  GetNearbyRestaurantsResponse,
  GetRecommendedRestaurantsResponse,
  GetBestSellerRestaurantsResponse,
  GetSearchRestaurantsResponse,
  GetRestaurantDetailResponse,
  RestaurantFilterParams,
} from '@/query/types/restaurantType';

// =====================
// 1. ALL RESTAURANT
// GET /api/resto
// =====================
export const getRestaurantsApi = async (
  page = 1,
  limit = 10
): Promise<GetRestaurantsResponse> => {
  const { data } = await api.get('/api/resto', {
    params: { page, limit },
  });
  return data;
};

// =====================
// 2. NEARBY RESTAURANT
// GET /api/resto/nearby
// =====================
export const getNearbyRestaurantsApi =
  async (): Promise<GetNearbyRestaurantsResponse> => {
    const { data } = await api.get('/api/resto/nearby');
    return data;
  };

// =====================
// 3. RECOMMENDED
// GET /api/resto/recommended
// =====================
export const getRecommendedRestaurantsApi =
  async (): Promise<GetRecommendedRestaurantsResponse> => {
    const { data } = await api.get('/api/resto/recommended');
    return data;
  };

// =====================
// 4. BEST SELLER
// GET /api/resto/best-seller
// =====================
export const getBestSellerRestaurantsApi = async (
  page = 1,
  limit = 10
): Promise<GetBestSellerRestaurantsResponse> => {
  const { data } = await api.get('/api/resto/best-seller', {
    params: { page, limit },
  });
  return data;
};

// =====================
// 5. SEARCH
// GET /api/resto/search
// =====================
export const searchRestaurantsApi = async (
  keyword: string,
  page = 1,
  limit = 10
): Promise<GetSearchRestaurantsResponse> => {
  const { data } = await api.get('/api/resto/search', {
    params: { keyword, page, limit },
  });
  return data;
};

// =====================
// 6. DETAIL
// GET /api/resto/:id
// =====================
export const getRestaurantDetailApi = async (
  id: number
): Promise<GetRestaurantDetailResponse> => {
  const { data } = await api.get(`/api/resto/${id}`);
  return data;
};

// =====================
// GET RESTAURANT BY FILTER
// GET /api/resto?category=xxx&rating=5...
// =====================
export const getRestaurantsByFilter = async (
  filters: RestaurantFilterParams = {}
): Promise<GetRestaurantsResponse> => {
  const { data } = await api.get('/api/resto', {
    params: filters,
  });
  return data;
};
