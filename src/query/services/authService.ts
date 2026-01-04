import { api } from '@/query/api';

import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  GetProfileResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
} from '@/query/types/authType';

// =====================
// REGISTER
// =====================
export const registerApi = async (
  payload: RegisterRequest
): Promise<RegisterResponse> => {
  const { data } = await api.post('/api/auth/register', payload);
  return data;
};

// =====================
// LOGIN
// =====================
export const loginApi = async (
  payload: LoginRequest
): Promise<LoginResponse> => {
  const { data } = await api.post('/api/auth/login', payload);
  return data;
};

// =====================
// GET PROFILE
// =====================
export const getProfileApi = async (
  token: string
): Promise<GetProfileResponse> => {
  const { data } = await api.get('/api/auth/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// =====================
// UPDATE PROFILE
// =====================
export const updateProfileApi = async (
  payload: UpdateProfileRequest,
  token: string
): Promise<UpdateProfileResponse> => {
  const { data } = await api.put('/api/auth/profile', payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
