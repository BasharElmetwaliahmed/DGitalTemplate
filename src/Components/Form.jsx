import Aos from 'aos';
import React from 'react'
import { useEffect } from 'react';
import LayOut from './LayOut'
import SpecialHeader from './SpecialHeader'

function Form() {

  return (
    <div className='my-40'>
    <LayOut>
        <div className='container min-h-[400px] flex flex-col items-center justify-center text-white gap-4'  >
            <SpecialHeader parts='full' text='NEWSLETTER' color='white'/>
            <h2 className=' text-5xl font-semibold '>Stay Always In Touch</h2>
            <p className='text-center w-[650px] w-full  '>Diam dolor diam ipsum et tempor sit.
             Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo</p>
             <div className='md:w-[650px] w-full relative'>
                <input type='email' placeholder='enter your email' className='text-black py-3 rounded-full border-none w-full focus:outline-none pl-4'/>
                <i className="fa-solid fa-paper-plane text-2xl text-primary absolute right-5 top-1/2  -translate-y-1/2"></i>
             </div>

        </div>
    </LayOut>

    </div>
  )
}

export default Form