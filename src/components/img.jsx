import React from 'react'
import Maryam1 from "../assets/1 maryam.jpeg"
import Maryam2 from "../assets/2maryam.jpeg"

const img = () => {
  return (
    <div>
     <div className='bg-[#0a192f] w-full h-full sm:h-[300px] md:h-full pt-[80px] '>
     <img className =" mx-auto md:ml-[300px] w-[200px] md:h-[400px] h-[300px] md:w-[300px] rounded-full " src={Maryam1} alt="" />

              </div>
    </div>
  )
}

export default img
