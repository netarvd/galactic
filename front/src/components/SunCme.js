import React from 'react'
import { GiWindsock } from "react-icons/gi";
import { TbWorldLatitude } from "react-icons/tb";


function SunCme({data}) {
  console.log(data)
  const time = data.time21_5.split('T');
  const shortTime = time[0].split('-');

  //Rotation 
  const rotationData = data.latitude + data.longitude

  const finalrotation = data.halfAngle


  return (
<div className='col-span-1 bg-black rounded-lg p-4 '>
    <div className='flex place-content-between '>
        <div className=' px-3 py-1 w-fit flex rounded-full bg-[#FF5604] bg-opacity-20 border-[#FF5604] border  border-opacity-30 align-middle place-items-center'>
        <GiWindsock className='text-white' size={20}/> 
        <h1 className='text-xs font-semibold text-[white] pl-2 inline'>{data.speed}<span className='font-light pl-1'>km/s</span></h1>
        </div>
        <div className='align-middle grid place-items-center '>
        <h1 className='text-sm opacity-90'>{`${shortTime[1]}-${shortTime[2]}`}</h1>
        </div>
        </div>
        <div className='py-4 h-24 relative pl-1 rounded-xl grid place-items-center grid-cols-2'>    

        <div className={`-rotate-45 
        h-full bg-[#FF5604] border-b-8 border-[#fa70c5] shadow-sm shadow-[#fa70c5] bg-opacity-70 rounded-full aspect-square float-left`} /> 

        <div className='h-2 w-2 bg-blue-400 border-b-8 border-blue-400 bg-opacity-70 rounded-full aspect-square float-left'> </div>
        </div>
        <div className='pt-4'>
        <div className='place-content-between flex'>
        <div className='text-xs text-white flex gap-2 place-items-center '>
        <TbWorldLatitude size={15}/>
        <h1>Long <span className='font-bold'>{data.latitude}</span></h1>
        <div>|</div>
        <h1>Lat <span className='font-bold'>{data.longitude}</span></h1>

        </div>
        <div className='float-right text-sm underline text-[#FF5604] text-opacity-70'><a href={data.link}rel="noopener noreferrer" target="_blank">Event</a></div>

        </div>    

    </div>
  
</div>
  )
}

export default SunCme;


