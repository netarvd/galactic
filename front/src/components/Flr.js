import { format, parseISO, subDays } from 'date-fns';
import React, { PureComponent, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function Flr({flrData}) {

  const getIntroOfPage = (label) => {
    if (label === 'Page A') {
      return "Page A is about men's clothing";
    }
    if (label === 'Page B') {
      return "Page B is about women's dress";
    }
    if (label === 'Page C') {
      return "Page C is about women's bag";
    }
    if (label === 'Page D') {
      return 'Page D is about household goods';
    }
    if (label === 'Page E') {
      return 'Page E is about food';
    }
    if (label === 'Page F') {
      return 'Page F is about baby food';
    }
    return '';
  };


  const CustomTooltip = ({ active, payload, label }) => {

    if (active && payload && payload.length) {
      return (
        <div className=" bg-[#FF5604] bg-opacity-70 p-4 rounded-xl border-1 border-solid border-[#FF5604] ">
          <p className="label">{`Start time: ${label}`}</p>
          <p className="label">{`Value: ${payload[0].value}`}</p>
        </div>
      );
    }
  }

  if(flrData) { 
    return (
        <div className='p-4 text-lg bg-white bg-opacity-10 rounded-xl h-full col-span-4 lg:col-span-2'>
         <div className='flex place-content-between px-6 pb-4 pt-2'>

         <div>
            <h1 className='text-2xl text-white'>Solar Flare</h1>
            <h1 className='text-lg font-light text-opacity-80 text-white'>Peak time classification</h1>
          </div>
          <div className=' grid items-end'>
            <div className='content-end flex align-bottom gap-2 items-end text-[#FF5604] font-semibold'>
            <h1 className='text-sm content-end bg-bottom items-end'>Danger bar</h1>
            <div className='rounded-full px-2 bg-[#FF5604] text-[#FF5604] text-sm py-1 bg-opacity-5 text-opacity-50 font-bold'>A</div>
            <div className='rounded-full px-2 bg-[#FF5604] text-[#FF5604] text-sm py-1 bg-opacity-25 font-bold text-opacity-60'>B</div>
            <div className='px-2 text-[#FF5604] text-sm py-1 font-bold bg-[#FF5604] bg-opacity-50 rounded-full text-opacity-70'>C</div>
            <div className='px-2 text-white text-opacity-60 text-sm py-1 font-bold bg-[#FF5604] bg-opacity-75 rounded-full'>M</div>
            <div className='px-2 text-white text-opacity-90 text-sm py-1 font-bold bg-[#FF5604] bg-opacity-90 rounded-full '>X</div>

          </div>

          </div>
        </div>

<div className='pt-3'>
        <ResponsiveContainer width="100%" height={420}>
          <AreaChart data={flrData}
          
          margin={{
              top: 10,
              right: 30,
              left: -16,
              bottom: 0,
            }}
         
         >
           <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF5604" />
            <stop offset="75%" stopColor="#FF5604" stopOpacity={0.7} />
          </linearGradient>
        </defs>

            <CartesianGrid strokeDasharray="1 5" />
            <XAxis 
            tick={{ fill: '#E8E8E8', fontSize: '14px'}}
            dataKey='peakTime'
            axisLine={false}
            tickLine={false}
            />
            <YAxis
             tick={{ fill: '#E8E8E8', fontSize: '14px'}}
            axisLine={false}
            tickLine={false}
            domain={[0, 95000]}
            dataKey="pv" 
            tickFormatter={(number) => {
                if(number < number[1]) {
                  return ['A']
                } else if(number < number[2]) {
                  return ['B', ]
                } else if(number < number +1 ) {
                  return ['C', ]
                } else if(number < 10000) {
                  return['M', ]
                } else if(number < 15000) {
                  return ['X', ]
                } 
              }
            }
            />
            <Tooltip content={CustomTooltip} />
            <Area type="monotone" dataKey="classType" stroke="#FF5604" fill="url(#color)" />
          </AreaChart>
        </ResponsiveContainer>
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

export default Flr;