import Link from 'next/link'
import React from 'react'
import { navlist } from './constant'


const Footer = () => {
  return (
    <div className='border-t border-[#F3F5F6] px-[--padding-x] py-[50px] flex justify-between gap-5'>
      <p className='text-nowrap'>&copy; Copyright 2023</p>
      <ul className="navlinks flex gap-8 flex-wrap">
        {navlist.map(({ title, path }, index) => (<li key={title + index} ><Link href={path} className='hover:font-semibold transition-all duration-300'>{title}</Link></li>))}
      </ul>
    </div>
  )
}

export default Footer