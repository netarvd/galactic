import React, { useEffect, useState } from 'react'
import Rain from './Rain'

const SOLAR_WIND_COLOR_BY_SPEED = {
  1: 'green-300',
  100: 'lime-300',
  300: 'amber-300',
  600: 'orange-400',
  900: 'red-500',
}

const SolarWindDataProperty = ({ label, children }) => {
  if (children) {
    return (
      <div className="flex flex-row gap-x-2">
        <label className="font-semibold">{label}:</label>
        <p>{children}</p>
      </div>
    )
  } else {
    return <></>
  }
}

const SolarWind = ({ wsaData }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState()
  const [color, setColor] = useState(SOLAR_WIND_COLOR_BY_SPEED[1])
  const [speed, setSpeed] = useState(1)

  useEffect(() => {
    if (wsaData) {
      const newIndex = wsaData.length - 1
      setCurrentItemIndex(newIndex)
      const newSpeed = Math.max(
        ...wsaData[newIndex]['cmeInputs'].map((input) => input['speed']),
      )
      setSpeed(parseInt(newSpeed))
      setColor(
        SOLAR_WIND_COLOR_BY_SPEED[
          Object.keys(SOLAR_WIND_COLOR_BY_SPEED).find((key) => {
            return newSpeed < key
          })
        ],
      )
    }
  }, [wsaData])

  return (
    <div className="flex flex-row justify-between p-8 bg-zinc-800 rounded-md col-span-4 space-y-2">
      <div className="flex flex-col gap-y-4">
        <div>
          <div className="text-2xl text-white">Solar Wind Forecast</div>
          <div className="text-lg font-light text-opacity-80 text-white">
            Predictions and recent history
          </div>
        </div>
        <div className="px-4 flex flex-col items-start gap-y-2">
          <SolarWindDataProperty label="Impacted">
            {wsaData[currentItemIndex].impactList
              .map((item) => item.location)
              .join(', ')}
          </SolarWindDataProperty>
          <SolarWindDataProperty label="Estimated Shock Arrival Time">
            {wsaData[currentItemIndex].estimatedShockArrivalTime}
          </SolarWindDataProperty>
          <SolarWindDataProperty label="Is Glancing Blow on Earth">
            {wsaData[currentItemIndex].isEarthGB ? 'True' : 'False'}
          </SolarWindDataProperty>
        </div>
      </div>
      <div className="flex w-60 h-60 overflow-clip rounded-full">
        <Rain numDrops={speed} baseColor={color} />
      </div>
    </div>
  )
}

export default SolarWind
