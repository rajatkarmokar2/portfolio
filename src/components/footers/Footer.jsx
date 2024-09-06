import React from 'react'
import Container from '../containers/Container'
import { Button, Card, CardBody, Link } from '@nextui-org/react'
import { contactList } from '../../constants/contactList'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <Container>
            <footer className='my-6'>
                <Card className=''>
                    <CardBody>
                        <div className='flex gap-x-6 gap-y-4 items-center flex-wrap'>
                            { contactList.map( ( contact,index ) => (
                                <p className="" key={ index }>
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
                                </p>
                            ) ) }
                        </div>
                    </CardBody>
                </Card>
            </footer>
        </Container>
    )
}

export default Footer