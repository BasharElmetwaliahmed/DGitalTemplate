import SpecialHeader from './SpecialHeader'
import testiominal1 from '../assets/img/testimonial-1.jpg'
import testiominal2 from '../assets/img/testimonial-2.jpg'
import testiominal3 from '../assets/img/testimonial-3.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import SlideComponent from './SlideComponent';

function Testiomenal() {
    const testiomenals=[testiominal1,testiominal2,testiominal3]
  return (
    <div>
        <SpecialHeader color='secondary' center={true} parts='full' text='TESTIMONIAL'/>
       <h2 className='text-center text-3xl md:text-5xl font-bold mb-12'>What Say Our Clients!</h2>
    <div className='container'>
          <Swiper navigation={true} modules={[Navigation]} loop={true} slidesPerView={1}   breakpoints={{
    992: {
      width: 992,
      slidesPerView: 2,
                  spaceBetween: 30,

    },
  }}  className="mySwiper">
       {testiomenals.map((imgSrc,id)=><SwiperSlide key={id} ><SlideComponent img={imgSrc}/></SwiperSlide>)}

      </Swiper>
    </div>
    </div>

  )
}

export default Testiomenal