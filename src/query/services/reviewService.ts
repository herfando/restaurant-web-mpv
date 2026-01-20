import { api } from '@/query/api';
import type { Review, Pagination } from '@/query/types/reviewType';

const API_BASE = '/api/review';

export interface GetReviewsResponse {
  reviews: Review[];
  pagination: Pagination;
}

export const reviewService = {
  // ---------- GET MY REVIEWS ----------
  getMyReviews: async (): Promise<GetReviewsResponse> => {
    const res = await api.get(`${API_BASE}/my-reviews`);
    return res.data.data;
  },

  // ---------- GET RESTAURANT REVIEWS ----------
  getRestaurantReviews: async (
    restaurantId: number
  ): Promise<GetReviewsResponse> => {
    const res = await api.get(`${API_BASE}/restaurant/${restaurantId}`);
    return res.data.data;
  },

  // ---------- CREATE REVIEW ----------
  createReview: async (data: {
    transactionId: string;
    restaurantId: number;
    star: number;
    comment: string;
    menuIds: number[];
  }): Promise<Review> => {
    const res = await api.post(API_BASE, data);
    return res.data.data.review;
  },

  // ---------- UPDATE REVIEW ----------
  updateReview: async (
    id: number,
    data: { star: number; comment: string }
  ): Promise<Review> => {
    const res = await api.put(`${API_BASE}/${id}`, data);
    return res.data.data.review;
  },

  // ---------- DELETE REVIEW ----------
  deleteReview: async (id: number): Promise<void> => {
    await api.delete(`${API_BASE}/${id}`);
  },
};
