import React from 'react'

const Loading = () => {
  return (
    <div className='bg-page text-white min-h-screen h-max flex items-center justify-center'>
      <div className='text-center space-y-3'>
        <img className='h-20' src="/loader.svg" alt="" />
        <div className='font-medievalSharp'>
          Loading...
        </div>
      </div>
    </div>
  )
}

export default Loading