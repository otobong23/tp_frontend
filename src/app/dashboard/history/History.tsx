import Activity, { ActivityProps } from '@/components/Activity'
import React from 'react'

const History = () => {
  const data:ActivityProps[] = []
  return (
    <div>
      <Activity activities={data} />
    </div>
  )
}

export default History