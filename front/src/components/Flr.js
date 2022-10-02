import { format, parseISO, subDays } from 'date-fns';
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';





function Flr({flrData}) {
  if(flrData) { 
    console.log('Solar flares: ', flrData)
    const newData = flrData.flat()
  console.log('newData', flrData)
  }



  const data = [
    {
      hour: '17:00',
      uv: 1,
      pv: 10,
      amt: 1,
    },
    {
      hour: '18:00',
      uv: 2,
      pv: 3,
      amt: 5,
    },
    {
      hour: '19:00',
      uv: 3,
      pv: 4,
      amt: 4,
    },
    {
      hour: '20:00',
      uv: 4,
      pv: 8,
      amt: 2000,
    },
    {
      hour: '21:00',
      uv: 5,
      pv: 3,
      amt: 1,
    },
    {
      hour: '22:00',
      uv: 6,
      pv: 12,
      amt: 2,
    },
  ];


  

// function CustomTooltip({ active, payload, label }) {
//   if (active) {
//     return (
//       <div classhour="tooltip">
//         <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
//         <p>${payload[0].value.toFixed(2)} CAD</p>
//       </div>
//     );
//   }
//   return null;
// }

  if(flrData) { 
    return (
        <div className='p-4 text-lg bg-zinc-800 rounded-md h-full col-span-2'>
         <div className='flex place-content-between px-6 pb-4 pt-2'>
            <h1>Solar Flare</h1>
            <div className='flex gap-2 bg-yellow-400 w-min px-4 py-1 border border-yellow-200 rounded-full t bg-opacity-20 float-right'>
            <h1 className=' text-yellow-200'>Class</h1>
            <h1 className='text-yellow-200 font-bold'>{flrData[0].classType}</h1>
            </div>
        </div>
<div className='px-'>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={flrData}
          
          margin={{
              top: 10,
              right: 30,
              left: -10,
              bottom: 0,
            }}
         
         >
           <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.6} />
          </linearGradient>
        </defs>

            <CartesianGrid strokeDasharray="1 3" />
            <XAxis 
            dataKey='beginTime'
            axisLine={false}
            tickLine={false}
            />
            <YAxis 
            axisLine={false}
            tickLine={false}
            domain={[0, 10]}
            dataKey="pv" tickFormatter={(number) => {
                if(number < 3) {
                  return ['A', number]
                } else if(number < 6) {
                  return ['B', number]
                } else if(number < 8) {
                  return ['C', number]
                } else if(number < 10) {
                  return['M', number]
                } else { 
                  return ['X', number]
                }
              }
            }
              
            />
            <Tooltip />
            <Area  dataKey="pv" stroke="#2451B7" fill="url(#color)" />

            {/* <Area type="monotone" dataKey="pv" stroke="#8884d8" fill="#8884d8" /> */}
          </AreaChart>
        </ResponsiveContainer>
</div>

        {/* <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getDate() % 7 === 0) {
              return format(date, "MMM, d");
            }
            return "";
          }}
        />

        <YAxis
          datakey="y"
          axisLine={false}
          tickLine={false}
          tickCount={6}
          tickFormatter={(number) => `${number.toFixed(2)}`}
        />

        <Tooltip  />

        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer> */}


           
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

export default Flr;