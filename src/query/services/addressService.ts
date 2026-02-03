// 📁 addressService.ts
import { api } from '@/query/axiosInstance';
import type { TransactionAddress } from '@/query/types/addressType';

// Ambil order terakhir untuk address
export const getLastOrderAddressApi = async () => {
  const res = await api.get('/api/order/my-order');

  // ambil order terbaru
  const latestOrder = res.data?.data?.orders?.[0];

  return {
    deliveryAddress: latestOrder?.deliveryAddress || '',
    phone: latestOrder?.phone || '',
  } as TransactionAddress;
};

// Update address = checkout ulang (karena backend cuma terima di checkout)
export const updateAddressViaCheckoutApi = async (payload: {
  deliveryAddress: string;
  phone: string;
}) => {
  // ⚠️ ini hanya untuk update address lewat flow checkout
  // kalau backend belum support address khusus
  return payload;
};
