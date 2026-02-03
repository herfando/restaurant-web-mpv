export type UserProfile = {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string; // backend expect string
  latitude: number | null;
  longitude: number | null;
  createdAt: string;
  updatedAt?: string;
};

export type UpdateProfileRequest = {
  name?: string;
  email?: string;
  phone?: string;
  avatar?: string; // string base64
};
