import React from 'react'
import Rain from './Rain'

const SOLAR_WIND_CLASSES = {
  A: 'green-300',
  B: 'lime-300',
  C: 'amber-300',
  M: 'orange-400',
  X: 'red-500',
}

const SolarWind = ({ speed }) => {
  return (
    <div className={`flex w-full h-60 overflow-clip`}>
      <Rain numDrops={parseInt(speed)} baseColor={SOLAR_WIND_CLASSES["A"]} />
    </div>
  )
}

export default SolarWind
