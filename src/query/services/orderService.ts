import { api } from '@/query/api';
import type {
  CheckoutRequest,
  CheckoutResponse,
  OrderResponse,
} from '@/query/types/orderType';

// Checkout
export const checkoutApi = async (
  payload: CheckoutRequest
): Promise<CheckoutResponse> => {
  const { data } = await api.post('/api/order/checkout', payload);
  return data;
};

// Fetch my orders
export const getMyOrdersApi = async (): Promise<OrderResponse> => {
  const { data } = await api.get('/api/order/my-orders');
  return data;
};

// ✅ Ekspor semua agar bisa diimpor tanpa error
export default {
  checkoutApi,
  getMyOrdersApi,
};
