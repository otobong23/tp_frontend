
import GrowEarningQuickly from "./_home_page/GrowEarningQuickly"
import WelcomeToTradePhere from "./_home_page/WelcomeToTradePhere"
// import BecomeAnInvestor from "./_home_page/BecomeAnInvestor"
import TradingviewWidget from "../components/TradingviewWidget"
import Testimonialy from "./_home_page/Testimonialy"
import BestFeatures from "./_home_page/BestFeatures"
import GetInTouch from "./_home_page/GetInTouch"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"


const page = () => {
  return (
    <div >
      <Navbar />
      <GrowEarningQuickly />
      <WelcomeToTradePhere />
     <TradingviewWidget />
      <Testimonialy />
      <BestFeatures />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default page