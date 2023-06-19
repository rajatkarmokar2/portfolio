/** @format */

import React from 'react'

const Hero = () => {
	return (
		<div className='bg-[url(https://picsum.photos/1000/600)] bg-no-repeat bg-cover'>
			<div className='text-white max-w-[1440px] mx-auto '>
				<div className='flex gap-10 items-center justify-between '>
					<div className='flex gap-5 flex-col'>
						<h1 className='text-5xl capitalize font-bold'>hi my name is Rajat</h1>
						<h1 className='text-5xl capitalize font-bold'>A React Developer</h1>
					</div>
					<div className='shadow-inner drop-shadow shadow'>
						<img src='https://picsum.photos/600' alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
