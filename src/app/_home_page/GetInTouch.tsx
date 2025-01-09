import React from 'react'

const GetInTouch = () => {
  return (
    <div id='get-in-touch'>
      <div className='p-[--padding-x]'>
        <header className='text-center'>
          {/* <p className='text-[12px] lg:text-[16px] font-semibold text-[#FD8D1E]'>Making  your income bigger </p> */}
          <h1 className='text-[30px] lg:text-[64px] md:w-[50%] mx-auto font-bold leading-[40px] lg:leading-[84px] py-4'>Get in touch</h1>
        </header>

        <div className='mt-3'>
          <form action="" className='w-full md:w-[35%] m-auto grid gap-4'>
            <div className='border-[1px] border-[#7B838F] p-3 rounded-[8px]'>
              <label htmlFor="name"></label>
              <input type="text" name="name" id="name" placeholder='Your Name' className='bg-[#FFFFFF] outline-none border-none w-full' />
            </div>
            <div className='border-[1px] border-[#7B838F] p-3 rounded-[8px]'>
              <label htmlFor="email"></label>
              <input type="email" name="email" id="email" placeholder='Your email' className='bg-[#FFFFFF] outline-none border-none w-full' />
            </div>
            <div className='border-[1px] border-[#7B838F] p-3 rounded-[8px]'>
              <label htmlFor="message"></label>
              <textarea name="message" id="message" placeholder='Write your message' className='bg-[#FFFFFF] outline-none border-none w-full h-[160px]'></textarea>
            </div>
            <button className='bg-[#1992C9] rounded-[8px] text-[#FFFFFF] w-full p-4 my-6 m-auto hover:scale-75'>Send message</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default GetInTouch