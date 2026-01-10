import { useMutation, useQuery } from '@tanstack/react-query';
import orderService from '@/query/services/orderService';
import type { CheckoutRequest, OrderResponse } from '@/query/types/orderType';

// Hook untuk checkout dan fetch orders
export const useOrder = () => {
  const checkout = useMutation({
    mutationFn: (payload: CheckoutRequest) => orderService.checkoutApi(payload),
  });

  const ordersQuery = useQuery<OrderResponse>({
    queryKey: ['myOrders'],
    queryFn: orderService.getMyOrdersApi,
    staleTime: 1000 * 60 * 2, // 2 menit
    refetchOnWindowFocus: false,
  });

  return { checkout, ordersQuery };
};
