import Image from 'next/image'
import React from 'react'
import serverImg from '@/assets/server.png'
// import aboutImg from '@/assets/whoweare.svg'
// import { Icon } from '@iconify/react/dist/iconify.js'

const Whoweare = () => {
  return (
    <div className='py-14 lg:py-24'>
      <div className='lg:flex pl-[--padding-x] justify-between items-center w-full pt-[100px] lg:pt-[10px]'>
        <div className='flex-1 p-4'>
          <header className='lg:w-[80%] lg:my-[4rem]'>
            <p className='text-[12px] lg:text-[16px] font-semibold text-[#FD8D1E]'>Who we are</p>
            <h1 className='text-[40px] lg:text-[64px] font-bold leading-[54px] lg:leading-[84px] py-4'>Welcome to
              Trade Phere!</h1>
            <p className='text-base lg:text-lg leading-[30px] text-[#848484] font-normal lg:w-[90%]'>
              With a focus on transparency, security, and innovation, we empower individuals to grow their income quickly and efficiently, backed by cutting-edge technology and expert support.
            </p>

            <div className='shadow-2xl shadow-[#3931751A] flex p-2 rounded-[14px] mt-[60px]'>
              <label htmlFor="email"></label>
              <input type="email" name="email" id="email" placeholder='Enter your email'
                className='bg-transparent outline-none border-none py-5 text-[16px] w-[60%] flex-1'
              />

              <button className='bg-[#1992C9] text-white text-[16px] px-[26px] font-light rounded-[12px]'>Get started</button>
            </div>
          </header>
        </div>
        <div className='flex mt-5 w-full h-[320px] lg:h-[640px] overflow-hidden flex-[1] bg-custom-radial'>
          <Image src={serverImg} alt="alt" className='w-[298.69px] lg:w-[870.21px] h-[489.94px] lg:h-[932.13px] object-cover translate-x-[3rem] lg:translate-x-[.rem]' />

        </div>
      </div>

      <div className='bg-[#1992C9] h-[136px]'>

      </div>
    </div>

  )
}

export default Whoweare