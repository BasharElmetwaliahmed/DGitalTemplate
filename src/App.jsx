
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react"
import Home from "./Pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from './Pages/Service';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import  './App.css'
// ..

function App() {
  useEffect(()=>{
    AOS.init();

  },[])
  return (
    <div className=" font-jost">
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='service' element={<Service/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='project' element={<Project/>}/>

    </Routes>
    </div>
  )
}

export default App