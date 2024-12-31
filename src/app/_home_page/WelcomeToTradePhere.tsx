import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import Image from 'next/image'
import welcImg from '@/assets/welcome.png'

const programs = [
  // {
  //   percent: 20,
  //   period: 'After 24 hours',
  //   text: 'min $50 - max $499',
  //   icon: 'gg:chart'
  // },
  {
    percent: 50,
    period: 'After 24 hours',
    text: 'min $50 - max $499',
    icon: 'gg:chart'
  },
  {
    percent: 100,
    period: 'After 2 Days',
    text: 'min $1000 - $4999',
    icon: 'gg:chart'
  },
  // {
  //   percent: 150,
  //   period: 'After 3 Days',
  //   text: 'min $5000 - $100,000',
  //   icon: 'gg:chart'
  // },
  {
    percent: 200,
    period: 'After 24 hours',
    text: 'min $50,000 - $200,000',
    icon: 'gg:chart'
  },
  {
    percent: null,
    period: '',
    text: 'min $ --------- $-------+',
    icon: 'gg:chart'
  }
]

const WelcomeToTradePhere = () => {
  return (
    <div>
      <div className='flex flex-col-reverse lg:flex-row-reverse pl-[--padding-x] justify-between items-center w-full pt-[70px] lg:pt-[80px]'>
        <div className='flex-1 p-4'>
          <header className=' w-full lg:my-[4rem]'>
            <p className='text-[12px] lg:text-[16px] font-semibold text-[#FD8D1E]'>Experience modern mining equipment</p>
            <h1 className='text-[30px] lg:text-[64px] font-bold leading-[40px] lg:leading-[84px] py-4'>Trade Phere Investment, trading, and custody for Everyone</h1>
            <p className='text-base lg:text-lg leading-[30px] text-[#848484] font-normal lg:w-[75%]'>
              Using modern business methods and person to person client approach we offer a unique investment model to traders of bitcoin and other methods.
            </p>

            <div className='mt-[50px]'>
              <button className='bg-[#1992C9] text-white text-[16px] px-[26px] py-4 font-light rounded-[12px] w-[50%]'>Get it now</button>
            </div>
          </header>
        </div>
        <div className='flex mt-5 w-full h-[300px] lg:h-[640px] overflow-hidden flex-[1] bg-custom-radial'>
          <Image src={welcImg} alt="alt" className='object-contain' />
        </div>
      </div>

      <div className='p-4 mt-8'>
        <div className='md:flex px-[--padding-x]'>
          <div className='flex-1'>

            <h1 className='text-[30px] lg:text-[64px] font-bold leading-[40px] lg:leading-[84px] py-4'>We make crypto easy.</h1>
            <p className='text-base lg:text-lg leading-[30px] text-[#848484] font-normal lg:w-[75%]'>
              Invest regularly and get a bit of  crypto to try out for yourself. Here are a few reasons why you should choose trade phere crypto
            </p>

            <div className='mt-[40px]'>
              <button className='bg-[#1992C9] text-white text-[16px] px-[26px] py-4 font-light rounded-[12px] w-[60%]'>Learn more</button>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-[40px] mt-[60px] flex-1 '>
            {
              programs.map(({ percent, period, text, icon }, index) => (
                <div key={index} className='flex items-center justify-between py-[17.39px] px-[28.99px]'>
                  <div>
                    <span className='leading-[30px]'>
                      <h1 className='text-[48.31px]'>{percent}%</h1>
                      <small className='text-[10px]'>{period}</small>
                    </span>

                    <span className='text-[15.46px] mt-9'>
                      <p>Instant Withdrawal</p>
                      <p>{text}</p>
                    </span>
                  </div>

                  <div>
                    <Icon icon={icon} className='text-[#FD8D1E] text-[70px]'/>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeToTradePhere