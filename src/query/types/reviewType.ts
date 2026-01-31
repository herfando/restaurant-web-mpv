export interface Menu {
  menuId: number;
  menuName: string;
  price: number;
  type: 'food' | 'drink';
  image: string;
  quantity: number;
}

export interface Restaurant {
  id: number;
  name: string;
  logo?: string;
}

export interface User {
  id: number;
  name: string;
  avatar?: string;
}

export interface Review {
  id: number;
  star: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  transactionId: string;
  restaurant: Restaurant;
  user: User;
  menus: Menu[];
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
