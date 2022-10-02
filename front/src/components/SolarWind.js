import React, { useEffect, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Rain from './Rain'

const SOLAR_WIND_COLOR_BY_SPEED = {
  1: 'green-300',
  100: 'lime-300',
  300: 'amber-300',
  600: 'orange-400',
  900: 'red-500',
}

const SolarWindDataProperty = ({ label, color, children }) => {
  if (children) {
    return (
      <div
        className={`px-3 py-1 w-fit flex rounded-full bg-${color} bg-opacity-40 border-${color} border border-opacity-50 align-middle place-items-center`}>

        <h1 className="text-md font-semibold text-[white] pl-2 inline">
          {label}<span className="font-light pl-1">{children}</span>
        </h1>
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
        ] ?? SOLAR_WIND_COLOR_BY_SPEED[900],
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
    <div className="col-span-4 flex w-full h-64 overflow-clip rounded-lg relative">
      <Rain numDrops={speed} baseColor={color} />
      <div className="absolute top-0 left-0 w-1/4 h-full p-8">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="text-2xl text-white">Solar Wind Forecast</div>
            <div className="text-lg font-light text-opacity-80 text-white">
              Predictions and recent history
            </div>
          </div>

          <div className="flex flex-row gap-x-2 items-end">
            <span className="text-8xl text-white">{speed}</span>
            <span className="text-3xl font-light">km/s</span>
          </div>
        </div>
      </div>
      {wsaData && currentItemIndex && (
        <>
          <div className="absolute top-0 right-0 w-1/4 p-8 flex flex-col justify-center items-end gap-y-2">
            <SolarWindDataProperty color={color} label="Impacted">
              {wsaData[currentItemIndex].impactList &&
                wsaData[currentItemIndex].impactList
                  .map((item) => item.location)
                  .join(', ')}
            </SolarWindDataProperty>
            <SolarWindDataProperty color={color} label="Latitude">
              {wsaData[currentItemIndex].cmeInputs[0].latitude}
            </SolarWindDataProperty>
            <SolarWindDataProperty color={color} label="Longitude">
              {wsaData[currentItemIndex].cmeInputs[0].longitude}
            </SolarWindDataProperty>
          </div>
          <div className='absolute bottom-0 right-0 p-8 flex flex-row gap-x-2'>
            <BsChevronLeft className='text-2xl font-extrabold cursor-pointer' onClick={prevItem} />
            <BsChevronRight className='text-2xl font-extrabold cursor-pointer' onClick={nextItem} />
          </div>
        </>
      )}
    </div>
  )

  // return (
  //   <div className="flex flex-row justify-between bg-zinc-800 rounded-md col-span-4 w-full p-8">
  //     <div className="flex flex-col justify-between h-full flex-grow">
  //       <div>
  //         <div className="text-2xl text-white">Solar Wind Forecast</div>
  //         <div className="text-lg font-light text-opacity-80 text-white">
  //           Predictions and recent history
  //         </div>
  //       </div>
  //       {wsaData && currentItemIndex && (
  //         <div className="flex flex-row gap-x-2 items-end w-full justify-center">
  //           <span className='text-8xl text-white'>{speed}</span>
  //           <span className="text-3xl font-light">km/s</span>
  //         </div>
  //       )}
  //     </div>
  //     <div className="w-1/2 pl-12 pr-2">
  //       <div className="z-50 flex-none relative w-full h-60">
  //         <div className="flex overflow-clip w-full h-full rounded-lg">
  //           <Rain numDrops={speed} baseColor={color} />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default SolarWind
