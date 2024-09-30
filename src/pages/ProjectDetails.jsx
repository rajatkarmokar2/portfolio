import React from 'react'
import Container from '../components/containers/Container'
import { Link,NavLink,useParams } from 'react-router-dom'
import { projectList } from '../constants/projectList'
import HeroH1 from '../components/headings/HeroH1'
import { Helmet } from 'react-helmet'
import { IconExternalLink } from '@tabler/icons-react'

const ProjectDetails = () => {
    const { projectId } = useParams()
    const project = projectList.find( ( item,index ) => item.title === projectId )
    return (
        <>
            <Helmet>
                <title>Projects - { projectId } - Rajat Karmokar</title>
            </Helmet>
            <Container>
                <div className='pt-28 mb-10'>
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

                <div className='space-y-20 pb-20'>
                    <div className='grid lg:grid-cols-2 gap-16 items-center'>
                        <div className='order-1 lg:order-2'>
                            { project.images.noPreview &&
                                <div className='aspect-video'>
                                    <img className='h-full w-full object-fill rounded-xl' src={ project.images.noPreview } />
                                </div>
                                ||
                                <div className='flex gap-2 lg:gap-2'>
                                    <div className='relative bg-darkblue dark:bg-white !bg-opacity-10 p-2 group rounded-xl'>
                                        <img className='object-fill w-full rounded-xl' src={ project.images.desktop } />
                                        <Link target='_blank' to={ project.link } className='absolute rounded-xl cursor-pointer backdrop-blur-sm inset-0 flex transition-all bg-darkblue bg-opacity-50 opacity-0 group-hover:opacity-100'>
                                            <IconExternalLink className="m-auto size-10 stroke-white transition-all scale-50 group-hover:scale-100" />
                                        </Link>
                                    </div>
                                </div>
                            }
                        </div>

                        <div className=''>
                            <HeroH1>{ project.title }</HeroH1>
                            <p className='mb-5 max-w-[40rem] mx-auto text-justify'>{ project.description }</p>
                            <div className='flex gap-4 flex-wrap'>
                                { project.technologies.map( ( item,index ) =>
                                    <div key={index} className='flex flex-col items-center group relative cursor-pointer'>
                                        <div className='size-14 rounded-full grid place-items-center bg-dark text-white dark:bg-white dark:text-dark'>
                                            <item.icon className='size-1/2' />
                                        </div>
                                        <div className='absolute bottom-0 font-bold scale-0 group-hover:scale-100 group-hover:translate-y-6 transition-all duration-500 text-nowrap'>{ item.name }</div>
                                    </div>
                                ) }
                            </div>
                        </div>
                    </div>

                    {/* <div className='text-center'>
                        <SectionH1>Roles</SectionH1>
                        <ul className='divide-y border rounded-xl'>
                            { project.details.map( ( item,index ) =>
                                <li key={index} className='py-4 list-none border-dashed'>
                                    { item }
                                </li>
                            ) }
                        </ul>
                    </div> */}
                </div>
            </Container>
        </>
    )
}

export default ProjectDetails


const Modal = ( { open,onHide } ) => {

    return (
        <div>

        </div>
    )
}
