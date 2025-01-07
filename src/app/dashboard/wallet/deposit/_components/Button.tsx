'use client';
import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useRouter } from 'next/navigation'

const GoBack = () => {
  const router = useRouter()
  const goBack = () => {
    router.back()
}
  return (
    <button onClick={goBack}><Icon icon='tabler:chevron-left' className='text-[#210F33] text-2xl' /></button>
  )
}

export default GoBack