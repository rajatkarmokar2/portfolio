import React from 'react'
import Container from '../components/containers/Container'
import { projectList } from '../constants/projectList'
import ProjectCard from '../components/cards/ProjectCard'

const Projects = () => {
  return (
    <Container>
      <div className='my-6 grid grid-cols-1 lg:grid-cols-2 gap-6'>
        { projectList.map( ( item,index ) =>
          <ProjectCard { ...item } />
        ) }
      </div>
    </Container>
  )
}

export default Projects