import React, { useEffect, useState } from 'react'
import Dash from '../components/Dash'
import axios from 'axios';

function Home() {
  const [flrData, setFlrData] = useState()
  const [cmeData, setCmeData] = useState()
  const [wsaData, setWsaData] = useState()
  // console.log('Coronal mass ejection: ', cmeData)

  useEffect(() => { 
    Promise.all([
      axios.get("http://localhost:3001/api/flr/"),
      axios.get("http://localhost:3001/api/cme/"),
      axios.get("http://localhost:3001/api/wsa/")
  ])
  .then(response => {
    //setting the FLR data
    response[0].data.map((flr) => { 
      if(flr.beginTime) { 
        const newBeginning = flr.beginTime.split('T')
        flr.beginTime = newBeginning
      }
      if(flr.endTime) { 
        const newEnd = flr.endTime.split('T')
        flr.endTime = newEnd

      }
      if(flr.peakTime) { 
        const newPeak = flr.peakTime.split('T')
        const finalPeak = newPeak[0].replace('Z', ' ')
        const nice = finalPeak.split('-')
        const noice = `${nice[1]}-${nice[2]}`
        flr.peakTime = noice
      }

      const power = flr.classType
      if(power.startsWith('A')) { 
        const scaledNum =  (flr.classType.slice(-1) + 1) * 1
        flr.classType = scaledNum

      } else if(power.startsWith('B')) { 
        const scaledNum = (flr.classType.slice(-1) + 1) * 10
        flr.classType = scaledNum

      } else if(power.startsWith('C')) { 

        const scaledNum = (flr.classType.slice(-1) + 1) * 100
        flr.classType = scaledNum

      } else if(power.startsWith('M')) { 
        console.log( 'before', flr.classType)
        const scaledNum = (flr.classType.slice(-1) + 1) * 1000
        console.log('After', scaledNum)
        flr.classType = scaledNum

      } else if(power.startsWith('X')) { 
        const scaledNum = (flr.classType.slice(-1) + 1) * 10000
        flr.classType = scaledNum

      }
    })
      setFlrData(response[0].data)
      setCmeData(response[1].data)
      setWsaData(response[2].data)

    })
  .catch(error => {
      console.log(error);
  });

}, [])

  return (
    <div className='py-12'>
    <div>
        <h1 className='text-white px-24 py-2 text-5xl pb-2'>Live Space Weather</h1>
        <h1 className='text-white px-24 py-2 text-xl pb-8 text-opacity-80'>From NASA's satellites, to your laptop.</h1>
    </div>
    <Dash flrData={flrData} cmeData={cmeData} wsaData={wsaData} />
    </div>
  )
}

export default Home;