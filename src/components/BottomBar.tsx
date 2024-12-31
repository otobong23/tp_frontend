"use client";
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import React from 'react'
import { navLinks } from './constant'
import { usePathname } from 'next/navigation'

const BottomBar = () => {
  const pathname = usePathname()
  const active = (path: string) => path === pathname
  return (
    <div>
      <div className="flex justify-evenly items-center gap-10 md:justify-evenly">
        {navLinks.map(({title, path, icon}) => (
        <Link href={path} key={title} className={`flex items-center text-2xl transition-all duration-300 ${active(path) ? 'text-white w-[64.53px] h-[64.53px] rounded-full flex items-center justify-center bg-[#1992C9]' : 'text-[#A5A2B8]'}`}>
            <Icon icon={icon} className='text-[24px]' />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BottomBar