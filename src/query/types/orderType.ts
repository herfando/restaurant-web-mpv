// REQUEST
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
