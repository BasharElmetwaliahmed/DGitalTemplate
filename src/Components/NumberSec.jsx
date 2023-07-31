import Aos from "aos"
import { useEffect } from "react"
import LayOut from "./LayOut"
import NumbersItem from "./NumbersItem"

function NumberSec() {
    const numbersitems=[
        {
            icon:'fa-solid fa-certificate',
            number:1234,
            title:'Years Experience'
        },
       {
            icon:'fa-solid fa-user-gear',
            number:1234,
            title:'Team Members'
        },
                {
            icon:'fa-solid fa-users',
            number:1234,
            title:'Satisfied Clients'
        },
        {
            icon:'fa-solid fa-check',
            number:1234,
            title:'Compleate Projects'
        }
    ]
    useEffect(()=>{
   Aos.init()
    },[])
  return (
  <LayOut>
        <div className=" py-20">
        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 font-medium lg:gap-0 gap-12'>
            {
                numbersitems.map((item,i)=>
                    <NumbersItem icon={item.icon} key={i} number={item.number} title={item.title} data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"     data-aos-delay="50"
    data-aos-duration="5000"/>
                )
            }

        </div>
    </div>
  </LayOut>
  )
}

export default NumberSec