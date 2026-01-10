import { api } from '@/query/api';
import type { CheckoutRequest, CheckoutResponse } from '../types/orderType';

export const checkoutApi = async (
  payload: CheckoutRequest
): Promise<CheckoutResponse> => {
  const { data } = await api.post('/api/order/checkout', payload);
  return data;
};
