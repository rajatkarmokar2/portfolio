import React from 'react'
import SectionH1 from '../headings/SectionH1'
import Container from '../containers/Container'
import Button from '../buttons/Button'

const HomeAbout = () => {
  return (
    <div className='pt-20'>
      <Container>
        <div className='mx-auto lg:max-w-2xl '>
          <div className='text-center'>
            {/* <div className='flex justify-center mb-4'>
              <img
                src='https://via.placeholder.com/150'
                alt='Profile Picture'
                className='rounded-full w-32 h-32 border-4 border-white shadow-md hover:shadow-lg transition-shadow duration-300'
              />
            </div> */}
            <h1 className='text-4xl font-bold mb-4'>About Me</h1>
          </div>
          <p className='indent-10 mb-6 text-lg leading-relaxed'>
            I am a <b>Senior Frontend Developer</b> with <b>3 years</b> of experience in Software Development. My expertise lies in modern JavaScript libraries like React.js, Next.js, and Node.js. I am passionate about learning new technologies and applying my skills to build innovative, real-world products.
          </p>
          <div className='text-center'>
            {/* <Button
              to='mailto:your-email@example.com'
              className='inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition-colors duration-300'
            >
              Contact Me
            </Button> */}
          </div>
        </div>

      </Container>
    </div>
  )
}

export default HomeAbout