import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Auth from './Auth/auth.jsx';
 import "./head.css"
 import {nav} from '../data.js';
function Headheader() {
  const [isActive,setIsActive] = useState(false);
  useEffect(()=>{
    const scrollMe =()=>{
      window.scrollY>50?setIsActive(true):setIsActive(false);

    };
    window.addEventListener("scroll",scrollMe)
  },[])
  
  return (
    <header className={`border-b border-black sticky top-0 z-50 
    ${isActive ? "bg-white" : "bg-black"}
    
    transition-all duration-500`}>
    <div className= 'size h-[70px] flex items-center justify-between'>
    <Link to={"/"}>
    <img style={{ width: '300px', height: '120px', objectFit: 'contain' }}className='transition-all duration-500' src= { isActive ? 'https://i.postimg.cc/3NvYzszJ/image.png' : "https://i.postimg.cc/3Nwc6Rt3/logo.png"}alt="Logo"  />
    </Link>
   
    <div className='flex items-center gap-5 '>
      <div className={`hidden text-sm sm:flex items-center gap-5 ${isActive?"text-black":"text-white"} `}>
        {nav.map((link,i)=>(
          <Link key={i} to={link.path}>{link.title}
          </Link>
        ))
        }
      </div>
      <div className='relative'>
        <button className='hidden text-sm sm:flex items-center gap-5'>Signin</button>
      </div>
      <button className={`text-black rounded-full px-3 p-2 text-sm font-medium
     ${isActive ? "bg-black" : "bg-white"}
      ${isActive ? "text-white" : "text-black"}
    transition-all duration-500`}>Get Started</button>
    <Auth/>

    </div>
 
    </div>
    </header>
  )
}

export default Headheader