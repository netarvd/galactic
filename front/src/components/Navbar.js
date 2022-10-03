import React from 'react'

function Navbar() {
  return (
    <div className='w-full bg-black px-24 h-16  grid  border-solid border-b border-stone-100 border-opacity-50 content-center'>

    <div className='flex place-content-between'>
    <div className='text-red-600 font-bold font-mono text-2xl grid place-items-center'>ICARUS</div>
    <div className=' text-middle py-2 px-2 text-white flex gap-4 place-items-center '>
        <h1 className='hover:text-red-600 cursor-pointer'>Get data</h1>
        <h1 className='hover:text-red-600 cursor-pointer'>Blog</h1>
        <h1 className='hover:text-red-600 cursor-pointer'>Join us</h1>
        <a className='hover:text-red-600 cursor-pointer' href='https://www.youtube.com/watch?v=wQGR81PxBxM&t=24s&ab_channel=LASPCUBoulder' rel="noopener noreferrer" target="_blank">What is space weather?</a>
    </div>
      </div>
    </div>
  )
}

export default Navbar