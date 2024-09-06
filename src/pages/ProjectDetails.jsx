import React from 'react'
import Container from '../components/containers/Container'
import { BreadcrumbItem,Breadcrumbs,Card,CardBody,Divider,Image,Tab,Tabs } from '@nextui-org/react'
import { NavLink,useParams } from 'react-router-dom'
import { projectList } from '../constants/projectList'
import SectionH1 from '../components/headings/SectionH1'
import HeroH1 from '../components/headings/HeroH1'

const ProjectDetails = () => {
    const { projectId } = useParams()
    const project = projectList.find( ( item,index ) => item.title === projectId )
    return (
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

            <div className='space-y-10'>
                <div className='text-center my-16'>
                    <HeroH1>{ project.title }</HeroH1>
                    <p className='mb-3'>{ project.description }</p>
                </div>
                <div className='grid grid-cols-9 gap-6'>
                    <div className='col-span-7'>
                        <Image isBlurred src={ project.images.desktop } />
                    </div>
                    <div className='col-span-2'>
                        <Image isBlurred src={ project.images.mobile } />
                    </div>
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
                                        <Divider className='last:hidden'/>
                                    </>
                                ) }
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </Container>
    )
}

export default ProjectDetails