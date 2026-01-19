import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { reviewService } from '../services/reviewService';
import type { Review } from '@/query/types/reviewType';

// ---------- GET MY REVIEWS ----------
export const useMyReviews = () => {
  return useQuery<Review[]>({
    queryKey: ['my-reviews'],
    queryFn: async () => {
      const data = await reviewService.getMyReviews();
      return data.reviews;
    },
  });
};

// ---------- GET RESTAURANT REVIEWS ----------
export const useRestaurantReviews = (restaurantId: number) => {
  return useQuery<Review[]>({
    queryKey: ['restaurant-reviews', restaurantId],
    queryFn: async () => {
      const data = await reviewService.getRestaurantReviews(restaurantId);
      return data.reviews;
    },
  });
};

// ---------- SUBMIT REVIEW ----------
export interface NewReview {
  star: number;
  comment: string;
  transactionId?: string;
  restaurantId?: number;
  menus?: any[];
}

export const useSubmitReview = () => {
  const queryClient = useQueryClient();

  return useMutation<Review, Error, NewReview>({
    mutationFn: (data: NewReview) => reviewService.createReview(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-reviews'] });
    },
  });
};

// ---------- UPDATE REVIEW ----------
export const useUpdateReview = () => {
  const queryClient = useQueryClient();

  return useMutation<
    Review,
    Error,
    { id: number; data: { star: number; comment: string } }
  >({
    mutationFn: ({ id, data }) => reviewService.updateReview(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-reviews'] });
    },
  });
};

// ---------- DELETE REVIEW ----------
export const useDeleteReview = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, number>({
    mutationFn: (id) => reviewService.deleteReview(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-reviews'] });
    },
  });
};
