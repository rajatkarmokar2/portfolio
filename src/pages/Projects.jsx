import React from 'react'
import Container from '../components/containers/Container'
import { projectList } from '../constants/projectList'
import ProjectCard from '../components/cards/ProjectCard'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import HeroH1 from '../components/headings/HeroH1'

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Rajat Karmokar</title>
      </Helmet>
      <Container>
        <div className='pt-28 mb-14 text-center'>
          <HeroH1>Projects</HeroH1>
        </div>
        <div className='my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          { projectList.map( ( item,index ) =>
            <motion.div key={ index }
              initial={ {
                opacity: 0,
                y: 50,
              } }
              animate={ {
                opacity: 1,
                y: 0,
              } }
              transition={ { type: 'just',delay: index / 8 } }
            >
              <ProjectCard  { ...item } />
            </motion.div>
          ) }
        </div>
      </Container>
    </>
  )
}

export default Projects