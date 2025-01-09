import React, { Fragment } from 'react';
import usdt from '@/assets/usdt.png'
import btc from '@/assets/btc.png'
import eth from '@/assets/eth.svg'
import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';

export interface ActivityProps {
  transaction: string;  //'Bitcoin' | 'Ethereum' | 'USDT'
  amount: string;
  total: number;
  status: string; //'successful'
  date: string;
}

interface ActivityComponentProps {
  activities: ActivityProps[];
}
const Activity: React.FC<ActivityComponentProps> = ({ activities }) => {
  if (activities.length) return (
    <div className="bg-[#1992C9] w-full rounded py-6 px-9">
      <table className="w-full desktop-view hidden lg:block">
        <thead className="border-b border-[#F5F5F5]">
          <tr className="text-[#F5F5F5] text-[14px]">
            <th className="text-left">Transactions</th>
            <th>Amount</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(({ transaction, amount, total, status, date }, i) => (
            <tr key={i} className="text-[#F5F5F5] text-[14px]">
              <td className="text-left flex items-center gap-4">
                <div className='flex items-center justify-center bg-[#F5F5F5] rounded-md w-8 h-8'><Image src={transaction === 'Bitcoin' ? btc : transaction === 'Ethereum' ? eth : usdt} alt="alt" className='w-4 object-cover' /></div>
                {transaction}</td>
              <td>
                {amount}
                {transaction === 'Bitcoin' ? 'BTC' : transaction === 'Ethereum' ? 'ETH' : 'USDT'}
              </td>
              <td>${total}</td>
              <td>{status}</td>
              <td>{date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className='w-full mobile-view lg:hidden'>
        <tbody className='flex flex-col'>
          {activities.map(({ transaction, amount, total, status, date }, i) => (
            <tr className='border-b-2 border-white pb-2' key={i}>
              <tr className="text-[#F5F5F5] text-[14px] flex items-center gap-4">
                <td>Transction: </td>
                <td className="text-left flex items-center gap-4">
                  <div className='flex items-center justify-center bg-[#F5F5F5] rounded-md w-8 h-8'><Image src={transaction === 'Bitcoin' ? btc : transaction === 'Ethereum' ? eth : usdt} alt="alt" className='w-4 object-cover' /></div>
                  {transaction}</td>
              </tr>
              <tr className="text-[#F5F5F5] text-[14px] flex items-center gap-4">
                <td>Amount</td>
                <td>
                  {amount}
                  {transaction === 'Bitcoin' ? 'BTC' : transaction === 'Ethereum' ? 'ETH' : 'USDT'}
                </td>
              </tr>
              <tr className="text-[#F5F5F5] text-[14px] flex items-center gap-4">
                <td>Total</td>
                <td>${total}</td>
              </tr>
              <tr className="text-[#F5F5F5] text-[14px] flex items-center gap-4">
                <td>Status</td>
                <td>{status}</td>
              </tr>
              <tr className="text-[#F5F5F5] text-[14px] flex items-center gap-4">
                <td>Date</td>
                <td>{date}</td>
              </tr>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  else return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <Icon icon='fa6-solid:box-open' className='text-4xl text-[#1992C9]' />
      <h1 className='text-3xl text-center'>No Transaction Activity Found</h1>
      <Link href='/dashboard/wallet/deposit' className='text-lg text-[#1992C9] underline'>Please Make a Deposit</Link>
    </div>
  )
};

export default Activity;
