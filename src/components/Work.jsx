import React from 'react'
import Work from "../assets/workNew2.png" 
import Job from "../assets/job.png"
import Ninja from "../assets/ninja.png"
import User from "../assets/user-manager.png"
const work = () => {
  return (
  <section id='work'>
      <div name="work" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600  '>Works</p>
                <p className='py-6'>//Check out some of my recent works</p>
            </div>
                    {/* grid container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4'>
                {/* card container */}
                <div style={{ backgroundImage: `url(${Work})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://car-rental-front-rtdt.onrender.com">
                                <button className='text-center rounded-lg px-4 py-3 mr-2 bg-white text-gray-700 font-bold text-sm' >Car-Rental App</button>
                            </a>
                            <a href="https://github.com/Arinola23/Car-Rental.git">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-sm' >Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{ backgroundImage: `url(${User})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            NodeJs & MySql
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://drive.google.com/file/d/1LZ2FWzPHyfvUhUomRl2UWzRheq6hGf9G/view?usp=sharing">
                                <button className='text-center rounded-lg px-4 py-3 mr-2 bg-white text-gray-700 font-bold text-sm'>User-Manager App</button>
                            </a>
                            <a href="https://github.com/Arinola23/user-manager.git">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-sm' >Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{ backgroundImage: `url(${Job})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            JS, SwaggerUI & MongoDB
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://job-api-ctrs.onrender.com/">
                                <button className='text-center rounded-lg px-4 py-3 mr-2 bg-white text-gray-700 font-bold text-sm' >Jobs App</button>
                            </a>
                            <a href="https://github.com/Arinola23/job-API.git">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-sm' >Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{ backgroundImage: `url(${Ninja})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            PHP & MySql
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://drive.google.com/file/d/1UzNXjsAQ0Aovn9hD5I7SYpmnfcsN4yKN/view?usp=sharing">
                                <button className='text-center rounded-lg px-4 py-3 mr-2 bg-white text-gray-700 font-bold text-sm'>Snacks Store</button>
                            </a>
                            <a href="https://github.com/Arinola23/ninja-php.git">
                                <button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-sm'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
//     <div
//     name="works"
//     className="w-full md:h-screen text-gray-300 bg-[#0a192f] flex flex-col items-center"
//   >
//     <div className="max-w-[1000px] mx-auto p-4 w-full h-full">
//       {/* Section Heading */}
//       <div className="pb-8">
//         <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
//           Works
//         </p>
//         <p className="py-6">Check out some of my recent works</p>
//       </div>
  
//       {/* Grid Container */}
//       <div
//         style={{
//           backgroundImage: `url(${Work})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover", // Ensure the image covers the entire grid area
//           backgroundPosition: "center", // Center the image
//         }}
//         className="grid sm:grid-cols-1 md:grid-cols-2 gap-8"
//       >
//         {/* Card 1 */}
//         <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
//           {/* Hover Effects */}
//           <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <span className="text-2xl font-bold text-white tracking-wider">
//               Car Rental
//             </span>
//             <div className="pt-8 text-center">
//               <a href="/">
//                 <button className="text-center rounded-lg px-4 py-2 bg-pink-600 text-white font-bold hover:bg-pink-800">
//                   Demo
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
  
//         {/* Card 2 */}
//         <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
//           <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <span className="text-2xl font-bold text-white tracking-wider">
//               Car Rental
//             </span>
//             <div className="pt-8 text-center">
//               <a href="/">
//                 <button className="text-center rounded-lg px-4 py-2 bg-pink-600 text-white font-bold hover:bg-pink-800">
//                   Demo
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>  
  )
}

export default work