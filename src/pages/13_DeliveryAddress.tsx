import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/zustand/authStore';
import { useAddress } from '@/query/hooks/useAddress';

// ================= TYPES =================
type Address = {
  id: number;
  label: string;
  name: string;
  phone: string;
  address: string;
  isDefault: boolean;
};

export default function DeliveryAddress() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const { lastAddressQuery } = useAddress();

  const [addresses, setAddresses] = useState<Address[]>([]);
  const [form, setForm] = useState({
    label: '',
    name: '',
    phone: '',
    address: '',
  });

  // ================= INIT FROM BACKEND =================
  useEffect(() => {
    if (lastAddressQuery.data) {
      setAddresses([
        {
          id: 1,
          label: 'Default',
          name: user?.name || 'Receiver',
          phone: lastAddressQuery.data.phone || '',
          address: lastAddressQuery.data.deliveryAddress || '',
          isDefault: true,
        },
      ]);
    }
  }, [lastAddressQuery.data, user?.name]);

  // ================= FORM =================
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ================= CREATE (LOCAL, SIAP DIPAKAI CHECKOUT) =================
  const handleAddAddress = async () => {
    if (!form.label || !form.name || !form.phone || !form.address) return;

    setAddresses([
      {
        id: Date.now(),
        ...form,
        isDefault: true,
      },
    ]);

    setForm({ label: '', name: '', phone: '', address: '' });
  };

  // ================= SET DEFAULT =================
  const setDefault = (id: number) => {
    setAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
  };

  // ================= DELETE =================
  const deleteAddress = (id: number) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
  };

  // ================= UI (TIDAK DIUBAH) =================
  return (
    <section className='custom-container relative'>
      <div className='flex gap-x-32'>
        {/* LEFT SIDEBAR */}
        <div className='hidden h-320 w-240 rounded-xl bg-[#FFFFFF] p-20 shadow-xl lg:block'>
          {/* PROFILE */}
          <div
            onClick={() => navigate('/profile')}
            className='mb-48 flex cursor-pointer items-center gap-x-8'
          >
            <div className='h-48 w-48 overflow-hidden rounded-full bg-gray-200'>
              <img
                className='h-full w-full object-cover'
                src={user?.avatar || '/images/15_image6.png'}
                alt='profile'
              />
            </div>
            <span className='bold text-md md:text-lg'>
              {user?.name || 'Guest'}
            </span>
          </div>

          {/* NAVIGATION */}
          <div className='md:text-md space-y-28 text-sm'>
            <div
              className='flex gap-x-8 hover:cursor-pointer'
              onClick={() => navigate('/delivery-address')}
            >
              <img src='/icons/11_iconaddress.svg' alt='address' />
              <p className='hover:text-red-500'>Delivery Address</p>
            </div>

            <div
              className='flex gap-x-8 hover:cursor-pointer'
              onClick={() => navigate('/my-orders')}
            >
              <img src='/icons/12_iconorders.svg' alt='orders' />
              <p className='hover:text-red-500'>My Orders</p>
            </div>

            <div
              className='flex gap-x-8 hover:cursor-pointer'
              onClick={() => navigate('/summary-reviews')}
            >
              <img src='/icons/12_iconorders.svg' alt='reviews' />
              <p className='hover:text-red-500'>My Reviews</p>
            </div>

            <div
              className='mt-10 flex gap-x-8 hover:cursor-pointer'
              onClick={logout}
            >
              <img src='/icons/13_iconlogout.svg' alt='logout' />
              <p className='hover:text-red-500'>Logout</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className='w-full'>
          <h2 className='md:text-lg-lh text-xs-lh mb-16 font-extrabold md:mb-24'>
            Delivery Address
          </h2>

          <div className='w-full p-16 md:p-24'>
            {/* ADD ADDRESS FORM */}
            <div className='mb-32 space-y-12 rounded-xl border border-[#D5D7DA] p-18 md:p-20'>
              <h3 className='text-md font-bold'>Add New Address</h3>

              <input
                name='label'
                placeholder='Label (Home, Office, etc)'
                className='h-44 w-full rounded-md border border-neutral-300 px-12'
                value={form.label}
                onChange={handleChange}
              />

              <input
                name='name'
                placeholder='Receiver Name'
                className='h-44 w-full rounded-md border border-neutral-300 px-12'
                value={form.name}
                onChange={handleChange}
              />

              <input
                name='phone'
                placeholder='Phone Number'
                className='h-44 w-full rounded-md border border-neutral-300 px-12'
                value={form.phone}
                onChange={handleChange}
              />

              <textarea
                name='address'
                placeholder='Full Address'
                className='min-h-80 w-full rounded-md border border-neutral-300 px-12 py-8'
                value={form.address}
                onChange={handleChange}
              />

              <button
                onClick={handleAddAddress}
                className='h-44 rounded-full bg-red-500 px-24 text-white'
              >
                Save Address
              </button>
            </div>

            {/* ADDRESS LIST */}
            {addresses.map((addr) => (
              <div
                key={addr.id}
                className='mb-16 rounded-xl border border-[#D5D7DA] p-18 md:p-20'
              >
                <div className='flex items-start justify-between'>
                  <div>
                    <p className='text-md font-bold'>
                      {addr.label}{' '}
                      {addr.isDefault && (
                        <span className='ml-8 rounded-full bg-green-100 px-8 py-2 text-xs text-green-600'>
                          Default
                        </span>
                      )}
                    </p>
                    <p className='text-sm'>{addr.name}</p>
                    <p className='text-sm'>{addr.phone}</p>
                    <p className='mt-4 text-sm text-neutral-700'>
                      {addr.address}
                    </p>
                  </div>

                  <div className='flex gap-x-8'>
                    {!addr.isDefault && (
                      <button
                        className='text-sm text-blue-500'
                        onClick={() => setDefault(addr.id)}
                      >
                        Set Default
                      </button>
                    )}
                    <button
                      className='text-sm text-red-500'
                      onClick={() =>
                        window.confirm('Delete this address?') &&
                        deleteAddress(addr.id)
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {addresses.length === 0 && (
              <div className='mt-48 text-center text-sm text-neutral-500'>
                No delivery address yet
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
