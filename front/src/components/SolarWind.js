import React, { useEffect, useState } from 'react'
import Rain from './Rain'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

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

  const prevItem = () => {
    setCurrentItemIndex(currentItemIndex - 1)
  }

  const nextItem = () => {
    setCurrentItemIndex(currentItemIndex + 1)
  }

  return (
    <div className="flex flex-row justify-between p-8 bg-zinc-800 rounded-md col-span-4 space-y-2">
      <div className="flex flex-col flex-grow">
        <div>
          <div className="text-2xl text-white">Solar Wind Forecast</div>
          <div className="text-lg font-light text-opacity-80 text-white">
            Predictions and recent history
          </div>
        </div>
        {wsaData && currentItemIndex && (
          <div className="flex-grow grid grid-cols-4 justify-center items-center px-8">
            <div>
              {currentItemIndex !== 0 && (
                <BsChevronCompactLeft
                  className="text-6xl font-bold"
                  onClick={prevItem}
                />
              )}
            </div>
            <div className="col-span-2 flex flex-col items-start justify-center gap-y-2">
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
            <div>
              {currentItemIndex !== wsaData.length - 1 && (
                <BsChevronCompactRight
                  className="text-6xl font-bold"
                  onClick={nextItem}
                />
              )}
            </div>
          </div>
        )}
      </div>
      <div className="flex-none relative">
        <div className="flex w-60 h-60 overflow-clip rounded-full">
          <Rain numDrops={speed} baseColor={color} />
        </div>
        <div className="z-50 absolute bottom-0 right-1/2 bg-primary opacity-25 p-2 rounded-md">Speed</div>
      </div>
    </div>
  )
}

export default SolarWind
