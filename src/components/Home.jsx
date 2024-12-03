import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
const home = () => {

  return (
   <section id='home'>
     <div className='bg-[#0a192f] w-full h-screen font-raleway'name='home'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
            <p className='text-pink-600'>Hi my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] '>Maryam Oladipo</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
                {/* I am a full-stack developer specializing in building (and occassionally
                 designing) exceptional digital experiences. Currently, I'm focused on 
                 building responsive full-stack web applications  */}
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a full-stack developer specializing in creating exceptional digital experiences and occasionally crafting designs.
                                                               My current focus is on building responsive and user-friendly web applications.
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