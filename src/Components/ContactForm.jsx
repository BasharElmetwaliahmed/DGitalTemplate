
function ContactForm() {
  return (

        <form className="mb-40 mt-6 w-full md:w-[700px] mx-auto text-center"  data-aos="fade-up"     data-aos-duration="5000"
    data-aos-easing="ease-in-out">
          <div className="w-full justify-between flex md:flex-row flex-col">
            <input type='text' placeholder="Your Name" className="inputform md:w-[49%] w-full my-2"/>
            <input type='Email' placeholder="Your Email" className="inputform md:w-[49%] w-full my-2"  />
          </div>
                      <input type='text' placeholder="Subject" className="inputform my-2"/>
                      <textarea  rows="4"  className="inputform my-2" placeholder="Message " ></textarea>
                      <button className="border-none bg-primary  py-4 rounded-lg w-full text-white my-2 hover:opacity-70 transition-opacity duration-300">Send Message</button>


        </form>

  )
}

export default ContactForm