import Header from './Header'
import LayOut from './LayOut'
import bottomImg from '../assets/img/bg-bottom.png'

function PageHeader({text}) {
  return (
    <>
         <LayOut className="bg-primary  min-h-screen ">
        <Header/>
        <div className='min-h-[500px] flex items-center justify-center flex-col  pt-64' data-aos="zoomIn"
     data-aos-anchor-placement="bottom-bottom"     data-aos-delay="50"
    data-aos-duration="1000">
            <h1 className='relative z-50 text-5xl pb-3 font-semibold text-white after:absolute after:bottom-0 after:bg-light
             after:opacity-50 after:left-1/2 after:-translate-x-[50%] after:h-[1px] after:w-[60%] mb-4' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"     data-aos-delay="50"
    data-aos-duration="1000">
                {text}</h1>
            <p className='text-white'>Home / {text}</p>

        </div>
              <img src={bottomImg}  className='w-screen'/>
      </LayOut>

    </>
  )
}

export default PageHeader
