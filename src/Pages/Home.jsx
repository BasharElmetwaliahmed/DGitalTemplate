import AboutSection from '../Components/AboutSection'
import AboutUs from '../Components/AboutUs'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
import Header from '../Components/Header'
import LayOut from '../Components/LayOut'
import NumberSec from '../Components/NumberSec'
import OurTeamSection from '../Components/OurTeamSection'
import ProjectsSec from '../Components/ProjectsSec'
import ServiceSection from '../Components/ServiceSection'
import SpecialHeader from '../Components/SpecialHeader'
import Testiomenal from '../Components/Testiomenal'
import Landing from './Landing'

function Home() {
  return (
    <>  <LayOut className="bg-primary  min-h-screen">
              <Header/>
     <Landing/>
      </LayOut>
      <AboutSection/>
      <AboutUs/>
      <NumberSec/>
      <ServiceSection/> 
      <SpecialHeader/>
      <Form />
      <ProjectsSec/>
      <Testiomenal/>
      <OurTeamSection/>
      <Footer/></>
  )
}

export default Home