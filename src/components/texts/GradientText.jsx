import React from 'react'

const GradientText = ( {children } ) => {
    return (
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-text">
            { children }
        </div>
    )
}

export default GradientText