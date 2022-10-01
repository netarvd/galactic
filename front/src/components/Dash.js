import React from 'react'
import Flr from '../Flr'
// import { LineChart, Line } from 'recharts';
// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];




function Dash({flr}) {
console.log(flr) 
    // const displayName = flr[0].instruments[0].displayName


  // console.log(data, 'sdfsdf')
  return (
    <div className='mx-20 grid grid-cols-3 gap-4 py-2 rounded-md px-4 text-stone-200'>
    {/* <Flr displayName={displayName}/> */}
 
      <div className='p-4 text-lg bg-zinc-800 rounded-md h-52'>CME</div>
      <div className='p-4 text-lg bg-zinc-800 rounded-md h-52'>DATA</div>
      <div className='p-4 text-lg bg-zinc-800 rounded-md h-52 col-span-3'>DATA</div>
    </div>
  )
}

export default Dash