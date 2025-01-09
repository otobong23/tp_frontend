import Image from 'next/image'
import React from 'react'
import phoneImg from '@/assets/phone.png'
import TradingViewTickerTape from '@/components/TradingViewTickerTape'
import Link from 'next/link'
import welcImg from '@/assets/welcome.png'
const Faq = () => {
  return (
    <div className='py-14 lg:py-24'>
      <div className='lg:flex pl-[--padding-x] justify-between items-center w-full pt-[100px] lg:pt-[10px]'>
        <div className='flex-1 p-4'>
          <header className='lg:w-[80%] lg:my-[4rem]'>
            <p className='text-[12px] lg:text-[16px] font-semibold text-[#FD8D1E]'>Have any questions?</p>
            <h1 className='text-[40px] lg:text-[64px] font-bold leading-[54px] lg:leading-[84px] py-4'>Faq</h1>
            <p className='text-base lg:text-lg leading-[30px] text-[#848484] font-normal lg:w-[90%]'>
              With a focus on transparency, security, and innovation, we empower individuals to grow their income quickly and efficiently, backed by cutting-edge technology and expert support.
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
        <div className='flex justify-end mt-5 w-full h-[320px] lg:h-[600px] overflow-hidden flex-[1] bg-custom-radial md:bg-none lg:bg-custom-radial'>
          <Image src={welcImg} alt='img' className='object-cover hidden md:block lg:hidden' />
          <Image src={phoneImg} alt="alt" className='w-[298.69px] lg:w-[500.21px] h-[489.94px] lg:h-[800.13px] object-cover' />
        </div>
      </div>

      <div className='bg-[#1992C9] h-[136px] flex items-center'>
        <TradingViewTickerTape />
      </div>
    </div>
  )
}

export default Faq