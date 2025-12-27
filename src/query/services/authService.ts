import axios from 'axios';
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  GetProfileResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
} from '@/query/types/authType';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

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
