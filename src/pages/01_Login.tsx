import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { Check, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '@/query/hooks/useAuth';

export default function Login() {
  //#region login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginMutation = useLogin();
  const handleLogin = () => {
    loginMutation.mutate({ email, password });
  };
  //#endregion

  //#region hidden-show password
  const [show, setShow] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  //#endregion

  return (
    <section className='absolute top-1/2 mx-auto flex h-auto w-full -translate-y-1/2 items-center justify-center'>
      <div className='item mx-auto flex h-auto w-full max-w-1472'>
        {/* 1. left side */}
        <div className='hidden basis-1/2 md:flex'>
          <img src='/images/01_burger.png' alt='burger' />
        </div>
        {/* 2. right side */}
        <div className='flex w-full flex-col items-center justify-center md:basis-1/2'>
          {/* Foody */}
          <div className='w-345 space-y-20 md:space-y-16'>
            <div className='flex space-y-16 space-x-[11.43px] md:space-y-20 md:space-x-15'>
              <img src='/icons/01_brandfoody.svg' alt='brand food' />
              <h3 className='md:-text-[32px] text-[24.38px] font-extrabold'>
                Foody
              </h3>
            </div>
            {/* welcome back */}
            <h3 className='md:text-sm-lh text-xs-lh font-extrabold'>
              Welcome Back
            </h3>
            {/* Good to see you again! Let’s eat */}
            <h4 className='md:text-md text-sm font-medium'>
              Good to see you again! Let’s eat
            </h4>
            {/* Button sign up & sign in */}
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
            {/* email */}
            <Input
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* pasword */}
            <div className='relative'>
              <Input
                type={show ? 'text' : 'password'}
                value={passwordInput}
                placeholder='Password'
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  setPassword(e.target.value);
                }}
              />
              <button
                onClick={() => setShow(!show)}
                className='absolute top-1/2 right-16 h-16 w-16 -translate-y-1/2 cursor-pointer'
              >
                {show ? <Eye /> : <EyeOff />}
              </button>
            </div>
            {/* Ceklist */}
            <label className='flex items-center gap-4'>
              <input type='checkbox' className='peer hidden' />
              <span className='flex h-20 w-20 cursor-pointer items-center justify-center rounded-sm border border-[#D5D7DA] text-white peer-checked:bg-[#C12116]'>
                <Check />
              </span>
              <span className='md:text-md tsssext-sm'>Remember Me</span>
            </label>
            {/* Button */}
            <Button
              onClick={handleLogin}
              disabled={loginMutation.isPending}
              className='cursor-pointer'
            >
              {loginMutation.isPending ? 'Loading...' : 'Login'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
