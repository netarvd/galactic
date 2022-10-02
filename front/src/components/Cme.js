import React from 'react'
import { format, formatDistance, formatRelative, parseISO, subDays } from 'date-fns'
import { GiWindsock } from "react-icons/gi";
import { BsChevronCompactRight } from "react-icons/bs";

import SunCme from './SunCme';



  
const Cme = ({cmeData}) => {
  console.log(cmeData)



  if(cmeData) { 
    console.log(cmeData[0].latitude)
    return (
    <div className='p-4 text-lg bg-zinc-800 rounded-md h-full col-span-2'>  
      <div className='px-6 pb-4 pt-2'>
        <h1 className='text-2xl'>Coronal Mass ejection</h1>
        <h1 className='text-lg font-light text-opacity-80 text-white'>Peak time classification</h1>
          <div>
          <div className='pl-7 text-blue-400 pt-1 font-semibold'>Earth</div>
          </div>
        <div className='grid grid-cols-3 gap-2 py-4'>
        <SunCme rotate={-12}/>
        <SunCme rotate={90}/>
        <SunCme rotate={-45}/>
        <SunCme rotate={-50}/>
        <SunCme rotate={-45}/>
        <SunCme rotate={90}/>
        </div>      
        {/* <div className='p-1 float-right bg-white bg-opacity-90 rounded-full text-black cursor-pointer hover:bg-[]'>
      <BsChevronCompactRight />
      </div> */}
      </div>

    </div>
      )
  } else { 
    return( 
        <div>
            <h1>Loading...</h1>
        </div>
    )
  }
}

export default Cme;