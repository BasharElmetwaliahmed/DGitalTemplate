import footerWaves from '../assets/img/bg-top.png'
import SpecialHeader from './SpecialHeader'
import img1 from '../assets/img/portfolio-1.jpg'
import img2 from '../assets/img/portfolio-2.jpg'
import img3 from '../assets/img/portfolio-3.jpg'
import img4 from '../assets/img/portfolio-4.jpg'
import img5 from '../assets/img/portfolio-5.jpg'
import img6 from '../assets/img/portfolio-6.jpg'
import { useEffect } from 'react'
import Aos from 'aos'


function Footer() {
  useEffect(()=>{
    Aos.init()
  },[])
    const address=[{
        text:'123 Street, New York, USA',
        icon:'fa-location-dot'
                    },
                    {
        text:'+012 345 67890',
        icon:'fa-phone'                
                    },
                    {
        text:'info@example.com',
        icon:'fa-envelope'                
                    }

]
  const socials=[{
  icon:'fa-brands fa-twitter'
  },
  {
    icon:'fa-brands fa-facebook-f'
  },
  {
    icon:'fa-brands fa-instagram'
  },
  {
    icon:'fa-brands fa-linkedin'
  }
]
  const links=['About Us','Contact Us','Privacy Policy','Terms & Condition','Career']
  const imgs=[img1,img2,img3,img4,img5,img6]
  const footerbottom=['Home','Cookies','Help','FQAs']
  return (
    <>
        <footer className='bg-primary  min-h-[600px] mt-24 footer'>
                    <img src={footerWaves}  className='w-full'/>

         <div className='container grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 pt-16 gap-10 border-b-2 border-light border-opacity-10 pb-10' data-aos="fade-up"     data-aos-duration="1000"
    data-aos-easing="ease-in-out">
            <div>
            <SpecialHeader text='ADDRESS' parts='right' color='white'/> 
            <div className='flex flex-col items-center gap-8 pt-4'>
            {
                address.map(item=><p className='text-white gap-3 flex w-full font-medium ' key={item.text}><i className={`fa-solid ${item.icon}`}></i>{item.text}</p>)
            }
                </div> 
                <div className='flex gap-6 pt-10'>
                    {socials.map((social,id)=><ul key={id} className='center-element text-white text-base border-opacity-25 border-light border-[1px] rounded-full w-[40px] h-[40px] hover:bg-white hover:text-primary transition-all duration-300 '><a href='#'><i className={`${social.icon}`}></i></a></ul>)}
                </div>


            </div>
            <div>
            <SpecialHeader text='QUICK LINK' parts='right' color='white'/>    
            <div className='flex flex-col gap-4 pt-4'>
                {links.map(link=>{
                return(<li key={link} className='list-none text-white hover:text-secondary transition-all duration-300 hover:scale-105'><i className="fa-solid fa-angle-right mr-3">               
                    </i><a href='#'>{link}</a></li>)})}              
            </div>

            </div>
            <div>
            <SpecialHeader text='GALLERY' parts='right' color='white'/>    
             <div className='grid grid-cols-3 gap-4 pt-4'>
                {
                    imgs.map( (imgsrc,id)=> <img key={id} src={imgsrc} className='w-full'/>)
                }
             </div>


            </div>
            <div>
            <SpecialHeader text='NEWSLETTER' parts='right' color='white'/>
            <p className='text-white text-lg pt-4'>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>    
                        <div className='mt-5 w-full relative'>
                <input type='email' placeholder='enter your email' className='text-black py-3 rounded-full border-none w-full focus:outline-none pl-4'/>
                <i className="fa-solid fa-paper-plane text-2xl text-primary absolute right-5 top-1/2  -translate-y-1/2"></i>
             </div>

            </div>



            </div> 
            <div className='container py-5 text-white flex justify-between items-center'>
                <p>© Your Site Name, All Right Reserved. Designed By <a href='https://htmlcodex.com/' className='border-b-2 border-white transition-all transition-all duration-200 hover:text-secondary'>HTML Codex</a></p>
               <div className='divide-x-[1px] divide-opacity-50 divide-light space-x-3'>
                {footerbottom.map(link=><a key={link} className='pl-3 hover:text-secondary' href={`/${link.toLowerCase()}`}>{link}</a>)}
               </div>
                </div>          

        
        </footer>
    </>
  )
}

export default Footer