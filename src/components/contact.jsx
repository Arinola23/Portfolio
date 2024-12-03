import React from 'react'

const contact = () => {
  return (
    <section id='contact'>
      <div className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4' name='contact' >
         {/* setting up form using getform.io */}
        <form action="https://getform.io/f/bkkkdpyb" method="POST" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>//Submit the form below or shoot me an email <a href="mailto:oladipomaryam8@gmail.com" style={{ color: "#4CAF50", textDecoration: "underline", fontWeight: "bold" }}>
                 oladipomaryam8@gmail.com </a></p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name'name = 'name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name= 'name' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex item-center'>Let's Colaborate</button>
        </form>
    </div>
    </section>
  )
}

export default contact