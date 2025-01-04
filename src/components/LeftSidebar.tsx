'use client';
import Image from 'next/image'
import trade_phere from '@/assets/trade_phere.svg'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { navLinks } from './constant'
import { usePathname } from 'next/navigation'


const LeftSidebar = () => {
  const pathname = usePathname()
  const active = (path: string) => pathname.startsWith(path);
  return (
    <div className='flex flex-col py-10 pl-14'>
      <Link href='/' className="logo flex gap-2 mb-14">
        <Image src={trade_phere} alt="alt" className='object-cover w-full max-w-10' />
        <h1 className='text-xl'>Trade<strong>Phere</strong></h1>
      </Link>

      <div className="navbar flex flex-col gap-[50px]">
        {navLinks.map(({title, path, icon}) => (
          <Link href={path} key={title} className={`flex gap-7 items-center hover:text-[#352E5B] hover:font-bold transition-all duration-300 border-r-[3px] hover:border-[#1992C9] ${active(path) ? 'border-[#1992C9] text-[#352E5B] font-bold' : 'text-[#A5A2B8] border-transparent'}`}>
            <Icon icon={icon} className='text-[24px]' />
            <h2 className='text-lg'>{title}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default LeftSidebar