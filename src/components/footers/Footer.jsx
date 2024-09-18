import React from 'react'
import Container from '../containers/Container'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='py-6 border-t border-dashed border-gray-400'>
            <Container>
                <div className=''>
                    <div>
                        <div className='flex justify-between gap-x-6 gap-y-4 items-center flex-wrap'>
                            {/* { contactList.map( ( contact,index ) => (
                                <div key={ index }>
                                    <NavLink target='_blank' to={ contact.href } rel="noopener noreferrer">
                                        <div className='flex items-center gap-2 break-words'>
                                            <Button isIconOnly className='rounded-full'>
                                                <contact.icon className='size-5' />
                                            </Button>
                                            <span className='text-sm break-all'>
                                                { contact.text }
                                            </span>
                                        </div>
                                    </NavLink>
                                </div>
                            ) ) } */}
                            <div>
                                Made with ❤️ by Rajat.
                            </div>
                            <div className='space-x-4'>
                                <span>Got a question?</span>
                                <Link to='mailto:rajatkarmokar@gmail.com'
                                    className='text-dark dark:text-white font-medium'>
                                    rajatkarmokar@gmail.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer