import { useQuery } from '@tanstack/react-query';
import {
  getRestaurantsApi,
  getNearbyRestaurantsApi,
  getRecommendedRestaurantsApi,
  getBestSellerRestaurantsApi,
  searchRestaurantsApi,
  getRestaurantDetailApi,
} from '@/query/services/restaurantService';

// =====================
// ALL RESTAURANT
// =====================
export const useRestaurants = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ['restaurants', page, limit],
    queryFn: () => getRestaurantsApi(page, limit),
  });
};

// =====================
// NEARBY
// =====================
export const useNearbyRestaurants = () => {
  return useQuery({
    queryKey: ['restaurants', 'nearby'],
    queryFn: getNearbyRestaurantsApi,
  });
};

// =====================
// RECOMMENDED
// =====================
export const useRecommendedRestaurants = () => {
  return useQuery({
    queryKey: ['restaurants', 'recommended'],
    queryFn: getRecommendedRestaurantsApi,
  });
};

// =====================
// BEST SELLER
// =====================
export const useBestSellerRestaurants = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ['restaurants', 'best-seller', page, limit],
    queryFn: () => getBestSellerRestaurantsApi(page, limit),
  });
};

// =====================
// SEARCH
// =====================
export const useSearchRestaurants = (keyword: string) => {
  return useQuery({
    queryKey: ['restaurants', 'search', keyword],
    queryFn: () => searchRestaurantsApi(keyword),
    enabled: !!keyword,
  });
};

// =====================
// DETAIL
// =====================
export const useRestaurantDetail = (id: number) => {
  return useQuery({
    queryKey: ['restaurant', id],
    queryFn: () => getRestaurantDetailApi(id),
    enabled: !!id,
  });
};
