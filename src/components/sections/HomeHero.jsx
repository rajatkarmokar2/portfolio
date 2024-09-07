import React from 'react'
import Container from '../containers/Container'
import { Button,Card,Image,Link } from '@nextui-org/react'
import HeroH1 from '../headings/HeroH1'

const HomeHero = () => {
    return (
        <Container>
            <div className='md:h-[500px] max-h-max grid grid-cols-1 md:grid-cols-12 items-center gap-4'>
                <div className='md:col-span-5 md:order-2 flex justify-center'>
                    <Image isBlurred className='rounded-full max-w-[200px] md:max-w-full' src="/assets/images/profile/profile-pic.png" />
                </div>
                <div className='md:col-span-7 md:order-1'>
                    <div className='text-center md:text-start space-y-4'>
                        <HeroH1>Rajat Karmokar</HeroH1>
                        <p className='text-sm md:text-base'>
                            I worked as a React Developer and have 2+ years of Experience in the field of Front-End Developer. Worked on 5+ websites / web applications and 3+ Mobile Applications,
                            Having good knowledge of popular Frameworks like React, Next and Node.
                        </p>
                        <Button color='primary' as={ Link } href="/assets/pdf/resume/Rajat-Resume-2xp.pdf" >
                            <span className=''>Download CV</span>
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default HomeHero