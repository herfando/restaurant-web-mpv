import axios from 'axios';
import type { Review, Pagination } from '@/query/types/reviewType';

const API_BASE = '/api/review';

export interface GetReviewsResponse {
  reviews: Review[];
  pagination: Pagination;
}

export const reviewService = {
  getMyReviews: async (): Promise<GetReviewsResponse> => {
    const res = await axios.get(`${API_BASE}/my-reviews`);
    return res.data.data;
  },

  getRestaurantReviews: async (
    restaurantId: number
  ): Promise<GetReviewsResponse> => {
    const res = await axios.get(`${API_BASE}/restaurant/${restaurantId}`);
    return res.data.data;
  },

  createReview: async (data: {
    star: number;
    comment: string;
    transactionId?: string;
    restaurantId?: number;
    menus?: any[];
  }): Promise<Review> => {
    const res = await axios.post(`${API_BASE}`, data);
    return res.data.data.review;
  },

  updateReview: async (
    id: number,
    data: { star: number; comment: string }
  ): Promise<Review> => {
    const res = await axios.put(`${API_BASE}/${id}`, data);
    return res.data.data.review;
  },

  deleteReview: async (id: number): Promise<void> => {
    await axios.delete(`${API_BASE}/${id}`);
  },
};
