import Aos from "aos"
import { useEffect } from "react"

function ServiceItem({icon,title,text}) {

  useEffect(()=>{
    Aos.init()
  })
  return (
    <div data-aos="fade-up"     data-aos-duration="1000"
    data-aos-easing="ease-in-out" className="bg-light py-7 flex flex-col items-center rounded-xl justify-center mb-9 md:mb-0 text-center px-14 hover:bg-primary service transition-all duration-700">
      <div className={`flex justify-center items-center relative h-[100px] w-[100px] mb-3 bg-contain bg-center bg-no-repeat serviceBg transition-all duration-700`}>
                <i className={`${icon} relative z-20 text-3xl text-white`}></i>
      </div>
       <h4 className="text-xl font-semibold mb-3 transition-all duration-700">{title}</h4>
       <p className="text-[#726D7B] transition-all duration-700">{text}</p>
    </div>
  )
}

export default ServiceItem