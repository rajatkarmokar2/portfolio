import { Spinner } from '@nextui-org/react'
import React from 'react'
import Header from '../components/headers/Header'

const Loading = () => {
  return (
    <>
      <Header />
      <div className=' fixed top-0 start-0 end-0 backdrop-blur-xl min-h-screen h-max flex items-center justify-center'>
        <Spinner color='current' />
      </div>
    </>
  )
}

export default Loading