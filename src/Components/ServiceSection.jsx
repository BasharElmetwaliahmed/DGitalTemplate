import React from 'react'
import ServiceItem from './ServiceItem'
import SpecialHeader from './SpecialHeader'

function ServiceSection() {
    const services=[
        {
            icon:'fa-solid fa-magnifying-glass',
            title:'SEO Optimization',
            text:'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.'
        },
        {
            icon:'fa-solid fa-laptop-code',
            title:'Web Design',
            text:'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.'
        },
        {
            icon:'fa-brands fa-facebook-f',
            title:'Social Media Marketing',
            text:'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.'
        },                
        {
            icon:'fa-solid fa-envelopes-bulk',
            title:'Email Marketing',
            text:'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.'
        },
        {
            icon:'fa-solid fa-thumbs-up',
            title:'PPC Advertising',
            text:'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.'
        },
        {
            icon:'fa-brands fa-android',
            title:'App Development',
            text:'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.'
        }           
    ]
  return (
    <div className='my-40 d-flex flex-col items-center'>
                                    <SpecialHeader color='secondary' center={true} parts='full' text='OUR SERVICES'/>

                            <h2 className='text-center text-3xl md:text-5xl font-bold mb-12'>What Solutions We Provide</h2>
        <div className='container grid grid-col md:grid-cols-2 xl:grid-cols-3 md:gap-9'>
            {services.map((service,i)=><ServiceItem key={i} icon={service.icon} title={service.title} text={service.text}/>)}

        </div>
    </div>
  )
}

export default ServiceSection