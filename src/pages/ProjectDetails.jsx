import React from 'react'
import Container from '../components/containers/Container'
import { BreadcrumbItem,Breadcrumbs,Card,CardBody,Divider,Image,Tab,Tabs } from '@nextui-org/react'
import { NavLink,useParams } from 'react-router-dom'
import { projectList } from '../constants/projectList'
import SectionH1 from '../components/headings/SectionH1'
import HeroH1 from '../components/headings/HeroH1'
import { Helmet } from 'react-helmet'

const ProjectDetails = () => {
    const { projectId } = useParams()
    const project = projectList.find( ( item,index ) => item.title === projectId )
    return (
        <>
            <Helmet>
                <title>Projects - { projectId } - Rajat Karmokar</title>
            </Helmet>
            <Container>
                <div className='my-6'>
                    <Breadcrumbs>
                        <BreadcrumbItem>
                            <NavLink to='/projects'>Projects</NavLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            { projectId }
                        </BreadcrumbItem>
                    </Breadcrumbs>
                </div>

                <div className='space-y-16'>
                    <div className='text-center my-16'>
                        <HeroH1>{ project.title }</HeroH1>
                        <p className='mb-3'>{ project.description }</p>
                    </div>

                    <div>
                        { project.images.noPreview &&
                            <div>
                                <Image className='aspect-video lg:aspect-[8/2] object-contain' isBlurred src={ project.images.noPreview } />
                            </div>
                            ||
                            <div className='grid grid-cols-1 md:grid-cols-9 gap-2 lg:gap-6'>
                                <div className='md:col-span-7'>
                                    <Image className='aspect-video w-full' isBlurred src={ project.images.desktop } />
                                </div>
                                <div className='md:col-span-2 flex justify-center'>
                                    <Image className='w-1/2 md:w-full mx-auto' isBlurred src={ project.images.mobile } />
                                </div>
                            </div>
                        }
                    </div>

                    <div className='text-center'>
                        <SectionH1>Roles</SectionH1>
                        <Card>
                            <CardBody>
                                <div className='text-center'>
                                    { project.details.map( ( item,index ) =>
                                        <>
                                            <div className='py-2'>
                                                { item }
                                            </div>
                                            <Divider className='last:hidden' />
                                        </>
                                    ) }
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ProjectDetails