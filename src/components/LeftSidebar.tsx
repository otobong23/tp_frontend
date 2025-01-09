'use client';
import Image from 'next/image'
import trade_phere from '@/assets/trade_phere.svg'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { navLinks } from './constant'
import { usePathname, useRouter } from 'next/navigation'
import api from '@/utils/axios';
import { showToast } from '@/utils/alert';
import Cookies from 'js-cookie';


const LeftSidebar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const active = (path: string) => path === pathname || path === pathname.split('/deposit')[0] || path === pathname.split('/withdraw')[0]
  const logout = () => {
    const authorization = Cookies.get('Authorization')
    api({
      url: '/auth/signout',
      method: 'POST',
      headers: {
        authorization
      }
    }).then(res => {
      showToast('success', res.data.message)
      Cookies.remove('Authorization');
      router.replace('/')
    }).catch(err => {
      console.log(err)
      showToast('error', 'Failed to Logout')
    })
  }

  return (
    <div className='flex flex-col py-10 pl-14'>
      <Link href='/' className="logo flex gap-2 mb-14">
        <Image src={trade_phere} alt="alt" className='object-cover w-full max-w-10' />
        <h1 className='text-xl'>Trade<strong>Phere</strong></h1>
      </Link>

      <div className="navbar flex flex-col gap-[50px]">
        {navLinks.map(({ title, path, icon }) => {
          if (path) return (
            <Link href={path} key={title} className={`flex gap-7 items-center hover:text-[#352E5B] hover:font-bold transition-all duration-300 border-r-[3px] hover:border-[#1992C9] ${active(path) ? 'border-[#1992C9] text-[#352E5B] font-bold' : 'text-[#A5A2B8] border-transparent'}`}>
              <Icon icon={icon} className='text-[24px]' />
              <h2 className='text-lg'>{title}</h2>
            </Link>
          )
          else return (
            <button onClick={logout} key={title} className={`flex gap-7 items-center hover:text-[#352E5B] hover:font-bold transition-all duration-300 border-r-[3px] hover:border-[#1992C9] focus:border-[#1992C9] focus:text-[#352E5B] focus:font-bold text-[#A5A2B8] border-transparent`}>
              <Icon icon={icon} className='text-[24px]' />
              <h2 className='text-lg'>{title}</h2>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default LeftSidebar