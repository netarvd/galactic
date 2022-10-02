import { useEffect, useState } from 'react'

const randRange = (minNum, maxNum) => {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
}

const createDrops = (numDrops) => {
  console.log(numDrops);
  const dropCoordinates = []
  for (let i = 1; i < numDrops; i++) {
    const dropLeft = randRange(0, 1600)
    const dropTop = randRange(-1000, 1400)
    dropCoordinates.push({ dropLeft, dropTop })
  }

  return dropCoordinates
}

const Rain = ({ numDrops, baseColor }) => {
  const [dropCoordinates, setDropCoordinates] = useState([])

  useEffect(() => {
    setDropCoordinates(createDrops(numDrops*0.8))
  }, [numDrops])

  return (
    <div className='relative w-full bg-[url("/public/space-bg.jpg")] border-zinc-800'>
      <div className='-rotate-[25deg]'>
        {dropCoordinates.map((drop, i) => {
          return (
            <div
              className={`drop absolute bg-gradient-to-b from-${baseColor} to-white`}
              style={{ left: drop.dropLeft, top: drop.dropTop }}
              key={`drop${i}`}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default Rain
