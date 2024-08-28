import React from 'react'
import GradientText from '../texts/GradientText'

const HomeHero = () => {
    return (
        <div className='space-y-4'>
            <p className='font-light'>Hey, I'm</p>
            <h1 className='text-8xl font-bold font leading-tight font-medievalSharp'>
                <GradientText>
                    Rajat Karmokar
                </GradientText>
            </h1>
            <p className='font-light'>
                I'm a software engineer based in Toronto, Canada and also a communication and journalism student. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been freelancing for a year now while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.
            </p>
            <div className='flex w-max gap-2 items-center !mt-12 cursor-pointer group'>
                <span className='text-xl font-light '>Say hi</span>
                <img className='group-hover:translate-x-2 transition-all' src="/assets/button/long-left-arrow.svg" alt="" />
            </div>
        </div>
    )
}

export default HomeHero