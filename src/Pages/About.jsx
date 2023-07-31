import Footer from '../Components/Footer'

import AboutSection from '../Components/AboutSection'
import AboutUs from '../Components/AboutUs'
import NumberSec from '../Components/NumberSec'
import OurTeamSection from '../Components/OurTeamSection'
import PageHeader from '../Components/PageHeader'

function About() {
  return (
    <>  
     <PageHeader text={'About'}/>
    <AboutSection/>
    <AboutUs/>
    <NumberSec/>
    <OurTeamSection/>
    <Footer/>
    </>
  )
}

export default About