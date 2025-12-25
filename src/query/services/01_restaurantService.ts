import axios from 'axios';

const API_BASE = import.meta.env.VITE_FASTFOOD_API_BASE;

export const restaurantApi = axios.create({
  baseURL: API_BASE,
});
