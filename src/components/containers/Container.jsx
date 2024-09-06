import React from 'react'

const Container = ( { children } ) => {
    return (
        <div className='container mx-auto px-[clamp(12px,5vw,16px)] max-w-[992px]'>{ children }</div>
    )
}

export default Container