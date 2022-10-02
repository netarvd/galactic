import React from 'react'
import { format, formatDistance, formatRelative, parseISO, subDays } from 'date-fns'
import { GiWindsock } from "react-icons/gi";
import { BsChevronCompactRight } from "react-icons/bs";

import SunCme from './SunCme';



  
const Cme = ({cmeData}) => {

  if(cmeData) { 
    console.log(cmeData[0].latitude)
    return (
    <div className='p-4 text-lg bg-zinc-800 rounded-md h-full col-span-2'>

          <div className='px-6 pb-4 pt-2 flex place-content-between items-end'>

          <div className='content-end'>
            <h1 className='text-2xl'>Coronal Mass Ejection Weather</h1>
            <h1 className='text-lg font-light text-opacity-80 text-white'>Latitude, longtitude & speed</h1>
          </div>

          <div className=''>
          <div className=' content-end flex align-bottom gap-2'>
          <div className='rounded-full px-2 bg-blue-400 text-blue-400 text-sm py-1 bg-opacity-25 font-bold'>Earth</div>
          <div className='rounded-full px-2 bg-[#FF2257] text-[#FF2257] text-sm py-1 bg-opacity-25 font-bold'>Sun</div>
          <div className=' px-2 text-[#fa70c5] text-sm py-1 font-bold bg-[#fa70c5] bg-opacity-25 rounded-full'>CME</div>
          </div>

          </div>

          </div>


        <div className='grid grid-cols-3 gap-3 py-4 px-6'>
        <SunCme rotate={12}/>
        <SunCme rotate={-90}/>
        <SunCme rotate={180}/>
        <SunCme rotate={-50}/>
        <SunCme rotate={45}/>
        <SunCme rotate={180}/>
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