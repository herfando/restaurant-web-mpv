export interface CheckoutItem {
  menuId: number;
  quantity: number;
}

export interface CheckoutRestaurant {
  restaurantId: number;
  items: CheckoutItem[];
}

export interface CheckoutRequest {
  restaurants: CheckoutRestaurant[];
  deliveryAddress: string;
  phone: string;
  paymentMethod: string;
  notes?: string;
}

export interface CheckoutResponse {
  success: boolean;
  message: string;
}

export interface OrderItem {
  id: number;
  foodName: string;
  price: number;
  quantity: number;
  image?: string | null;
}

export interface OrderRestaurant {
  restaurant: {
    id: number;
    name: string;
    logo?: string | null;
  };
  items: OrderItem[];
  status: string;
  orderId: string;
  total: number;
  date: string;
}

export interface OrderResponse {
  success: boolean;
  orders: OrderRestaurant[];
}
