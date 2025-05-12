import React from 'react'
// import CSS from "../assests/css.png"
import Github from "../assets/github.png"
import Html from "../assets/html.png"
import Javascript from "../assets/javascript.png"
import Mongo from "../assets/mongo.png"
import Node from "../assets/node.png"
import Tailwind from "../assets/tailwind.png"
import Reactt from "../assets/react.png"
import Css from "../assets/css.png"
import Sql from "../assets/mysqlr.png"

const Skills = () => {
  return (
   <section id='skills'>
     <div className='bg-[#0a192f] text-gray-300 w-full  h-screen md:h-[600px]' name="skills">
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full  sm:pt-0 md:pt-0 '>
           <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-center sm:ml-6 '>Skills</p>
              <p className=' py-6 sm:pt-6  sm:pb-[80px]' >These are some of the technologies I have worked with.</p>
           </div>

           <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center py-4 '>
            {/* <div className='m-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Github} alt="Github icon" />
                  <p className='my-4'>Github</p>
            </div> */}
            {/* <div className='shadow-md m-2  shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Html} alt="Html icon" />
                  <p className='my-4'>Html</p>
            </div>  */}
            <div className='shadow-md m-2 shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Javascript} alt="Javascript icon" />
                  <p className='my-4'>Javascript</p>
            </div>
            <div className='shadow-md m-2 shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon" />
                  <p className='my-4'>Mongo</p>
            </div>
            <div className='shadow-md m-2  shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Sql} alt="mySql icon" />
                  <p className='my-4'>MySql</p>
            </div> 
            <div className='shadow-md m-2 shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                  <p className='my-4'>Node</p>
            </div>
             <div className='shadow-md m-2 shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind } alt="Tailwind icon" />
                  <p className='my-4'>Tailwind </p>
            </div>
            <div className='shadow-md m-2 shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Reactt} alt="react icon" />
                  <p className='my-4'>React</p>
            </div>
            {/* <div className='shadow-md m-2 shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Css} alt="css icon" />
                  <p className='my-4'>CSS</p>
            </div> */}
           </div>
        </div>

    </div>
   </section>
  )
}

export default Skills