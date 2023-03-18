import React from 'react'
import logo from "../img/logo.png"

function Navbar() {
  return (
    <div className='w-full h-[70px] bg-white flex items-center justify-between pl-[30px] pr-[30px]'>
      <div className="w-[500px] h-full flex items-center justify-between bg-white ">
        <div className="w-[130px] h-[70px] bg-white">
          <img src={logo} alt="" className='w-full h-full border-2 border-white' />
        </div>
        <ul className='flex items-center justify-between w-[400px] h-full bg-white pr-[10px] pl-[10px] '>
          <li className='h-3/5 bg-white w-[120px] flex items-center border-b-[3px] border-transparent hover:border-b-[3px] hover:border-black'><a href="/" className='pl-[10px]'>Find a Location</a></li>
          <li className='h-3/5 bg-white w-[90px] flex items-center border-b-[3px] border-transparent hover:border-b-[3px]  hover:border-black'><a href="/" className='pl-[10px]'>Solutions</a></li>
          <li className='h-3/5 bg-white w-[90px] flex items-center border-b-[3px] border-transparent hover:border-b-[3px]  hover:border-black'><a href="/" className='pl-[10px]'>Enterprise</a></li>
        </ul>
      </div>
      <div className="bg-white h-full flex items-center justify-around w-[260px]">
        <div className="h-3/5 w-1/2 bg-white flex items-center justify-center ">
          <h2 className='text-[#0000FF] border-2 border-[#0000FF] w-full h-full flex items-center justify-center hover:bg-[#ADEBFF]'>Contact Us</h2>
        </div>
        <div className="h-3/5 w-[120px] flex items-center justify-center bg-white border-b-[3px] border-transparent hover:border-b-[3px]  hover:border-black hover:cursor-pointer">
          <h2 className=''>Member Log In</h2>
        </div>
      </div>
    </div>
  )
}

export default Navbar