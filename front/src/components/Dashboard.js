import React from 'react'
import Flr from './solar_flare/SFParent'
import Cme from './coronal_mass_ejection/CmeParent'
import SolarWind from './solar_wind/SWParent'
// import { LineChart, Line } from 'recharts';
// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

function Dash({ flrData, cmeData, wsaData }) {

  return (
    <div className="grid grid-cols-4 gap-6 py-2 rounded-md text-stone-200 ">
      <SolarWind wsaData={wsaData} />
      <Flr flrData={flrData} />
      <Cme cmeData={cmeData} />
    </div>
  )
}

export default Dash
