import React from 'react';
import HomeHero from '../components/sections/HomeHero';
import HomeProjects from '../components/sections/HomeProjects';
import HomeSkills from '../components/sections/HomeSkills';
import { Helmet } from 'react-helmet';
import HomeAbout from './../components/sections/HomeAbout';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - Rajat Karmokar</title>
            </Helmet>
            <div className="min-h-screen space-y-20 pb-20">
                <div className='relative'>
                    <div className='absolute inset-0 h-full w-full bg-blue-200 opacity-15'>
                        <img className='block h-full mx-auto object-contain' src="assets/images/29169113_7520071.jpg" alt='' />
                    </div>
                    <HomeHero />
                </div>
                <HomeAbout />
                <HomeSkills />
                <HomeProjects />
            </div>
        </>
    )
}

export default Home

