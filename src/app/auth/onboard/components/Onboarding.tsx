import React from 'react'
import Image from 'next/image'
import loginImg from '@/assets/login.png'
import loginDeskImg from '@/assets/loginDesktop.png'
// import { Icon } from '@iconify/react/dist/iconify.js'

const Onboarding = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center relative overflow-hidden">
      {/* Left Section */}
      <div className="w-full absolute md:-top-[10%] lg:top-[20%] -left-[5%] md:left-[40%] lg:left-[55%] inset-0 lg:flex lg:justify-between lg:items-center">
        {/* Decorative Image */}
        <div className="hidden lg:block h-[1327px]">
          <Image
            src={loginDeskImg} // Replace with desktop image path
            alt="3D Globe with Shield"
            className=" object-cover w-full h-[83%]"
          />
        </div>

        {/* Mobile Image */}
        <div className="w-[750px] md:w-[900px]  lg:hidden ">
          <Image
            src={loginImg} // Replace with mobile image path
            alt="3D Globe Mobile"
            className="w-[92%] lg:w-[100%] object-cover"
          />
        </div>
      </div>

      {/* Login UI */}
      <div className="relative top-[300px] lg:top-[200px] flex justify-center items-center gap-4 w-full md:w-[50%] lg:w-1/3 px-4 lg:pl-0">
        {/* Buttons */}
        <button className="w-full flex-1 py-3 rounded-[15px] border-2 border-[#656565] text-[#656565] text-[14px] font-medium">
          Sign up
        </button>
        <button className="w-full flex-1  py-3 rounded-[15px] bg-[#1992C9] text-white font-medium">
          Login
        </button>
        {/* <button className="w-full py-3 flex justify-center items-center rounded-full border-2 border-gray-300 hover:bg-gray-50 transition">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
            className="w-5 h-5 mr-3"
          />
          Login with Google
        </button> */}
      </div>
    </div>
  )
}

export default Onboarding