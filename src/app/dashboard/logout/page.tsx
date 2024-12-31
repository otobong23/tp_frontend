import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="flex justify-between items-center pb-14">
        <div className="col">
          <h1 className='text-2xl font-bold text-[#353535]'>Logout</h1>
          <p className='text-sm text-[#ABABAB]'>You have total control</p>
        </div>
        <div className="col">
          <Icon icon='hugeicons:notification-02' className='text-[#210F33] text-xl' />
        </div>
      </div>
    </div>
  )
}

export default page