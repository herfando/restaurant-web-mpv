import { api } from '@/query/axiosInstance';
import type {
  SummaryReview,
  SubmitReviewPayload,
} from '@/query/types/summaryReviewType';

export const summaryReviewService = {
  getMyReviews: async (): Promise<SummaryReview[]> => {
    const { data } = await api.get('/api/review/my');
    return data.data.reviews;
  },

  deleteReview: async (reviewId: number) => {
    const { data } = await api.delete(`/api/review/${reviewId}`);
    return data;
  },

  submitReview: async ({
    transactionId,
    restaurantId,
    menuIds,
    star,
    comment,
    reviewId,
  }: SubmitReviewPayload) => {
    if (reviewId) {
      // Update existing review (PUT)
      const { data } = await api.put(`/api/review/${reviewId}`, {
        star,
        comment,
      });
      return data;
    } else {
      // Create new review (POST)
      const { data } = await api.post('/api/review', {
        transactionId,
        restaurantId,
        menuIds,
        star,
        comment,
      });
      return data;
    }
  },
};
