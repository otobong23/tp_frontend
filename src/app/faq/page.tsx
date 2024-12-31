import React from 'react'
import Faq from './_faq_page/Faq'
import Questions from './_faq_page/Questions'
import BestFeatures from '../_home_page/BestFeatures'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
// import BecomeAnInvestor from './_faq_page/BecomeAnInvestor'

const page = () => {
  return (
    <div>
      <Navbar />
      <Faq />
      <Questions />
      <BestFeatures />
      <Footer />
    </div>
  )
}

export default page