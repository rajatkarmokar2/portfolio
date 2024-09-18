import React from 'react'
import Container from '../containers/Container'
import { Link,NavLink } from 'react-router-dom'
import Button from '../buttons/Button'
import { contactList } from '../../constants/contactList';

const Footer = () => {
    return (
        <footer className='py-6 border-t border-dashed border-gray-400'>
            <Container>
                <div className='space-y-10'>
                    <div className='flex gap-x-6 gap-y-4 items-center flex-wrap'>
                        { contactList.map( ( contact,index ) => (
                            <div key={ index }>
                                <NavLink target='_blank' to={ contact.href } >
                                    <div className='flex items-center gap-2 break-words'>
                                        <Button className='rounded-full'>
                                            <contact.icon className='size-5' />
                                        </Button>
                                        <span className='text-sm break-all'>
                                            { contact.text }
                                        </span>
                                    </div>
                                </NavLink>
                            </div>
                        ) ) }
                    </div>
                    <div className='flex justify-between gap-x-6 gap-y-4 items-center flex-wrap'>
                        <div>
                            Made with ❤️ by Rajat.
                        </div>
                        <div className='flex flex-wrap gap-x-5'>
                            <span>Got a question?</span>
                            <Link to='mailto:rajatkarmokar2@gmail.com'
                                className='text-dark dark:text-white font-medium'>
                                rajatkarmokar2@gmail.com
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
