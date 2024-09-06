import { Spinner } from '@nextui-org/react'
import React from 'react'

const Loading = () => {
  return (
    <div className='bg-page text-white min-h-screen h-max flex items-center justify-center'>
      <div className='text-center space-y-3'>
        <Spinner color='default'/>
      </div>
    </div>
  )
}

export default Loading