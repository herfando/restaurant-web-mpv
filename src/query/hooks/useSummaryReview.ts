import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { summaryReviewService } from '@/query/services/summaryReviewService';
import type { SummaryReview } from '@/query/types/summaryReviewType';

export const useSummaryReview = () => {
  const queryClient = useQueryClient();

  // GET REVIEWS
  const reviewsQuery = useQuery<SummaryReview[]>({
    queryKey: ['myReviews'],
    queryFn: summaryReviewService.getMyReviews,
  });

  // DELETE REVIEW
  const deleteReview = useMutation<void, Error, number>({
    mutationFn: (reviewId: number) =>
      summaryReviewService.deleteReview(reviewId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myReviews'] });
    },
  });

  // SUBMIT REVIEW
  type SubmitPayload = Parameters<typeof summaryReviewService.submitReview>[0];
  const submitReview = useMutation<any, Error, SubmitPayload>({
    mutationFn: (payload: SubmitPayload) =>
      summaryReviewService.submitReview(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myReviews'] });
    },
  });

  return { reviewsQuery, deleteReview, submitReview };
};
