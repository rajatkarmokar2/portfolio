import React from 'react'
import Container from '../components/containers/Container'
import { NavLink,useParams } from 'react-router-dom'
import { projectList } from '../constants/projectList'
import SectionH1 from '../components/headings/SectionH1'
import HeroH1 from '../components/headings/HeroH1'
import { Helmet } from 'react-helmet'
import Button from '../components/buttons/Button'

const ProjectDetails = () => {
    const { projectId } = useParams()
    const project = projectList.find( ( item,index ) => item.title === projectId )
    return (
        <>
            <Helmet>
                <title>Projects - { projectId } - Rajat Karmokar</title>
            </Helmet>
            <Container>
                <div className='my-16'>
                    <div className='flex gap-2 items-center flex-wrap'>
                        <div>
                            <NavLink to='/projects' className='font-bold text-dark transition-all dark:text-white !text-opacity-50 hover:!text-opacity-100'>Projects</NavLink>
                        </div>
                        <span>&gt;</span>
                        <div>
                            { projectId }
                        </div>
                    </div>
                </div>

                <div className='space-y-16 my-16'>
                    <div className='text-center my-16'>
                        <HeroH1>{ project.title }</HeroH1>
                        <p className='mb-3 max-w-[40rem] mx-auto'>{ project.description }</p>
                        <div className='text-center flex justify-center gap-4 flex-wrap'>
                            { project.technologies.map( ( item,index ) =>
                                <div className='flex flex-col items-center group relative cursor-pointer' content={ item.name }>
                                    <div className='size-14 rounded-full grid place-items-center bg-dark text-white dark:bg-white dark:text-dark'>
                                        <item.icon className='size-1/2' />
                                    </div>
                                    <div className='absolute bottom-0 font-bold scale-0 group-hover:scale-100 group-hover:translate-y-6 transition-all duration-500 text-nowrap'>{item.name}</div>
                                </div>
                            ) }
                        </div>
                    </div>

                    <div>
                        { project.images.noPreview &&
                            <div>
                                <img className='aspect-video lg:aspect-[8/2] object-contain' isBlurred src={ project.images.noPreview } />
                            </div>
                            ||
                            <div className='grid grid-cols-1 md:grid-cols-9 gap-2 lg:gap-6'>
                                <div className='md:col-span-7'>
                                    <img className='aspect-video w-full rounded-xl' isBlurred src={ project.images.desktop } />
                                </div>
                                <div className='md:col-span-2 flex justify-center'>
                                    <img className='w-1/2 md:w-full mx-auto rounded-xl' isBlurred src={ project.images.mobile } />
                                </div>
                            </div>
                        }
                    </div>

                    <div className='text-center'>
                        <SectionH1>Roles</SectionH1>
                        <ul className='divide-y border rounded-xl'>
                            { project.details.map( ( item,index ) =>
                                <li className='py-4 list-none border-dashed'>
                                    { item }
                                </li>
                            ) }
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ProjectDetails


const Modal=({open,onHide})=>{
    


    return (
        <div>
            
        </div>
    )
}
