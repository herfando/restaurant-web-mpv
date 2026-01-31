export interface SummaryReviewItem {
  id: number;
  quantity: number;
  menu: {
    id: number;
    foodName: string;
    price: number;
    image?: string;
  };
}

export interface SummaryReview {
  id: number;
  transactionId: string;
  restaurant?: {
    id: number;
    name: string;
    logo?: string;
  };
  items: SummaryReviewItem[];
  star: number;
  comment: string;
}

export interface SubmitReviewPayload {
  transactionId: string;
  restaurantId: number;
  menuIds: number[];
  star: number;
  comment: string;
  reviewId?: number;
}
