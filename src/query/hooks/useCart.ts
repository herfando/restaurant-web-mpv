import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
} from '@/query/services/cartService';

export const useCart = () => {
  const queryClient = useQueryClient();

  // QUERY CART
  const cartQuery = useQuery({
    queryKey: ['cart'],
    queryFn: getCart,
  });

  // ADD
  const addMutation = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });

  // UPDATE
  const updateMutation = useMutation({
    mutationFn: updateCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });

  // REMOVE
  const removeMutation = useMutation({
    mutationFn: removeCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });

  return {
    cart: cartQuery.data?.data.cart || [],
    summary: cartQuery.data?.data.summary,
    isLoading: cartQuery.isLoading,

    add: addMutation.mutate,
    update: updateMutation.mutate,
    remove: removeMutation.mutate,
  };
};
