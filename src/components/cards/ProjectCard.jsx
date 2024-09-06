import { Button,Card,CardBody,Image,Link } from '@nextui-org/react'
import { IconExternalLink } from '@tabler/icons-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ProjectCard = ( { showImage = true,...props } ) => {
    return (
        <Card>
            <CardBody>
                <div className='grid grid-cols-1 gap-4 h-full'>
                    { showImage &&
                        <div className='col-span-1'>
                            <Link as={ NavLink } to={ `/projects/${encodeURIComponent( props.title )}` }>
                                <Image className='aspect-video' isZoomed isBlurred src={ props?.images?.desktop } alt={ props.title } />
                            </Link>
                        </div> ||
                        null }
                    <div className='space-y-2 mt-auto'>
                        <h3 className='text-xl font-semibold'>{ props.title }</h3>
                        <p className='text-xs'>{ props.duration }</p>
                        <p className='line-clamp-2'>{ props.description }</p>
                        <Button isIconOnly as={ Link } target='_blank' href={ props.link } >
                            <IconExternalLink />
                        </Button>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default ProjectCard