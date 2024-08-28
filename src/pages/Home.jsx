import React from 'react'
import HomeHero from '../components/sections/HomeHero'
import HomeExperience from '../components/sections/HomeExperience'
import HomeProjects from '../components/sections/HomeProjects'
import Container from '../components/containers/Container'
import ContainerSpacing from '../components/spacings/ContainerSpacing'

const Home = () => {
    return (
        <>
            <Container>
                <ContainerSpacing />
                <HomeHero />
                <ContainerSpacing />
                <HomeExperience />
                <ContainerSpacing />
                <HomeProjects />
                <ContainerSpacing />
            </Container>
        </>
    )
}

export default Home