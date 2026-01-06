import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = {
  productId: number;
  quantity: number;
};

type CartState = {
  cart: CartItem[];
  add: (productId: number) => void;
  remove: (productId: number) => void;
  clear: () => void;
};

export const useCartStore = create(
  persist<CartState>(
    (set) => ({
      cart: [],
      add: (productId) =>
        set((state) => {
          const existing = state.cart.find((c) => c.productId === productId);
          const newCart = existing
            ? state.cart.map((c) =>
                c.productId === productId
                  ? { ...c, quantity: c.quantity + 1 }
                  : c
              )
            : [...state.cart, { productId, quantity: 1 }];
          return { cart: newCart };
        }),
      remove: (productId) =>
        set((state) => ({
          cart: state.cart.filter((c) => c.productId !== productId),
        })),
      clear: () => set({ cart: [] }),
    }),
    {
      name: 'cart-storage', // key di localStorage
    }
  )
);
