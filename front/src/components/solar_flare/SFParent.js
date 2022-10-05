import { format, parseISO, subDays } from 'date-fns';
import React, { PureComponent, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import SFChild from './SFChild';


function Flr({flrData}) {
  if(flrData) { 
    return (
    <div className='p-4 text-lg bg-white bg-opacity-10 rounded-xl h-full col-span-4 xl:col-span-2'>
      <div className='flex place-content-between px-6 pb-4 pt-2'>
        <div>
          <h1 className='text-2xl text-white'>Solar Flare</h1>
          <h1 className='text-lg font-light text-opacity-80 text-white'>Peak time classification</h1>
          </div>
          <div className=' grid items-end'>
          <div className='content-end flex align-bottom gap-2 items-end text-[#FF5604] font-semibold'>
            <h1 className='text-sm content-end bg-bottom items-end'>Danger bar</h1>
            <div className='rounded-full px-2 bg-[#FF5604] text-[#FF5604] text-sm py-1 bg-opacity-5 text-opacity-50 font-bold'>A</div>
            <div className='rounded-full px-2 bg-[#FF5604] text-[#FF5604] text-sm py-1 bg-opacity-25 font-bold text-opacity-60'>B</div>
            <div className='px-2 text-[#FF5604] text-sm py-1 font-bold bg-[#FF5604] bg-opacity-50 rounded-full text-opacity-70'>C</div>
            <div className='px-2 text-white text-opacity-60 text-sm py-1 font-bold bg-[#FF5604] bg-opacity-75 rounded-full'>M</div>
            <div className='px-2 text-white text-opacity-90 text-sm py-1 font-bold bg-[#FF5604] bg-opacity-90 rounded-full '>X</div>
          </div>
        </div>
      </div>
      <SFChild flrData={flrData}/>
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

export default Flr;