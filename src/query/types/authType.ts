// =====================
// USER (BASE ON RESPONSE)
// =====================
export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  latitude: number;
  longitude: number;
  createdAt: string;
};

// =====================
// REGISTER
// =====================
export type RegisterRequest = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

export type RegisterResponse = {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
};

// =====================
// LOGIN
// =====================
export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
};

// =====================
// GET PROFILE
// =====================
export type GetProfileResponse = {
  success: boolean;
  message: string;
  data: User;
};

// =====================
// UPDATE PROFILE
// =====================
export type UpdateProfileRequest = {
  name: string;
  email: string;
  phone: string;
  avatar: string;
};

export type UpdateProfileResponse = {
  success: boolean;
  message: string;
  data: User;
};
