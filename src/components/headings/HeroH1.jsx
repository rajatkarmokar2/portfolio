import React from 'react'

const HeroH1 = ( { children } ) => {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-[linear-gradient(lightblue,black)] dark:bg-[linear-gradient(lightblue,gray)] text-transparent bg-clip-text !leading-normal ">{ children }</h1>
  )
}

export default HeroH1