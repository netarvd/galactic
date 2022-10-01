import React, { useState } from 'react'
import ReactRain from 'react-rain-animation'

const SOLAR_WIND_CLASSES = {
  A: 'green-300',
  B: 'lime-300',
  C: 'amber-300',
  M: 'orange-400',
  X: 'red-500',
}

const determineNumOfDrops = (degree) => {
  return degree * 10
}

const SolarWind = ({ type }) => {
  const solarWindClass = type[0]
  const degree = type.slice(1)

  const [numOfDrops, setNumOfDrops] = useState(determineNumOfDrops(degree))

  return (
    <div className={`bg-black text-${SOLAR_WIND_CLASSES[solarWindClass]}`}>
      <div className='text-pink-700'>fdsfas</div>
      <ReactRain numOfDrops={numOfDrops} />
    </div>
  )
}

export default SolarWind
