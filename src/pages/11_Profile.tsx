import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useProfile, useUpdateProfile } from '@/query/hooks/useAuth';
import { useAuthStore } from '@/zustand/authStore';
import type { UpdateProfileRequest } from '@/query/types/authType';

export default function Profile() {
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement | null>(null);

  const { user, setUser } = useAuthStore();
  const { mutate: getProfile } = useProfile();
  const { mutate: updateProfile, isPending } = useUpdateProfile();

  const [isEdit, setIsEdit] = useState(false);
  const [localAvatar, setLocalAvatar] = useState<string | undefined>(undefined);

  const [form, setForm] = useState<UpdateProfileRequest>({
    name: '',
    email: '',
    phone: '',
    avatar: '',
  });

  // fetch profile
  useEffect(() => {
    getProfile();
  }, [getProfile]);

  // sync user -> form (JANGAN override avatar hasil edit)
  useEffect(() => {
    if (!user) return;

    setForm((prev) => ({
      name: user.name || '',
      email: user.email || '',
      phone: user.phone || '',
      avatar: prev.avatar || user.avatar || '',
    }));

    if (!localAvatar && user.avatar) {
      setLocalAvatar(user.avatar);
    }
  }, [user, localAvatar]);

  const handleChange = (key: keyof UpdateProfileRequest, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // image -> base64
  const handleAvatarChange = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const avatar = reader.result as string;
      setLocalAvatar(avatar);
      setForm((prev) => ({ ...prev, avatar }));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    updateProfile(form, {
      onSuccess: () => {
        if (user) {
          setUser({
            ...user,
            name: form.name,
            email: form.email,
            phone: form.phone,
            avatar: localAvatar || user.avatar,
          });
        }
        setIsEdit(false);
      },
    });
  };

  return (
    <section className='mt-16 mb-48 flex gap-x-32 md:mt-48 md:mb-197 md:translate-x-160'>
      {/* left */}
      <div className='hidden h-274 w-240 rounded-xl bg-[#FFFFFF] p-20 shadow-xl lg:block'>
        <div className='mb-48 flex items-center gap-x-8'>
          <img
            className='h-48 w-48'
            src={localAvatar || '/images/15_image6.png'}
            alt='profile'
          />
          <span className='bold text-md md:text-lg'>{form.name || '-'}</span>
        </div>

        <div className='md:text-md space-y-28 text-sm'>
          <div
            className='flex gap-x-8 hover:cursor-pointer'
            onClick={() => navigate('/deliveryAddress')}
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
            onClick={() => navigate('/login')}
          >
            <img src='/icons/13_iconlogout.svg' alt='logout' />
            <p className='hover:text-red-500'>Logout</p>
          </div>
        </div>
      </div>

      {/* right */}
      <div className='w-full px-16 md:mx-auto md:p-0'>
        <h3 className='md:text-lg-lh text-xs-lh font-extrabold'>Profile</h3>

        <div className='space-y-12 bg-[#FFFFFF] p-16 shadow-xl md:h-298 md:w-524 md:p-20'>
          {/* avatar */}
          <img
            src={localAvatar || '/images/15_image6.png'}
            alt='profile image'
            className={isEdit ? 'hover:cursor-pointer' : ''}
            onClick={() => isEdit && fileRef.current?.click()}
          />

          {isEdit && (
            <p className='text-xs text-neutral-500'>Tap photo to update</p>
          )}

          <input
            ref={fileRef}
            type='file'
            accept='image/*'
            hidden
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleAvatarChange(file);
            }}
          />

          {/* Name */}
          <div className='md:text-md flex justify-between text-sm'>
            <p>Name</p>
            {isEdit ? (
              <input
                className='border-b text-right font-bold outline-none'
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            ) : (
              <p className='font-bold'>{form.name}</p>
            )}
          </div>

          {/* Email */}
          <div className='md:text-md flex justify-between text-sm'>
            <p>Email</p>
            {isEdit ? (
              <input
                className='border-b text-right font-bold outline-none'
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            ) : (
              <p className='font-bold'>{form.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className='md:text-md flex justify-between text-sm'>
            <p>Nomor Handphone</p>
            {isEdit ? (
              <input
                className='border-b text-right font-bold outline-none'
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
            ) : (
              <p className='font-bold'>{form.phone}</p>
            )}
          </div>

          {/* Button */}
          <div className='mb-16 w-full md:mb-24'>
            {isEdit ? (
              <button
                onClick={handleSave}
                disabled={isPending}
                className='mt-14 h-44 w-full rounded-full bg-[#C12116] text-[#FDFDFD] disabled:opacity-60 md:mt-24 md:h-48'
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEdit(true)}
                className='mt-14 h-44 w-full rounded-full bg-[#C12116] text-[#FDFDFD] md:mt-24 md:h-48'
              >
                Update Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
