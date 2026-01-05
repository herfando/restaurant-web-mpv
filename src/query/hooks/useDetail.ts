import { useQuery } from '@tanstack/react-query';
import {
  getRestaurantDetailApi,
  getReviewsByRestaurantApi,
} from '@/query/services/detailService';
import type {
  RestaurantDetailResponse,
  ReviewsResponse,
} from '@/query/types/detailType';

// hook untuk ambil detail restaurant
export const useDetail = (id?: number) => {
  return useQuery<RestaurantDetailResponse>({
    queryKey: ['restaurant-detail', id],
    queryFn: () => getRestaurantDetailApi(id!),
    enabled: !!id,
  });
};

// hook untuk ambil reviews restaurant
export const useDetailReviews = (id?: number) => {
  return useQuery<ReviewsResponse>({
    queryKey: ['restaurant-reviews', id],
    queryFn: () => getReviewsByRestaurantApi(id!),
    enabled: !!id,
  });
};
