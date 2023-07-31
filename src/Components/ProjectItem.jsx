import Aos from 'aos'
import { useEffect } from 'react'
import projectSec from '../assets/img/portfolio-1.jpg'
function ProjectItem({img,category}) {
  useEffect(()=>{
  Aos.init()
  },[])
  return (
    <div className='project-item duration-500'  data-aos="fade-up" >
        <div className='overflow-hidden img-container rounded-t-xl  relative'>
                    <img src={img} className='rounded-t-xl  transition-all duration-500 ease-in w-full' />
                    <div className='absolute top-0 left-0 h-full w-full bg-primary opacity-0 gap-4 flex items-center justify-center text-white bg-opacity duration-300'>
                      <button className='center-elemnt w-[40px] h-[40px] border-[1px] rounded-full opacity-100 transition-all duration-300'><i className="fa-solid fa-eye"></i></button>
                      <button className='center-elemnt w-[40px] h-[40px] border-[1px] rounded-full opacity-100 transition-all duration-300' ><i className="fa-solid fa-link"></i></button>

                    </div>
               
        </div>
        <div className='bg-light px-5 py-9 rounded-b-xl'>
            <h6 className='text-primary font-semibold'>UI / UX Design</h6>
            <p className='font-semibold text-xl mt-2'>Digital Agency Website Design And Development</p>

        </div>
    </div>
  )
}

export default ProjectItem