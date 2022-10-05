import React, { useEffect, useState} from 'react'
import Dash from '../components/Dashboard'
import axios from 'axios';
import { BiSend } from 'react-icons/bi';

function Home() {

  //DATA
  const [flrData, setFlrData] = useState()
  const [cmeData, setCmeData] = useState()
  const [wsaData, setWsaData] = useState()


  //FORM 
  const [content, setContent] = useState('')
  const [message, setMessage] = useState(false)

  useEffect(() => { 
    Promise.all([
      axios.get("http://localhost:3001/api/flr/"),
      axios.get("http://localhost:3001/api/cme/"),
      axios.get("http://localhost:3001/api/wsa/")
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
      //Scaling values
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
        const scaledNum = (flr.classType.slice(-1) + 1) * 1000
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


//Send Amitay1599@gmail.com the content 
const handleSubmit = async (e) => {
  e.preventDefault()
  if(content) { 
    setMessage(true)
    axios.post('http://localhost:3001/api/email', {
    data: content
   })
    .then((response) => {
      console.log(response);
    })
    .catch( (response) => {
      console.log(response);
    });

  }
 
  setContent('')
}

  return (
    <div className='py-12 px-24'>
      <div className=' pb-2 flex place-content-between place-items-end center'>
        <div>
          <h1 className='text-white py-2 text-5xl'>Live Space Weather</h1>
          <h1 className='text-white py-2 text-xl text-opacity-80'>From NASA's satellites, to your laptop.</h1>
        </div>
          <div className='text-orange-700 font-semibold'>
          <p className='pl-3 py-2'>{message === true ? 'Thanks!' : 'Suggest a feature!'}</p>
          <form  
            className='flex pb-2'
            onSubmit={handleSubmit}>
            <input 
            onChange={(e) =>  { 
            setContent(e.target.value) 
            console.log(e.target.value)} 
            }
            value={content}
            placeholder='Can we have the...' 
            className='
            placeholder:text-orange-500

             pl-4 w-64 py-2 bg-[#ff7e3e] rounded-full bg-opacity-10  text-orange-500 font-semibold text-md border border-orange-600 border-opacity-30 hover:bg-opacity-30 '
            name='content'
            />
            <button className='pl-2 hover:text-orange-400 '><BiSend size={25}/></button>

          </form>
        </div>
      </div>
      <Dash flrData={flrData} cmeData={cmeData} wsaData={wsaData} />
    </div>
  )
}

export default Home;