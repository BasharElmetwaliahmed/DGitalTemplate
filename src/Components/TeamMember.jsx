import Aos from 'aos'
import { useEffect } from 'react'
import imgsrc from '../assets/img/team-1.jpg'
function TeamMember() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div className='bg-light p-4 rounded-xl' data-aos="zoom-up"     data-aos-duration="1000"
    data-aos-easing="ease-in-out">
        <div className='flex flex-col gap-3 items-center '>
            <img src={imgsrc} className='w-[90%] rounded-full'></img>
            <h5 className='text-lg font-semibold'>John Doe</h5>
            <p className='text-[#726D7B] mb-5'>{`CEO & Founder`}</p>
        </div>
        <div className='flex gap-4 list-none items-center py-4 justify-center items-center text-primary text-base border-t-[#dee2e6] border-t-[1px]'>
            <li className='circle-bg'><a><i className="fa-brands fa-facebook-f"></i></a></li>
            <li className='circle-bg'><a><i className="fa-brands fa-twitter"></i></a></li>
            <li className='circle-bg'><a><i className="fa-brands fa-instagram"></i></a></li>
            <li className='circle-bg'><a><i className="fa-brands fa-linkedin"></i></a></li>

        </div>
    </div>
  )
}

export default TeamMember