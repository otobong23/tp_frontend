'use client';
import legalImg from '@/assets/legal-document.jpg'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const ViewCertificate = () => {
    const router = useRouter();
    const goBack = () => {
        router.back()
    }
    return (
        <div className='bg-slate-900'>
            <div className='flex justify-center items-center'><Image alt='Legal Document' src={legalImg} className='object-cover' /></div>
            <div className='mt-[50px] flex justify-center pb-4'>
                <button onClick={goBack} className='bg-[#1992C9] flex justify-center text-white text-[16px] px-[26px] py-4 font-light rounded-[12px] w-full lg:w-1/2 hover:scale-75'>Get it now</button>
            </div>
        </div>
    )
}

export default ViewCertificate