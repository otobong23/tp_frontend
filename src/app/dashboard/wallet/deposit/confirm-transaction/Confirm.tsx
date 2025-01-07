'use client';
import QRCodeGenerator from '@/components/QRCodeGenerator'
import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useEffect, useState } from 'react'
import btc from '@/assets/btc.png'
import eth from '@/assets/eth.svg'
import usdt from '@/assets/usdt.png'
import Image from 'next/image'
import { useContextStore } from '@/context/DepositContext';
import getCryptoToUsdtRate from '@/utils/getCryptoToUsdtRate';
import { showToast } from '@/utils/alert';
import { useRouter } from 'next/navigation';
import { btcListen, ethListen, usdtListen } from '@/utils/controllers';

const RECIEVER_BTC_ADDRESS = '1NDHZtXsy1QPRt4sro23agUcFX1vqaWSGG'
const RECIEVER_ETH_ADDRESS = '0xc92adc6fa9dc7d1aa8cbb10e2250f29f84669139'
const RECIEVER_USDT_ADDRESS = 'TEZdBcxRZpMw4yJtA9RVTX8WyiCtXCzLzd'

const Confirm = () => {
    const router = useRouter()
    const { label, amount } = useContextStore()
    const [usdtRate, setUsdtRate] = useState(0)

    const [data, setData] = useState<{response: {data: {message: string}}} | null>()

    useEffect(() => {
        if (!amount) router.back()
    }, [amount, router])

    const getAddress = () => {
        if (label === "Bitcoin") return RECIEVER_BTC_ADDRESS;
        if (label === "Ethereum") return RECIEVER_ETH_ADDRESS;
        if (label === "USDT") return RECIEVER_USDT_ADDRESS;
        return RECIEVER_USDT_ADDRESS
    }
    const [textToCopy, setTextToCopy] = useState(getAddress());
    useEffect(() => {
        setTextToCopy(getAddress())
    }, [textToCopy, getAddress])

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            showToast('success', 'Copied!');
        } catch (err) {
            console.log(err)
            showToast('error', 'Failed to copy!');
        }
    };

    const getImage = () => {
        if (label === "Bitcoin") return btc;
        if (label === "Ethereum") return eth;
        if (label === "USDT") return usdt;
        return usdt
    }
    const getNetwork = () => {
        if (label === "Bitcoin") return 'BTC';
        if (label === "Ethereum") return 'ERC20';
        if (label === "USDT") return 'TRC20';
        return 'TRC20'
    }

    const getShortForm = () => {
        if (label === "Bitcoin") return 'btc';
        if (label === "Ethereum") return 'eth';
        if (label === "USDT") return 'usdt';
        return 'usdt'
    }

    useEffect(() => {
        const getLabel = () => {
            if (label === "Bitcoin") return 'bitcoin';
            if (label === "Ethereum") return 'ethereum';
            if (label === "USDT") return 'usd';
            return 'usd'
        }
        getCryptoToUsdtRate(getLabel()).then(res => setUsdtRate(res))
    }, [label, amount, usdtRate])

    const getAPI = async () => {
        if (label === "Bitcoin") return await btcListen();
        if (label === "Ethereum") return await ethListen();
        if (label === "USDT") return await usdtListen();
        return await usdtListen()
    }

    const handleDONE = async () => {
        const response = await getAPI()
        try {
            setData(response)
            console.log('data',data)
            showToast('success', data?.response?.data.message || '')
        } catch (error) {
            console.log(error)
            showToast('error', 'failed to get the transactions')
        }
    }
    return (
        <div className='flex justify-center'>
            <div className='w-full md:w-10/12 lg:w-8/12'>
                <h1 className='text-2xl font-bold pb-6'>Confirm Transaction</h1>
                <div className='py-4 w-full bg-[#E8F2FF] rounded-xl flex justify-center items-center flex-col'>
                    <h3 className='text-[#8B9199] text-sm'>Amount to Deposit</h3>
                    <p className='text-[#020D1A] text-2xl'>{usdtRate * amount} USDT</p>
                    <p className='text-[#8B9199] text-sm'>{amount} {getShortForm()}</p>
                </div>

                <div className="qr-code flex justify-center py-6">
                    <QRCodeGenerator address={getAddress()} label='USDT' />
                </div>
                <div>
                    <p className='text-[#8B9199] text-sm'>Wallet Address</p>
                    <div className='flex items-center gap-3 pb-3 flex-wrap'>
                        <p className='text-xl text-[#2E3033] break-all max-w-full'>{getAddress()}</p>
                        <button onClick={handleCopy}><Icon icon='mynaui:copy' className='text-[#177DFF] text-lg' /></button>
                    </div>
                    <div className='flex justify-between pb-3'>
                        <p>coin</p>
                        <div className='flex items-center gap-3'>
                            <div className='w-6'>
                                <Image src={getImage()} alt='image' className='w-full object-cover' />
                            </div>
                            <p>{label}</p>
                        </div>
                    </div>
                    <div className='flex justify-between pb-3'>
                        <p>Network</p>
                        <p>{getNetwork()}</p>
                    </div>
                    <div className='flex justify-center pt-16 lg:pt-24 pb-5'>
                        <button onClick={handleDONE} className='bg-[#1992C9] text-white py-5 rounded-xl w-full md:w-max px-16 flex items-center justify-center'>Done</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirm