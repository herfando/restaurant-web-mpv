import { api } from '@/query/api';

// GET CART
export const getCart = async () => {
  const res = await api.get('/api/cart');
  return res.data; // ⬅️ WAJIB, INI KUNCI UTAMA
};

// ADD ITEM
export const addToCart = async (payload: {
  restaurantId: number;
  menuId: number;
  quantity: number;
}) => {
  const res = await api.post('/api/cart', payload);
  return res.data;
};

// UPDATE ITEM
export const updateCartItem = async (payload: {
  id: number;
  quantity: number;
}) => {
  const res = await api.put(`/api/cart/${payload.id}`, {
    quantity: payload.quantity,
  });
  return res.data;
};

// DELETE ITEM
export const removeCartItem = async (id: number) => {
  const res = await api.delete(`/api/cart/${id}`);
  return res.data;
};
