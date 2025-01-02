import React from 'react'
// import { Icon } from '@iconify/react/dist/iconify.js'
// import Link from 'next/link'
import Image from 'next/image';
import serverImg from '@/assets/about1.png'
import serverImg1 from '@/assets/about2.png'
// import whyImg from '@/assets/graduate.svg'

const WelcometoTphere = () => {
  return (
    <div className='px-[--padding-x] py-[60px] lg:py-[100px]'>
      <div className="row flex flex-col-reverse items-center justify-between lg:flex-row-reverse gap-9 lg:gap-16 xl:gap-24 mb-[100px] w-full">
        <div className="flex-1">
          <p className='text-[12px] lg:text-[16px] font-semibold text-[#FD8D1E]'>About Trade Phere</p>
          <h1 className='text-[40px] lg:text-[64px] font-bold leading-[54px] lg:leading-[84px] py-4'>Who we are and What we do!</h1>
          <p className='text-base lg:text-base leading-[30px] text-[#848484] font-normal lg:w-[75%]'>
            Welcome to the website of Trade Phere! Our investment platform is a product of careful preparation and fruitful work of experts in the field of Trading, highly profitable trade in cryptocurrencies and online marketing. Using modern methods of doing business and a personal approach to each client, we offer a unique investment model to people who want to use Bitcoin not only as a method of payment, but also as a reliable source of stable income. Trade Phere business uses only modern mining equipment and trades at the most stable markets, which minimizes the risk of financial loss to customers and guarantees them a stable income accrued every calendar day.
          </p>
        </div>
        <div className="flex-1 w-full">
          <Image src={serverImg} className='w-[395.26px] md:w-[575.92px] h-[260px] md:h-[447.32px]' alt="alt" />
        </div>
      </div>


      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-9 lg:gap-16 xl:gap-24 w-full ">
        <div className="flex-1 mt-7">
          <p className='text-[12px] lg:text-[16px] font-semibold text-[#FD8D1E]'>We lead with reliability</p>
          <h1 className='text-[40px] lg:text-[64px] font-bold leading-[54px] lg:leading-[84px] py-4'>Why Choose Us?</h1>
          <p className='text-base lg:text-base leading-[30px] text-[#848484] font-normal lg:w-[75%]'>
            If you find yourself here, you are definitely in search of reliable and profitable investment. Yes, you are just at the right place! Our company offers trust assets management of the highest quality on the basis of foreign exchange and profitable trade through Bitcoin exchanges. There is no other worldwide financial market that can guarantee a daily ability to generate constant profit with the large price swings of Bitcoin. Proposed modalities for strengthening cooperation will be accepted by anyone who uses cryptocurrency and knows about its fantastic prospects. Your deposit is working on an ongoing basis, and makes profit every day with the ability to withdraw profit instantly. Join our company today and start making high profits!            </p>
        </div>
        <div className="flex-1 ">
          <Image src={serverImg1} className='w-[395.26px] md:w-[575.92px] h-[260px] md:h-[447.32px]' alt="alt" />
        </div>
      </div>


    </div>
  )
}

export default WelcometoTphere