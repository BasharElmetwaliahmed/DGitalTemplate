import Aos from 'aos'
import { useEffect } from 'react'
import AboutBox from './AboutBox'
function AboutSection() {
    const abouts=[{
        icon:'fa-solid fa-envelopes-bulk',
        title:'Digital Marketing',
        paragraph:'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.'
                   },
                   {
        icon:'fa-solid fa-magnifying-glass',
        title:'SEO & Backlinks',
        paragraph:'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.'            
                   },
                   {
        icon:'fa-solid fa-laptop-code',
        title:'Design & Development',
        paragraph:'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.'
                   }

                ]
                useEffect(()=>{
                  Aos.init()
                },[])
    const list=abouts.map((about,i)=><AboutBox key={i} paragraph={about.paragraph} icon={about.icon} title={about.title} />)
  return (
    <div className='container grid  grid-cols-1 lg:grid-cols-3 py-40 gap-9  animate__fadeInUp' data-aos="zoom-in"     data-aos-duration="1000"
    data-aos-easing="ease-in-out" >
    {
     list   
    }

    </div>
  )
}

export default AboutSection