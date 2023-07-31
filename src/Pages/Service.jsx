import PageHeader from '../Components/PageHeader'
import Footer from '../Components/Footer'
import ServiceSection from '../Components/ServiceSection'
import Testiomenal from '../Components/Testiomenal'
import Form from '../Components/Form'

function Service() {
  return (
    <>
     <PageHeader text={'Service'}/>
    <ServiceSection/>
    <Form/>
    <Testiomenal/>
    <Footer/>
    </>
  )
}

export default Service