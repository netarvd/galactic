import React from 'react'
import { GiWindsock } from "react-icons/gi";

import { TbWorldLatitude } from "react-icons/tb";



function SunCme({rotate}) {
  return (
<div className='col-span-1 bg-stone-900 rounded-md p-4'>
<div className=' px-3 py-1 w-fit flex rounded-full bg-[#FF2257] bg-opacity-20 border-[#FF2257] border  border-opacity-30 align-middle place-items-center'>
<GiWindsock className='text-white' size={20}/> 
<h1 className='text-xs font-semibold text-[white] pl-2 inline'>322<span className='font-light pl-1'>km/s</span></h1>
</div>
    <div className='py-6 h-24 relative pl-1'>         
    <div className={`h-full bg-[#FF2257] rotate-${rotate}  border-b-8 border-[#FF2257] shadow-lg drop-shadow-md shadow-[#FF2257] bg-opacity-50 rounded-full aspect-square float-left `}/> 

    <div className="h-5 w-5 bg-blue-400 rounded-full aspect-square absolute bottom-5 right-24 text-white text-xs">
   {/* <div className='pl-7 text-blue-400 pt-1 font-semibold'>Earth</div> */}

    <div className="h-2 w-2 bg-blue-200 rounded-full aspect-square absolute bottom-5 right-8 text-white text-xs"/>

    </div>



    </div>
    <div className='pt-4'>


    <div className='text-xs text-white flex gap-2 place-items-center'>
    <TbWorldLatitude size={15}/>
    <h1>Long <span className='font-bold'>42</span></h1>
    <div>|</div>
    <h1>Lat <span className='font-bold'>23</span></h1>
    </div>    
    </div>
  
</div>
  )
}

export default SunCme;


