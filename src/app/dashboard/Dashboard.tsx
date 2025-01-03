'use client';
import Activity, { ActivityProps } from '@/components/Activity'
import TradingviewWidget from '@/components/TradingviewWidget'
import { getUser } from '@/utils/controllers';
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// const data = [
//   {
//     transaction: "Bitcoin",
//     amount: '0.5',
//     total: 15000,
//     status: 'successful',
//     date: '2024-12-27',
//   },
//   {
//     transaction: "Ethereum",
//     amount: '2.0',
//     total: 3000,
//     status: 'successful',
//     date: '2024-12-26',
//   },
//   {
//     transaction: "USDT",
//     amount: '200',
//     total: 200,
//     status: 'successful',
//     date: '2024-12-20',
//   },
// ];

const Dashboard = () => {
  const [wallet, setWallet] = useState(0)
  const [assetsValue, setAssetsValue] = useState(0)
  const data: ActivityProps[] = []

  useEffect(() => {
    getUser().then(res => {
      if (res) {
        const { user } = res
        setAssetsValue(user.wallet.assetValue)
        setWallet(user.wallet.balance)
      }
    }).catch(err => { console.error(err) })
  }, [])
  return (
    <div>
      <div className="flex justify-between items-center pb-14">
        <div className="col">
          <h1 className='text-2xl font-bold text-[#353535]'>Jump Start</h1>
          <p className='text-sm text-[#ABABAB]'>Your portfolio looks great today</p>
        </div>
        <div className="col">
          <Icon icon='hugeicons:notification-02' className='text-[#210F33] text-xl' />
        </div>
      </div>

      <div>
        <p className='text-[17.21px]'>Portfolio balance</p>
        <h1 className='font-bold text-[31.55px]'>${wallet}</h1>
        <p className='text-[#20CB5C] text-[14.34px] font-normal flex items-center gap-1'>{assetsValue ? <Icon icon="mynaui:chevron-up" className='text-[20px]' /> : ''} ${assetsValue} ({assetsValue ? (assetsValue / wallet) * 100 : 0}%)</p>
        <p className='text-[12.91px] text-[#888DA1] mt-1'>Today ({new Date().toDateString()})</p>
      </div>

      <div className='mt-7 w-full'>
        <TradingviewWidget />
      </div>

      {/* Activity */}
      <div className='mt-[61.47px] pb-10'>
        <div className='flex justify-between items-center w-full '>
          <h2 className='text-[#352E5B] text-[18px] md:text-[28px] font-bold'>ACTIVITY</h2>
          <Link href='/dashboard/history' className='flex items-center gap-1 text-[#1992C9] text-[11.11px] md:text-[16px] font-medium'>More Activity <Icon icon="ci:arrow-down-lg" /></Link>
        </div>

        <Activity activities={data} />
      </div>
    </div>
  )
}

export default Dashboard