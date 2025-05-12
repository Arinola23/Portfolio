import React from 'react'

const about = () => {
  return (
    <section id='about'>
        {/* <div name="about" className='bg-[#0a192f] w-full h-[200px] text-gray-300'> */}
        <div name="about" className='bg-[#0a192f] w-full h-[500px] md:h-[300px] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full pt-[200px] md:pt-0 h-[300px] md:h-[300px]'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
                <div className='sm:ml-6 pb-8 pl-4 '>
                    <p className='text-4xl  font-bold inline border-b-4 border-pink-600 '>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold '>
                   <p>  I am Maryam. Please take a look around. </p>
                </div>
                <div>
                    <p>I am passionate about building exceptional software that enhances the lives of those around me. 
                       My expertise lies in crafting solutions tailored to clients, whether they are individuals, small businesses, or large enterprise corporations.
                       Imagine what you could achieve with a dedicated software expert at your fingertips.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default about