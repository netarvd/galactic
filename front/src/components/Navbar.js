import React from 'react'

function Navbar() {
  return (
    <div className='w-full bg-black px-20 h-12  grid content-center border-solid border-b border-stone-100 border-opacity-50 '>
    <div className=' text-middle py-2 px-2 text-white flex gap-4 place-items-center '>
    <div className='text-red-600 font-bold font-mono text-2xl'>ICARUS</div>
    <h1 className='hover:text-red-600 cursor-pointer'>Log in</h1>
    <h1 className='hover:text-red-600 cursor-pointer'>Get data</h1>
    <h1 className='hover:text-red-600 cursor-pointer'>Blog</h1>
    <h1 className='hover:text-red-600 cursor-pointer'>Join us</h1>


    </div>
    </div>
  )
}

export default Navbar