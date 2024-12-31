import React from 'react';
import usdt from '@/assets/usdt.png'
import btc from '@/assets/btc.png'
import eth from '@/assets/eth.png'
import Image from 'next/image';

interface ActivityProps {
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
  return (
    <div className="bg-[#1992C9] w-full rounded py-6 px-9">
      <table className="w-full">
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
    </div>
  );
};

export default Activity;
