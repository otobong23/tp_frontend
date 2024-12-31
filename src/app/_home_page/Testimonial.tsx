"use client"
import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import clientImg1 from '@/assets/client1.png'
// import { div } from 'framer-motion/client';
// import { motion } from 'framer-motion';
// import styles from './Carousel.module.css';


const Testimonial = () => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const testimonies = [
    {
      image: clientImg1,
      name: "Michael Kole",
      country: "New York",
      title: "Unmatched Support!",
      text: "Their customer service team is top-notch. They answered all my questions and made me feel secure about my investments."
    },
    {
      image: clientImg1,
      name: "Michael Kole",
      country: "New York",
      title: "Unmatched Support!",
      text: "Their customer service team is top-notch. They answered all my questions and made me feel secure about my investments."
    },
    {
      image: clientImg1,
      name: "Michael Kole",
      country: "New York",
      title: "Unmatched Support!",
      text: "Their customer service team is top-notch. They answered all my questions and made me feel secure about my investments."
    },

  ]

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2, // Show 2 cards on desktop
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2, // Show 2 cards on tablet
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Show 2 cards on mobile
    },
  };

  return (
    <div className='bg-[#1992C9]'>
      <div className=''>
        <header className='pl-[--padding-x] md:pl-[14rem] flex items-center w-full '>
          <h1 className='text-[#FFFFFF] text-[26px] font-bold flex-1 relative md:top-[4rem]'>Client Testimonials</h1>
          <Icon icon='icomoon-free:quotes-right' className='text-[185px] text-[#ffffff2d] translate-x-[2rem] md:-translate-x-[12rem] md:translate-y-[5rem] absolute right-0 ' />
        </header>

        <div className='p-[--padding-x]'>
          <Carousel

            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={5000}
            swipeable
            draggable
            // dynamicHeight={true}

            className='md:max-w-[80%] m-auto'
          >
            {
              testimonies.map(({ image, name, country, title, text }, index) => (
                <div key={index} className='bg-[#ffff] p-[3rem] rounded-[8.51px] custom-carousel-item '>
                  <div className='flex items-center gap-3 my-4'>
                    <div className='rounded-full h-[50px] w-[50px]'>
                      <Image src={image} alt="alt" className='w-full object-cover' />
                    </div>
                    <div className='text-left'>
                      <h1 className='text-[15.31px] font-bold'>{name}</h1>
                      <p className='text-[11.91px] text-[#848484] font-light'>{country}</p>
                    </div>
                  </div>

                  <div>
                    <h2 className='text-[18.71px] font-bold my-3'>{title}</h2>
                    <p className='text-[#848484] text-[13.61px] leading-[22.12px]'>{text}</p>
                  </div>
                </div>
              ))
            }
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Testimonial