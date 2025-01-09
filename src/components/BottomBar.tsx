"use client";
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import React from 'react'
import { navLinks } from './constant'
import { usePathname, useRouter } from 'next/navigation'
import api from '@/utils/axios';
import { showToast } from '@/utils/alert';
import Cookies from 'js-cookie';

const BottomBar = () => {
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
    <div>
      <div className="flex justify-evenly items-center gap-10 md:justify-evenly">
        {navLinks.map(({ title, path, icon }) => {
          if (path) return (
            <Link href={path} key={title} className={`flex items-center text-2xl transition-all duration-300 ${active(path) ? 'text-white w-[64.53px] h-[64.53px] rounded-full flex items-center justify-center bg-[#1992C9]' : 'text-[#A5A2B8]'}`}>
              <Icon icon={icon} className='text-[24px]' />
            </Link>
          )
          else return (
            <button onClick={logout} key={title} className={`flex items-center text-2xl transition-all duration-300 text-[#A5A2B8] focus:text-white focus:w-[64.53px] focus:h-[64.53px] rounded-full justify-center focus:bg-[#1992C9]`}>
              <Icon icon={icon} className='text-[24px]' />
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default BottomBar