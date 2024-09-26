import React from 'react';
import Container from '../containers/Container';
import { NavLink } from 'react-router-dom';
import { contactList } from '../../constants/contactList';

const Footer = () => {
    return (
        <footer className='py-6 border-t border-dashed border-gray-400'>
            <Container>
                <div className='space-y-10'>
                    <div className='flex justify-between gap-6 items-center flex-wrap'>
                        <div className='flex gap-x-6 gap-y-4 items-center justify-center sm:justify-start flex-grow flex-wrap '>
                            { contactList.map( ( contact,index ) => (
                                <div key={ index }>
                                    <NavLink target='_blank' to={ contact.href } >
                                        <div className='flex items-center gap-2 break-words'>
                                            <span className='rounded-full border size-10 flex'>
                                                <contact.icon className='size-5 m-auto' />
                                            </span>
                                            {/* <span className='text-sm break-all'>
                                                { contact.text }
                                            </span> */}
                                        </div>
                                    </NavLink>
                                </div>
                            ) ) }
                        </div>
                        <div className='text-center sm:text-end flex-grow text-sm text-nowrap'>
                            Made with ❤️ by Rajat.
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
