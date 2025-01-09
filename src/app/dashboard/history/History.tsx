'use client';
import Activity, { ActivityProps } from '@/components/Activity'
import { getTransactions } from '@/utils/controllers';
import React, { useEffect, useState } from 'react'

const History = () => {
  const [data, setData] = useState<ActivityProps[]>([])
  useEffect(() => {
    getTransactions().then(res => {
      if(res?.length) setData(res)
    })
  },[])
  return (
    <div>
      <Activity activities={data} />
    </div>
  )
}

export default History