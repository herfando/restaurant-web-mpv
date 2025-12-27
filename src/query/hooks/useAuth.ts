// src/query/hooks/useAuth.ts
import { useMutation } from '@tanstack/react-query';
import {
  registerApi,
  loginApi,
  getProfileApi,
  updateProfileApi,
} from '@/query/services/authService';
import type {
  RegisterRequest,
  RegisterResponse,
  LoginRequest,
  LoginResponse,
  GetProfileResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
} from '@/query/types/authType';
import { useAuthStore } from '@/zustand/authStore';

// =====================
// REGISTER
// =====================
export const useRegister = () => {
  const authStore = useAuthStore();

  return useMutation<RegisterResponse, Error, RegisterRequest>({
    mutationFn: (payload) => registerApi(payload),
    onSuccess: (data: RegisterResponse) => {
      authStore.setUser(data.data.user);
      authStore.setToken(data.data.token);
    },
  });
};

// =====================
// LOGIN
// =====================
export const useLogin = () => {
  const authStore = useAuthStore();

  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: (payload) => loginApi(payload),
    onSuccess: (data: LoginResponse) => {
      authStore.setUser(data.data.user);
      authStore.setToken(data.data.token);
    },
  });
};

// =====================
// GET PROFILE
// =====================
export const useProfile = () => {
  const authStore = useAuthStore();

  return useMutation<GetProfileResponse, Error>({
    mutationFn: async () => {
      const data = await getProfileApi(authStore.token);
      return data;
    },
    onSuccess: (data) => {
      authStore.setUser(data.data);
    },
  });
};

// =====================
// UPDATE PROFILE
// =====================
export const useUpdateProfile = () => {
  const authStore = useAuthStore();

  return useMutation<UpdateProfileResponse, Error, UpdateProfileRequest>({
    mutationFn: (payload) => updateProfileApi(payload, authStore.token),
    onSuccess: (data: UpdateProfileResponse) => {
      authStore.setUser(data.data);
    },
  });
};
