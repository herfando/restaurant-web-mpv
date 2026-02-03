import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Eye, EyeOff } from 'lucide-react';

import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { useRegister } from '@/query/hooks/useAuth';

export default function Register() {
  const navigate = useNavigate();

  // State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const registerMutation = useRegister();

  // Handlers
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setConfirmPassword(e.target.value);
  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      toast.error('Password tidak sama');
      return;
    }

    registerMutation.mutate(
      { name, email, phone, password },
      {
        onSuccess: () => {
          toast.success('Register berhasil 🎉');
          navigate('/login');
        },
        onError: (error: any) => {
          toast.error(error?.response?.data?.message || 'Register gagal');
        },
      }
    );
  };

  // Conditional / computed values
  const passwordIcon = showPassword ? <Eye /> : <EyeOff />;
  const confirmPasswordIcon = showConfirmPassword ? <Eye /> : <EyeOff />;
  const registerButtonText = registerMutation.isPending
    ? 'Loading...'
    : 'Register';

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
              <img src='/icons/01_brandfoody.svg' alt='brand food' />
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
              <Link
                to='/login'
                className='h-full w-full basis-1/2 content-center rounded-2xl text-center text-neutral-700'
              >
                Sign in
              </Link>
              <button className='h-full w-full basis-1/2 rounded-2xl bg-white font-bold text-[#0A0D12]'>
                Sign up
              </button>
            </div>

            {/* Inputs */}
            <Input
              placeholder='Name'
              value={name}
              onChange={handleNameChange}
            />
            <Input
              placeholder='Email'
              value={email}
              onChange={handleEmailChange}
            />
            <Input
              placeholder='Number Phone'
              value={phone}
              onChange={handlePhoneChange}
            />

            {/* Password */}
            <div className='relative'>
              <Input
                type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder='Password'
                onChange={handlePasswordChange}
              />
              <button
                type='button'
                onClick={togglePassword}
                className='absolute top-1/2 right-16 h-16 w-16 -translate-y-1/2'
              >
                {passwordIcon}
              </button>
            </div>

            {/* Confirm Password */}
            <div className='relative'>
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                placeholder='Confirm Password'
                onChange={handleConfirmPasswordChange}
              />
              <button
                type='button'
                onClick={toggleConfirmPassword}
                className='absolute top-1/2 right-16 h-16 w-16 -translate-y-1/2'
              >
                {confirmPasswordIcon}
              </button>
            </div>

            {/* Register Button */}
            <Button
              className='cursor-pointer'
              onClick={handleRegister}
              disabled={registerMutation.isPending}
            >
              {registerButtonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
