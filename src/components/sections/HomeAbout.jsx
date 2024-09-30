import React from 'react'
import Container from '../containers/Container'
import { motion } from 'framer-motion';
import SectionH1 from '../headings/SectionH1';

const HomeAbout = () => {
  return (
    <div>
      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center'>
          <div>
        <SectionH1>Who I Am</SectionH1>
            <p className='mb-6 text-lg leading-relaxed text-justify'>
              I'm Rajat Karmokar, a passionate Frontend Developer with over 3+ years of experience specializing in building responsive, high-performance web and mobile applications. With a solid foundation in React, React Native, and JavaScript, I focus on creating user-friendly interfaces and seamless experiences across devices.
            </p>
            <p className='mb-6 text-lg leading-relaxed text-justify'>
              I thrive on tackling complex problems with creative solutions, whether it's optimizing a web app for performance, fixing bugs, or integrating APIs to enhance functionality. My curiosity and enthusiasm for new technologies keep me exploring the ever-evolving landscape of development, always looking for ways to improve my skills.
            </p>
          </div>
          <div className='relative m-auto'>
            <motion.div
              variants={ {
                hidden: { y: 100,opacity: 0 },
                visible: { y: 0,opacity: 1 },
              } }
              initial="hidden"
              animate="visible"
              transition={ { type: 'just',duration: 0.5,delay: 1 } }
              viewport={ { once: true } }
            >
              {/* <img className='rounded-full max-w-[200px] lg:max-w-full' src="assets/images/profile/profile-pic.png" /> */ }
              <img className='size-[300px] transition-all duration-1000 drop-shadow-2xl'
                // src="assets/images/29169113_7520071.jpg" 
                src="assets/images/profile/profile-pic.png"
                alt=''
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HomeAbout