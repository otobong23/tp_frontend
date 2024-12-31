import React from 'react'
import Accordion from './Accordion';
// import { Icon } from '@iconify/react/dist/iconify.js';

const Questions = () => {
  const items = [
    { title: "Where can I watch?", content: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla." },
    { title: "How do I subscribe?", content: "Follow these steps to subscribe." },
    { title: "What is the pricing?", content: "Pricing starts at $9.99/month." },
    { title: "Do you offer a free trial?", content: "Yes, we offer a 7-day free trial." },
  ];
  
  return (
    <div className='px-[--padding-x] py-[60px] lg:py-[100px]'>
     <Accordion items={items}/>
    </div>
  )
}

export default Questions