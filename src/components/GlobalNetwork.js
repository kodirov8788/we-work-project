import React from 'react'
import map from '../images/map.jpg'
import { BsArrowRight } from 'react-icons/bs'
function GlobalNetwork() {
    return (
        <div>
            <div className="w-[1444px] m-auto h-[523.487px] mt-5">
                <div className="w-[1344px] h-[427.49px] m-auto mt-10 flex ">
                    <div className="w-[40%] h-full  bg-[rgb(247,247,247)] text-black flex flex-col gap-8  ">
                        <span className='text-lg  ml-16 mt-10'>GLOBAL NETWORK</span>
                        <h1 className='text-3xl font-medium w-[423px] ml-16'>Workspace where and when you need it</h1>
                        <p className='w-[423px] leading-7 ml-16'>With over 700 global locations, teams can do their best work in more places, whether it’s being productive closer to home, having access to multiple workspaces or collaborating at a central office.</p>
                        <button className='ml-[-290px] '>
                            <a href="/" className=' text-[#4F00FF]'>Explore locations <BsArrowRight className='text-[#4F00FF]' /></a>
                        </button>
                    </div>

                    <div className="w-[60%] h-full  text-black  ">
                        <img src={map} alt="" className='object-cover rounded-lg  ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlobalNetwork