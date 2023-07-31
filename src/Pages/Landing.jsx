import landingImg from '../assets/img/hero.png'
import footerlanding from '../assets/img/bg-bottom.png'
import { useEffect } from 'react'
import Aos from 'aos'
function Landing() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div className='relative pt-36' data-aos="zoom-in"     data-aos-duration="1000"
    data-aos-easing="ease-in-out" >
     <div className='container flex pt-36 justify-between lg:flex-row flex-col text-white pb-24'>
             <div className='lg:w-[50%] w-full flex flex-col space-y-7 justify-center items-center text:center mb-7 lg:text-start lg:items-start'>
                <h2 className='text-4xl font-bold text-center lg:text-start' >{`A Digital Agency Of Inteligents & Creative People`}</h2>
        <p className='lg:pr-24 text-center lg:text-start'>Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem</p>
    <div className='flex md:flex-row  flex-col  gap-4 text-dark'>
        <button className='bg-secondary py-5 px-12 rounded-full font-semibold'>Read More</button>
        <button className='bg-white py-5 px-12 rounded-full font-semibold'>Contact Us</button>
    </div>
     </div>
     <img src={landingImg} className='lg:w-[50%] w-full ' />
     </div>
     <img src={footerlanding} className='w-full zoomIn '/>
    </div>
  )
}

export default Landing