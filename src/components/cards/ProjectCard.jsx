import { IconExternalLink } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ( { showImage = true,...props } ) => {
    return (
        <div className='rounded-xl group shadow-md bg-gray-50 dark:bg-white dark:bg-opacity-10 hover:shadow-2xl hover:scale-105 transition-all duration-300'>
            <div className='grid grid-cols-1 h-full'>
                { showImage &&
                    <div className='col-span-1 p-2 pb-0'>
                        <div className='overflow-hidden rounded-lg'>
                            <Link to={ `/projects/${encodeURIComponent( props.title )}` }>
                                <img className='aspect-video w-full group-hover:scale-125 group-hover:translate-y-5 transition-all duration-300' src={ props?.images?.noPreview || props?.images?.desktop } alt={ props.title } />
                            </Link>
                        </div>
                    </div> ||
                    null
                }
                <div className='space-y-2 mt-auto p-4'>
                    <h3 className='text-xl font-semibold flex justify-between'>
                        <Link to={ `/projects/${encodeURIComponent( props.title )}` } className='hover:underline truncate'>{ props.title }</Link>
                        <Link disabled={ !!props?.images?.noPreview } target='_blank' to={ props.link } >
                            <IconExternalLink className='size-5' />
                        </Link>
                    </h3>
                    <p className='text-xs'>{ props.duration }</p>
                    <p className='line-clamp-2'>{ props.description }</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard