import { Minus, Plus } from 'lucide-react';
import { useCart } from '@/query/hooks/useCart';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { CartRestaurant, CartItem } from '@/query/types/cartType';
import { checkoutApi } from '@/query/services/orderService';
import { api } from '@/query/api'; // 🆕 import untuk delete cart backend

export default function CheckOut() {
  const navigate = useNavigate();
  const { cart, update, remove, clearCart } = useCart();
  const [selected, setSelected] = useState<string>('BNI');

  // 🔥 DELIVERY STATE (FORM DULU)
  const [isEditingAddress, setIsEditingAddress] = useState(true);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [phone, setPhone] = useState('');

  const payments = [
    { id: 'BNI', name: 'Bank Negara Indonesia', img: '/images/18_BNI.png' },
    { id: 'BRI', name: 'Bank Rakyat Indonesia', img: '/images/19_BRI.png' },
    { id: 'BCA', name: 'Bank Central Asia', img: '/images/20_BCA.png' },
    { id: 'Mandiri', name: 'Mandiri', img: '/images/21_MANDIRI.png' },
  ];

  const totalItems = cart.reduce(
    (acc: number, rest: CartRestaurant) =>
      acc +
      rest.items.reduce(
        (sum: number, item: CartItem) => sum + item.quantity,
        0
      ),
    0
  );

  const totalPrice = cart.reduce(
    (acc: number, rest: CartRestaurant) =>
      acc +
      rest.items.reduce(
        (sum: number, item: CartItem) => sum + item.quantity * item.menu.price,
        0
      ),
    0
  );

  // 🆕 Fungsi untuk delete cart backend
  const deleteCartBackend = async () => {
    try {
      const res = await api.delete('/api/cart');
      console.log('🗑️ Cart deleted backend:', res.data);
    } catch (err) {
      console.error('❌ Gagal hapus cart backend:', err);
    }
  };

  const handleBuy = async () => {
    if (!selected || !deliveryAddress || !phone) {
      window.alert('Delivery address & phone wajib diisi!');
      return;
    }

    try {
      const res = await checkoutApi({
        restaurants: cart.map((restaurant: CartRestaurant) => ({
          restaurantId: restaurant.restaurant.id,
          items: restaurant.items.map((item: CartItem) => ({
            menuId: item.menu.id,
            quantity: item.quantity,
          })),
        })),
        deliveryAddress,
        phone,
        paymentMethod: payments.find((p) => p.id === selected)?.name ?? '',
        notes: '',
      });

      console.log('🟢 CHECKOUT RESPONSE:', res);

      // 🆕 Hapus cart di backend
      await deleteCartBackend();

      // 🆕 Hapus cache/react-query cart supaya UI sinkron
      clearCart();

      window.alert('Order berhasil!');

      navigate('/success', {
        state: {
          date: new Date().toISOString(),
          paymentMethod: payments.find((p) => p.id === selected)?.name ?? '',
          totalItems,
          price: totalPrice,
          deliveryFee: 10000,
          serviceFee: 1000,
          total: totalPrice + 11000,
        },
      });
    } catch (err) {
      console.error(err);
      window.alert('Checkout gagal, coba lagi!');
    }
  };

  return (
    <section className='mx-auto mt-16 mb-48 max-w-1032 px-32 md:mt-48 md:mb-100'>
      <p className='md:text-lg-lh text-xs-lh mb-16 font-extrabold md:mb-24'>
        Checkout
      </p>

      <div className='flex flex-col gap-y-20 md:flex-row md:gap-x-20'>
        {/* LEFT */}
        <div className='order-1 space-y-20 md:order-0'>
          {/* DELIVERY */}
          <div className='rounded-2xl bg-white p-16 shadow-2xl'>
            <div className='flex items-center gap-x-8'>
              <img
                className='h-24 w-24 md:h-32 md:w-32'
                src='/icons/09_spot.png'
                alt='spot delivery adress'
              />
              <span className='text-md font-extrabold md:text-lg'>
                Delivery Address
              </span>
            </div>

            {/* ===== FORM MODE (DEFAULT) ===== */}
            {isEditingAddress && (
              <div className='mt-12 space-y-8'>
                <textarea
                  className='w-full rounded-md border border-neutral-300 p-8'
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder='Delivery Address'
                />

                <input
                  className='h-40 w-full rounded-md border border-neutral-300 px-8'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder='Phone Number'
                />

                <button
                  onClick={() => setIsEditingAddress(false)}
                  className='mt-8 h-40 w-120 rounded-full bg-[#C12116] font-bold text-white'
                >
                  Save
                </button>
              </div>
            )}

            {/* ===== DISPLAY MODE (SETELAH SAVE) ===== */}
            {!isEditingAddress && (
              <>
                <div className='mt-4 space-y-4'>
                  <p>{deliveryAddress}</p>
                  <p>{phone}</p>
                </div>

                <button
                  onClick={() => setIsEditingAddress(true)}
                  className='mt-16 h-40 w-120 rounded-full border border-neutral-300 font-bold'
                >
                  Change
                </button>
              </>
            )}
          </div>

          {/* RESTAURANT LIST — TIDAK DIUBAH */}
          <div className='space-y-20'>
            {cart.map((restaurant: CartRestaurant) => (
              <div
                key={restaurant.restaurant.id}
                className='rounded-2xl bg-white p-16 shadow-2xl'
              >
                <div className='flex items-center justify-between'>
                  <div className='flex gap-x-8'>
                    <img
                      src={
                        restaurant.restaurant.logo || '/images/16_image7.png'
                      }
                      alt={restaurant.restaurant.name}
                      className='h-32 w-32 object-cover'
                    />
                    <p className='text-md flex items-center gap-x-8 font-bold md:text-lg'>
                      {restaurant.restaurant.name}
                    </p>
                  </div>
                </div>

                <div className='mt-16 space-y-20'>
                  {restaurant.items.map((item: CartItem) => (
                    <div
                      key={item.id}
                      className='flex items-center justify-between'
                    >
                      <div className='flex items-center gap-x-17'>
                        <img
                          className='h-64 w-64 object-cover md:h-80 md:w-80'
                          src={item.menu.image || '/images/17_image8.png'}
                          alt={item.menu.foodName}
                        />
                        <div>
                          <p className='md:text-md text-sm'>
                            {item.menu.foodName}
                          </p>
                          <p className='text-md font-extrabold md:text-lg'>
                            Rp{item.menu.price}
                          </p>
                        </div>
                      </div>

                      <div className='flex items-center gap-x-16'>
                        <Minus
                          onClick={() =>
                            item.quantity === 1
                              ? remove(item.id)
                              : update({
                                  id: item.id,
                                  quantity: item.quantity - 1,
                                })
                          }
                        />
                        <div>{item.quantity}</div>
                        <div
                          onClick={() =>
                            update({ id: item.id, quantity: item.quantity + 1 })
                          }
                          className='flex h-40 w-40 items-center justify-center rounded-full bg-[#C12116]'
                        >
                          <Plus className='text-white' />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — TIDAK ADA YANG DIHAPUS */}
        <div className='order-2 md:order-0'>
          <div className='w-full rounded-2xl bg-white shadow-2xl md:w-390'>
            {/* PAYMENT */}
            <div className='p-16'>
              <p className='tet-md font-extrabold md:text-lg'>Payment Method</p>

              {payments.map((payment, index) => (
                <div key={payment.id}>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-5'>
                      <div className='flex h-40 w-40 items-center justify-center rounded-sm border border-neutral-300'>
                        <img
                          className='w-[29.63px]'
                          src={payment.img}
                          alt={payment.name}
                        />
                      </div>
                      <p className='md:text-md text-sm'>{payment.name}</p>
                    </div>

                    <label>
                      <input
                        type='radio'
                        name='payment'
                        value={payment.id}
                        checked={selected === payment.id}
                        onChange={(e) => setSelected(e.target.value)}
                        className='peer hidden'
                      />
                      <div className='flex h-24 w-24 items-center justify-center rounded-full border border-neutral-200 peer-checked:bg-[#C12116]'>
                        <img src='/icons/10_Check.png' alt='check' />
                      </div>
                    </label>
                  </div>

                  {index !== payments.length - 1 && (
                    <div className='my-16 w-full border-t border-[#D5D7DA]' />
                  )}
                </div>
              ))}
            </div>

            {/* DASHED DIVIDER */}
            <div className='flex items-center'>
              <div className='h-20 w-20 -translate-x-1/2 rounded-full bg-neutral-200'></div>
              <div className='h-[1px] w-full bg-[repeating-linear-gradient(to_right,#D5D7DA_0,#D5D7DA_6px,#fff_6px,#fff_12px)]' />
              <div className='h-20 w-20 translate-x-1/2 rounded-full bg-neutral-200'></div>
            </div>

            {/* SUMMARY */}
            <div className='p-16'>
              <p className='text-md mb-12 font-extrabold md:text-lg'>
                Payment Summary
              </p>

              <div className='space-y-12'>
                <p className='flex justify-between'>
                  <span>Price ({totalItems} items)</span>
                  <span className='font-bold'>Rp{totalPrice}</span>
                </p>
                <p className='flex justify-between'>
                  <span>Delivery Fee</span>
                  <span className='font-bold'>Rp10.000</span>
                </p>
                <p className='flex justify-between'>
                  <span>Service Fee</span>
                  <span className='font-bold'>Rp1.000</span>
                </p>
                <p className='flex justify-between'>
                  <span>Total</span>
                  <span className='font-extrabold'>Rp{totalPrice + 11000}</span>
                </p>
              </div>

              <button
                disabled={false}
                onClick={handleBuy}
                className='mt-16 h-48 w-full cursor-pointer rounded-full bg-[#C12116] font-bold text-[#FDFDFD]'
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
