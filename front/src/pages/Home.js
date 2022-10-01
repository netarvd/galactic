import React, { useEffect, useState } from 'react'
import Dash from '../components/Dash'
import axios from 'axios';

function Home() {
  const [flr, setFlr] = useState()
  console.log(flr)
  


  useEffect(() => { 
    const getData  = async () => { 
      try { 
        const {data}  = await axios.get(`http://localhost:3001/api/flr/`)
        setFlr(data)
      } catch(err) { 
        console.log(err)
      }
  }
  getData()
  }, [])

  // const dates = []

//   const createList = async () => { 
//     if(flr) { 
//     await flr.map((data) =>  { 
//       const date = []
//       date.push(data.beginTime, data.peakTime, data.endTime)
//       dates.push(date)
//       console.log('dates: ', dates)
//       }
//     )
//   }
// }
//   createList()



  return (
    <div className='py-12'>
    <div>
        <h1 className='text-white px-24 py-2 text-4xl'>Solar Dashboard</h1>
    </div>

    <form className='px-24 pt-2'>
    <select name="cars" id="cars" form="carform">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option>
    </select>
    </form>
    <Dash flr={flr} />
    </div>
  )
}

export default Home