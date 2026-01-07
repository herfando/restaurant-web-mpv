export type CartItem = {
  id: number;
  menu: {
    id: number;
    foodName: string;
    price: number;
    type: string;
    image: string;
  };
  quantity: number;
  itemTotal: number;
};

export type CartRestaurant = {
  restaurant: {
    id: number;
    name: string;
    logo: string;
  };
  items: CartItem[];
  subtotal: number;
};

export type CartSummary = {
  totalItems: number;
  totalPrice: number;
  restaurantCount: number;
};

export type CartApi = {
  cart: CartRestaurant[];
  summary: CartSummary;
};
