import Activity from '@/components/Activity'
import React from 'react'

const History = () => {
  const data = [
    {
      transaction: "Bitcoin",
      amount: '0.5',
      total: 15000,
      status: 'successful',
      date: '2024-12-27',
    },
    {
      transaction: "Ethereum",
      amount: '2.0',
      total: 3000,
      status: 'successful',
      date: '2024-12-26',
    },
    {
      transaction: "USDT",
      amount: '200',
      total: 200,
      status: 'successful',
      date: '2024-12-20',
    },
    {
      transaction: "Ethereum",
      amount: '2.0',
      total: 3000,
      status: 'successful',
      date: '2024-12-26',
    },
    {
      transaction: "USDT",
      amount: '200',
      total: 200,
      status: 'successful',
      date: '2024-12-20',
    },
    {
      transaction: "Bitcoin",
      amount: '0.5',
      total: 15000,
      status: 'successful',
      date: '2024-12-27',
    },
    {
      transaction: "Bitcoin",
      amount: '0.5',
      total: 15000,
      status: 'successful',
      date: '2024-12-27',
    },
    {
      transaction: "Bitcoin",
      amount: '0.5',
      total: 15000,
      status: 'successful',
      date: '2024-12-27',
    },
    {
      transaction: "Ethereum",
      amount: '2.0',
      total: 3000,
      status: 'successful',
      date: '2024-12-26',
    },
    {
      transaction: "USDT",
      amount: '200',
      total: 200,
      status: 'successful',
      date: '2024-12-20',
    },
    {
      transaction: "Ethereum",
      amount: '2.0',
      total: 3000,
      status: 'successful',
      date: '2024-12-26',
    },
    {
      transaction: "USDT",
      amount: '200',
      total: 200,
      status: 'successful',
      date: '2024-12-20',
    },
    {
      transaction: "Bitcoin",
      amount: '0.5',
      total: 15000,
      status: 'successful',
      date: '2024-12-27',
    },
    {
      transaction: "Bitcoin",
      amount: '0.5',
      total: 15000,
      status: 'successful',
      date: '2024-12-27',
    },
    {
      transaction: "USDT",
      amount: '200',
      total: 200,
      status: 'successful',
      date: '2024-12-20',
    },
  ];
  return (
    <div>
      <Activity activities={data} />
    </div>
  )
}

export default History