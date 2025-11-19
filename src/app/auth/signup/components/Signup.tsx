"use client";
import React, { FC, useState } from 'react';
import Image from 'next/image';
import loginDeskImg from '@/assets/loginDesktop.png'
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import useForm from '@/hooks/useForm';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { showToast } from '@/utils/alert';
import api from '@/utils/axios';
import LoaderImg from '@/assets/loader.gif'


interface SignupData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export interface SignupResponse {
  token?: string;
  message: string;
  success: boolean;
  user?: {
    firstName: string;
    lastName: string;
    username: string;
  }
}



const Signup: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useForm('');
  const [lastName, setLastName] = useForm('');
  const [username, setUsername] = useForm('');
  const [password, setPassword] = useForm('');
  const [confirmPassword, setConfirmPassword] = useForm('');
  const ROUTER = useRouter();
  const [isLoading, setIsLoading] = useState(false)


  const SignupController: (data: SignupData) => Promise<SignupResponse | null> = async (data) => {
    let response: SignupResponse | null = null;
    setIsLoading(true)
    await api({
      url: '/auth/signup',
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
    const res = await SignupController({ firstName: firstName.trim(), lastName: lastName.trim(), username: username.trim(), password: password.trim() });
    // setResponse(res);
    if (res && res.token) {
      Cookies.set('Authorization', 'Bearer ' + res.token, {
        expires: 3,
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
        <header className='p-4 mt-[4rem]'>
          <h1 className='text-[#1E293B] font-bold text-[30px] text-center'>Sign up</h1>
        </header>

        <form className=" flex flex-col gap-3 mt-6 sm:max-w-[400px] mx-auto" onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col text-[14px] gap-2 flex-1'>
              <label htmlFor="fname">First Name</label>
              <input type="text" id='fname' placeholder='John' required value={firstName} onChange={setFirstName} className='text-[#475569] border-[1.5px] border-[#E2E8F0] py-3 px-4 rounded-[15px] focus-within:border-[#000000]' />
            </div>
            <div className='flex flex-col text-[14px] gap-2 flex-1'>
              <label htmlFor="lname">Last Name</label>
              <input type="text" id='lname' placeholder='Doe' required value={lastName} onChange={setLastName} className='text-[#475569] border-[1.5px] border-[#E2E8F0] py-3 px-4 rounded-[15px] focus-within:border-[#000000]' />
            </div>
          </div>
          <div className='flex flex-col text-[14px] gap-2'>
            <label htmlFor="username" className='text-[#1E293B] font-normal'>Username</label>
            <input type="text" id='username' placeholder='Enter your username' required value={username} onChange={setUsername} className='text-[#475569] border-[1.5px] border-[#E2E8F0] py-3 px-4 rounded-[15px] focus-within:border-[#000000]' />
          </div>
          <div className='flex flex-col text-[14px] gap-2 mb-3'>
            <label htmlFor="password" className='text-[#1E293B] font-normal'>Password</label>
            <div className='border-[1.5px] border-[#E2E8F0] rounded-[15px] flex items-center text-[#475569] focus-within:border-[#000000]'>
              <input type={showPassword ? "text" : "password"} id='password' placeholder='Enter your password' required value={password} onChange={setPassword} className='w-full py-3 px-4 rounded-[15px]' />
              <div className='cursor-pointer'>
                <Icon icon={showPassword ? 'ion:eye-outline' : 'ion:eye-off-outline'} className='p-2 text-[35px]'
                  onClick={handleShowPassword}
                />
              </div>
            </div>
            <h2 className='text-[12px] text-[#64748B]'>must contain 8 char</h2>
          </div>
          <div className='flex flex-col text-[14px] gap-2'>
            <label htmlFor="confirm" className='text-[#1E293B] font-normal'>Confirm password</label>
            <div className='border-[1.5px] border-[#E2E8F0] rounded-[15px] flex items-center text-[#475569] focus-within:border-[#000000]'>
              <input type={showPassword ? "text" : "password"} id='confirm' placeholder='Enter your password' required value={confirmPassword} onChange={setConfirmPassword} className='w-full py-3 px-4 rounded-[15px]' />
              <div className='cursor-pointer'>
                <Icon icon={showPassword ? 'ion:eye-outline' : 'ion:eye-off-outline'} className='p-2 text-[35px]'
                  onClick={handleShowPassword}
                />
              </div>
            </div>
          </div>

          <button type='submit' className={`w-full flex-1 flex items-center justify-center py-3 rounded-[15px] bg-[#1992C9] text-white font-medium mt-[5rem] hover:scale-75 transition-all duration-300 ${isLoading ? 'opacity-65' : 'opacity-100'}`} disabled={isLoading}>
            {isLoading ? <Image alt='loader' src={LoaderImg} className='object-cover w-6' /> : 'Create account'}
          </button>
          <div className='flex items-center justify-center pt-2'>
            <Link href='/auth/login' className='text-[#1992C9] hover:text-[#1E293B] underline text-sm'>Already Got An Account</Link>
          </div>
        </form>

        {/* privacy policy */}
        <div className='flex flex-col mt-3'>
          <p className='text-[#475569] text-[12px] text-center'>By continuing, you agree to our <Link href="/" className='text-[#3C9AFB]'>Terms and Services</Link> and <Link href="/" className='text-[#3C9AFB]'>Privacy Policy</Link> </p>

        </div>

      </div>
      <div className='hidden lg:block bg-[#1992C9] flex-1'>
        <div className='absolute -top-[30%] left-[55%]'>
          <div className="hidden lg:block h-[1327px] w-[1120px]">
            <Image
              src={loginDeskImg}
              alt="3D Globe with Shield"
              className=" object-cover w-full h-[83%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
