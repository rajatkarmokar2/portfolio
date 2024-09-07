import React from 'react'
import { useShuffle } from './../../hooks/useShuffle';
import { projectList } from '../../constants/projectList';
import Container from '../containers/Container';
import SectionH1 from '../headings/SectionH1';
import ProjectCard from '../cards/ProjectCard';
import { Button } from '@nextui-org/react';
import { NavLink } from 'react-router-dom';


const HomeProjects = () => {
  const projects = useShuffle( projectList ).slice( 0,3 )
  return (
    <Container>
      <div className='text-center'>
        <SectionH1>Projects</SectionH1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        { projects.map( ( item,index ) => (
          <ProjectCard { ...item } />
        ) ) }
      </div>
      <div className='text-center mt-6'>
        <Button color='secondary' as={ NavLink } to='/projects'>View All</Button>
      </div>
    </Container>
  )
}

export default HomeProjects