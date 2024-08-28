import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import Container from '../containers/Container'

const Header = () => {
    return (
        <Container>
            <nav className='flex gap-4 items-center h-28'>
                <NavLink to='/'>
                    <img className='h-12' src="/brand.svg" alt="" />
                </NavLink>
                <div className='flex gap-4 items-center ms-auto'>
                <NavLink className='' to='/'>Home</NavLink>
                <NavLink className='' to='/projects'>Projects</NavLink>
                <NavLink className='' to='/contact'>Contact</NavLink>
                <NavLink className='' to='/resume'>Resume</NavLink>
                </div>
            </nav>
        </Container>
    )
}

export default Header