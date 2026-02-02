// 📁 useAddress.ts
import { useQuery } from '@tanstack/react-query';
import { getLastOrderAddressApi } from '@/query/services/addressService';

export const useAddress = () => {
  const lastAddressQuery = useQuery({
    queryKey: ['lastOrderAddress'],
    queryFn: getLastOrderAddressApi,
    staleTime: 1000 * 60,
  });

  return {
    lastAddressQuery,
  };
};
