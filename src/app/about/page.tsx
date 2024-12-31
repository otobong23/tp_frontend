import React from 'react'
import Whoweare from './_about_page/Whoweare'
import WelcometoTphere from './_about_page/WelcometoTphere'
// import BecomeAnInvestor from './_about_page/BecomeAnInvestor'
import BestFeatures from '../_home_page/BestFeatures'
import Legal from './_about_page/Legal'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


const page = () => {
  return (
    <div>
      <Navbar />
     <Whoweare />.
     <WelcometoTphere />
     <Legal />
      <BestFeatures />
      <Footer />
    </div>
  )
}

export default page