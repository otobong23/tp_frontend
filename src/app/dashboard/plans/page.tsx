"use client"
import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'

const programs = [
  {
    percent: 20,
    period: 'After 24 hours',
    text: 'min $50 - max $499',
    icon: 'gg:chart'
  },
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
  {
    percent: 150,
    period: 'After 3 Days',
    text: 'min $5000 - $100,000',
    icon: 'gg:chart'
  },
  {
    percent: 200,
    period: 'After 24 hours',
    text: 'min $50,000 - $200,000',
    icon: 'gg:chart'
  },
  {
    percent: 300,
    period: 'After 24 hours',
    text: 'min $200,000 - $999,000',
    icon: 'gg:chart'
  }
]

const Page = () => {
  const [amount, setAmount] = useState('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) || value === '') {
      setAmount(value)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center pb-14">
        <div className="col">
          <h1 className='text-2xl font-bold text-[#353535]'>Plans</h1>
          <p className='text-sm text-[#ABABAB]'>Make your money work for you</p>
        </div>
        <div className="col">
          <Icon icon='hugeicons:notification-02' className='text-[#210F33] text-xl' />
        </div>
      </div>

      <div className='py-[12.04px] px-[19.27px] border-[1px] border-[#E6E9F5] rounded-[10px] mb-3 md:w-[30%]'>
        <div className='flex justify-between items-center gap-2 my-2'>
          <h3 className='text-[17.21px] font-bold text-[#252430]'>Compare plans</h3>
          <span className='rounded-full text-[9.63px] font-medium border-[0.3px] border-[#858BA0] py-[6.02px] px-[12.04px]'><small>40% off</small></span>
        </div>
        <p className='text-[12.91px] font-medium mt-2 text-[#858BA0]'>
          Choose your Investment plan, according to your financial goals and pace.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-5 flex-1 justify-center items-center mb-5'>
        {
          programs.map(({ percent, period, text, icon }, index) => (
            <div key={index} className='flex items-center justify-between py-6 px-7 hover:bg-[#E3F2F9] rounded-xl'>
              <div>
                <span className='leading-[30px]'>
                  {percent ? <h1 className='text-[42.59px] md:text-[48.31px]'>{percent}%</h1> : <h2 className='text-xl pb-3'>Coming Soon</h2>}
                  <small className='text-[10px]'>{period}</small>
                </span>

                <span className='text-xs mt-9'>
                  <p>Instant Withdrawal</p>
                  <p>{text}</p>
                </span>
              </div>

              <div>
                <Icon icon={icon} className='text-[#FD8D1E] text-[40px] md:text-[70px]' />
              </div>
            </div>
          ))
        }
      </div>

      <div>
        <div className='flex items-center gap-2 mt-5'>
          <small className='text-[#858BA0] text-[14px] font-medium'>Deposit Amount</small>
          <div className='flex w-[40%] p-1 bg-[#1992C9] rounded-[10px]'>
            <form className="">
              <label htmlFor="amount"></label>
              <input type="text" placeholder='$0' className='w-[100%] rounded-[8px] px-2' value={amount}
                onChange={handleAmountChange} />
            </form>
            <button className='bg-[#1992C9] text-[#fff] px-2 rounded-[10px]'>min</button>
          </div>
        </div>

        <div>
          <button className='bg-gradient-to-r from-[#4832F2] to-[#1992C9] text-[#fff] text-[13.34px] font-normal w-[221px]  py-3 rounded-[10px] mt-5'>
            Make deposit
          </button>
        </div>
      </div>


    </div>
  )
}

export default Page