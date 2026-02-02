// ================= CHECKOUT =================
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

// 🔥 EXTEND RESPONSE (TANPA HAPUS YANG LAMA)
export interface CheckoutTransaction {
  id: number;
  transactionId: string;
  paymentMethod: string;
  status: string;
  deliveryAddress: string;
  phone: string;
  pricing: {
    subtotal: number;
    serviceFee: number;
    deliveryFee: number;
    totalPrice: number;
  };
  createdAt: string;
}

export interface CheckoutResponse {
  success: boolean;
  message: string;
  data?: {
    transaction: CheckoutTransaction;
  };
}

// ================= ORDER (LAMA TETAP) =================
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
  data: {
    orders: any[];
    pagination: any;
    filter: any;
  };
}
