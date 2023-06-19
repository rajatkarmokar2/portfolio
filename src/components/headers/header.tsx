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
							<CustomNavlink to='/'>home</CustomNavlink>
						</li>
						<li>
							<CustomNavlink to='/about'>about</CustomNavlink>
						</li>
						<li>
							<CustomNavlink to='/portfolio'>portfolio</CustomNavlink>
						</li>
						<li>
							<CustomNavlink to='/services'>services</CustomNavlink>
						</li>
						<li>
							<CustomNavlink to='/pages'>pages</CustomNavlink>
						</li>
						<li>
							<CustomNavlink to='/contact'>contact</CustomNavlink>
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
const CustomNavlink = (props: any) => {
	return (
		<NavLink to={props.to} className='[&.active]:underline underline-offset-8 transition-all hover:underline'>
			{props.children}
		</NavLink>
	)
}
