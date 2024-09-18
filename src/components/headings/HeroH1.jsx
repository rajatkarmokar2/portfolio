import React from 'react'

const HeroH1 = ( { children } ) => {
  return (
    <h1 className="text-[clamp(46px,5vw,56px)] mb-3 font-bold lg:leading-tight text-dark dark:text-white">{ children }</h1>
  )
}

export default HeroH1