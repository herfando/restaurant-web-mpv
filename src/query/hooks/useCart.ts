import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
} from '@/query/services/cartService';

export const useCart = () => {
  const queryClient = useQueryClient();

  const cartQuery = useQuery({
    queryKey: ['cart'],
    queryFn: getCart,
  });

  const addMutation = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });

  const removeMutation = useMutation({
    mutationFn: removeCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });

  const clearCart = () => {
    queryClient.setQueryData(['cart'], {
      data: {
        cart: [],
        summary: null,
      },
    });
  };

  return {
    cart: cartQuery.data?.data.cart ?? [],
    summary: cartQuery.data?.data.summary,
    isLoading: cartQuery.isLoading,

    add: addMutation.mutate,
    update: updateMutation.mutate,
    remove: removeMutation.mutate,
    clearCart,
  };
};
