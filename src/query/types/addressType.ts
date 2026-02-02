// 📁 addressType.ts

export interface Address {
  id: number;
  label: string;
  name: string;
  phone: string;
  address: string;
  isDefault: boolean;
}

// ambil dari transaction
export interface TransactionAddress {
  deliveryAddress: string;
  phone: string;
}
