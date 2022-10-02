import React from 'react'
import Rain from './Rain'

const SOLAR_WIND_CLASSES = {
  A: 'green-300',
  B: 'lime-300',
  C: 'amber-300',
  M: 'orange-400',
  X: 'red-500',
}

const determineNumOfDrops = (degree) => {
  return degree * 100
}

const SolarWind = ({ type }) => {
  const solarWindClass = type[0]
  const degree = parseInt(type.slice(1))

  //   const [numOfDrops, setNumOfDrops] = useState(determineNumOfDrops(degree))

  return (
    <div className={`bg-black`}>
      <Rain numDrops={determineNumOfDrops(degree)} baseColor={SOLAR_WIND_CLASSES[solarWindClass]} />
    </div>
  )
}

export default SolarWind
