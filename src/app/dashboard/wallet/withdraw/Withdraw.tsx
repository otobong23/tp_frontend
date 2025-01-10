'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react'
import btc from '@/assets/btc.png'
import eth from '@/assets/eth.svg'
import usdt from '@/assets/usdt.png'
import useForm from '@/hooks/useForm';
import { showToast } from '@/utils/alert';
import { getUser } from '@/utils/controllers';
import { useRouter } from 'next/navigation';


type activeType = 'Bitcoin' | 'Ethereum' | 'USDT'
type listType = {
  image: StaticImageData, title: activeType,
}
const list: listType[] = [
  { image: btc, title: 'Bitcoin' },
  { image: eth, title: 'Ethereum' },
  { image: usdt, title: 'USDT' },
]

const Withdraw = () => {
  const [active, setActive] = useState<activeType>('' as activeType)
  const [amount, setAmount] = useForm('')
  const [address, setAddress] = useForm('')
  const [wallet, setWallet] = useState(0)
  const router = useRouter()

  useEffect(() => {
    getUser().then(res => {
      if (res) {
        const { user } = res
        setWallet(user.wallet.balance)
      }
    }).catch(err => { console.error(err) })
  }, [])

  const handleWithdraw = () => {
    if (active && amount && address) {
      if(Number(amount) <= wallet){
        showToast("success", 'Withdraw Has been made succesfully')
        router.replace('/dashboard')
      } else{
        showToast("warning", "Withdraw Can't be made, Amount is less than Portfolio balance")
      }
    } else{
      showToast('info', "please fill up the details")
    }
  }
  return (
    <div>
      <div>
        <h1 className='pb-3'>Withdraw Crypto</h1>
        <div className='flex flex-col'>
          <div className="header flex items-center justify-center pb-2">
            <h2>Select Crypto</h2>
          </div>
          <div className='flex flex-col gap-2'>
            {list.map(({ image, title }, i) => (
              <div key={title} onClick={() => setActive(title)} className={`hover:border-black border-transparent border cursor-pointer py-8 px-5 md:px-10 lg:px-18 rounded-2xl flex items-center justify-start ${active === title ? 'bg-[#1992C9]' : 'bg-[#00000008]'}`}>
                <span className={`pr-5 md:pr-14 font-extrabold ${active === title ? 'text-white' : 'text-[#878787CC]'}`}>{i + 1}.</span>
                <div className='flex pr-5 md:pr-11'>
                  <div className='w-8 pr-3'><Image alt='image' src={image} className='object-cover w-full' /></div>
                  <h2 className={`font-medium ${active === title ? 'text-white' : 'text-black'}`}>{title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='pt-8'>
        <h1 className='text-sm text-[#5D6166] pb-2'>Enter Amount</h1>
        <div className='flex items-center pl-11 gap-10 w-full'>
          <div className='flex py-3 gap-2 border-b-2 border-b-[#E8F2FF]'>
            <div className='w-6'><Image src={active === 'Bitcoin' ? btc : active === 'Ethereum' ? eth : usdt} alt='image' className='object-cover w-full' /></div>
            <p className='text-[#8B9199]'>{active === 'Bitcoin' ? 'BTC' : active === 'Ethereum' ? 'ETH' : 'USDT'}</p>
          </div>
          <div className='border-b-2 py-3 border-b-[#E8F2FF]'>
            <input type="text" value={amount} onChange={setAmount} className='w-40 md:w-full text-2xl font-medium' />
          </div>
        </div>
      </div>

      <div className='pt-8'>
        <h1 className='text-sm text-[#5D6166] pb-2'>Enter Wallet Address</h1>
        <div className='flex items-center pl-11 gap-10 w-full'>
          <div className='flex py-3 gap-2 border-b-2 border-b-[#E8F2FF]'>
            <div className='w-6'><Image src={active === 'Bitcoin' ? btc : active === 'Ethereum' ? eth : usdt} alt='image' className='object-cover w-full' /></div>
            <p className='text-[#8B9199]'>{active === 'Bitcoin' ? 'BTC' : active === 'Ethereum' ? 'ETH' : 'USDT'}</p>
          </div>
          <div className='border-b-2 py-3 border-b-[#E8F2FF]'>
            <input type="text" value={address} onChange={setAddress} className='w-40 md:w-full text-2xl font-medium' />
          </div>
        </div>
      </div>

      <div className='flex justify-center pt-16 lg:pt-24 pb-5'>
        <button onClick={handleWithdraw} className='bg-[#1992C9] text-white py-5 rounded-xl w-full md:w-max px-16 flex items-center justify-center'>Withdraw</button>
      </div>
    </div>
  )
}

export default Withdraw