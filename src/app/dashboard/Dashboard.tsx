'use client';
import Activity, { ActivityProps } from '@/components/Activity'
import TradingviewWidget from '@/components/TradingviewWidget'
import { getTransactions, getUser } from '@/utils/controllers';
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { useEffect, useState } from 'react'


const Dashboard = () => {
  const [wallet, setWallet] = useState(0)
  const [assetsValue, setAssetsValue] = useState(0)
  const [joined, setJoined] = useState(new Date('June 22, 2020'))
  const assets = ['BTC', 'ETH', 'USDT']
  const [firstName, setFirstName] = useState('user')
  const [lastName, setLastName] = useState('name')
  const [email, setEmail] = useState('')
  const [data, setData] = useState<ActivityProps[]>([])
  const setDate = (param: string) => {
    setJoined(new Date(param))
  }
  const assetsFunc = (param: number) => {
    setAssetsValue(param)
  }
  const setName = (first:string, last:string) => {
    setFirstName(first);setLastName(last)
  }

  useEffect(() => {
    getUser().then(res => {
      if (res) {
        const { user } = res
        setAssetsValue(user.wallet.assetValue)
        setWallet(user.wallet.balance)
        setDate(user.createdAt)
        assetsFunc(user.wallet.assetValue)
        setName(user.firstName, user.lastName)
        setEmail(user.email)
      }
    }).catch(err => { console.error(err) })
  }, [])

  useEffect(() => {
    getTransactions().then(res => {
      if (res?.length) setData(res)
    })
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

      <div className='lg:hidden mobile-right-side-bar'>
        <div className="bg-[#1992C9] p-2 text-white min-h-[217px] rounded-[10px] flex flex-col items-center justify-center">
          <h1 className='text-2xl pb-9 font-bold'>Trader Profile</h1>
          <h2 className='pb-5 text-xl font-bold'>{firstName} {lastName}</h2>
          <Link href='mailto:email@gmail.com' className='text-sm  break-all text-center'>{email}</Link>
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
              </div>))}
          </div>
        </div>
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
