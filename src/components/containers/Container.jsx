import React from 'react'

const Container = ( { children,className } ) => {
    return (
        <div className={`'container mx-auto px-[6vw] max-w-[1440px] ${className}`}>{ children }</div>
    )
}

export default Container