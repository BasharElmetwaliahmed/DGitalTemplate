import Aos from "aos"
import { useEffect } from "react"

function SlideComponent({img}) {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
         <div className='bg-light p-[25px] w-full lg-[400px] rounded-lg relative mx-auto' data-aos="fade-up"     data-aos-duration="1000"
    data-aos-easing="ease-in-out">
        <i className="fa-solid fa-quote-left text-primary text-8xl absolute  -top-[30px] left-[25px]"></i>
        <p className='text-[#726D7B] text-xl font-medium first-line:ml-28 '><span className='pl-28'></span>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.</p>
        <div className='flex items-center gap-6 pt-5'>
            <img src={img} className='w-16 h-16 rounded-full'/>
            <div>
                <h4 className='text-xl font-semibold'>Client Name</h4>
                <p className='text-[#726D7B]'>Profession</p>
            </div>
        </div>
     </div>
  )
}

export default SlideComponent