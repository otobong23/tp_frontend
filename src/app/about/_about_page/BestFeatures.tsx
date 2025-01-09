import React from 'react'
import Image from 'next/image'
import featureImg1 from '@/assets/security.png'
import featureImg2 from '@/assets/payments.png'
const BestFeatures = () => {

  const features = [
    {
      image: featureImg1,
      title: "Guaranteed Security",
      text: "Our GeoTrust EV SSL Certificate guarantees the security of your transactions."
    },
    {
      image: featureImg2,
      title: "Instant Payments",
      text: "Get your payment instantly as soon as you request it!"
    },
    {
      image: featureImg2,
      title: "Robust Server Protection",
      text: "TradePhere website uses a very powerful dedicated server with the highest level of protection."
    },
  ]
  return (
    <div>
      <div className='p-[--padding-x] mt-[3rem]'>
        <header className='text-center'>
          <p className='text-[12px] lg:text-[16px] font-semibold text-[#FD8D1E]'>Making  your income bigger </p>
          <h1 className='text-[30px] lg:text-[64px] md:w-[50%] m-auto font-bold leading-[40px] lg:leading-[84px] py-4'>Trade Phere best features</h1>
        </header>

        <div className='grid md:grid-cols-3 justify-center gap-4 md:gap-[5rem] p-[1rem] mt-[3rem]'>
          {
            features.map(({image, title, text}, index) => (
              <div key={index} >
                <div className='w-full flex justify-center bg-black p-8 rounded-[15px]'>
                  <Image src={image} alt="alt" className='w-[236px] h-[236px] object-contain'/>
                </div>

                <div className='text-left my-[3rem]'>
                  <h1 className='text-[#1D2D3F] text-[22px] font-semibold my-4'>{title}</h1>
                  <p className='text-[16px] text-[#848484] font-normal'>{text}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div >
  )
}

export default BestFeatures