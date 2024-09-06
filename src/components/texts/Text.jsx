import React from 'react'

const varients = {
    h1: {
        className: ''
    },
    para: '',
}

const Text = ( { varient,children,className } ) => {
    return (
        <>
            <p className={ ` ${varients[ varient ]?.className} ${className} ` }>{ children }</p>
        </>
    )
}

export default Text
