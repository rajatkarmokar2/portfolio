import React from 'react';
import { projectList } from '../../constants/projectList';
import Container from '../containers/Container';
import SectionH1 from '../headings/SectionH1';
import ProjectCard from '../cards/ProjectCard';
import { Link } from 'react-router-dom';
import Button from '../buttons/Button';
import { motion } from 'framer-motion';


const HomeProjects = () => {
  const projects = projectList.slice( 0,3 )
  return (
    <Container>
      <div className='text-center'>
        <SectionH1>Projects</SectionH1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        { projects.map( ( item,index ) => (
          <motion.div
            key={ index }
            initial={ {
              y: 50,
              opacity: 0
            } }
            whileInView={ {
              y: 0,
              opacity: [ 0,1 ]
            } }
            transition={ { type: 'just',duration: 1,delay: index / 5 } }
            viewport={ { once: true } }
          >
            <ProjectCard { ...item } />
          </motion.div>
        ) ) }
      </div>
      <div className='text-center mt-6'>
        <motion.div
          initial={ {
            y: 10,
            opacity: 0
          } }
          whileInView={ {
            y: 0,
            opacity: 1
          } }
          transition={ { type: 'just',duration: 1,delay: 0.8 } }
          viewport={ { once: true } }
        >
          <Button component={ Link } to='/projects'>View All</Button>
        </motion.div>
      </div>
    </Container>
  )
}

export default HomeProjects