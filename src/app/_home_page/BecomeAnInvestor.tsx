import React from 'react'
import becomeImg from '@/assets/become.png'
import Image from 'next/image'
import Link from 'next/link'

const BecomeAnInvestor = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row pl-[--padding-x] justify-between items-center w-full pt-[70px] lg:pt-[80px]'>
        <div className='flex-1 p-4'>
          <header className=' w-full lg:my-[4rem]'>
            <p className='text-[12px] lg:text-[16px] font-semibold text-[#FD8D1E]'>Get on board with this opportunity</p>
            <h1 className='text-[30px] lg:text-[64px] font-bold leading-[40px] lg:leading-[84px] py-4'>Become an Investor</h1>
            <p className='text-base lg:text-lg leading-[30px] text-[#848484] font-normal lg:w-[75%]'>
            Trade Phere is a trading company where you can be a part of the peer-to-peer exchange community worldwide.
            </p>

            <div className='mt-[50px]'>
              <Link href='/auth/signp' className='bg-[#1992C9] text-white text-[16px] px-[26px] py-4 font-light rounded-[12px] w-[50%]'>Get it now</Link>
            </div>
          </header>
        </div>
        <div className='flex mt-5 w-full h-[300px] lg:h-[640px] overflow-hidden flex-[1] bg-custom-radial'>
          <Image src={becomeImg} alt="alt" className='object-contain' />
        </div>
      </div>
    </div>
  )
}

export default BecomeAnInvestor