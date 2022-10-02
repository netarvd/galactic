import React from 'react'
import Flr from './Flr'
import Cme from './Cme'
// import { LineChart, Line } from 'recharts';
// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];


function Dash({flrData, cmeData}) {
  return (
    <div className='mx-20 grid grid-cols-4 gap-4 py-2 rounded-md px-4 text-stone-200'>
    <Flr flrData={flrData}/>
    <Cme  cmeData={cmeData}/>
      <div className='p-4 text-lg bg-zinc-800 rounded-md h-52 col-span-4'>KP Index</div>
    </div>
  )
}

export default Dash