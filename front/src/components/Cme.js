import React from 'react'
import { format, formatDistance, formatRelative, parseISO, subDays } from 'date-fns'


  
const Cme = ({cmeData}) => {
    // const dates = []
    // const createList = async () => { 
    //     if(cmeData) { 
    //     await cmeData.map((data) =>  { 
    //       const date = []
    //       date.push(data.beginTime, data.peakTime, data.endTime)
    //       dates.push(date)
    //       }
    //     )
    //     console.log('dates: ', dates)
    //   }
    // }
    // if(cmeData) { 
    //     createList()
    // }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
          return (
            <div className="tooltip">
              <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
              <p>${payload[0].value.toFixed(2)} CAD</p>
            </div>
          );
        }
    }

  if(cmeData) { 
    console.log(cmeData[0].latitude)
    return (
        <div className='p-4 text-lg bg-zinc-800 rounded-md col-span-2 h-full w-full'>
         <h1 className='p-4'>Coronal Mass Ejection</h1>
         <div className='px-4 py-4'>

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