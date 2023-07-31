
import { useState } from "react"
import { NavLink } from "react-router-dom"

function Nav({scrolled}) {
    const links=['Home','Service','About','Project','Contact']
    const [showNav,setShowNav]=useState(false)

  return (
   <>
    <nav className={`lg:flex lg:gap-5 gap-28 lg:shadow-none shadow-lg  border-t-2 ${showNav?'translate-y-[calc(-100%-113px)]':''} transition-transform duration-300 lg:justify-center  lg:flex-row 
     flex-col lg:relative absolute top-full left-0 text-center lg:bg-transparent lg:border-none bg-white  w-screen lg:z-[100] text-black lg:text-white`
    }>
        {
            links.map((link,id)=><li key={id} className={`list-none text-xl hover:text-secondary transition-all duration-300 ${scrolled?'text-black':''} lg:p-0 p-3  cursor-pointer`}><NavLink to={`/${link==='Home'?'':link.toLowerCase()}`}>{link}</NavLink></li>)
        }
    </nav>
    <i className="fa-solid fa-bars  lg:!hidden hover:opacity-30 transition-opacity duration-300 cursor-pointer text-lg" onClick={()=>{setShowNav(!showNav)}}></i>

    </>

  )
}

export default Nav