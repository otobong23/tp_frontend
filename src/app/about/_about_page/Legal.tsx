import React from 'react'
import Image from 'next/image'
import legalImg from '@/assets/legal.png'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'

const Legal = () => {
  return (
    <div>
      <div className='p-[--padding-x] m-auto md:flex gap-3 justify-between items-center'>
        <div className="flex-1 w-full h-full">
          <Image src={legalImg} alt="legal" className='w-[455px] h-[496px]' />
        </div>
        <header className='text-left flex-1 w-full'>
          <p className='text-[12px] lg:text-[16px] font-semibold text-[#FD8D1E]'>Legal</p>
          <h1 className='text-[30px] lg:text-[64px] ] m-auto font-bold leading-[40px] lg:leading-[84px] py-4'>We are verified, Reliable and Trusted!</h1>
          <p className='text-base lg:text-base leading-[30px] text-[#848484] font-normal'>
            As a UK-registered company, we operate with full transparency, adhering to strict regulations governing all crypto and financial trades in other to ensure trust amd reliability.
          </p>

          <Link href="/about/view-certificate">
            <span className='flex items-center gap-1 mt-6 text-[16px] text-[#C2C1C3] underline hover:text-[#1992C9] transition-all duration-300'>View Certificate <Icon icon="zondicons:cheveron-right" className='text-[25px]'/></span>
          </Link>
        </header>
      </div>
    </div>
  )
}

export default Legal