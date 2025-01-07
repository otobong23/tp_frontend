'use client';
import React, { Fragment, useEffect, useState } from 'react'
import btc from '@/assets/btc.png'
import eth from '@/assets/eth.svg'
import usdt from '@/assets/usdt.png'
import Image from 'next/image'
import useForm from '@/hooks/useForm';
import Link from 'next/link';
import { useContextStore } from '@/context/DepositContext';
import { useRouter } from 'next/navigation';
import { showToast } from '@/utils/alert';

const RECIEVER_BTC_ADDRESS = '1NDHZtXsy1QPRt4sro23agUcFX1vqaWSGG'
const RECIEVER_ETH_ADDRESS = '0xc92adc6fa9dc7d1aa8cbb10e2250f29f84669139'
const RECIEVER_USDT_ADDRESS = 'TEZdBcxRZpMw4yJtA9RVTX8WyiCtXCzLzd'
type activeType = 'Bitcoin' | 'Ethereum' | 'USDT'
type listType = {
    image: any, title: activeType, address: string
}
const list:listType[] = [
    { image: btc, title: 'Bitcoin', address: RECIEVER_BTC_ADDRESS },
    { image: eth, title: 'Ethereum', address: RECIEVER_ETH_ADDRESS },
    { image: usdt, title: 'USDT', address: RECIEVER_USDT_ADDRESS },
]


const Deposit = () => {
    const router = useRouter()
    const [active, setActive] = useState<activeType>('' as activeType)
    const [amount, setAmount] = useForm('')
    const { handleLabel, handleAmount} = useContextStore()

    useEffect(() => {
        handleLabel(active)
        handleAmount(Number(amount))
    },[active, amount])

    const handleContinue = () => {
        if(active && amount){
            router.push("/dashboard/wallet/deposit/confirm-transaction")
        }else{
            showToast('warning', 'please fill up the details')
        }
    }
    return (
        <div>
            <div>
                <h1 className='pb-3'>Deposit Crypto</h1>
                <div className='flex flex-col'>
                    <div className="header flex items-center justify-center pb-2">
                        <h2>Select Crypto</h2>
                    </div>
                    <div className='flex flex-col gap-2'>
                        {list.map(({ image, title, address }, i) => (
                            <div key={title} onClick={() => setActive(title)} className={`hover:border-black border-transparent border cursor-pointer py-8 px-5 md:px-10 lg:px-18 rounded-2xl flex items-center justify-start ${active === title ? 'bg-[#1992C9]' : 'bg-[#00000008]'}`}>
                                <span className={`pr-5 md:pr-14 font-extrabold ${active === title ? 'text-white' : 'text-[#878787CC]'}`}>{i + 1}.</span>
                                <div className='flex pr-5 md:pr-11'>
                                    <div className='w-8 pr-3'><Image alt='image' src={image} className='object-cover w-full' /></div>
                                    <h2 className={`font-medium ${active === title ? 'text-white' : 'text-black'}`}>{title}</h2>
                                </div>
                                <p className={`text-ellipsis overflow-hidden w-24 md:w-full lg:max-w-60 xl:max-w-full font-medium ${active === title ? 'text-white' : 'text-black'}`}>{address}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='pt-4'>
                <h1 className='text-sm text-[#5D6166] pb-2'>Enter Amount</h1>
                <div className='flex items-center pl-11 gap-10 w-full'>
                    <div className='flex py-3 gap-2 border-b-2 border-b-[#E8F2FF]'>
                        <div className='w-6'><Image src={active === 'Bitcoin' ? btc : active === 'Ethereum' ? eth : usdt} alt='image' className='object-cover w-full' /></div>
                        <p className='text-[#8B9199]'>{active === 'Bitcoin' ? 'BTC' : active === 'Ethereum' ? 'ETH' : 'USDT'}</p>
                    </div>
                    <div className='border-b-2 py-3 border-b-[#E8F2FF]'>
                        <input type="number" value={amount} onChange={setAmount} className='w-40 md:w-full text-2xl font-medium' />
                    </div>
                </div>
            </div>

            <div className='flex justify-center pt-16 lg:pt-24 pb-5'>
                <button onClick={handleContinue} className='bg-[#1992C9] text-white py-5 rounded-xl w-full md:w-max px-16 flex items-center justify-center'>Continue</button>
            </div>
        </div>
    )
}

export default Deposit