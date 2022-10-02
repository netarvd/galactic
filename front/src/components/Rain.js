import { useEffect, useState } from 'react'

const randRange = (minNum, maxNum) => {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
}

const createDrops = (numDrops) => {
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
    setDropCoordinates(createDrops(numDrops))
  }, [numDrops])

  return (
    <div>
      {dropCoordinates.map((drop, i) => {
        return (
          <div
            className={`drop bg-gradient-to-b from-${baseColor} to-white`}
            style={{left: drop.dropLeft, top: drop.dropTop}}
            key={`drop${i}`}
          ></div>
        )
      })}
    </div>
  )
}

export default Rain