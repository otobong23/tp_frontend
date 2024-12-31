"use client";
import { getUser } from '@/utils/controllers';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const RightSidebar = () => {
  const [joined, setJoined] = useState(new Date('June 22, 2020'))
  const [assetsValue, setAssetsValue] = useState(0)
  const assets = ['BTC', 'ETH', 'USDT', 'BNB', 'ADA', 'XRP', 'DOGE', 'DOT', 'UNI']
  const setDate = (param: string) => {
    setJoined(new Date(param))
  }
  const assetsFunc = (param: number) => {
    setAssetsValue(param)
  }
  useEffect(() => {
    getUser().then(res => {
      if(res){
        const { user } = res
        setDate(user.createdAt)
        assetsFunc(user.wallet.assetValue)
      }
    })
  })
  return (
    <div className='border-l-[#C1BDD41F]'>
      <div className="bg-[#1992C9] text-white min-h-[217px] rounded-[10px] flex flex-col items-center justify-center">
        <h1 className='text-2xl pb-9 font-bold'>Trader Profile</h1>
        <h2 className='pb-5 text-xl font-bold'>Han Ji Pyeong</h2>
        <Link href='mailto:email@gmail.com' className='text-base'>email@gmail.com</Link>
      </div>

      <div className='px-[14px] pt-10 pb-8 mb-9 border-b-[#F4F2FB] border-b'>
        <h1 className='text-lg font-semibold pb-6'>Account</h1>
        <div className="flex justify-between pb-5">
          <p>Joined</p>
          <p>{joined.toDateString()}</p>
        </div>
        <div className="flex justify-between">
          <p>Assets Value</p>
          <p>{assetsValue}</p>
        </div>
      </div>

      <div className='px-[14px]'>
        <h1 className='text-lg font-semibold pb-6'>Assets</h1>
        <div className="flex flex-col gap-5">
          {assets.map((item) => (
            <div key={item} className="flex justify-between pb-5">
              <p>{item}</p>
              <p></p>
            </div>))}
        </div>
      </div>
    </div>
  )
}

export default RightSidebar