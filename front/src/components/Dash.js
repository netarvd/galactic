import React from 'react'
import Flr from './Flr'
import Cme from './Cme'
import SolarWind from './SolarWind'
// import { LineChart, Line } from 'recharts';
// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

function Dash({ flrData, cmeData, wsaData }) {

  return (
    <div className="mx-20 grid grid-cols-4 gap-6 py-2 rounded-md px-4 text-stone-200 ">
          <SolarWind wsaData={wsaData} />
      <Flr flrData={flrData} />

      <Cme cmeData={cmeData} />
      <div className='w-full'></div>
    </div>
  )
}

export default Dash
