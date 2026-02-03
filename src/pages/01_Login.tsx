import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Check, Eye, EyeOff } from 'lucide-react';

import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { useLogin } from '@/query/hooks/useAuth';

export default function Login() {
  const navigate = useNavigate();

  // State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const loginMutation = useLogin();

  // Handlers
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = () => {
    if (!email || !password) {
      toast.error('Email dan password wajib diisi');
      return;
    }

    loginMutation.mutate(
      { email, password },
      {
        onSuccess: () => {
          toast.success('Login berhasil 🎉');
          navigate('/home');
        },
        onError: (error: any) => {
          toast.error(error?.response?.data?.message || 'Login gagal');
        },
      }
    );
  };

  // Conditional / Computed values
  const eyeIcon = showPassword ? <Eye /> : <EyeOff />;
  const loginButtonText = loginMutation.isPending ? 'Loading...' : 'Login';

  return (
    <section className='absolute top-1/2 mx-auto flex h-auto w-full -translate-y-1/2 items-center justify-center'>
      <div className='item mx-auto flex h-auto w-full max-w-1472'>
        {/* Left Side */}
        <div className='hidden basis-1/2 md:flex'>
          <img src='/images/01_burger.png' alt='burger' />
        </div>

        {/* Right Side */}
        <div className='flex w-full flex-col items-center justify-center md:basis-1/2'>
          <div className='w-345 space-y-20 md:space-y-16'>
            {/* Brand */}
            <div className='flex space-y-16 space-x-[11.43px] md:space-y-20 md:space-x-15'>
              <img src='/icons/01_brandfoody.svg' alt='brand foody' />
              <h3 className='md:-text-[32px] text-[24.38px] font-extrabold'>
                Foody
              </h3>
            </div>

            {/* Welcome */}
            <h3 className='md:text-sm-lh text-xs-lh font-extrabold'>
              Welcome Back
            </h3>
            <h4 className='md:text-md text-sm font-medium'>
              Good to see you again! Let’s eat
            </h4>

            {/* Sign In / Sign Up */}
            <div className='mx-auto flex h-56 w-full items-center justify-center gap-8 bg-[#F5F5F5] p-8'>
              <button className='h-full w-full basis-1/2 rounded-2xl bg-white font-bold text-[#0A0D12]'>
                Sign in
              </button>
              <Link
                to='/register'
                className='h-full w-full basis-1/2 content-center rounded-2xl text-center text-neutral-700'
              >
                Sign up
              </Link>
            </div>

            {/* Inputs */}
            <Input
              placeholder='Email'
              value={email}
              onChange={handleEmailChange}
            />

            <div className='relative'>
              <Input
                type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder='Password'
                onChange={handlePasswordChange}
              />
              <button
                onClick={togglePassword}
                className='absolute top-1/2 right-16 h-16 w-16 -translate-y-1/2 cursor-pointer'
              >
                {eyeIcon}
              </button>
            </div>

            {/* Remember Me */}
            <label className='flex items-center gap-4'>
              <input type='checkbox' className='peer hidden' />
              <span className='flex h-20 w-20 cursor-pointer items-center justify-center rounded-sm border border-[#D5D7DA] text-white peer-checked:bg-[#C12116]'>
                <Check />
              </span>
              <span className='md:text-md text-sm'>Remember Me</span>
            </label>

            {/* Login Button */}
            <Button
              onClick={handleLogin}
              disabled={loginMutation.isPending}
              className='cursor-pointer'
            >
              {loginButtonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
