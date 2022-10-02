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

  if(flrData) { 
    console.log('Solar flares: ', flrData)
    const newData = flrData.flat()
  console.log('newData', flrData)
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className=" bg-[#2451B7]">
          <p className="label">{`Start time: ${label} : ${payload[0].value}`}</p>
          <p className="label">{`${label}  ${payload[0].value}`}</p>
          <p className="intro">{getIntroOfPage(label)}</p>
          <p className="desc">Anything you want can be displayed here.</p>
        </div>
      );
    }
  }

  if(flrData) { 
    return (
        <div className='p-4 text-lg bg-zinc-800 rounded-md h-full col-span-2'>
         <div className='flex place-content-between px-6 pb-4 pt-2'>
         <div>
            <h1 className='text-2xl text-white'>Solar Flare</h1>
            <h1 className='text-lg font-light text-opacity-80 text-white'>Peak time classification</h1>
            </div>
            {/* <div className='flex gap-2 bg-yellow-400 w-min px-4 py-1 border border-yellow-200 rounded-full t bg-opacity-20 float-right'>
            <h1 className=' text-yellow-200'>Class</h1>
            <h1 className='text-yellow-200 font-bold'>{flrData[0].classType}</h1>
            </div> */}
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

            <CartesianGrid strokeDasharray="1 5" />
            <XAxis 
            tick={{ fill: '#E8E8E8', fontSize: '14px'}}
            dataKey='peakTime'
            axisLine={false}
            tickLine={false}
            />
            <YAxis 
             tick={{ fill: '#E8E8E8', fontSize: '12px'}}
            axisLine={false}
            tickLine={false}
            domain={[0, 10000]}
            dataKey="pv" tickFormatter={(number) => {
                if(number < 2500) {
                  return ['A', ]
                } else if(number < 5000) {
                  return ['B', ]
                } else if(number < 7500) {
                  return ['C', ]
                } else if(number < 10000) {
                  return['M', ]
                } else if(number < 15000) {
                  return ['X', ]
                } 
              }
            }
              
            />
            <Tooltip content={CustomTooltip}/>
            {/* <Area  dataKey="power" stroke="#2451B7" fill="url(#color)" /> */}

            <Area type="monotone" dataKey="classType" stroke="#8884d8" fill="#8884d8" />
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