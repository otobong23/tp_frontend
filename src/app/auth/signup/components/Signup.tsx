"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import loginDeskImg from '@/assets/loginDesktop.png'
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import useForm from '@/hooks/useForm';
import { SignupController} from '@/utils/controllers';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [ firstName, setFirstName ] = useForm('');
  const [ lastName, setLastName ] = useForm('');
  const [ email, setEmail ] = useForm('');
  const [ password, setPassword ] = useForm('');
  const [ confirmPassword, setConfirmPassword ] = useForm('');
  const ROUTER = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await SignupController({ firstName, lastName, email, password });
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
            <label htmlFor="email" className='text-[#1E293B] font-normal'>E-mail</label>
            <input type="email" id='email' placeholder='Enter your email' required value={email} onChange={setEmail} className='text-[#475569] border-[1.5px] border-[#E2E8F0] py-3 px-4 rounded-[15px] focus-within:border-[#000000]' />
          </div>
          <div className='flex flex-col text-[14px] gap-2 mb-3'>
            <label htmlFor="password" className='text-[#1E293B] font-normal'>Password</label>
            <div className='border-[1.5px] border-[#E2E8F0] rounded-[15px] flex items-center text-[#475569] focus-within:border-[#000000]'>
              <input type={showPassword ? "text" : "password"} id='password' placeholder='Enter your password' required value={password} onChange={setPassword}className='w-full py-3 px-4 rounded-[15px]' />
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

          <input type='submit' className="w-full flex-1  py-3 rounded-[15px] bg-[#1992C9] text-white font-medium mt-[5rem]" value='Create account' />
        </form>

        {/* privacy policy */}
        <div className='flex flex-col mt-3'>
          <p className='text-[#475569] text-[12px] text-center'>By continuing, you agree to our <Link href="href" className='text-[#3C9AFB]'>Terms and Services</Link> and <Link href="href" className='text-[#3C9AFB]'>Privacy Policy</Link> </p>
          
        </div>

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

      export default Signup;