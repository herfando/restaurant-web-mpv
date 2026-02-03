import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProfile, updateProfile } from '@/query/services/profileService';
import type {
  UserProfile,
  UpdateProfileRequest,
} from '@/query/types/profileType';

export const useProfile = () => {
  const queryClient = useQueryClient();

  const profileQuery = useQuery<UserProfile>({
    queryKey: ['profile'],
    queryFn: getProfile,
  });

  const { mutate: updateProfileMutate, isPending } = useMutation<
    UserProfile,
    unknown,
    UpdateProfileRequest
  >({
    mutationFn: updateProfile,
    onSuccess: (data) => {
      queryClient.setQueryData(['profile'], data);
    },
  });

  return {
    profile: profileQuery.data,
    isLoading: profileQuery.isLoading,
    isError: profileQuery.isError,
    updateProfile: updateProfileMutate,
    isPending,
  };
};
