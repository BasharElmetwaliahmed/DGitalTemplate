import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'
import PageHeader from '../Components/PageHeader'
import SpecialHeader from '../Components/SpecialHeader'

function Contact() {
  return (
    <div>
      <PageHeader text='Contact'/>
          <div className="mt-40  text-center">
        <SpecialHeader color='secondary' center={true} parts='full' text='Contact Us'/>
        <h2 className="text-center text-4xl font-bold">Contact For Any Query</h2>
        <p className="mt-11 text-[#726D7B] md:w-[700px] w-full text-center mx-auto">
          The contact form is currently inactive. Get a functional and working contact form with Ajax {`&`} PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href='#' className='text-primary'>Download Now.</a>
        </p>
        </div>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact