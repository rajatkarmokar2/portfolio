import React from 'react'
import { Button as UiBUtton } from '@nextui-org/react'

const varients = {
  gradient: 'bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg'
}

const Button = ( { className,varient,children,...props } ) => {
  className = ` ${varients[ varient ] || ''} ${className} `
  return (
    <UiBUtton color="primary" className={ `  ${className}` } { ...props }>
      { children }
    </UiBUtton>
  )
}

export default Button