import React from 'react'
import Img1 from '../components/images/img1.jpg'
import { BsArrowRight } from 'react-icons/bs'
function IdeasBy() {
    return (
        <div className='w-full h-[460px] px-4 md:h-[530px]'>
            <p className='tracking-wide mt-1 md:ml-[50px] text-[15px]'>IDEAS  BY  WEWORK</p>
            <div className="md:flex md:items-end md:justify-between md:px-12">
                <h1 className='font-bold text-[23px] mt-4 md:text-[30px]'>Workplace trends and Insights</h1>

                <a href="/" className='hidden md:flex items-center text-[#3100FF]'>Read on <BsArrowRight className='ml-4 md:hover:underline' /> </a>
            </div>

            <div className="md:flex md:w-[94%] m-auto md:justify-between">
                <img src={Img1} alt="" className='w-full mt-4 rounded-[5px] md:w-[51.5%]' />

                <div className="md:flex flex-col md:w-[48.5%] md:justify-center md:pl-9">
                    <div className="flex items-center w-full h-[20px] mt-6">
                        <a href="/" className='text-[13px] font-semibold hover:underline '>RESEARCH STUDIES</a>
                        <div className="w-[80px] h-[.5px] bg-black ml-3"></div>
                    </div>

                    <a href="/" className='w-full text-[16.5px] font-bold mt-[11px] block hover:underline  md:text-[33px] '>The  importance of flexible office spaces</a>

                    <a href="/" className='w-full text-[14px] flex-wrap mt-3 block md:hover:underline'>A Cushman & Wakefield survey finds flexible offices are an important component of the workplace ecosystem.</a>
                </div>
            </div>
        </div>
    )
}

export default IdeasBy