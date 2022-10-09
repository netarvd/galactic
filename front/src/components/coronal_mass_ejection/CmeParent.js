import React from 'react'
import SunCme from './CmeChild';

const Cme = ({cmeData}) => {
  if(cmeData) { 
    return (
    <div className='p-4 text-lg bg-white bg-opacity-10 rounded-xl h-full col-span-4 xl:col-span-2 '>

          <div className='px-6 pb-4 pt-2 flex place-content-between items-end'>

          {/* Flex A */}
          <div className='content-end'>
            <h1 className='text-2xl'>Coronal Mass Ejection</h1>
            <h1 className='text-lg font-light text-opacity-80 text-white'>Large expulsions of plasma and magnetic field</h1>
          </div>

          {/* Flex B */}
            <div className='content-end flex align-bottom gap-2'>
              <div className='rounded-full px-2 bg-blue-400 text-blue-400 text-sm py-1 bg-opacity-25 font-bold'>Earth</div>
              <div className='rounded-full px-2 bg-[#FF5604] text-[#FF5604] text-sm py-1 bg-opacity-25 font-bold'>Sun</div>
              <div className='px-2 text-[#fa70c5] text-sm py-1 font-bold bg-[#fa70c5] bg-opacity-25 rounded-full'>CME</div>
           </div>
          </div>

        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3  gap-3 py-4 px-6 '>
        {cmeData.slice(0, 6).map((data, index) => { 
          return <SunCme 
          key={index}
          data={data}/>
        })}
        </div>
    </div>
      )
  } else { 
    return( 
        <div>
            <h1>Loading...</h1>
        </div>
    )
  }
}

export default Cme;