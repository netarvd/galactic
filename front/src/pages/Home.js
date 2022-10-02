import React, { useEffect, useState } from 'react'
import Dash from '../components/Dash'
import axios from 'axios';

function Home() {
  const [flrData, setFlrData] = useState()
  const [cmeData, setCmeData] = useState()
  console.log('Coronal mass ejection: ', cmeData)




  useEffect(() => { 
    Promise.all([
      axios.get("http://localhost:3001/api/flr/"),
      axios.get("http://localhost:3001/api/cme/")
  ])
  .then(response => {
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
        const scaledNum =  flr.classType = flr.classType.slice(-1) 
        flr.classType = scaledNum


      } else if(power.startsWith('B')) { 
        const scaledNum = flr.classType.slice(-1) * 10
        flr.classType = scaledNum

      } else if(power.startsWith('C')) { 

        const scaledNum = flr.classType.slice(-1) * 100
        flr.classType = scaledNum

      } else if(power.startsWith('M')) { 
        const scaledNum = flr.classType.slice(-1) * 1000
        flr.classType = scaledNum

      } else if(power.startsWith('X')) { 
        const scaledNum = flr.classType.slice(-1) * 10000
        flr.classType = scaledNum

      }
    })
      setFlrData(response[0].data)
      setCmeData(response[1].data)
  })
  .catch(error => {
      console.log(error);
  });

}, [])

  return (
    <div className='py-12'>
    <div>
        <h1 className='text-white px-24 py-2 text-4xl'>Space Weather</h1>
    </div>

    <form className='px-24 pt-2'>
    <select name="cars" id="cars" form="carform">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option>
    </select>
    </form>
    <Dash flrData={flrData} cmeData={cmeData}/>
    </div>
  )
}

export default Home;