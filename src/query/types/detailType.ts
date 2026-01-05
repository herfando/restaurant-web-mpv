export interface Menu {
  menuId: number;
  menuName: string;
  price: number;
  type: string;
  image: string;
  quantity?: number;
}

export interface Restaurant {
  id: number;
  name: string;
  logo: string;
  star?: number;
  place?: string;
  distance?: string;
}

export interface ReviewUser {
  id: number;
  name: string;
  avatar?: string;
}

export interface Review {
  id: number;
  star: number;
  comment: string;
  createdAt: string;
  transactionId?: string;
  user?: ReviewUser;
  menus: Menu[];
}

export interface RestaurantDetailResponse {
  restaurant: Restaurant;
  menus: Menu[];
}

export interface ReviewsResponse {
  reviews: Review[];
}
