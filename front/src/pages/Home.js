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
    console.log(response[0].data, 'hsdsdjfsdfbsdjbf')
    response[0].data.map((flr) => { 
      flr.beginTime = flr.beginTime.toISOString()
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
    <Dash flrData={flrData} cmeData={cmeData} wsaData={wsaData} />
    </div>
  )
}

export default Home;