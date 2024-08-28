import React from 'react'
import Header from '../components/headers/Header'
import Footer from '../components/footers/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='bg-page min-h-screen text-white'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout