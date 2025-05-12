import React, {useState} from 'react'
import Logo from '../assets/Arin-01.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { BsFillPersonLinesFill } from "react-icons/bs";
import {HiOutlineMail} from 'react-icons/hi'
import {Link} from 'react-scroll'
const navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='font-raleway fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
    {/* </div><div className='fixed w-full h-[80px] flex  items-center px-4 bg-[#0a192f] text-gray-300'> */}
        <div className='md:w-[100px] md:ml-[30px] w-[80px]'>
            <img src={Logo} alt="Logo Image"/>
        </div>

        {/* menu */}
        <div className='sm:ml-[200px] lg:ml-[600px]'>
            <ul className='hidden md:flex '>
                    {/*  offset={-70} adjusts the scroll to stop 70px above the default scroll position */}
                <li className='border-b-2 border-transparent hover:border-pink-600 transition duration-300'><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li className='border-b-2 border-transparent hover:border-pink-600 transition duration-300'><Link to="about" smooth={true} duration={500} >About</Link></li>
                <li className='border-b-2 border-transparent hover:border-pink-600 transition duration-300'><Link to="skills" smooth={true} duration={500} >Skills</Link></li>
                <li className='border-b-2 border-transparent hover:border-pink-600 transition duration-300'><Link to="work" smooth={true} duration={500} offset={-70}>Work</Link></li>
                <li className='border-b-2 border-transparent hover:border-pink-600 transition duration-300'><Link to="contact" smooth={true} duration={500} offset={-50}>Contact</Link></li>
            </ul>
        </div>
        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden ml-[200px] z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}        
        </div>

        {/* mobile menu */}
        <div>
            <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl border-b-2 border-transparent hover:border-pink-600 transition duration-300'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
                <li className='py-6 text-4xl border-b-2 border-transparent hover:border-pink-600 transition duration-300'><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
                <li className='py-6 text-4xl border-b-2 border-transparent hover:border-pink-600 transition duration-300'><Link onClick={handleClick} to="skills" smooth={true} duration={500} offset={-50}>Skills</Link></li>
                <li className='py-6 text-4xl border-b-2 border-transparent hover:border-pink-600 transition duration-300'><Link onClick={handleClick} to="work" smooth={true} duration={500} offset={-70}>Work</Link></li>
                <li className='py-6 text-4xl border-b-2 border-transparent hover:border-pink-600 transition duration-300'><Link onClick={handleClick} to="contact" smooth={true} duration={500} offset={-40}>Contact</Link></li>
            </ul>
        </div>


        {/* social icons */}
        {/* <div className='hidden'></div> */}
        <div className='hidden lg:flex fixed flex-col top-[68%] left-0'>
             <ul>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
                    <a className='flex justify-between items-center w-full tex-gray-300' href="https://www.linkedin.com/in/maryamoladipo8/">LinkedIn  <FaLinkedin size={30}/> </a>
                </li>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full tex-gray-300' href="mailto:oladipomaryam8@gmail.com">Email  <HiOutlineMail size={30}/> </a>
                </li>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full tex-gray-300' href="https://github.com/Arinola23">Github <FaGithub size={30}/> </a>
                </li>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full tex-gray-300' href="https://drive.google.com/file/d/1m1Nt1jW38zWROPpaYfyOEgC0jUt4RkhJ/view?usp=sharing">Resume  <BsFillPersonLinesFill size={30}/> </a>
                </li>
                {/* <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full tex-gray-300' href="https://drive.google.com/file/d/1yt9wAhrDUxKPJLfCyypdVEbWXA7tRqlR/view?usp=sharing">Resume  <BsFillPersonLinesFill size={30}/> </a>
                </li> */}
             </ul>
        </div>
    </div>
  )
}

export default navbar