import React from 'react'
import GradientText from '../texts/GradientText'

const HomeHero = () => {
    return (
        <div className='space-y-4'>
            <p className='font-light'>Hey, I'm</p>
            <h1 className='text-8xl font-bold font leading-tight '>
                <GradientText>
                    Rajat Karmokar
                </GradientText>
            </h1>
            <p className='font-light'>
                I worked as a React Developer and have 2+ years of Experience in the field of Front-End Developer. Worked on 5+ websites / web applications and 3+ Mobile Applications,
                Having good knowledge of popular Frameworks like React, Next and Node.
            </p>
            <div className='flex w-max gap-2 items-center !mt-12 cursor-pointer group'>
                <span className='text-xl font-light '>Say hi</span>
                <img className='group-hover:translate-x-2 transition-all' src="/assets/button/long-left-arrow.svg" alt="" />
            </div>
        </div>
    )
}

export default HomeHero