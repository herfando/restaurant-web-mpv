import { create } from 'zustand';
import type { User } from '@/query/types/authType';

type AuthState = {
  user: User | null;
  token: string;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: '',
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  logout: () => set({ user: null, token: '' }),
}));
