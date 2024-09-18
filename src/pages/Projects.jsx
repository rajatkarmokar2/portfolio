import React from 'react'
import Container from '../components/containers/Container'
import { projectList } from '../constants/projectList'
import ProjectCard from '../components/cards/ProjectCard'
import { Helmet } from 'react-helmet'
import SectionH1 from '../components/headings/SectionH1'

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Rajat Karmokar</title>
      </Helmet>
      <Container>
        <div className='my-14 text-center'>
          <SectionH1>Projects</SectionH1>
        </div>
        <div className='my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          { projectList.map( ( item,index ) =>
            <ProjectCard key={ index } { ...item } />
          ) }
        </div>
      </Container>
    </>
  )
}

export default Projects