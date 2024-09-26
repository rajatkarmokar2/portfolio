import React from 'react'

const varients = {
  primary: 'bg-darkblue text-white dark:text-darkblue dark:bg-white',
  gradient: 'bg-gradient-to-tr from-violet-800 to-yellow-500 text-white'
}

const Button = ( { component = ( props ) => <button { ...props } />,className,varient = 'primary',children,...props } ) => {
  let Component=component
  return (
    <Component { ...props } className={ `inline-block px-4 py-2 font-medium rounded-lg cursor-pointer hover:scale-105 transition-all duration-200 ${varients[ varient ]} ${className} ` }>
      { children }
    </Component>
  )
}

export default Button
