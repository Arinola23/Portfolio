import React from 'react'
import Maryam1 from "../assets/maryam1.png"
import Maryam2 from "../assets/2maryam.jpeg"

const img = () => {
  return (
    <div>
     <div className='bg-[#0a192f] w-full h-full sm:h-[300px] md:h-full pt-[80px] md:px-[500px] pl-[30px]'>
     {/* <img className =" mx-auto md:ml-[300px] w-[200px] md:h-[300px] h-[300px] md:w-[320px] rounded-full " src={Maryam1} alt="" /> */}
     <img className ="  md:h-[300px] h-[300px] rounded" src={Maryam1} alt="" />


              </div>
    </div>
  )
}

export default img
