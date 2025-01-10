"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import loginDeskImg from '@/assets/loginDesktop.png'
import { Icon } from '@iconify/react/dist/iconify.js';
import useForm from '@/hooks/useForm';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import api from '@/utils/axios';
import { showToast } from '@/utils/alert';
import LoaderImg from '@/assets/loader.gif'

interface LoginData {
  username: string;
  password: string;
}
interface LoginResponse {
  token?: string;
  message: string;
  success: boolean;
  user?: {
    firstName: string;
    lastName: string;
    username: string;
  }
} 

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [username, setUsername] = useForm('');
  const [password, setPassword] = useForm('');
  const ROUTER = useRouter();
  const [isLoading, setIsLoading] = useState(false)


  const LoginController: (data: LoginData) => Promise<LoginResponse | null> = async (data) => {
    let response: LoginResponse | null = null;
    setIsLoading(true)
    await api({
      url: 'auth/signin',
      method: 'POST',
      data: data
    }).then(res => {
      setIsLoading(false)
      showToast('success', res.data.message);
      response = res.data;
    }).catch(err => {
      setIsLoading(false)
      showToast('error', err.response.data.message);
    })
  
    return response;
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await LoginController({ username, password });

    if (res && res.token) {
      Cookies.set('Authorization', 'Bearer ' + res.token, {
        expires: 3
      });
      ROUTER.replace('/dashboard');
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }
  return (
    <div className='md:flex w-full min-h-screen overflow-hidden'>
      <div className='flex-1 px-[--padding-x]'>
        <header className='p-4 mt-[6rem]'>
          <h1 className='text-[#1E293B] font-bold text-[30px] text-center'>Login</h1>
        </header>

        <form className=" flex flex-col gap-3 mt-6 sm:max-w-[400px] mx-auto" onSubmit={handleSubmit}>
          <div className='flex flex-col text-[14px] gap-2'>
            <label htmlFor="username" className='text-[#1E293B] font-normal'>Username</label>
            <input type="text" id='username' placeholder='Enter your username' required value={username} onChange={setUsername} className='text-[#475569] border-[1.5px] border-[#E2E8F0] py-3 px-4 rounded-[15px]' />
          </div>
          <div className='flex flex-col text-[14px] gap-2'>
            <label htmlFor="password" className='text-[#1E293B] font-normal'>Password</label>
            <div className='border-[1.5px] border-[#E2E8F0] rounded-[15px] flex items-center text-[#475569]'>
              <input type={showPassword ? "text" : "password"} id='password' placeholder='Enter your password' required value={password} onChange={setPassword} className='w-full py-3 px-4 rounded-[15px]' />
              <div className='cursor-pointer'>
                <Icon icon={showPassword ? 'ion:eye-outline' : 'ion:eye-off-outline'} className='p-2 text-[35px]'
                  onClick={handleShowPassword}
                />
              </div>
            </div>
          </div>

          <button className={`w-full flex-1 flex items-center justify-center py-3 rounded-[15px] bg-[#1992C9] text-white font-medium mt-[5rem] ${isLoading ? 'opacity-65' : 'opacity-100'}`} disabled={isLoading}>
            {isLoading ? <Image alt='loader' src={LoaderImg} className='object-cover w-6' /> : 'Login'}
          </button>
          <div className='flex items-center justify-center pt-2'>
            <Link href='/auth/signup' className='text-[#1992C9] hover:text-[#1E293B] underline text-sm'>Create A New Account</Link>
          </div>
        </form>
      </div>
      <div className='hidden lg:block bg-[#1992C9] flex-1'>
        <div className='absolute -top-[30%] left-[55%]'>
          <div className="hidden lg:block h-[1327px] w-[1120px]">
            <Image
              src={loginDeskImg} // Replace with desktop image path
              alt="3D Globe with Shield"
              className=" object-cover w-full h-[83%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;