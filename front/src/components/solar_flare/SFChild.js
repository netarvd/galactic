import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function SFChild({flrData}) {

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
  return (
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
  )
}

export default SFChild