'use client';
import Image from 'next/image'
import React from 'react'
import img1 from '@/assets/grow1.png'
import img2 from '@/assets/grow2.png'
import becomeImg from '@/assets/become.png'
import TradingViewTickerTape from '@/components/TradingViewTickerTape';
import Link from 'next/link'

const GrowEarningQuickly = () => {
  return (
    <div>
      <div className='lg:flex pl-[--padding-x] justify-between items-center w-full pt-[100px] lg:pt-[80px]'>
        <div className='flex-1 p-4 bg-transparent'>
          <header className='lg:w-[80%] lg:my-[4rem]'>
            <p className='text-[12px] lg:text-[16px] font-semibold text-[#FD8D1E]'>Join our investment platform</p>
            <h1 className='text-[40px] lg:text-[64px] font-bold leading-[54px] lg:leading-[84px] py-4'>Grow Your Earnings Quickly</h1>
            <p className='text-base lg:text-lg leading-[30px] text-[#848484] font-normal lg:w-[75%]'>
              Trade Phere is a trading company where you can be a part of the peer-to-peer exchange community worldwide.
            </p>

            <div className='shadow-2xl shadow-[#3931751A] flex p-2 rounded-[14px] mt-[60px]'>
              <label htmlFor="email"></label>
              <input type="email" name="email" id="email" placeholder='Enter your email'
                className='bg-transparent outline-none border-none py-5 text-[16px] w-[60%] flex-1'
              />

              <Link href="/auth/signup" className='bg-[#1992C9] flex items-center justify-center text-white text-[16px] px-[26px] font-light rounded-[12px] hover:scale-75'>Get started</Link>
            </div>
          </header>
        </div>
        <div className='flex md:justify-end lg:justify-start mt-5 w-full h-[300px] lg:h-[640px] overflow-hidden flex-[1] bg-custom-radial md:bg-none lg:bg-custom-radial z-10'>
          <Image src={becomeImg} alt="alt" className='object-cover hidden md:block lg:hidden' />
          <Image src={img1} alt="alt" className='w-[298.69px] lg:w-[380px] xl:w-[570.21px] h-[489.94px] lg:h-[700px] xl:h-[932.13px] object-cover md:translate-x-[6rem] lg:translate-x-[4rem]' />
          <Image src={img2} alt="alt" className='w-[221.69px] lg:w-[300px] xl:w-[430.21px] h-[489.94px] lg:h-[700px] xl:h-[932.13px] mt-8 object-cover -translate-x-[4rem] md:translate-x-[2rem] lg:-translate-x-[5.5rem] ' />
        </div>
      </div>

      <div className='bg-[#1992C9] h-[136px] flex items-center'>
        <TradingViewTickerTape />
      </div>

    </div>
  )
}

export default GrowEarningQuickly
