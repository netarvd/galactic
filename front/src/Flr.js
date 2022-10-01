import React from 'react'

function Flr({displayName}) {
  return (
    <div className='p-4 text-lg bg-zinc-800 rounded-md h-52'>
    <h1>Display</h1>
    <h1 className='text-opacity-50'>{displayName}</h1>
    </div>
  )
}

export default Flr