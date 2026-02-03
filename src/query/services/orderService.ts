import { api } from '@/query/axiosInstance';
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
  const res = await api.get('/api/order/my-order');
  console.log('🟣 RAW MY ORDERS API:', res.data);
  return res.data;
};

export default {
  checkoutApi,
  getMyOrdersApi,
};
