import React, { useEffect, useState } from 'react'
import Rain from './Rain'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { GiWindsock } from 'react-icons/gi'

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
    }
  }, [wsaData])

  useEffect(() => {
    if (wsaData && currentItemIndex) {
      const newSpeed = Math.max(
        ...wsaData[currentItemIndex]['cmeInputs'].map(
          (input) => input['speed'],
        ),
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
  }, [wsaData, currentItemIndex])

  const prevItem = () => {
    setCurrentItemIndex(currentItemIndex - 1)
  }

  const nextItem = () => {
    setCurrentItemIndex(currentItemIndex + 1)
  }

  return (
    <div className="flex flex-row justify-between bg-zinc-800 rounded-md col-span-4 w-full p-8">
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
      <div className="w-1/2 pl-12 pr-2">
        <div className="z-50 flex-none relative w-full h-60">
          <div className="flex overflow-clip w-full h-full rounded-lg">
            <Rain numDrops={speed} baseColor={color} />
          </div>
          <div
            className={`absolute bottom-4 left-6 px-3 py-1 w-fit flex rounded-full bg-${color} bg-opacity-30 border-${color} border border-opacity-40 align-middle place-items-center`}
          >
            <GiWindsock className="text-white" />
            <h1 className="text-md font-semibold text-[white] pl-2 inline">
              {speed}
              <span className="font-light pl-1">km/s</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolarWind
