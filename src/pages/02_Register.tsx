import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  //#region hidden-show password
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
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
              <Link
                to='/'
                className='h-full w-full basis-1/2 content-center rounded-2xl text-center text-neutral-700'
              >
                Sign in
              </Link>
              <button className='h-full w-full basis-1/2 rounded-2xl bg-white font-bold text-[#0A0D12]'>
                Sign up
              </button>
            </div>
            {/* Name */}
            <Input placeholder='Name'></Input>
            {/* Email */}
            <Input placeholder='Email'></Input>
            {/* Number Phone */}
            <Input placeholder='Number Phone'></Input>
            {/* pasword */}
            <div className='relative'>
              <Input
                type={show ? 'text' : 'password'}
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              ></Input>
              <button
                onClick={() => setShow(!show)}
                className='absolute top-1/2 right-16 h-16 w-16 -translate-y-1/2 cursor-pointer'
              >
                {show ? <Eye /> : <EyeOff />}
              </button>
            </div>
            {/* Confirm Password */}
            <div className='relative'>
              <Input
                type={showConfirm ? 'text' : 'ConfirmPassword'}
                value={confirmPassword}
                placeholder='Confirm Password'
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Input>
              <button
                onClick={() => setShowConfirm(!showConfirm)}
                className='absolute top-1/2 right-16 h-16 w-16 -translate-y-1/2 cursor-pointer'
              >
                {showConfirm ? <Eye /> : <EyeOff />}
              </button>
            </div>
            {/* Button */}
            <Button className='cursor-pointer'>Register</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
