/** @format */

import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Header = () => {
	return (
		<div className='border-b'>
			<header className='flex items-center justify-between text-white h-20  max-w-[1440px] mx-auto'>
				<div className='flex items-center'>
					<picture>
						<img className='h-16' src='/logo.png' alt='Logo' />
					</picture>
					<div className='leading-none'>
						<i>
							<div className='font-bold text-lg'>Rajat</div>
							<small>Karmokar</small>
						</i>
					</div>
				</div>
				<nav>
					<ul className='capitalize flex gap-8'>
						<li>
							<NavLink to='/' className='[&.active]:underline underline-offset-8'>
								home
							</NavLink>
						</li>
						<li>
							<NavLink to='/about' className='[&.active]:underline underline-offset-8'>
								about
							</NavLink>
						</li>
						<li>
							<NavLink to='/portfolio' className='[&.active]:underline underline-offset-8'>
								portfolio
							</NavLink>
						</li>
						<li>
							<NavLink to='/services' className='[&.active]:underline underline-offset-8'>
								services
							</NavLink>
						</li>
						<li>
							<NavLink to='/pages' className='[&.active]:underline underline-offset-8'>
								pages
							</NavLink>
						</li>
						<li>
							<NavLink to='/contact' className='[&.active]:underline underline-offset-8'>
								contact
							</NavLink>
						</li>
					</ul>
				</nav>
				<div className='flex gap-3'>
					<IconWrapper>
						<FaFacebookF />
					</IconWrapper>
					<IconWrapper>
						<FaGithub />
					</IconWrapper>
					<IconWrapper>
						<FaLinkedinIn />
					</IconWrapper>
				</div>
			</header>
		</div>
	)
}

export default Header

const IconWrapper = (props: any) => {
	return (
		<div className='h-10 border aspect-square rounded-full flex items-center text-lg justify-center hover:text-black transition-all hover:bg-white hover:scale-125'>
			{props.children}
		</div>
	)
}
