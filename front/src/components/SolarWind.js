import React, { useEffect, useState } from 'react'
import Rain from './Rain'

const SOLAR_WIND_COLOR_BY_SPEED = {
  1: 'green-300',
  100: 'lime-300',
  300: 'amber-300',
  600: 'orange-400',
  900: 'red-500',
}

const SolarWind = ({ wsaData }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState()
  const [color, setColor] = useState(SOLAR_WIND_COLOR_BY_SPEED[1])
  const [speed, setSpeed] = useState(1)

  useEffect(() => {
    if (wsaData) {
      console.log(wsaData);
      const newIndex = wsaData.length() - 1;
      setCurrentItemIndex(newIndex);
      const newSpeed = Math.max(
        ...wsaData[newIndex]['cmeInputs'].map((input) => input['speed']),
      );
      setSpeed(parseInt(newSpeed));
      setColor(
        SOLAR_WIND_COLOR_BY_SPEED[
          Object.keys(SOLAR_WIND_COLOR_BY_SPEED).find((key) => {
            return newSpeed < key
          })
        ],
      );
    }
  }, [wsaData])

  return (
    <div className="flex flex-col p-4 bg-zinc-800 rounded-md col-span-4 space-y-2">
      <div className="text-lg">Solar Wind Visualization</div>
      <div className="flex h-60 overflow-clip rounded-md border-2 border-secondary">
        <Rain numDrops={speed} baseColor={color} />
      </div>
    </div>
  )
}

export default SolarWind
