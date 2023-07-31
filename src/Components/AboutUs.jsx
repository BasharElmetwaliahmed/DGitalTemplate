import about from  '../assets/img/about.png'
import SpecialHeader from '../Components/SpecialHeader'
function AboutUs() {
    const progresses=[{
        title:'Digital Marketing',
        percentage:'85%',
        color:'primary'},
        {
        title:'SEO & Backlinks',
        percentage:'85%',
        color:'secondary'},
        {
        title:'Design & Development',
        percentage:'95%',
        color:'dark'}        
    
    ]
  return (
    <div className='container flex flex-wrap py-40  lg:justify-between ' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"     data-aos-duration="1000"     data-aos-delay="500">
        <div className='lg:w-[48%] w-full flex gap-6   flex-col justify-between'>
            <SpecialHeader text='About Us' parts='right' color='secondary' center={false}/>
            <h3 className='text-4xl font-bold leading-normal mb-2'>#1 Digital solution with 10 years of experience</h3>
            <p className='text-[#726D7B]'>Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
            {progresses.map((progress,i)=>
                <div className='w-full text-[#726D7B]' key={i}>
                    <div className='flex w-full items-center justify-between mb-3  '>
                        <h4>{progress.title}</h4>
                        <p>{progress.percentage}</p>
                    </div>
                    <div className={`w-full bg-[#726D7B] bg-opacity-10 rounded-sm h-[6px] relative  after:absolute after:h-full after:left-0 after:top-0 after:w-[${progress.percentage.toString()}] after:bg-primary rounded-3xl `}></div>
                </div>
            )} 
            <button className='bg-primary w-fit py-5 px-14 font-semibold text-white mb-16 rounded-full hover:shadow-xl hover:shadow-inner transition-all duration-300  shadow-black'>Read More</button>
        </div>
        <img src={about} className='lg:w-[48%]  w-full' />
    </div>
  )
}

export default AboutUs