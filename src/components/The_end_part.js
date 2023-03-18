import React from 'react'
import img from "./images/1.jpg"
import img2 from "./images/2.jpg"
import img3 from "./images/3.jpg"

function The_end_part() {
    return (
        <div className='w-full h-[590px]px] '>
            <hr className='ml-[50px] mt-[20px] mr-[50px]' />
            <div className="flex ">
                <div className="flex flex-col w-[400px] h-[500px]  ml-[20px] mt-[30px]">
                    <img src={img} alt="" className=' w-[350px] h-[220px]  ml-[20px] rounded-lg' />
                    <a href="#" className='ml-[18px] text-[13px]  mt-[25px] cursor '>FLEXIBLE PRODUCTS                                      ______________</a>
                    <a href="#" className='font-bold w-[340px] h-[80px] mt-[7px] text-[20px] ml-[18px] '> A cutting-edge workspace near Washington, DC</a>
                    <a href="#" className='ml-[18px] mt-[-8px] w-[350px] h-[50px] '>WeWork The Wilson is custom-designed for its home community</a>
                </div><div className="flex flex-col w-[400px] h-[500px]  ml-[20px] mt-[30px]">
                    <img src={img2} alt="" className=' w-[350px] h-[220px]  ml-[20px] rounded-lg' />
                    <a href="#" className='ml-[18px] text-[13px]  mt-[25px] cursor '>CASE STUDIES                                      ______________</a>
                    <a href="#" className='font-bold w-[350px] h-[80px] mt-[7px] text-[20px] ml-[18px] '>How one remote creative agency went global, fast</a>
                    <a href="#" className='ml-[18px] mt-[-8px] w-[350px] h-[50px] '>Elephant Skin embraced remote work and office space at WeWork to create a global business</a>
                </div><div className="flex flex-col w-[400px] h-[500px]  ml-[20px] mt-[30px]">
                    <img src={img3} alt="" className=' w-[350px] h-[220px]  ml-[20px] rounded-lg' />
                    <a href="#" className='ml-[18px] text-[13px]  mt-[25px] cursor '>CASE STUDIES                                      ______________</a>
                    <a href="#" className='font-bold w-[340px] h-[80px] mt-[7px] text-[20px] ml-[18px] '>How four founders use WeWork All Access</a>
                    <a href="#" className='ml-[18px] mt-[-8px] w-[350px] h-[50px] '>For these founders, workspace helps grow their company and culture.</a>
                </div>
            </div>
        </div>
    )
}

export default The_end_part