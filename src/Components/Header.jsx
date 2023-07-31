import { useEffect } from "react"
import { useState } from "react"
import Nav from "./Nav"

function Header() {
      const [scrolled,setScrolled]=useState(false)
    useEffect(()=>{      if(scrollY>100){
    setScrolled(true)
      }
    window.addEventListener('scroll',()=>{
      if(scrollY>100){
    setScrolled(true)
      }
      else{
        setScrolled(false)
      }
    })
    },[])
  return (
    <header className={scrolled?'bg-white text-black shadow-lg fixed z-50 left-0 w-full':'fixed w-full z-50'}>
        <div className={`container ${scrolled?'text-black' :'text-white'} py-9 flex justify-between items-center border-b-light border-b-[1px] border-b-opacity-5`}>
            <h1 className="text-4xl font-bold">DGital</h1>
            <Nav scrolled={scrolled}/>
            <button className={`${scrolled?"bg-black text-white":' bg-white text-black'} w-[200px] py-3 px-5 rounded-full font-semibold text-black lg:block hidden`}>Get Started</button>

        </div>

    </header>
  )
}

export default Header