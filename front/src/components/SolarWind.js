import React, { useState } from 'react';
import ReactRain from 'react-rain-animation';
import Rain from './Rain';

// function randRange( minNum, maxNum) {
//     return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
//   }
  
//   // function to generate drops
//   function createRain() {
  
//       for( i=1;i<nbDrop;i++) {
//       var dropLeft = randRange(0,1600);
//       var dropTop = randRange(-1000,1400);
  
//       $('.rain').append('<div class="drop" id="drop'+i+'"></div>');
//       $('#drop'+i).css('left',dropLeft);
//       $('#drop'+i).css('top',dropTop);
//       }
  
//   }

const SOLAR_WIND_CLASSES = {
  A: 'green-300',
  B: 'lime-300',
  C: 'amber-300',
  M: 'orange-400',
  X: 'red-500',
}

const determineNumOfDrops = (degree) => {
  return degree * 10;
}

const SolarWind = ({ type }) => {
  const solarWindClass = type[0]
  const degree = parseInt(type.slice(1))

  const [numOfDrops, setNumOfDrops] = useState(determineNumOfDrops(degree))

  return (
    <div className={`bg-black text-${SOLAR_WIND_CLASSES[solarWindClass]}`}>
        <Rain numDrops={numOfDrops} />
    </div>
  )
}

export default SolarWind
