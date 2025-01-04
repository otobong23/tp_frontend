'use client';
import TradingviewWidget from '@/components/TradingviewWidget';
import { getUser } from '@/utils/controllers'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Wallet = () => {
    const [wallet, setWallet] = useState(0)
    const [assetsValue, setAssetsValue] = useState(0)

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
                    <h1 className='text-2xl font-bold text-[#353535]'>Wallet</h1>
                    <p className='text-sm text-[#ABABAB]'>Fund and withdraw from your wallet</p>
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

            <div className='flex flex-col md:flex-row justify-center items-center gap-8 pb-11'>
                <Link href="/dashboard/wallet/deposit" className='flex items-center justify-center text-white bg-custom-linear rounded-xl px-20 py-4 w-full md:w-max'>Deposit</Link>
                <Link href="/dashboard/wallet/withdraw" className='flex items-center justify-center text-white bg-custom-linear rounded-xl px-20 py-4 w-full md:w-max'>Withdraw</Link>
            </div>
        </div>
    )
}

export default Wallet