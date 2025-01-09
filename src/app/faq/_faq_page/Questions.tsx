import React from 'react'
import Accordion from './Accordion';
// import { Icon } from '@iconify/react/dist/iconify.js';

const Questions = () => {
  const items = [
    { title: "How I Contact Your Services", content: "Our Services can be contacted at tradephere@gmail.com" },
    { title: "How do I subscribe?", content: "Follow these steps to subscribe." },
    { title: "What is the pricing?", content: "Pricing starts at $50/month." },
    { title: "Do you offer a free trial?", content: "NO, we do not offer a free trial." },
  ];
  
  return (
    <div className='px-[--padding-x] py-[60px] lg:py-[100px]'>
     <Accordion items={items}/>
    </div>
  )
}

export default Questions