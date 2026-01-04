// =====================
// BASIC TYPES
// =====================
export type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type PriceRange = {
  min: number;
  max: number;
};

export type Coordinates = {
  lat: number;
  long: number;
};

export type User = {
  id: number;
  name: string;
  avatar: string;
};

// =====================
// MENU & REVIEW
// =====================
export type Menu = {
  id: number;
  foodName: string;
  price: number;
  type: string;
  image: string;
};

export type Review = {
  id: number;
  star: number;
  comment: string;
  createdAt: string;
  user: User;
};

// =====================
// RESTAURANT TYPES
// =====================
export type Restaurant = {
  id: number;
  name: string;
  star: number;
  place: string;
  logo: string;
  images: string[];
  category: string;
  reviewCount: number;
  menuCount: number;
  priceRange?: PriceRange;
  distance: number;
};

export type RecommendedRestaurant = {
  id: number;
  name: string;
  star: number;
  place: string;
  lat: number;
  long: number;
  logo: string;
  images: string[];
  category: string;
  reviewCount: number;
  sampleMenus: Menu[];
  isFrequentlyOrdered: boolean;
  distance: number;
};

export type RestaurantDetail = {
  id: number;
  name: string;
  star: number;
  averageRating: number;
  place: string;
  coordinates: Coordinates;
  distance: number;
  logo: string;
  images: string[];
  category: string;
  totalMenus: number;
  totalReviews: number;
  menus: Menu[];
  reviews: Review[];
};

// =====================
// RESPONSE TYPES (6 GET)
// =====================

// 1. GET /api/resto
export type GetRestaurantsResponse = {
  success: boolean;
  data: {
    restaurants: Restaurant[];
    pagination: Pagination;
  };
};

// 2. GET /api/resto/nearby
export type GetNearbyRestaurantsResponse = {
  success: boolean;
  data: {
    restaurants: Restaurant[];
  };
};

// 3. GET /api/resto/recommended
export type GetRecommendedRestaurantsResponse = {
  success: boolean;
  data: {
    recommendations: RecommendedRestaurant[];
    message: string;
  };
};

// 4. GET /api/resto/best-seller
export type GetBestSellerRestaurantsResponse = {
  success: boolean;
  data: {
    restaurants: Restaurant[];
    pagination: Pagination;
  };
};

// 5. GET /api/resto/search
export type GetSearchRestaurantsResponse = {
  success: boolean;
  data: {
    restaurants: Restaurant[];
    pagination: Pagination;
    searchQuery: string;
  };
};

// 6. GET /api/resto/{id}
export type GetRestaurantDetailResponse = {
  success: boolean;
  data: RestaurantDetail;
};
