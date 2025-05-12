import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import Maryam1 from "../assets/1 maryam.jpeg"
import Maryam2 from "../assets/2maryam.jpeg"

const home = () => {

  return (
   <section id='home'>
     <div className='bg-[#0a192f] w-full h-[500px] sm:h-[700px] md:h-[450px] font-raleway'name='home'>
              {/* <div>
                            <img className =" mx-auto  h-[400px] " src={Maryam1} alt="" />

              </div>
         */}
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8  flex flex-col justify-center h-full md:h-[600px]'>
            <p className='text-pink-600 md:mt-[-50px] sm:mt-[150px] mt-[80px]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] '>Maryam Oladipo</h1>
            <h3 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Developer.</h3>
                {/* I am a full-stack developer specializing in building (and occassionally
                 designing) exceptional digital experiences. Currently, I'm focused on 
                 building responsive full-stack web applications  */}
            <p className='text-[#8892b0] py-4 max-w-[700px] md:mb-[80px]'>I specialize in creating exceptional digital experiences and occasionally crafting designs.
                                                               My current focus is on building responsive and user-friendly web applications.
                                                                I enjoy working on both frontend and backend projects and I can deploy a fullstack project - by building robust APIs, handling authentication, authorization and/or database logic.
                          
                    <button className='text-white group border-2 px-4 py-2 my-4 flex items-center hover:bg-pink-600 hover:border-pink-600 '> <Link to='work'smooth={true} duration={500} offset={-70}>View Work </Link>
                      <span className='group-hover:rotate-90 duration-300'>
                      <HiArrowNarrowRight className='ml-3 '/>
                      </span>
                       </button>
            </p>

        </div>
    </div>
   </section>
  ) 
}

export default home