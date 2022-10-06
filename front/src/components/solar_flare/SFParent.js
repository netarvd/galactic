import { format, parseISO, subDays } from 'date-fns';
import React, { PureComponent, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import SFChild from './SFChild';

const circle = (num, opac) => { 
  return <div className={`rounded-full w-6 h-6 grid place-items-center bg-[#FF5604] text-[#FF5604] text-sm bg-opacity-[.${opac}] font-bold aspect-square`}>{num}</div>
} 

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
          {/* <div className='content-end flex align-bottom gap-2 items-end text-[#FF5604] font-semibold'>
            <h1 className='text-sm content-end bg-bottom items-end bg-opac'>Danger bar</h1>
            {circle('A', '20')}
            {circle('B', '30')}
            {circle('C', '30')}
            {circle('M', '30')}
            {circle('X', '45')}
          </div> */}
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