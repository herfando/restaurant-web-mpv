import { api } from '@/query/axiosInstance';
import type {
  UserProfile,
  UpdateProfileRequest,
} from '@/query/types/profileType';

// GET PROFILE
export const getProfile = async (): Promise<UserProfile> => {
  const res = await api.get('/api/auth/profile');
  return res.data.data as UserProfile;
};

// UPDATE PROFILE
export const updateProfile = async (
  payload: UpdateProfileRequest
): Promise<UserProfile> => {
  const res = await api.put('/api/auth/profile', payload);
  return res.data.data as UserProfile;
};
