import Aos from "aos"
import { useEffect } from "react"

function AboutBox({title,icon,paragraph}) {
  useEffect(()=>{
  Aos.init()
  },[])
  return (
    <div className="   " data-aos="fade-up"     data-aos-duration="1000"
    data-aos-easing="ease-in-out">
   <div className="w-full hover:-translate-y-5 transition-all duration-300 ease-in-out bg-light py-7 px-4 rounded-lg flex flex-col gap-5 items-center  text-center ">
            <i className={`${icon} text-primary font-bold text-5xl`}></i>
        <h3 className={`font-semibold text-xl`}>{title}</h3>
        <p className="text-[#726D7B]">{paragraph}</p>

   </div>
    </div>
  )
}

export default AboutBox