'use client';
import Image from 'next/image'
import React from 'react'
import logo from '@/assets/trade_phere.svg'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import useToggle from '@/hooks/useToggle';
import { navlist } from './constant';

// const MobileSection = () => {
//   const [T, Tfunc] = useToggle(false)
//   return (
//     <div className='mobile-section lg:hidden sticky'>
//       <button title='navbar toggle button' className="block" onClick={Tfunc}>
//         <div className={`w-6 h-5 relative flex flex-col ${T ? 'justify-center' : 'justify-between'}`}>
//           <span className={`w-full h-1 rounded-sm bg-black transition-all duration-300 ${T ? 'translate-y-1 -rotate-45' : 'translate-y-0 -rotate-0'}`}></span>
//           <span className={`w-full h-1 rounded-sm bg-black ${T ? 'hidden' : 'inline'}`}></span>
//           <span className={`w-full h-1 rounded-sm bg-black transition-all duration-300 ${T ? 'rotate-45' : 'rotate-0'}`}></span>
//         </div>
//       </button>

//       <div className={`absolute h-[calc(100vh-74px)] w-[260px] shadow-sm right-0 top-full px-10 py-14 text-lg transition-all duration-300 bg-white ${T ? 'translate-x-0' : 'translate-x-full'}`}>
//         <div className="nav mb-32">
//           <ul className="navlinks flex flex-col items-end gap-12">
//             {navlist.map(({ title, path }) => (<li key={title} ><Link href={path} className='hover:font-semibold transition-all duration-300'>{title}</Link></li>))}
//           </ul>
//         </div>
//         <div className="list">
//           <button className="lng ml-auto mb-10 flex items-center hover:font-semibold transition-all duration-300 text-xs">En <span className='flex items-center'><Icon icon='humbleicons:chevron-down'></Icon></span></button>
//         </div>
//       </div>
//     </div>
//   )
// }


const Navbar = () => {
  const [T, Tfunc] = useToggle(false)
  return (
    <header className='flex justify-between gap-2 flex-col px-[--padding-x] py-7 text-sm shadow-2xl shadow-[#3931751A] sticky'>
      <div className='flex justify-between'>
        <div className="logo">
          <Link href="/" className='relative max-w-14'>
            <Image src={logo} alt='logo' className='object-cover w-full' /></Link>
        </div>
        <div className="nav hidden lg:flex items-center">
          <ul className="navlinks flex gap-8">
            {navlist.map(({ title, path }) => (<li key={title} ><Link href={path} className='hover:font-semibold transition-all duration-300'>{title}</Link></li>))}
            <li><Link href='/dashboard' className='hover:font-semibold transition-all duration-300'>Dashboard</Link></li>
          </ul>
        </div>
        <div className="list hidden lg:flex gap-2 items-center">
          <button className="lng flex items-center hover:font-semibold transition-all duration-300">En <span className='flex items-center'><Icon icon='humbleicons:chevron-down'></Icon></span></button>
          <Link href='/auth/login' className='px-5 py-[10px] rounded-[10px] hover:shadow-lg transition-all duration-300'>Login</Link>
          <Link href="/auth/signup" className='px-5 py-[10px] rounded-[10px] bg-[#1892C9] text-white hover:shadow-lg transition-all duration-300'>Signup</Link>
        </div>

        <button title='navbar toggle button' className="block lg:hidden" onClick={Tfunc}>
          <div className={`w-6 h-5 relative flex flex-col ${T ? 'justify-center' : 'justify-between'}`}>
            <span className={`w-full h-1 rounded-sm bg-black transition-all duration-300 ${T ? 'translate-y-1 -rotate-45' : 'translate-y-0 -rotate-0'}`}></span>
            <span className={`w-full h-1 rounded-sm bg-black ${T ? 'hidden' : 'inline'}`}></span>
            <span className={`w-full h-1 rounded-sm bg-black transition-all duration-300 ${T ? 'rotate-45' : 'rotate-0'}`}></span>
          </div>
        </button>
      </div>

      <div className='flex justify-end lg:hidden'>
        <Link href='/dashboard' className='px-[20px] py-[12px] mr-[50px] rounded-[10px] hover:shadow-lg transition-all duration-300'>Dashboard</Link>
        <Link href='/auth/login' className='px-[20px] py-[12px] rounded-[10px] hover:shadow-lg transition-all duration-300'>Login</Link>
        <Link href="/auth/signup" className='px-[20px] py-[12px] rounded-[10px] bg-[#1892C9] text-white hover:shadow-lg transition-all duration-300'>Signup</Link>
      </div>

      <div className={`absolute h-[calc(100vh-74px)] w-[260px] shadow-sm right-0 top-full px-10 py-14 text-lg transition-all duration-300 bg-white ${T ? 'translate-x-0 z-[999]' : 'translate-x-full'}`}>
        <div className="nav mb-32">
          <ul className="navlinks flex flex-col items-end gap-12">
            {navlist.map(({ title, path }) => (<li key={title} ><Link href={path} className='hover:font-semibold transition-all duration-300'>{title}</Link></li>))}
          </ul>
        </div>
        <div className="list">
          <button className="lng ml-auto mb-10 flex items-center hover:font-semibold transition-all duration-300 text-xs">En <span className='flex items-center'><Icon icon='humbleicons:chevron-down'></Icon></span></button>
        </div>
      </div>
    </header>
  )
}

export default Navbar