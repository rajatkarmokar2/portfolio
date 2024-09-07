import React from 'react'

const SectionH1 = ( { children } ) => {
    return (
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-[linear-gradient(lightblue,black)] darK:bg-[linear-gradient(lightblue,gray)] text-transparent bg-clip-text">{ children }</h2>
    )
}

export default SectionH1