import { useMutation } from '@tanstack/react-query';
import { checkoutApi } from '../services/orderService';
import type { CheckoutRequest } from '../types/orderType';

export const useOrder = () => {
  return useMutation({
    mutationFn: (payload: CheckoutRequest) => checkoutApi(payload),
  });
};
